import axios from 'axios';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../firebase.init";
import Loading from '../Loading/Loading';
import "./Login.css";
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {

    const RefEmail = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const handleSignIn = async (event) => {
        event.preventDefault();
        const email = RefEmail.current.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post(" https://serene-coast-39945.herokuapp.com/token", { email });
        localStorage.setItem('accessToken', data.accessToken);
        event.target.reset();
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleResetPassword = async () => {
        const email = RefEmail.current.value;
        if (!email) {
            return toast("Please enter your valid email");
        }
        await sendPasswordResetEmail(email);
        toast("Check your email to reset password");
    }


    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement = error.message;
    }

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (loading || sending) {
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
                            <Form.Control type="email" ref={RefEmail} placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>
                        <h3 className='text-danger'>{errorElement}</h3>
                        <p>Forget Password?<Button onClick={handleResetPassword} variant="link" className="text-decoration-none text-primary">Click to Reset Password</Button></p>
                        <p>New in Hiking House?<Button variant="link"
                            className="text-decoration-none text-primary"
                            onClick={() => navigate("/signup")}>Please SignUp Now</Button></p>
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