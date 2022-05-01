import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div>
            <h1 style={{ color: 'teal', fontFamily: 'sans-serif', textAlign: 'center' }}>Please LogIn</h1>
            <div className='container'>
                <Form className='container w-50 p-3' style={{ borderRadius: '20px', boxShadow: '-4px 4px 5px 5px rgba(0, 0, 0,0.2)' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;