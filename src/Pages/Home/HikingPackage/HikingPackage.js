import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/Carosel2/newbanner1.png';
import img2 from '../../../images/Carosel2/newbanner2.png';
import img3 from '../../../images/Carosel2/newbanner3.png';
import img4 from '../../../images/Carosel2/newbanner4.png';

const HikingPackage = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center text-primary'>Exclusive Hiking Packages</h2>
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
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                            <h3>Style added</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HikingPackage;