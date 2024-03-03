import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sideba.css'
import { GlobalContext } from '../../LoginContext/context';

export function Sidebar() {
    let location = useLocation();

    const tabs = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'Categories',
            url: '/categories'
        },
        {
            name: 'Products',
            url: '/products'
        },
        {
            name: 'Orders',
            url: '/orders'
        }
    ];
const {state, dispatch} = useContext(GlobalContext)

    return (
        <>
            <aside className="sidebar">
            <div className="logo">
                <img src="../../images/Monogram.jpg" alt="Logo" />
                <span>Accessories and Fashion Dame</span>
            </div>
            <span className="logo fs-5 fw-bold bg-success rounded-pill text-center p-3">&nbsp;Admin name</span>
            <div className="nav-links">
                {tabs.map((tab, index) => (
                    <Link
                        key={index}
                        to={tab.url}
                        className={`nav-link ${location.pathname === tab.url ? 'active' : ''}`}
                    >
                        <span>{tab.name}</span>
                    </Link>
                ))}
            </div>
                <button className="logout-btn">
                    <Link style={{ color: 'black'}} onClick={() => {
                  dispatch({
                    type: "USER_LOGOUT"
                  })
                }}>
                Logout</Link>
            </button>
        </aside>
        </>
        
    );
}


// import React, { useEffect, useContext } from 'react'
// import { FiHome } from 'react-icons/fi'
// import { BiCategoryAlt } from 'react-icons/bi'
// import { Link, useLocation } from 'react-router-dom'
// import { GlobalContext } from '../../LoginContext/context'
// export default function Sidebar() {

//     const location = useLocation()
//     const { state, dispatch } = useContext(GlobalContext)

//     const NavItems = [
//         {
//             tab: "Home",
//             url: "/",
//             icon: <FiHome />
//         },
//         {
//             tab: "Categories",
//             url: "/category",
//             icon: <BiCategoryAlt />
//         },
//         {
//             tab: "Products",
//             url: "/products",
//             icon: <BiCategoryAlt />
//         },


//     ]


//     return (
//         <>

//             <div className="bg-warning p-3 d-flex text-dark justify-content-between align-items-center">
//                 <span>Admin Name</span>
//                 <button className="btn btn-outline-dak"
//                     onClick={() => dispatch({ type: "USER_LOGOUT" })}>Logout</button>
//             </div>


//             <ul className="nav flex-column pt-3">
//                 {
//                     NavItems.map((val, key) =>

//                         <li key={key} className={`nav-item m-2  ${location.pathname == val.url ? 'bg-light rounded' : null}`}>
//                             <Link className='nav-link d-flex align-items-center  gap-2' to={val.url}>
//                                 <span>{val.icon}</span>

//                                 <span>{val.tab}</span>
//                             </Link>
//                         </li>)
//                 }

//             </ul>

//         </>
//     )
// }
