import React from 'react'
import { Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


export default function Signup() {
return (
  
<>
<div className='d-flex justify-content-center my-5'>
      <Card  style={{ width: '40vw', height: 'auto' }}>
      <div className="m-2 text-center albert-sans-regular">
        <h1 className='albert-sans-regular' style={{ fontFamily: 'Amazon Ember'}} >SignUp</h1>

      </div>
  
    <div className="mb-3 m-5">
        <Form>
        <Row>
        <Col>
        <Form.Label>Name</Form.Label>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
        <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
        
  <button className='m-5 btn btn-success'>Signup</button>
   
  <div className="mx-5">
        <p className="text-secondary">
        By continuing, you agree to Accessories and Fashion Dame's Conditions of Use and Privacy Notice.
        </p>
  </div>
      </Card>
</div>
      
</>
  )
}
