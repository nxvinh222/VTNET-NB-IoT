import React, { useState } from "react"; 
import { Carousel, Container } from "react-bootstrap"
import '../App.css';

const carouselPicture =
    "https://upload.wikimedia.org/wikipedia/commons/5/52/Golden_sky_%284080648531%29.jpg"

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <Container className="hero-text-carousel">
            <Carousel activeIndex={index} onSelect={handleSelect}>
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
                <Carousel.Item className="carousel-top">
                    <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/f3/e6/d8/f3e6d8120c83c2d12897733a93a62a1f.jpg"
                    alt="Second slide"
                    />
            
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default ControlledCarousel;