import React from 'react'
import { Link } from 'react-router-dom';


export default function FooterSection() {
  return (
    <>
      <div className='bg-dark fs-5 fw-bold text-center text-white py-2 albert-sans-regular'>
      All the Rights Reserved
    </div>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className='my-4 text-warning albert-sans-regular'>About Us</h3>
            <p className='albert-sans-regular-med'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra consequat sagittis.</p>
          </div>
          <div className="col-md-4">
            <h3 className='my-4 text-warning albert-sans-regular'>Contact Us</h3>
            <p className='albert-sans-regular-med'>Email: yousrakhurshid1@gmail.com</p>
            <p className='albert-sans-regular-med'>Phone: 0344-4124920</p>
          </div>
          <div className="col-md-4">
            <h3 className='my-4 text-warning albert-sans-regular'>Follow Us</h3>
            <Link className='text-decoration-none albert-sans-regular-med'><p>Facebook</p></Link>
            <Link className='text-decoration-none albert-sans-regular-med'><p>Instagram</p></Link>
            
          </div>
          </div>
        </div>
        <br />
        
    </footer>
    </>
    
  )
}
