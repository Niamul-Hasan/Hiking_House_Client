import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';


const Gear = ({ inventory }) => {

    const { _id, description, name, img, price, quantity } = inventory;
    return (
        <div>
            <Col>
                <Card style={{ height: '550px', position: 'relative' }}>
                    <Card.Img variant="top" className='img-fluid w-50  mx-auto pt-2' src={img} />
                    <Card.Body className='text-center'>
                        <Card.Title style={{ color: "teal", fontSize: '24px' }}>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text> <span className='fs-4' style={{ color: 'tomato' }}>Price: $ {price}</span> </Card.Text>
                        <Card.Text> <span className='fs-5 text-success'>Quantity: {quantity}</span> </Card.Text>
                        <div style={{ position: 'absolute', bottom: '10px', left: '100px' }}>
                            <Button>Explore Inventory <FaArrowRight /></Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Gear;