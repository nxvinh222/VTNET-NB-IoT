import React, { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"

import ProductVignette from 'components/ProductVignette'

function ProductVignettes() {


   return (
      <div className="product-vignettes">
         <Container>

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