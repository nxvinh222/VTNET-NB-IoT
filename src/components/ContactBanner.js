import React, { Component } from "react";
import { Button, Container } from "react-bootstrap"

// const logoUri =
//   "https://www.hlbank.com.vn/content/dam/vn-global/images/official_image/help-and-support/contact-us/contact%20_us_banner.jpg";

// const logoUri2 =
//   "https://tiptoplife.com.vn/wp-content/uploads/2018/07/Contact-banner.jpg";


class ContactBanner extends Component {
  render() {
    return (

      <div className="contact-banner" style={{ color: 'black', position: "relative" }}>
        <div className="p-5" style={{ backgroundColor: "#00697d", color: "white" }}>
          <Container>
            <p className="display-4" >Interested in our IoT solutions?</p>
            <p className="lead">Contact us and one of our IoT specialists will call you back</p>
            <Button className="" variant="danger" size="lg" href="#">
              Contact Us!
            </Button>{' '}
          </Container>
        </div>
      </div>
    );
  }
}


export default ContactBanner;