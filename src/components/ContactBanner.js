import React, { Component } from "react"; 
import { Button } from "react-bootstrap"
import '../App.css';


const logoUri =
  "https://www.hlbank.com.vn/content/dam/vn-global/images/official_image/help-and-support/contact-us/contact%20_us_banner.jpg";

const carouselPicture =
    "https://upload.wikimedia.org/wikipedia/commons/5/52/Golden_sky_%284080648531%29.jpg"


class ContactBanner extends Component {
  render() {
    return (
        // <br></br>
        <div className="hero-text" style={{ color: 'black' }}>     
            <img className="col-12 p-0 pt-3" src={logoUri} style={{ height: '250px'}}/>
            <div className="hero-text-contact">
                <h2 className="">Interested in our IoT solutions?</h2>
                <p className="">Contact us and one of our IoT specialists will call you back</p>
                <Button variant="danger" size="md" href="#" active>
                    Primary button
                </Button>{' '}
            </div>

        </div>
    );
  }
}


export default ContactBanner;