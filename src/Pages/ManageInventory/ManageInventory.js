import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { IoBagAdd } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiSelectMultiple } from 'react-icons/bi';
import UseAllData from '../Hooks/UseAllData';


const ManageInventory = () => {
    //custom hook
    const [inventories, setInventories] = UseAllData();

    const navigate = useNavigate();

    const handleDelete = (id) => {
        const confirm = window.confirm('Are You Sure to Delete This item');
        if (confirm) {
            const url = `https://hiking-house-server.vercel.app/inventories/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(inventories)
            })
                .then(res => res.json())
                .then(remaingData => {
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining);
                    console.log(remaingData);
                })
        }
    }
    //handleMyInventory arrow function
    const handleMyInventory = (id) => {
        navigate(`/myInventory/${id}`);
    }
    return (
        <div className='container'>
            <h1 className='text-success text-center mt-3'>Available Inventories</h1>
            <Row xs={1} md={2} lg={3} className="g-4 my-3">
                {
                    inventories.map(inventory => <Col

                        style={{ borderRadius: '20px', boxShadow: "-2px 2px 4px 4px rgba(0,0,0,0.1)" }}>
                        <Card style={{ height: '570px', position: 'relative' }}>
                            <Card.Img variant="top" className='img-fluid w-50  mx-auto pt-2 mt-2 cart-img' src={inventory.img}
                                style={{
                                    borderRadius: '20px',
                                    boxShadow: "-2px 2px 4px 4px rgba(0,0,0,0.2)",
                                }}
                            />
                            <Card.Body className='text-center'>
                                <Card.Title style={{ color: "teal", fontSize: '24px' }}>{inventory.name}</Card.Title>
                                <Card.Text>{inventory.description}</Card.Text>
                                <Card.Text> <span className='fs-4' style={{ color: 'tomato' }}>Price: $ {inventory.price}</span> </Card.Text>
                                <Card.Text> <span className='fs-5 text-success'>Quantity: {inventory.quantity}</span> </Card.Text>
                                <div style={{ position: 'absolute', bottom: '10px', left: '0px' }}
                                    className='d-flex justify-content-evenly align-items-center w-100'
                                >
                                    <div>
                                        <Button onClick={() => handleMyInventory(inventory._id)}
                                            style={{ backgroundColor: 'forestgreen', border: 'none' }}
                                        >My Inventory <BiSelectMultiple /></Button>
                                    </div>
                                    <div>
                                        <Button onClick={() => handleDelete(inventory._id)}
                                            style={{ backgroundColor: 'orangered', border: 'none' }}
                                        >Delete <RiDeleteBin6Line /></Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>

            <Button variant="link" as={Link} to='/add' className='text-decoration-none fs-5 mb-4 '
                style={{ color: 'teal' }}
            >
                <IoBagAdd />  Add Inventorty <FaArrowRight /></Button>
        </div>
    );
};

export default ManageInventory;