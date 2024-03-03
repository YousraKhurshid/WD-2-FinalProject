// import React, { useState, useEffect } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import Home from './pages/Home';
// import Products from './pages/Products';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Page404 from './pages/Page404';
// import NavigationBar from './Components/NavigationBar';
// import './App.css';
// import FooterSection from './Components/FooterSection';
// import CategoryPage from './pages/CategoryPage';
// import ProductsPage from './pages/ProductsPage';
// import Spinner from 'react-bootstrap/Spinner';
// import Container from 'react-bootstrap/Container';

// function App() {
//   const [user, setUser] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulating an API call delay
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//   }, []);

//   return (
//     <>
//       <NavigationBar />
//       {isLoading ? (
//         <Container className="d-flex justify-content-center align-items-center vh-100">
//           <Spinner animation="border" role="status">
//             <span className="sr-only"></span>
//           </Spinner>
//         </Container>
//       ) : (
//           // <div style={{ fontFamily: 'Amazon Ember, Arial, sans-serif', fontWeight: 'bold', fontStyle: 'italic' }}>
//         <div className='albert-sans-regular'>
//           {user ? (
//             <Routes>
//                 <Route path="/" element={<Home />} />
                
//               <Route path="/login" element={<Login />} />
//               <Route path="/signup" element={<Signup />} />
//               <Route path="/products" element={<Products />} />
//               <Route path="/products/:productID" element={<ProductsPage />} />
//               <Route path="/products/category/:categoryName" element={<CategoryPage />} />
//               <Route path="*" element={<Page404 />} />
//             </Routes>
//             )  : (
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="*" element={<Navigate to="/login" replace={true} />} />
//             </Routes>
//             )}
//           <FooterSection />
//         </div>
//         )
//       }
//     </>
//   );
// }

// export default App;


import React, { useContext, useEffect } from 'react';
import Admin from './Admin';
import Vender from './Vender';
import User from './User';
import Guest from './Guest';
import Layout from './Layout';
import { GlobalContext } from './LoginContext/context';
import { decodeToken } from 'react-jwt'; // Corrected import statement

// Define getDecodeToken function
const getDecodeToken = (token) => decodeToken(token) || null;

export default function App() {
    const { state, dispatch } = useContext(GlobalContext);
    const currentToken = getDecodeToken(state.token);
    console.log('token', currentToken);

    useEffect(() => {
        console.log("context", state.user?.role);
    }, [state.user]); // Added dependency array to useEffect

    const role = state.user?.role || 'guest';

    let UserInterface;
    switch (role) {
        case 'admin':
            UserInterface = Admin;
            break;
        case 'vender':
            UserInterface = Vender;
            break;
        case 'user':
            UserInterface = User;
            break;
        default:
            UserInterface = Guest;
            break;
    }

    return (
        <Layout>
            <UserInterface />
        </Layout>
    );
}


// import React, {useContext, useEffect} from 'react'
// import Admin from './Admin'
// import User from './User'
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from './User/Pages/Home'
// import NavigationBar from './User/Components/NavigationBar'
// import axios from 'axios'
// import { GlobalContext } from './Context/context';

// export default function App() {
//   const role = 'guest'
//   const { state, dispatch } = useContext(GlobalContext)

//   useEffect(() => {
//     // axios.get('/api/getallusers')
//     //   .then
//     console.log("Getting from Context", state.user.role)
//   },[])
//   return (
//     <BrowserRouter>
//       {
//         state.user.role == 'admin' ? (<Admin />)
//           :
//           (
//             state.user.role == 'user' ? (
//               <User />)
//               :
//               (<Guest/>
                
//               )
//           )
//       }

//     </BrowserRouter>
//   )
// }