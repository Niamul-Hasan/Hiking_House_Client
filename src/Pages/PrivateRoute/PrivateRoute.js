import React from 'react';
import { useLocation, Navigate } from "react-router-dom";
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-5' style={{ height: '400px' }}>
            <h3 className='text-danger'>OPPS!!!You did not verify your email yet!!</h3>
            <h5 style={{ color: 'teal' }}> Please verify your email address Now</h5>
            <button
                style={{ backgroundColor: 'tomato', border: 'none', borderRadius: "15px", fontWeight: '500', marginTop: '10px' }}
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Email is Sent');
                }}
            >
                Send Verification Email Again
            </button>
        </div>
    }

    else {
        return children;
    }
};

export default PrivateRoute;