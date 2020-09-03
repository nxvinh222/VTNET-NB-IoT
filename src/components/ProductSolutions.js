import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import 'styles/SolutionCard.css'


import ProductVignette from 'components/ProductVignette'

function ProductVignettes() {

   const data = useState([])
   const display = useState(0)

   return (
      <div className="product-content">
         <Container>
               <div className="solution-cards">
                  <Row md={3}>
                     <Col>
                        <div className="solution-card-cnt">
                           test
                        </div>
                     </Col>
                     <Col>
                        <div className="solution-card-cnt">
                           test
                        </div>
                     </Col>
                     <Col>
                        <div className="solution-card-cnt">
                           test
                        </div>
                     </Col>
                     
                  </Row>
               </div>
               <Row xs={1} sm={1} md={1} lg={3}>
                  <ProductVignette />
                  <ProductVignette />
                  <ProductVignette />
               </Row>

         </Container>
      </div>
      
   )
}

export default ProductVignettes