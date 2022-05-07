import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Selected = () => {
    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth)
    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:4000/bookings?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [user])
    return (
        <div>
            <h2>Your Selected Inventories : {bookings.length}</h2>
        </div>
    );
};

export default Selected;