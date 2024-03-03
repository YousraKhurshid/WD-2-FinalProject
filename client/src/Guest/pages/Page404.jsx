import React from 'react';
import { Link } from 'react-router-dom';

export default function Page404() {
  return (
    <div>
      <img style={{width:'100%'}} src="src/images/404page.jpg" alt="404" />
      <p className='mt-1' style={{ textAlign: 'center', fontFamily: 'PT serif', fontWeight: 'bold', fontSize : '25px' }}>Page not found. Return to <Link to="/" >Home</Link>.</p>
    </div>
  );
}
