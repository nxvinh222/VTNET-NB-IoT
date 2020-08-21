import React, { Component } from "react"; 
import { Row, Col } from "react-bootstrap"




class TitleBanner extends Component {
  render() {
    return (
        <div className="" style={{ color: 'black', position: "relative"}}>     
            <div className="p-5" style={{backgroundColor: "#930800", color: "white"}}>
                  <p className="display-4" >Did you know?</p>
                  <p className="lead">Contact us and one of our IoT specialists will call you back</p>
            </div>

        </div>
    );
  }
}


export default TitleBanner;