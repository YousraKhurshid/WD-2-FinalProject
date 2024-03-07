import React, { useState, useContext } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { HiShoppingCart } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { GlobalContext } from '../../LoginContext/context';

function NavigationBar() {
  const [showCart, setShowCart] = useState(false);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  const { state: globalState, dispatch: globalDispatch } = useContext(GlobalContext);
  console.log(globalState)

  

  return (
    <Navbar expand="lg" className="bg-light border albert-sans-regular">
      <Container className='navbar'>
        <Link id='logo' style={{ fontSize: '25px' }} className='nav-link' to="/">Accerories & Fashion Dame</Link>
        <Link id='logopic' className='nav-link border border-light rounded-circle img-fluid m-3' to="/"> <img style={{ width: '7vw', height: '15%' }} className="picture rounded-circle" src="../images/Monogram.jpg" alt="Logo" /> </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-link' to="/">Home </Link>
            <Link className='nav-link' to="/products"> Products </Link>
            <div>
              <Link className='nav-link mx-4' to="/user"> <FaUserAlt size='20px' /></Link>
            </div>
            <Link className='ms-4 btn btn-success' to="/login"> Login </Link>
            <Link className='ms-4 btn btn-dark' to="/signup"> Signup </Link>
            <Button className='ms-4 btn btn-dark' onClick={handleShowCart}>
              <HiShoppingCart size='25px' />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {globalState.cart.length}
              </span>
            </Button>
          </Nav>
        </Navbar.Collapse>
        <Offcanvas show={showCart} onHide={handleCloseCart} placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
  <ul className="list-group">
    {globalState.cart.map((item, index) => (
      <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img src={item.images[0]} alt={item.title} style={{ width: '7rem', marginRight: '10px' }} />
        </div>

        <div className='d-flex flex-column'>
        <span>{item.title}</span>
        <span>
          Qty: {item.productQuantity}
        </span>
        <span className="badge" style={{color:'black'}}>
          Product Price: ${item.price}
        </span>
        <span className="badge bg-success rounded-pill">
          Total: ${item.totalPrice}
        </span>
        <button className="btn" style={{width:"auto", height:"2rem"}} onClick={() => {
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

export default NavigationBar;
