import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Gear.css';


const Gear = ({ inventory }) => {

    const { _id, description, name, img, price, quantity } = inventory;
    const navigate = useNavigate();

    const handleUpdate = (id) => {
        navigate(`/inventory/${id}`);
    }


    return (
        <div>
            <Col style={{ borderRadius: '20px', boxShadow: "-2px 2px 4px 4px rgba(0,0,0,0.1)" }}>
                <Card style={{ height: '550px', position: 'relative' }}>
                    <Card.Img variant="top" className='img-fluid w-50  mx-auto pt-2 mt-2 cart-img' src={img}
                        style={{
                            borderRadius: '20px',
                            boxShadow: "-2px 2px 4px 4px rgba(0,0,0,0.2)",
                        }}
                    />
                    <Card.Body className='text-center'>
                        <Card.Title style={{ color: "teal", fontSize: '24px' }}>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text> <span className='fs-4' style={{ color: 'tomato' }}>Price: $ {price}</span> </Card.Text>
                        <Card.Text> <span className='fs-5 text-success'>Quantity: {quantity}</span> </Card.Text>
                        <div style={{ position: 'absolute', bottom: '10px', left: '100px' }}>
                            <Button onClick={() => handleUpdate(_id)}>Update Inventory <FaArrowRight /></Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Gear;