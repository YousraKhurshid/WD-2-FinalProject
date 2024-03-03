import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 
import axios from 'axios';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const SignupUser = (e) => {
    e.preventDefault();
    const payload = { email, password, username };
    console.log(payload);
    axios.post('wd-2-final-project.vercel.app:1789/api/signup', payload)
      .then(json => {
        console.log(json.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className='d-flex justify-content-center my-5'>
        <Card style={{ width: '40vw', height: 'auto' }}>
          <div className="m-2 text-center">
            <h1 style={{ fontFamily: 'Amazon Ember' }}>SignUp</h1>
          </div>
          <div className="mb-3 m-5">
            <Form onSubmit={SignupUser}>
              <Row>
                <Col>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Text muted>
                    Your password must be 8-20 characters long, contain letters and numbers,
                    and must not contain spaces, special characters, or emoji.
                  </Form.Text>
                </Col>
              </Row>
              <Button variant="success" type="submit" className="mt-3">
                <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
                SignUp
                </Link>
              </Button>
            </Form>
          </div>
          <div className="mx-5">
            <p className="text-secondary">
              By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}
