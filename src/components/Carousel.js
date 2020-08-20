import React, { useState, useEffect } from "react"; 
import { Carousel, Container, Button } from "react-bootstrap"
// import CarouselItem from "./CarouselItem"
import '../App.css';
import '../scss/main.scss'

const carouselPicture =
    "https://upload.wikimedia.org/wikipedia/commons/5/52/Golden_sky_%284080648531%29.jpg"

function ControlledCarousel() {
    //Init State
    const [index, setIndex] = useState(0);
    const [data, setData] = useState([])

    // ComponentDidMount
    // Call API
    useEffect(() => {
        setData([
            {
                title: "Arjuna",
                text: "Expanding sacred domain. Domain secured.",
                picture: "https://www.cdacollaborative.org/wp-content/uploads/2017/07/Biz-and-Peace-Carousel-Background-01.png",
                href: "http://google.com"
            },
            {
                title: "Altria",
                text: "Light, may you be released from the ends of the world. ",
                picture: "https://www.cdacollaborative.org/wp-content/uploads/2017/07/Biz-and-Peace-Carousel-Background-01.png",
                href: "http://google.com"
            }
        ])
    }, []);
    

    // Map Carousel's data
    const allItem = data.map((itemInfo) => (
            <Carousel.Item className="">
                    <img
                    className="d-block w-100"
                    src={itemInfo.picture}
                    alt="Slide"
                    style={{width: "871px", height: "226px"}}
                    />
                    <Carousel.Caption className="">
                        <h3 className="" style={{fontFamily: "arial"}}>{itemInfo.title}</h3>
                        <p className="lead" >{itemInfo.text}</p>
                        <Button size="lg" href={itemInfo.href} id="carousel-top-button" active>
                            Primary button
                        </Button>{' '}
                    </Carousel.Caption>
            </Carousel.Item>
    )
)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    

    // Return all Carousel's items
    return (
        <Container className="hero-text-carousel" style={{width: "85vw"}}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {allItem}
                
            </Carousel>
        </Container>
    );
}

export default ControlledCarousel;