import React, { Component } from "react"; 
import { Image, Carousel } from "react-bootstrap"
import '../App.css';
// import HeroBanner from 'react-hero-banner';

const logoUri =
  "https://imagesvc.timeincapp.com/v3/fan/image?url=https://raptorsrapture.com/wp-content/uploads/getty-images/2016/04/1094224730.jpeg&w=1600";

class Banner extends Component {
  render() {
    return (
        <div class="container">         
            <div class="hero-image">
                <div class="hero-text">
                <h1>IoT</h1>
                <p>Viettel</p>
                </div>
            </div>



            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={logoUri}
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
                    src={logoUri}
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
                    src={logoUri}
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