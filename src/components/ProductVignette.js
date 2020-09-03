import React from "react"
import { Container } from "react-bootstrap"

function ProductVignette(props) {
   return (
      <div className="vignette">
         <Container>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
               <div className="vignette-content"
                  style={{
                     backgroundImage: "url(https://testwebsite.sodaq.com/wp-content/uploads/2016/12/3-scaled.jpg)",
                     minHeight: "200px",
                     backgroundSize: "cover"
                  }}>

               </div>

            </div>
         </Container>
      </div>
   )
}

export default ProductVignette