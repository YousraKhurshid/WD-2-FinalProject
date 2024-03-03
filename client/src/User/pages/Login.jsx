import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true); // Define the 'show' state variable

  const loginUser = (e) => {
    e.preventDefault();
    const payload = { email, password };
    console.log(payload);
    axios.post('/api/login', payload)
      .then(json => {
        console.log(json.data);
        Cookies.set('token');
        setShow(false);
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <div className='d-flex justify-content-center my-5'>
        <Card style={{ width: '40vw', height: 'auto' }}>
          <div className="m-2 text-center">
            <h1 style={{ fontFamily: 'Amazon Ember' }}>LogIn</h1>
          </div>
          <div className="mb-3 m-5">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mx-5">
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and numbers,
              and must not contain spaces, special characters, or emoji.
            </Form.Text>
          </div>
          <button className='m-5 btn btn-success' onClick={loginUser}>Login</button>
          <div className="mx-5">
            <Link to="/forgot-password">
              <p className="text-secondary">
                Forgot Password
              </p>
            </Link>
          </div>
          <div className="mx-5">
            <p className="text-secondary">
              By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>
          </div>
        </Card>
      </div>
      <div className='d-flex justify-content-center my-5'>
        <Link to="/signup">
          <button className='m-2 btn btn-warning'>Create a New Account</button>
        </Link>
      </div>
    </>
  );
}
