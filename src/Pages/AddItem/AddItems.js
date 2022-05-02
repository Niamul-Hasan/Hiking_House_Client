import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const AddItems = () => {

    const handleAddItem = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const newInventory = { name, img, description, price, quantity };
        console.log(newInventory);

        const url = "http://localhost:4000/gears";
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newInventory)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            });
        event.target.reset();

    }

    return (
        <div className='pt-3'>
            <h1 style={{ color: 'tomato', fontFamily: 'sans-serif', textAlign: 'center' }}>You Can Add Gear Item Here</h1>
            <div className='container'>
                <div className='login-form mx-auto'>
                    <Form className='container p-2' onSubmit={handleAddItem}>
                        <Form.Group className="mb-2" controlId="formBasicText">
                            <Form.Label>Inventory Name</Form.Label>
                            <Form.Control type="text" name="name" required />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicText">
                            <Form.Label>Image Url</Form.Label>
                            <Form.Control type="text" name="img" required />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicText">
                            <Form.Label>Short Description</Form.Label>
                            <FormControl as="textarea" name='description' />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicNumber">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="Number" name="price" required />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicNumber">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="Number" name="quantity" required />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            ADD
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );

};

export default AddItems;