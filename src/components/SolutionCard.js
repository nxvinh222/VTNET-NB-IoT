import React, { useEffect, useState } from "react"
import { Col, Button } from "react-bootstrap"
import 'styles/SolutionCard.css'


function ProductVignettes(props) {


   return (
      <div className="solution-card"

         >
         <Col className="p-1">
            <div 
               className="solution-card-cnt" 
               style={props.activeId == props.id 
                        ? { backgroundColor: props.color, transform: "scale(1.2)" }
                        : { backgroundColor: props.color }}
               id={props.id}
               onClick={props.handleMouse}
            >
               <span 
                  id={props.id}
               >
                  {props.title}
               </span>
            </div>
         </Col>
      </div>
      
   )
}

export default ProductVignettes