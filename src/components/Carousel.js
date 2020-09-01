import React, { useState, useEffect } from "react";
import { Carousel, Container, Button } from "react-bootstrap"
import 'styles/Carousel.css'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// const carouselPicture =
//     "https://upload.wikimedia.org/wikipedia/commons/5/52/Golden_sky_%284080648531%29.jpg"

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
    const allItem = data.map((itemInfo, i) => (
        <Carousel.Item className="" key={i}>
            {/* <img
                    className="d-block w-100"
                    src={itemInfo.picture}
                    alt="Slide"
                    style={{height: "226px"}}
                    /> */}
            <div
                className=""
                style={{ height: "226px", backgroundColor: "#5e2750" }}
            />
            <Carousel.Caption className="" style={{ height: "100%" }}>
                <h3 className="pt-3" style={{ fontFamily: "arial" }}>{itemInfo.title}</h3>
                <p className="lead" >{itemInfo.text}</p>
                <Button className="col-5 btn-block" size="lg" href={itemInfo.href} id="carousel-top-button" active>
                    Enter
                        </Button>{' '}
            </Carousel.Caption>
        </Carousel.Item>
    ))

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    // Return all Carousel's items
    return (
        <div className="intro-carousel">
            <Container className="hero-text-carousel col-sm-11 col-md-9 col-lg-7">
                {/* <Carousel activeIndex={index} onSelect={handleSelect}>
                    {allItem}
                </Carousel> */}
                <OwlCarousel
                    className="owl-theme"
                    items={1}
                    loop
                    margin={10}
                    nav
                >
                    {/* item 1 */}
                    <div
                        className="item"
                        style={{ height: "226px", backgroundColor: "#5e2750" }}
                    >
                        <Carousel.Caption>
                            <h3 className="pt-3" style={{ fontFamily: "arial" }}>test1</h3>
                            <p className="lead" >content1</p>
                            <Button className="col-5 btn-block" size="lg" href="/" id="carousel-top-button" active>
                                Enter
                            </Button>{' '}
                        </Carousel.Caption>
                    </div>

                    {/* item 2 */}
                    <div
                        className="item"
                        style={{ height: "226px", backgroundColor: "#5e2750" }}
                    >
                        <Carousel.Caption>
                            <h3 className="pt-3" style={{ fontFamily: "arial" }}>test2</h3>
                            <p className="lead" >content2</p>
                            <Button className="col-5 btn-block" size="lg" href="/" id="carousel-top-button" active>
                                Enter
                            </Button>{' '}
                        </Carousel.Caption>
                    </div>
                </OwlCarousel>
            </Container>
        </div>

    );
}

export default ControlledCarousel;