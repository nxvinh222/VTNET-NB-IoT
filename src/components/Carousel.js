import React, { useState, useEffect } from "react";
import { Carousel, Container, Button } from "react-bootstrap"
import 'styles/Carousel.css'

import CarouselItem from 'components/CarouselItem'

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
                title: "Lorem Ipsum",
                text: "Lorem ipsum dolor sit amet.",
                picture: "https://www.cdacollaborative.org/wp-content/uploads/2017/07/Biz-and-Peace-Carousel-Background-01.png",
                href: "http://google.com"
            },
            {
                title: "Lorem Ipsum Extra",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
                picture: "https://www.cdacollaborative.org/wp-content/uploads/2017/07/Biz-and-Peace-Carousel-Background-01.png",
                href: "http://google.com"
            }
        ])
    }, []);

    console.log(data)
    console.log(data.length)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    // Return all Carousel's items
    // Khong hieu tai sao phai kiem tra data khi doi sang OwlCarousel trong khi luc truoc khong can??? 
    return data.length > 0 ? (
        <div className="intro-carousel">
            <Container className="hero-text-carousel col-sm-11 col-md-9 col-lg-7">
                <OwlCarousel
                    className="owl-theme"
                    activeIndex={index}
                    onSelect={handleSelect}
                    items={1}
                    margin={10}
                >
                    {/* Map data with item */}
                    {data.map((itemInfo, i) => 
                                // <div
                                //     className="item"
                                //     style={{ height: "226px", backgroundColor: "#5e2750" }}
                                // >
                                //     <Carousel.Caption>
                                //         <h3 className="pt-3" style={{ fontFamily: "arial" }}>{itemInfo.title}</h3>
                                //         <p className="lead" >content1</p>
                                //         <Button className="col-5 btn-block" size="lg" href="/" id="carousel-top-button" active>
                                //             Enter
                                //         </Button>{' '}
                                //     </Carousel.Caption>
                                // </div>
                                <CarouselItem data={itemInfo} key={i}/>
                            )
                    }
                    {/* // */}
                </OwlCarousel>
            </Container>
        </div>

    ) : null;
}

export default ControlledCarousel;