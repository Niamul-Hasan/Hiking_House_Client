import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiSelectMultiple } from 'react-icons/bi';

const HikingItem = ({ hikingItem }) => {
    const { _id, name, description, price, quantity, img } = hikingItem;
    return (
        <div>
            <Col style={{ borderRadius: '20px', boxShadow: "-2px 2px 4px 4px rgba(0,0,0,0.1)" }}>
                <Card style={{ height: '570px', position: 'relative' }}>
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
                        <div style={{ position: 'absolute', bottom: '10px', left: '0px' }}
                            className='d-flex justify-content-evenly align-items-center w-100'
                        >
                            <div>
                                <Button
                                    style={{ backgroundColor: 'forestgreen', border: 'none' }}
                                >My Inventory <BiSelectMultiple /></Button>
                            </div>
                            <div>
                                <Button
                                    style={{ backgroundColor: 'orangered', border: 'none' }}
                                >Delete <RiDeleteBin6Line /></Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default HikingItem;