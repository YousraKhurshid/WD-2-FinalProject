import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import { Nav } from 'react-bootstrap';

export default function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const getUsers = () => {
        setLoading(true);
        axios.get('https://reqres.in/api/users?page=1')
            .then(response => {

                setTimeout(() => {
                    setLoading(false);
                    setUsers(response.data.data)
                }, 5000);
            })
            .catch(error => console.log(error))

    }
    return (
        <>
            <Navbar bg="warning">
                <Container>
                    <Navbar.Brand href="#home">Lets Grow More - LGM</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="/register" className='me-5'>Register</Nav.Link>

                        {
                            loading ?
                                (
                                    <Button variant="dark" disabled>
                                        <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                                        Loading...
                                    </Button>
                                )
                                :
                                <Button variant="dark" onClick={getUsers}>Get Users</Button>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className='mt-5'>
                <h1 className='my-5'>Users</h1>

                {
                    users.length > 0 &&
                    <Table striped bordered hover className='text-center'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Avatar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length > 0 && users.map((val) =>
                                    <tr key={val.id}>
                                        <td>{val.id}</td>
                                        <td>{val.email}</td>
                                        <td>{val.first_name}</td>
                                        <td>{val.last_name}</td>
                                        <td><img src={val.avatar} className='img-thumbnail rounded-circle' alt={val.first_name} srcSet="" /></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                }
            </Container>
        </>
    )
}
