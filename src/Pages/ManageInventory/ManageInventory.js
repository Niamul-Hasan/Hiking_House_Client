import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HikingItem from './HikingItem';

const ManageInventory = () => {
    const [hikingItems, setHikingItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/inventories')
            .then(res => res.json())
            .then(data => setHikingItems(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-success text-center mt-3'>Available Inventories</h1>
            <Row xs={1} md={2} lg={3} className="g-4 my-3">
                {
                    hikingItems.map(hikingItem => <HikingItem
                        key={hikingItem._id}
                        hikingItem={hikingItem}

                    ></HikingItem>)
                }
            </Row>
        </div>
    );
};

export default ManageInventory;