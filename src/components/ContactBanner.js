import React, { Component } from "react"; 
import { Button, Row } from "react-bootstrap"




// const logoUri =
//   "https://www.hlbank.com.vn/content/dam/vn-global/images/official_image/help-and-support/contact-us/contact%20_us_banner.jpg";

const logoUri2 =
  "https://tiptoplife.com.vn/wp-content/uploads/2018/07/Contact-banner.jpg";


class ContactBanner extends Component {
  render() {
    return (
        // <br></br>
        <div className="" style={{ color: 'black', position: "relative"}}>     
            {/* <img className="container-fluid col-md-0 p-0 pt-3" src={logoUri2} style={{ height: '250px'}}/> */}
            <div className="p-5" style={{backgroundColor: "#00697d", color: "white"}}>
                  <p className="display-4" >Interested in our IoT solutions?</p>
                  <p className="lead">Contact us and one of our IoT specialists will call you back</p>
                  <Button className="col-md-9 col-lg-3" variant="danger" size="md" href="#">
                      Contact Us!
                  </Button>{' '}

            </div>

        </div>
    );
  }
}


export default ContactBanner;