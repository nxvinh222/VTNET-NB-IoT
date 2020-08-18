import React, { Component } from "react"; 
import { Image, Carousel } from "react-bootstrap"
import '../App.css';
import templatePicture from "./969.jpg"
// import HeroBanner from 'react-hero-banner';

const logoUri =
  "https://imagesvc.timeincapp.com/v3/fan/image?url=https://raptorsrapture.com/wp-content/uploads/getty-images/2016/04/1094224730.jpeg&w=1600";

const carouselPicture =
    "https://upload.wikimedia.org/wikipedia/commons/5/52/Golden_sky_%284080648531%29.jpg"

// const templatePicture =
//     "./vtnet-nb-iot/src/components/969.jpg"

class Banner extends Component {
  render() {
    return (
        <div>         
            {/* <img  src= {logoUri} /> */}
            <img className="hero-image" src={templatePicture} />
                <div className="hero-text">
                    <h1>IoT</h1>
                    <p>Viettel</p>
                </div>

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