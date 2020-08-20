import React, { useState, useEffect } from "react"; 
import { Carousel, Container, Button } from "react-bootstrap"
// import CarouselItem from "./CarouselItem"
import '../App.css';

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
                text: "Expanding sacred domain. Domain secured. Divine punishment enforcement limits... All approved. By the wrath of Shiva, here ends thy life. Pashupata!",
                picture: "https://www.cdacollaborative.org/wp-content/uploads/2017/07/Biz-and-Peace-Carousel-Background-01.png",
                href: "http://google.com"
            },
            {
                title: "Altria Pendragon",
                text: "Light, may you be released from the ends of the world. Split the heavens and tether the earth, anchor of the storm! Rhongomyniad!",
                picture: "https://www.cdacollaborative.org/wp-content/uploads/2017/07/Biz-and-Peace-Carousel-Background-01.png",
                href: "http://google.com"
            }
        ])
    }, []);
    

    // Map Carousel's data
    const allItem = data.map((itemInfo) => (
            <Carousel.Item className="carousel-top ">
                    <img
                    className="d-block w-100"
                    src={itemInfo.picture}
                    alt="Slide"
                    />
                    <Carousel.Caption className="">
                        <h3 className="display-4" style={{fontSize : "8vw"}}>{itemInfo.title}</h3>
                        <p class="lead" style={{fontSize : "2vw"}}>{itemInfo.text}</p>
                        <Button variant="primary" size="md" href={itemInfo.href} style={{fontSize : "2vw"}} active>
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
        <Container className="hero-text-carousel">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {allItem}
            </Carousel>
        </Container>
    );
}

export default ControlledCarousel;