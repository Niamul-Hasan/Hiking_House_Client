import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/Carosel2/newbanner1.png';
import img2 from '../../../images/Carosel2/newbanner2.png';
import img3 from '../../../images/Carosel2/newbanner3.png';
import img4 from '../../../images/Carosel2/newbanner4.png';

const HikingPackage = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center text-primary'>Explore Hiking Packages</h2>
            <Carousel fade>
                <Carousel.Item style={{ position: 'relative' }}>
                    <img
                        style={{ borderRadius: '50px' }}
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ position: 'absolute', top: '0px', right: "0px" }}>
                        <div className='text-end p-5 w-sm-100'
                            style={{ backgroundColor: 'rgba(200,0,100,0.15)', borderRadius: '50px', boxShadow: '-4px 4px 10px 10px rgba(200,0,100,0.25)', color: 'black' }}>
                            <h1>Summer HiKing On American Hills</h1>
                            <h4>Make your comming summer vacation adventurous.</h4>
                            <h5><small>If interested,email for details.</small> </h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ position: 'relative' }}>
                    <img
                        style={{ borderRadius: '50px' }}
                        className="d-block w-100"
                        src={img3}
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{ position: 'absolute', top: '0px', left: "50px" }}>
                        <div className='text-start p-5 w-sm-100'
                            style={{ backgroundColor: 'rgba(200,0,100,0.15)', borderRadius: '50px', boxShadow: '-4px 4px 10px 10px rgba(200,0,100,0.25)', color: 'black' }}>
                            <h2>Feel Lonley At Business? Let's Have A Break</h2>
                            <h4>Adventure with Beauty Package</h4>
                            <h5><small>If interested,email for details.</small> </h5>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item style={{ position: 'relative' }}>
                    <img
                        style={{ borderRadius: '50px' }}
                        className="d-block w-100"
                        src={img4}
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{ position: 'absolute', top: '0px', left: "50px" }}>
                        <div className='text-start p-5 w-sm-100'
                            style={{ backgroundColor: 'rgba(0,100,200,0.15)', borderRadius: '50px', boxShadow: '-4px 4px 10px 10px rgba(0,100,200,0.25)', color: 'white' }}>
                            <h2>Adventure With Friends and Family</h2>
                            <h4>Make your Vacation Memorable with Family And Friends</h4>
                            <h5><small>Email for details.</small> </h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ position: 'relative' }}>
                    <img
                        style={{ borderRadius: '50px' }}
                        className="d-block w-100"
                        src={img2}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{ position: 'absolute', top: '0px', right: "0px" }}>
                        <div className='text-end p-5 w-sm-100'
                            style={{ backgroundColor: 'rgba(10,10,10,0.15)', borderRadius: '50px', boxShadow: '-4px 4px 10px 10px rgba(10,10,10,0.25)', color: 'white' }}>
                            <h2>Adventure With Privacy</h2>
                            <h4>Full Privacy Provided Awesome Hiking and Camapin Package. </h4>
                            <h5><small>Email for advance booking.</small> </h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HikingPackage;