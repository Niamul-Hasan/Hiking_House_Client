import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../Login/SocialLogin/SocialLogin';



const SignUp = () => {

    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth)


    const handleSignUp = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })
        event.target.reset();
        toast(`Account has been created for ${name}`);
    }
    const navigate = useNavigate();


    if (user) {
        navigate('/');

    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    let errorElement;
    if (error) {
        errorElement = error?.message;
    }
    if (updateError) {
        errorElement = updateError?.message;
    }


    return (
        <div className='my-3'>
            <h1 style={{ color: 'teal', fontFamily: 'sans-serif', textAlign: 'center' }}>Please SignUp</h1>
            <div className='container'>
                <div className="login-form mx-auto pb-3">
                    <Form className='container p-3' onSubmit={handleSignUp}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3 ps-3" controlId="formBasicCheckbox">
                            <Form.Check onClick={() => setAgree(!agree)} type="checkbox" className={`ps-2 ${agree ? 'text-success' : 'text-danger'}`} label="Agree with Hiking House Terms and Conditions " />
                        </Form.Group>
                        <h3 className='text-danger'>{errorElement}</h3>
                        <p>Already have an account?<Button variant="link"
                            className="text-decoration-none text-primary"
                            onClick={() => navigate("/login")}>Please LogIn</Button></p>
                        <Button disabled={!agree} variant="primary" type="submit">
                            SignUp
                        </Button>
                    </Form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;