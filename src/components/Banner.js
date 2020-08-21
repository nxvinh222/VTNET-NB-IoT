import React, { Component } from "react"; 


const logoUri =
  "https://www.vodafone.com/business/media/image/1508862781296/640/251121730-h_800x400.jpg";

// const carouselPicture =
//     "https://upload.wikimedia.org/wikipedia/commons/5/52/Golden_sky_%284080648531%29.jpg"


class Banner extends Component {
  render() {
    return (
        <div className="hero-text">         
            <img className="col-12 p-0" src={logoUri} style={{minHeight: "275px",   objectFit: "cover"}}/>
            <div className="hero-text-top text-center">
                <h1 className="display-3 text-center" id="hero-text-detail">IoT | Internet of Things</h1>
                {/* <p>Viettel</p> */}
            </div>
        </div>
    );
  }
}


export default Banner;