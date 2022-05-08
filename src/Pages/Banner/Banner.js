import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from "../../images/newbanner01.png";
import slide2 from "../../images/newbanner02.png";
import slide3 from "../../images/newbanner3.png";

const Banner = () => {
    return (
        <div >
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                        style={{ height: '500px' }}
                    />
                    <Carousel.Caption>
                        <div
                            style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '25px' }}>
                            <h1>A Great House of Collection</h1>
                            <h2>Every Thing You Need To Explore Hiking Is Provided BY
                                <br /><span
                                    style={{ fontSize: '32px', color: 'teal' }}
                                >HIKING HOUSE</span></h2>
                            <h3>Book Your Bussiness Gears From This Page Now</h3>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                        style={{ height: '500px' }}
                    />
                    <Carousel.Caption>
                        <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '25px' }}>
                            <h2>Many Years Of Experienced WareHouse Of Hiking Market</h2>
                            <h3>Your Trust is Our Main Asset Of Running This Business.Don't Be Shy to Share Your Demand to Us.</h3>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                        style={{ height: '500px' }}
                    />
                    <Carousel.Caption>
                        <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '25px' }} >
                            <h2>We Always Maintain Our Customer Setisfiction and Choise. </h2>
                            <h4>Please Make Sure You Are Booking Your Needs from Here as per Customer Demand</h4>
                            <h5 className='text-warning'>Booking  can never be returned</h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;