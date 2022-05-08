import React, { useEffect, useState } from 'react';
import ComboBooking from './ComboBooking';

const Combo = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        const url = 'https://serene-coast-39945.herokuapp.com/combo';
        fetch(url)
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [])


    return (
        <div className='container my-4'>
            <h2 className='text-center text-warning'>Limited Offer</h2>
            <div className='container row'>
                {
                    offers.map(offer => <div className='container col-lg-4 col-sm-1 col-md-2' key={offer._id}>
                        <div style={{ borderRadius: '20px', boxShadow: '-2px 2px 4px 4px rgba(0,0,0,0.2)', padding: '15px' }}>
                            <div>
                                <img src={offer.img} alt="" />
                            </div>
                            <p className='text-success '>{offer.descrip}</p>
                            <h3 style={{ color: 'teal' }}>Price: $ {offer.offerPrice}</h3>
                            <ComboBooking key={offer._id} offer={offer}></ComboBooking>
                        </div>
                    </div>)
                }

            </div>

        </div>
    );
};

export default Combo;