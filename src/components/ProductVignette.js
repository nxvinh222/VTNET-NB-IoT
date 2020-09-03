import React from "react"
import { Col } from "react-bootstrap"
import 'styles/ProductVignette.css'

function ProductVignette(props) {

   return (
      <div className="vignette">
         <Col>
            <a href={window.location.href + '/1'}>
               <div className="vignette-container"
                  onClick={"window.location.href = 'http://example.com';"}
                  style={{
                     backgroundImage: "url(https://testwebsite.sodaq.com/wp-content/uploads/2016/12/3-scaled.jpg)"
                  }}
                  
               >
                     <div className="vignette-content">
                        <h5>Lorem Ipsum</h5>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget sollicitudin eros.
                        </p>
                        <div className="continue-button">
                           <i className="fas fa-arrow-circle-right"></i>
                        </div>
                     </div>
               </div>  
            </a>
         </Col>
      </div>
      
   
   )
}

export default ProductVignette