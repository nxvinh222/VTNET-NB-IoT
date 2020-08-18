import React, { Component } from "react"; 
import { Image, Carousel } from "react-bootstrap"
import '../App.css';
import templatePicture from "./969.jpg"
// import HeroBanner from 'react-hero-banner';

const logoUri =
  "https://www.vodafone.com/business/media/image/1508862781296/640/251121730-h_800x400.jpg";

const carouselPicture =
    "https://upload.wikimedia.org/wikipedia/commons/5/52/Golden_sky_%284080648531%29.jpg"

// const templatePicture =
//     "./vtnet-nb-iot/src/components/969.jpg"

class Banner extends Component {
  render() {
    return (
        <div>         
            {/* <img  src= {logoUri} /> */}
            <img className="col-12 p-0" src={logoUri} />
                {/* <div className="hero-text">
                    <h1>IoT</h1>
                    <p>Viettel</p>
                </div> */}

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