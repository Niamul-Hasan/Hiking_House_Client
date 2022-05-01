import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const handleSignIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);
        signInWithEmailAndPassword(email, password);
        event.target.reset();
    }

    const navigate = useNavigate();


    if (user) {
        navigate('/');
    }
    return (
        <div className='pt-3'>
            <h1 style={{ color: 'teal', fontFamily: 'sans-serif', textAlign: 'center' }}>Please LogIn</h1>
            <div className='container'>
                <div className='login-form mx-auto'>
                    <Form className='container p-3' onSubmit={handleSignIn}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>
                        <p>New in Hiking House?<Button variant="link" onClick={() => navigate("/signup")}>Please SignUp Now</Button></p>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;