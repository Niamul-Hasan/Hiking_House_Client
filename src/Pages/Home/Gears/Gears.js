import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Gear from '../Gear/Gear';
import { RiListSettingsLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
const Gears = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        const url = 'https://serene-coast-39945.herokuapp.com/gears';
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
            <Button variant="link" as={Link} to='manageIn' className='text-decoration-none fs-5 mb-4 '
                style={{ color: 'teal' }}
            >
                <RiListSettingsLine />  Manage Inventorty <FaArrowRight /></Button>
        </div>


    );
};

export default Gears;