import React from 'react';
import { Button } from 'react-bootstrap';
import google from "../../../images/google.png";
import github from "../../../images/github.png";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom'
import Loading from '../../Loading/Loading';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || gitError) {
        errorElement = <p style={{ color: 'red', fontSize: '24px' }}>Error: {error?.message}</p>;
    }

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (loading || gitLoading) {
        return <Loading></Loading>;
    }
    if (user || gitUser) {
        navigate(from, { replace: true });
    }
    return (
        <div >
            <div className='d-flex align-items-center'>
                <div className="bg-success w-50" style={{ height: 1 }}></div>
                <div className='mx-2'>OR</div>
                <div className="bg-success w-50" style={{ height: 1 }}></div>
            </div>
            <div>
                {errorElement}
            </div>

            <Button
                onClick={() => signInWithGoogle()}
                className='btn w-50 d-block mx-auto my-2'>
                <img src={google} style={{ width: 25 }} className='me-3' alt="" />
                Google Sign In</Button>
            <Button
                onClick={() => signInWithGithub()}
                className='btn w-50 d-block mx-auto my-2'>
                <img src={github} style={{ width: 25 }} className='me-3' alt="" />
                Github Sign In</Button>
        </div>
    );
};

export default SocialLogin;