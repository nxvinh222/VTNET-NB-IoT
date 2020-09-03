import React from "react";
import { Carousel, Button } from "react-bootstrap"

function CarouselItem(props) {
    return (
        // <Carousel.Item className="carousel-top">
        //     <img
        //         className="d-block w-100"
        //         src="https://i.pinimg.com/originals/f3/e6/d8/f3e6d8120c83c2d12897733a93a62a1f.jpg"
        //         alt="First slide"
        //     />
        //     <Carousel.Caption>
        //         <h3>First slide label</h3>
        //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //     </Carousel.Caption>
        // </Carousel.Item>
        <div
            className="item"
            style={{ height: "226px", backgroundColor: "#5e2750" }}
        >
            <img
                className="d-block w-100"
                 src={props.data.picture}
            />
            <Carousel.Caption>                
                <h3 className="pt-3" style={{ fontFamily: "arial" }}>{props.data.title}</h3>
                <p className="lead" >{props.data.text}</p>
                <Button className="col-5 btn-block" size="lg" href={props.data.href} id="carousel-top-button" active>
                    Enter
                </Button>{' '}
            </Carousel.Caption>
        </div>
    );
}

export default CarouselItem;