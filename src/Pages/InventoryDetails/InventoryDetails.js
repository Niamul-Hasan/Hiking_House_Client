import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import './InventoryDetails.css';
import { RiListSettingsLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

const InventoryDetails = () => {
    const { id } = useParams();

    const [inventory, setInventory] = useState({});
    const [decrement, setDecrement] = useState(0);
    useEffect(() => {
        const url = `http://localhost:4000/inventories/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))

    }, [id, decrement])

    let count = parseInt(inventory.quantity);

    const handleDeliver = () => {
        count = count - 1;
        inventory.quantity = count;

        fetch(`http://localhost:4000/inventories/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inventory)
        })
            .then(res => res.json())
            .then(data => {
                setDecrement(decrement + 1);
                console.log(data)
            });

    }

    const handleUpdate = event => {
        event.preventDefault();
        const suplier = event.target.suplier.value;
        const restoke = event.target.quantity.value;
        const quantity = parseInt(restoke) + count;
        const update = { suplier, quantity };

        fetch(`http://localhost:4000/inventories/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                setDecrement(decrement + 1);
                console.log(data)
            });

    }

    return (
        <div className='container inventory-details my-5'>
            <div className='container  text-center' >
                <img src={inventory.img} alt="" className='py-3' style={{ borderRadius: '20px', boxShadow: '-2px 2px 4px 4px rgba(0,0,0,0.2) ' }} />
            </div>
            <div className='container'>
                <h2>{inventory.name}</h2>
                <p>{inventory.description}</p>
                <h3>Price: ${inventory.price}</h3>
                <h4>Remaining Quantity: {count}</h4>
                <Button onClick={handleDeliver}>Deliver</Button>
            </div>
            <div>
                <form className='p-2 bg-info' onSubmit={handleUpdate}>
                    <input type="text" name="suplier" id="" placeholder='suplier Name' className='w-100 mb-2' />
                    <input type="number" name="quantity" id="" placeholder='Restoke Inventory' required className='w-100 mb-2' />

                    <input type="submit" value="Update" className='d-block bg-warning border-0 rounded' />
                </form>
                <Button variant="link" as={Link} to='/manageIn' className='text-decoration-none fs-5 mb-4 '
                    style={{ color: 'teal' }}
                >
                    <RiListSettingsLine />  Manage Inventorty <FaArrowRight /></Button>
            </div>

        </div>
    );
};

export default InventoryDetails;