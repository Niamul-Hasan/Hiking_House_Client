import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import "./Selected.css";
import { MdOutlineCancel } from 'react-icons/md';

const Selected = () => {
    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth)
    useEffect(() => {
        const email = user.email;
        const url = `https://serene-coast-39945.herokuapp.com/bookings?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [user])


    const handleCancel = (id) => {
        const confirm = window.confirm('Are You Sure to Delete This item');
        if (confirm) {
            const url = `https://serene-coast-39945.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(bookings)
            })
                .then(res => res.json())
                .then(remaingData => {
                    const reserving = bookings.filter(booking => booking._id !== id);
                    setBookings(reserving);
                    console.log(remaingData);
                })
        }
    }

    return (
        <div>
            <h2 style={{ color: 'seagreen', textAlign: 'center' }}>Your Selected Inventories : <span
                style={{ fontSize: '30px', color: 'tomato' }}
            >
                {bookings.length} </span>
            </h2>
            {
                bookings.map(booking =>
                    <div key={booking._id} className='container mb-3 booking'>
                        <div style={{ color: 'teal', fontSize: '18px' }}>Inventory: {booking.iName}</div>
                        <div className='mx-auto' style={{ color: 'orangered' }}>Quantity: {booking.quantity}</div>
                        <div className='mx-auto'><img src={booking.img} alt="" height={80} style={{ borderRadius: '40%' }} /></div>
                        <div className='mx-auto'><Button
                            onClick={() => handleCancel(booking._id)}
                            style={{ backgroundColor: 'red', border: 'none' }}>Cancel <MdOutlineCancel /></Button></div>

                    </div>)
            }

        </div>
    );
};

export default Selected;