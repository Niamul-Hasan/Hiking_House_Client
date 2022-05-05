import React from 'react';
import img from '../../images/Error-404.png';

const NotFound = () => {
    return (
        <div className='container d-flex flex-column justify-content-center align-items-center my-4'>
            <div>
                <h2 className='text-danger mb-3'>

                    Your Requested Page Is NOT Found In this Universe</h2>
            </div>
            <div className='mb-3'>
                <img src={img} alt=""
                    style={{ boxShadow: '-2px 2px 4px 4px rgba(0,0,0,0.5)', borderRadius: '20px' }} />
            </div>

        </div>
    );
};

export default NotFound;