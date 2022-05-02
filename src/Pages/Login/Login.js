import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from "../../firebase.init";
import Loading from '../Loading/Loading';
import "./Login.css";
import SocialLogin from './SocialLogin/SocialLogin';

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
    let errorElement;
    if (error) {
        errorElement = error.message;
    }

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (loading) {
        return <Loading></Loading>;
    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='pt-3 mb-3'>
            <h1 style={{ color: 'teal', fontFamily: 'sans-serif', textAlign: 'center' }}>Please LogIn</h1>
            <div className='container'>
                <div className='login-form mx-auto pb-4'>
                    <Form className='container p-3' onSubmit={handleSignIn}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>
                        <h3 className='text-danger'>{errorElement}</h3>
                        <p>New in Hiking House?<Button variant="link" onClick={() => navigate("/signup")}>Please SignUp Now</Button></p>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;