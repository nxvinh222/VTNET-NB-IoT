import React from "react"
import { Container } from "react-bootstrap"

function InsideProduct (props) {
    return (
        <div className="product-detail">
            <Container>
                <a data-fancybox="gallery" href="https://sodaq.com/wp-content/uploads/2019/11/SODAQ_WEBSHOP-min.jpg">
                    <img className="border p-3 col-6" src="https://sodaq.com/wp-content/uploads/2019/11/SODAQ_WEBSHOP-min.jpg" />
                </a>
            </Container>
        </div>
        
    )
}

export default InsideProduct