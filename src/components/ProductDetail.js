import React from "react"
import { Container, Row } from "react-bootstrap"

function InsideProduct (props) {
    return (
        <div className="product-detail">
            <Container>
                <Row>
                    <div className="image-wrap col-5">
                        <a data-fancybox="gallery" href="https://sodaq.com/wp-content/uploads/2019/11/SODAQ_WEBSHOP-min.jpg">
                            <img className="border p-3 col-12" src="https://sodaq.com/wp-content/uploads/2019/11/SODAQ_WEBSHOP-min.jpg" />
                        </a>
                    </div>
                    
                    <div className="info col-6">
                        <div className="top-info">
                            <div className="info-brand">
                                <img
                                    src={window.location.origin + '/viettel_logo.png'}
                                    height="25vw"
                                    className="d-inline-block align-top"
                                    alt="Viettel logo"
                                />
                            </div>
                            <div className="title-name">
                                <h1 className="price-font">Fleur de Lis</h1>
                            </div>
                            {/* <div className="product-id lead">
                                <span>PRODUCT ID </span>
                                <span className="font-weight-bold">777777777</span>
                            </div> */}
                        </div>
                        <div className="price price-font">
                                <h3 className="" style={{color: "rgb(0, 105, 125)"}}>{(1000000).toLocaleString()}₫</h3>

                        </div>
                        <p className="description"
                            style={{fontSize: "0.9em"}}>
                            D'Éon was born at the Hôtel d'Uzès in Tonnerre, Burgundy, into a poor noble family. D'Éon's father, Louis d'Éon de Beaumont, was an attorney and director of the king's dominions, later mayor of Tonnerre and sub-delegate of the intendant of the généralité of Paris.
                        </p>
                    </div>
                </Row>
            </Container>
        </div>
        
    )
}

export default InsideProduct