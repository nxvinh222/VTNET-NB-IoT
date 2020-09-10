import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap"
import 'styles/Carousel.css'

import CarouselItem from 'components/CarouselItem'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


// Pseudo Data Import 
import CarouselData from 'PseudoData/CarouselData'


function ControlledCarousel() {
    //Init State
    const [index, setIndex] = useState(0);
    const [data, setData] = useState([])

    // ComponentDidMount
    // Call API
    useEffect(() => {
        setData(CarouselData)
    }, []);


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