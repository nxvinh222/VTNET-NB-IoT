import React, { Component } from "react";
import { Breadcrumb, Container } from "react-bootstrap"


// const logoUri =
//   "https://www.vodafone.com/business/media/image/1508862781296/640/251121730-h_800x400.jpg";



class SecondBanner extends Component {
   render() {
      return (
         <div className="second-banner">

            <Breadcrumb className="">
               <Container>
                  <Breadcrumb.Item href="#" style={{ display: "inline-block" }}>Viettel Business Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" style={{ display: "inline-block" }}>
                     Solution
                    </Breadcrumb.Item>
                  <Breadcrumb.Item style={{ display: "inline-block" }} active>IoT</Breadcrumb.Item>
               </Container>
            </Breadcrumb>

            <div className="p-5" style={{ backgroundColor: "#00697d", color: "white" }}>
               <Container>
                  <h3 className="heading-3 text-left">Internet of Things is transforming lives and businesses</h3>
                  <p className="text-left lead">The Internet of Things (IoT) transforms industries around the world, and it’s not hard to see why. IoT solutions can help you unlock new revenue streams, improve efficiency and increase customer engagement and loyalty. Why risk being left behind? We can help you make the most of this powerful technology, delivering immediate benefits and setting you up for future success.</p>
               </Container>
            </div>
         </div>

      );
   }
}


export default SecondBanner;