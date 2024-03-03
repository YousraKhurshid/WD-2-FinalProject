import React, { useState, useContext } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { HiShoppingCart } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { GlobalContext } from '../../LoginContext/context';
import './NavigationBar.css'
import '../../App.css'

function UserNav() {
  const [showCart, setShowCart] = useState(false);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  const { state, dispatch } = useContext(GlobalContext); // Fixed typo: globalState to state

  return (
    <Navbar expand="lg" className="bg-light border albert-sans-regular" style={{ height: '5rem' }}>
      <Container className='navbar'>
        <Link id='logo' style={{ fontSize: '25px' }} className='nav-link albert-sans-regular' to="/">Accerories & Fashion Dame</Link>
        <Link id='logopic' className='nav-link border border-light rounded-circle img-fluid m-3' to="/"> <img style={{ width: '7vw', height: '15%' }} className="picture rounded-circle" src="../images/Monogram.jpg" alt="Logo" /> </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-link albert-sans-regular my-4' style={{ fontSize: '20px' }} to="/">Home </Link>
            <Link className='nav-link albert-sans-regular my-4' style={{ fontSize: '20px' }} to="/products"> Products </Link>
            <div>
              <Link id='user' className='d-flex nav-link mx-4 my-4 ' style={{ fontSize: '20px' }} to="/user"> <FaUserAlt size='20px' /> <h5 className='albert-sans-regular'>username</h5></Link>
            </div>
            <div>
              <button className='nav-link mx-4 mt-4 logout-btn'> <FaUserAlt size='20px' /> Logout</button>
            </div>
            <Button className='m-3 btn btn-dark d-flex align-items-center' style={{ size: '5px' }} onClick={handleShowCart}><HiShoppingCart size='40px' />
              <span className="position-relative top-0 start-25 translate-middle badge rounded-pill bg-danger">
                {state.cart.length}
              </span>
            </Button>
            <div>
              <button className='nav-link mx-4 mt-4 logout-btn' onClick={() => { // Changed Link to button
                dispatch({
                  type: "USER_LOGOUT"
                })
              }}> Logout</button>
            </div>
          </Nav>
        </Navbar.Collapse>
        <Offcanvas className='albert-sans-regular' show={showCart} onHide={handleCloseCart} placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="list-group">
              {state.cart.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <img src={item.images[0]} alt={item.title} style={{ width: '7rem', marginRight: '10px' }} />
                  </div>
                  <div className='d-flex flex-column'>
                    <span>{item.title}</span>
                    <span>Qty: {item.productQuantity}</span>
                    <span className="badge" style={{ color: 'black' }}>Product Price: ${item.price}</span>
                    <span className="badge bg-success rounded-pill">Total: ${item.totalPrice}</span>
                    <button className="btn" style={{ width: "auto", height: "2rem" }} onClick={() => {
                      dispatch({ type: "REMOVE_FROM_CART", index });
                    }}>Remove</button>
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
