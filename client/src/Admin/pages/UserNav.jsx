import React, { useState, useContext } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { HiShoppingCart } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { GlobalContext } from '../../LoginContext/context';
import '../../User/Components/NavigationBar.css'
import '../../App.css'

function UserNav() {
  const [showCart, setShowCart] = useState(false);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  const { state: globalState, dispatch: globalDispatch } = useContext(GlobalContext);
  console.log(globalState);

  return (
    <Navbar expand="lg" className="bg-light border albert-sans-regular" style={{ height: '5rem', width: '70rem' }}>
      <Container className='navbar'>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <div>
                <Link id='userr' className='nav-link mx-4 mt-4' to="/" onClick={() => {
                  globalDispatch({
                    type: "USER_LOGOUT"
                  })
                }}> <FaUserAlt size='20px' />
                Logout</Link>
              </div>
            <Button className='m-3 btn btn-dark d-flex align-items-center' style={{ size: '5px' }} onClick={handleShowCart}><HiShoppingCart size='40px' />
              <span className="position-relative top-0 start-25 translate-middle badge rounded-pill bg-danger">
                {globalState.cart.length}
              </span>
            </Button>

          </Nav>
        </Navbar.Collapse>
        <Offcanvas className='albert-sans-regular' show={showCart} onHide={handleCloseCart} placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Notification</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="list-group">
              {globalState.cart.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <img src={item.images[0]} alt={item.title} style={{ width: '7rem', marginRight: '10px' }} />
                  </div>

                  <div className='d-flex flex-column'>
                    <span>Username</span>
                    <span>{item.title}</span>
                    <span>
                      Qty: {item.productQuantity}
                    </span>
                    <span className="badge" style={{ color: 'black' }}>
                      Product Price: ${item.price}
                    </span>
                    <span className="badge bg-success rounded-pill">
                      Total: ${item.totalPrice}
                    </span>
                    <button className="btn" style={{ width: "auto", height: "2rem" }} onClick={() => {
                      globalDispatch({ type: "REMOVE_FROM_CART", index });
                    }}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </Offcanvas.Body>


        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default UserNav;
