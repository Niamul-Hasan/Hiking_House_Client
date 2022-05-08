import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import './InventoryDetails.css';
import { RiListSettingsLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";

const InventoryDetails = () => {
    const { id } = useParams();
    const [btnText, setBtnText] = useState('Delivered');
    const [btnColor, setBtnColor] = useState('forestgreen');
    const [inventory, setInventory] = useState({});
    const [loadData, setLoadData] = useState(0);
    useEffect(() => {
        const url = `https://serene-coast-39945.herokuapp.com/inventories/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))

    }, [id, loadData])

    let count = parseInt(inventory.quantity);

    const handleDeliver = () => {
        if (count > 0) {
            count = count - 1;
            inventory.quantity = count;
            setBtnText('Delivered');
            setBtnColor('forestgreen')
        }
        if (count <= 0) {
            setBtnText('StokeOver');
            setBtnColor('red')
        }


        fetch(`https://serene-coast-39945.herokuapp.com/inventories/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inventory)
        })
            .then(res => res.json())
            .then(data => {
                setLoadData(loadData + 1);

                console.log(data)
            });



    }

    const handleUpdate = event => {
        event.preventDefault();
        const suplier = event.target.suplier.value;
        const restoke = event.target.quantity.value;
        const quantity = parseInt(restoke) + count;
        const update = { suplier, quantity };


        fetch(`https://serene-coast-39945.herokuapp.com/inventories/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                setLoadData(loadData + 1);
                console.log(data)
            });
        event.target.reset();
    }

    return (
        <div className='container inventory-details my-5'>
            <div className='container  text-center' >
                <img src={inventory.img} alt="" className='py-3' style={{ borderRadius: '20px', boxShadow: '-2px 2px 4px 4px rgba(0,0,0,0.2) ' }} />
            </div>
            <div className='container p-3'
                style={{ borderRadius: '20px', boxShadow: '-2px 2px 4px 4px rgba(0,0,0,0.2) ' }}>
                <h2 style={{ color: 'teal' }}>{inventory.name}</h2>
                <p style={{ color: 'midnightblue' }}>{inventory.description}</p>
                <p style={{ color: "orangered", fontSize: '18px' }}>Suplier:{inventory.suplier}</p>
                <h3 style={{ color: "tomato" }}>Price: ${inventory.price}</h3>
                <h4 style={{ color: 'forestgreen' }}>Remaining Quantity: {count}</h4>
                <Button onClick={handleDeliver} style={{ backgroundColor: `${btnColor}`, border: 'none' }}
                ><span >{btnText} <GrDeliver /></span>
                </Button>
            </div>
            <div className='container'>
                <form className='p-2' onSubmit={handleUpdate}>
                    <input type="text" name="suplier" id="" placeholder='suplier Name' className='w-100 mb-2' required />
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