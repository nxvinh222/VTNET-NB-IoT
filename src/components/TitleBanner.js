import React, { Component } from "react";
import { Row, Container } from "react-bootstrap"




class TitleBanner extends Component {
  render() {
    return (
      <div className="" style={{ color: 'black', position: "relative" }}>
        <div className="p-5" style={{ backgroundColor: "#930800", color: "white" }}>
          <p className="display-4 text-center" >Did you know?</p>
          <Container>
            <Row sm={1} lg={3}>
              <div className="text-center">
                <i className="far fa-star fa-3x"></i>
                <p className="lead mt-3">Three Wise Men of the East. The Great God of the Norse. The Fruit of Wisdom. My intellect, my omnipotence, surpasses all forms of wisdom! Uomo Universale!</p>
              </div>
              <div className="text-center">
                <i class="fas fa-globe fa-3x"></i>
                <p className="lead mt-3">Noble Phantasm, Fragment Deployment. Grant me flames. The radiance of the morning sun! Burn! Devour! Anything and everything!</p>
              </div>
              <div className="text-center">
                <i class="far fa-heart fa-3x"></i>
                <p className="lead mt-3">Those who cherish their lives, vanish with haste. From here on, the scorching heat will take you to the eighth circle of hell! Let the gods and Buddhas of the three realms return to ash!</p>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}


export default TitleBanner;