import React from "react"; 
import { Carousel } from "react-bootstrap"
import '../App.css';

function CarouselItem() {
      
    return (

                <Carousel.Item className="carousel-top">
                    <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/f3/e6/d8/f3e6d8120c83c2d12897733a93a62a1f.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

    );
}

export default CarouselItem;