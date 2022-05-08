import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const ComboBooking = ({ offer }) => {

    const [user] = useAuthState(auth);

    const handleBookNow = () => {
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
        toast('Your Booking is placed')

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