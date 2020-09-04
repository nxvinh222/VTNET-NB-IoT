import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import 'styles/SolutionCard.css'

import SolutionCard from 'components/SolutionCard'
import ProductVignette from 'components/ProductVignette'

import solutionCardData from 'PseudoData/SolutionCard'
import ProductVignetteData from 'PseudoData/ProductVignette'

function ProductVignettes() {

   const data = useState([])
   const [ activeId, setActiveId ] = useState(0)

   const handleMouse = (event) => {
      setActiveId(event.target.id)
      console.log(activeId)
   }
   const content = [1, 2, 3, 4, 5]

   return (
      <div className="product-content">
         <Container>

               <div className="solution-content">
                  <h1 className="display-4">Explore more!</h1>
                  <p className="lead">{solutionCardData.solutionContent[activeId]}</p>
               </div>

               <div className="solution-cards">
                  <Row md={4}>
                     <SolutionCard 
                        color="#247BA0"
                        title="Life Tracking"
                        id="0"
                        handleMouse={handleMouse}
                        activeId={activeId}
                     />
                     <SolutionCard 
                        color="#70C1B3"
                        title="Environmental Sensing"
                        id="1"
                        handleMouse={handleMouse}
                        activeId={activeId}
                     />
                     <SolutionCard 
                        color="#B2DBBF"
                        title="Development Boards"
                        id="2"
                        handleMouse={handleMouse}
                        activeId={activeId}
                     />
                     <SolutionCard 
                        color="#F3FFBD"
                        title="Industrial Monitoring"
                        id="3"
                        handleMouse={handleMouse}
                        activeId={activeId}
                     />
                     {/* <SolutionCard 
                        color="#FF1654"
                        title="Asset Tracking"
                        id="4"
                        handleMouse={handleMouse}
                     /> */}
                     
                  </Row>
               </div>
               <div className="product-vignettes">
                  <Row xs={1} sm={1} md={1} lg={3}>
                     {
                        ProductVignetteData.featuredProduct[activeId].map((item) => 
                           <ProductVignette data={item} />)
                     }
                  </Row>
               </div>


         </Container>
      </div>
      
   )
}

export default ProductVignettes