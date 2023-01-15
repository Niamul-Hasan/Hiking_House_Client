import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { FiUpload } from 'react-icons/fi'

const ComboBooking = ({ offer }) => {
    const [user] = useAuthState(auth);

    const handleBookNow = () => {
        if (user) {
            const bookingCombo = {
                uName: user.displayName,
                email: user.email,
                iName: offer.name,
                img: offer.img,
                quantity: offer.offerPrice

            }
            fetch("https://hiking-house-server.vercel.app/bookings", {
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
            >Book Now <FiUpload /></Button>
        </div>
    );
};

export default ComboBooking;