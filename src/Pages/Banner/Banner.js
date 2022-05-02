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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                        style={{ height: '500px' }}
                    />
                    <Carousel.Caption className="pb-5 mb-5 text-primary">
                        <h3>Second slide label</h3>
                        <p className='fs-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quam rerum consequatur quisquam officia rem similique quia quasi maxime inventore omnis repellendus doloremque ipsa, necessitatibus at! Officiis quo dolorum aperiam consequatur laudantium. Assumenda in veniam quos consectetur sint sit eos.</p>
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
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;