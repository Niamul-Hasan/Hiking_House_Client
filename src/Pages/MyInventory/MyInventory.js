import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import UseSingleData from '../Hooks/UseSingleData';
import "./MyInventory.css";

const MyInventory = () => {
    const { id } = useParams();
    const [inventory, setInventory] = UseSingleData(id)

    const [user, loading, error] = useAuthState(auth);
    const handleSelectItem = event => {
        event.preventDefault();
        const bookingInventory = {
            uName: user.displayName,
            email: user.email,
            iName: inventory.name,
            suplier: inventory.suplier,
            phone: event.target.phone.value,
            quantity: event.target.quantity.value

        }
        fetch("http://localhost:4000/bookings", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingInventory)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            });
        event.target.reset();
        toast('Your Booking is placed')

    }

    return (
        <div className='container py-5'>

            <h2 className='text-center'><span style={{ color: 'teal' }}>You have Chossen</span> : <span style={{ color: 'cadetblue' }}>{inventory?.name}</span></h2>

            <div className='container myinventory'>
                <div className='text-center'>
                    <img src={inventory.img} alt="" />
                </div>
                <div>
                    <Form
                        style={{ boxShadow: '-3px 3px 6px 6px rgba(0,0,0,0.25)', borderRadius: '20px' }}
                        className='container p-3' onSubmit={handleSelectItem}>
                        <Form.Group className="mb-2" controlId="formBasicText">
                            <Form.Label>Customer Name</Form.Label>
                            <Form.Control type="text" name="name" value={user?.displayName} readOnly required />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Customer Eamil</Form.Label>
                            <Form.Control type="Email" name="name" value={user?.email} readOnly required />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicText">
                            <Form.Label>Inventory Name</Form.Label>
                            <Form.Control type="text" name="name" value={inventory.name} readOnly required />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicText">
                            <Form.Label>Suplier Name</Form.Label>
                            <Form.Control type="text" name="suplier" value={inventory.suplier} readOnly required />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="Number" name="phone" required />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicNumber">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="Number" name="quantity" required />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            BOOKING
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default MyInventory;