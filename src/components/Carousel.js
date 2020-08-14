import React, { Component } from "react"; 
import { Carousel } from "react-bootstrap"
import '../App.css';

const carouselPicture =
    "https://upload.wikimedia.org/wikipedia/commons/5/52/Golden_sky_%284080648531%29.jpg"

class Banner extends Component {
  render() {
    return (
        <div>         




            <Carousel className="carousel">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carouselPicture}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carouselPicture}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carouselPicture}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
  }
}

// const styles = StyleSheet.create({
//   heroHeaderImage: {
//     height: 80
//   }
// });

export default Banner;