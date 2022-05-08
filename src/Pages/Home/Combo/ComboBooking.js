import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const ComboBooking = ({ offer }) => {

    const navigate = useNavigate();

    const [user] = useAuthState(auth);

    // if (!user) {
    //     navigate('/login')
    // }

    const handleBookNow = () => {
        if (user) {
            const bookingCombo = {
                uName: user.displayName,
                email: user.email,
                iName: offer.name,
                img: offer.img,
                quantity: offer.offerPrice

            }
            fetch("https://serene-coast-39945.herokuapp.com/bookings", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingCombo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                });
            toast('Your Booking is placed');
        }
        if (!user) {
            toast('Please login First')
        }
    }
    return (
        <div>
            <Button
                onClick={handleBookNow}
            >Book Now</Button>
        </div>
    );
};

export default ComboBooking;