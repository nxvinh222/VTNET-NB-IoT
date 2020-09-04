import React, { useState } from "react"
import { Container, Row, Button } from "react-bootstrap"

// Owl Carousel
// import OwlCarousel from 'react-owl-carousel';  
// import 'owl.carousel/dist/assets/owl.carousel.css';  
// import 'owl.carousel/dist/assets/owl.theme.default.css'; 

import AddToCart from 'components/AddToCart'
import DiscountList from 'components/DiscountList'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

function ProductDetail (props) {
    // State
    const [quantity, setQuantity] = useState(1)
    const [picture, setPicture] = useState("https://sodaq.com/wp-content/uploads/2019/11/SODAQ_WEBSHOP-min.jpg")


    const handleTextChange = (event) => {
        setQuantity(event.target.value)
        console.log(quantity);
    }

    return (
        <div className="product-detail">
            <Container>
                <Row>
                    <div className="image-wrap col-md-5 col-sm-12">
                        {/* <a data-fancybox="gallery" href={picture}> */}

                            <Carousel className="border-none col-12" autoPlay interval="5000">
                                <img src="https://cdn.webshopapp.com/shops/104792/files/298764174/500x500x2/image.jpg" />
                                <img src="https://cdn.webshopapp.com/shops/104792/files/298764174/500x500x2/image.jpg" />
                                <img src="https://cdn.webshopapp.com/shops/104792/files/298764207/500x500x2/image.jpg" />
                            </Carousel>
                            
                        {/* </a> */}
                    </div>
                    
                    <div className="info col-md-7 col-sm-12">

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
                                <h3 className="text-secondary">{(1000000).toLocaleString()}₫</h3>
                        </div>

                        <p className="description"
                            style={{fontSize: "0.9em"}}>
                            D'Éon was born at the Hôtel d'Uzès in Tonnerre, Burgundy, into a poor noble family. D'Éon's father, Louis d'Éon de Beaumont, was an attorney and director of the king's dominions, later mayor of Tonnerre and sub-delegate of the intendant of the généralité of Paris.
                        </p>

                        <AddToCart 
                            quantity={quantity} 
                            setQuantity={setQuantity} 
                            handleTextChange={handleTextChange} 
                        />
                        <DiscountList />
                    </div>

                </Row>
            </Container>
        </div>
        
    )
}

export default ProductDetail