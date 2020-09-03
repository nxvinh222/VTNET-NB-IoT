import React from "react"
import { Container, Row, Col } from "react-bootstrap"

function ProductVignettes(props) {
   return (
      <div className="product-vignettes">
         <Container>
            <div className="vignette">
               <Row xs={1} sm={2} md={3} lg={3}>
                  <Col>
                     <div className="vignette-content"
                        style={{
                           backgroundImage: "url(https://testwebsite.sodaq.com/wp-content/uploads/2016/12/3-scaled.jpg)",
                           minHeight: "200px",
                           backgroundSize: "cover"
                        }}>

                     </div>
                  </Col>
                  <Col>
                     <div className="vignette-content"
                        style={{
                           backgroundImage: "url(https://testwebsite.sodaq.com/wp-content/uploads/2016/12/3-scaled.jpg)",
                           minHeight: "200px",
                           backgroundSize: "cover"
                        }}>
                     </div>
                  </Col>
                  <Col>
                     <div className="vignette-content"
                        style={{
                           backgroundImage: "url(https://testwebsite.sodaq.com/wp-content/uploads/2016/12/3-scaled.jpg)",
                           minHeight: "200px",
                           backgroundSize: "cover"
                        }}>
                     </div>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
      
   )
}

export default ProductVignettes