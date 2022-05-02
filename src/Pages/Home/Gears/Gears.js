import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Gear from '../Gear/Gear';

const Gears = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:4000/gears';
        fetch(url)
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])

    return (
        <div className='container'>
            <h1 className='text-success text-center mt-3'>Available Inventories</h1>
            <Row xs={1} md={2} lg={3} className="g-4 my-3">
                {
                    inventories.map(inventory => <Gear
                        key={inventory._id}
                        inventory={inventory}

                    ></Gear>)
                }
            </Row>
        </div>


    );
};

export default Gears;