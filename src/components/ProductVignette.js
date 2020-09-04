import React from "react"
import { Col } from "react-bootstrap"
import 'styles/ProductVignette.css'

function ProductVignette(props) {

   return props.data ? (
      <div className="vignette">
         <Col>
            <a href={window.location.href + '/1'}>
               <div className="vignette-container"
                  style={{
                     backgroundImage: "url(" + props.data.picture + ")"
                  }}     
               >
                     <div className="vignette-content">
                        <h5 className='vignette-title text-center'>
                           {props.data.title} <i className="fas fa-toolbox"></i> 
                        </h5>
                        <p>
                           {props.data.content}
                        </p>
                        <div className="continue-button">
                           <i className="fas fa-arrow-circle-right"></i>
                        </div>
                     </div>
               </div>  
            </a>
         </Col>
      </div>
   ) : null
}

export default ProductVignette