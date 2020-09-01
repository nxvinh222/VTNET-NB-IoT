import React, { useState } from "react"
import { Container, Row, Button } from "react-bootstrap"

// Owl Carousel
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

function InsideProduct (props) {
    // State
    const [quantity, setQuantity] = useState(1)
    const [picture, setPicture] = useState("https://sodaq.com/wp-content/uploads/2019/11/SODAQ_WEBSHOP-min.jpg")


    const handleTextChange = (event) => {
        setQuantity(event.target.value)
        console.log(quantity);
    }

    const handleClickPicture = (event) => {
        setPicture(event.target.src)
        console.log(picture);
    }




    return (
        <div className="product-detail">
            <Container>
                <Row>
                    <div className="image-wrap col-5">
                        <a data-fancybox="gallery" href={picture}>
                            {/* <img className="border p-3 col-12" src={picture} alt="product_picture"/> */}
                            <OwlCarousel 
                                items={1}        
                                className="owl-theme border-none p-3 col-12"  
                                data-slider-id="1"      
                                loop      
                                nav     
                                margin={8}
                            >    
                                <div><img onClick={handleClickPicture} className="img" src= {'https://sodaq.com/wp-content/uploads/2019/11/SODAQ_WEBSHOP-min.jpg'}/></div>          
                                <div><img onClick={handleClickPicture}  className="img" src= {'https://cdn.webshopapp.com/shops/104792/files/298764174/500x500x2/image.jpg'}/></div>            
                                <div><img onClick={handleClickPicture}  className="img" src= {'https://sodaq.com/wp-content/uploads/2019/11/SODAQ_WEBSHOP-min.jpg'}/></div>         
                                <div><img onClick={handleClickPicture}  className="img" src= {'https://cdn.webshopapp.com/shops/104792/files/298764174/500x500x2/image.jpg'}/></div>                            
                            </OwlCarousel>
                        </a>
                    </div>
                    
                    <div className="info col-7">

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

                        <div className="add-to-card">
                            
                                <div className="quantity-input col-12">
                                    <i 
                                        className="fas fa-minus text-danger"
                                        onClick={() => setQuantity(prevQuantity => prevQuantity>1 ? prevQuantity-1 : 1)}
                                    ></i>
                                    <input 
                                        className="col-2 mx-3 text-center"
                                        type="text"
                                        name="quantity"
                                        value={quantity}
                                        onChange={handleTextChange}
                                        style={{
                                            outline: "none",
                                            border: "none"
                                        }}
                                    />
                                    <i 
                                        className="fas fa-plus text-danger"
                                        onClick={() => setQuantity(prevQuantity => prevQuantity+1)}
                                    ></i>
                                    
                                </div>
                                <Button className="col-3 m-4" href="#" variant="danger">Add to Card</Button>{' '}
                          
                        </div>
                    </div>
                </Row>
                
            </Container>
        </div>
        
    )
}

export default InsideProduct