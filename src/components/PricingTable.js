import React from "react"
import { Container, Row, CardDeck, Card } from "react-bootstrap"

function PricingTable() {
    return (
        <Container>
            <h2 className="mt-5 text-center">Pricing</h2>
            <p className="lead text-center">Browse a range of development boards we offer to create and scale your own projects. Don’t worry – we hold the intellectual property so a production is always possible! Here we highlight a few popular boards, but a range of boards can be found on our store. We offer business discounts, check it out.</p>

            <CardDeck>
                <Row sm={1} lg={3}>

                    {/* First Item */}
                    <Card className="border-0 text-center">
                        {/* Title */}
                        <Card.Body className="text-light bg-dark">
                            <Card.Title className="">Fleur de Lis</Card.Title>
                            <Card.Text style={{fontSize : "0.8em"}}>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        {/* Body */}
                        <Card.Body>
                            {/* Price */}
                            <Card.Text className="mb-0" style={{color: "#b7b4b4", fontSize: "19px"}}>
                                Starting at
                            </Card.Text>
                            <Card.Title className="" style={{fontSize: "35px"}}>1.000.000<sup>Đ</sup></Card.Title>
                            {/* Detail */}
                            <Card.Text style={{color: "#707070"}}>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src="https://sodaq.com/wp-content/uploads/2019/11/SODAQ_WEBSHOP-min.jpg" />
                    </Card>

                    {/* Second Item */}
                    <Card className="border-0 text-center">
                        {/* Title */}
                        <Card.Body className="text-light bg-dark">
                            <Card.Title>Phoebus Catastrophe</Card.Title>
                            <Card.Text style={{fontSize : "0.8em"}}>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        {/* Body */}
                        <Card.Body>
                            {/* Price */}
                            <Card.Text className="mb-0" style={{color: "#b7b4b4", fontSize: "19px"}}>
                                Starting at
                            </Card.Text>
                            <Card.Title className="" style={{fontSize: "35px"}}>3.000.000<sup>Đ</sup></Card.Title>
                            {/* Detail */}
                            <Card.Text style={{color: "#707070"}}>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src="https://sodaq.com/wp-content/uploads/2019/11/SODAQ_WEBSHOP-min.jpg" />
                    </Card>

                    {/* Third Item */}
                    <Card className="border-0 text-center">
                        {/* Title */}
                        <Card.Body className="text-light bg-dark">
                            <Card.Title>Luminosite Eternelle</Card.Title>
                            <Card.Text style={{fontSize : "0.8em"}}>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        {/* Body */}
                        <Card.Body>
                            {/* Price */}
                            <Card.Text className="mb-0" style={{color: "#b7b4b4", fontSize: "19px"}}>
                                Starting at
                            </Card.Text>
                            <Card.Title className="" style={{fontSize: "35px"}}>3.500.000<sup>Đ</sup></Card.Title>
                            {/* Detail */}
                            <Card.Text style={{color: "#707070"}}>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src="https://sodaq.com/wp-content/uploads/2019/11/SODAQ_WEBSHOP-min.jpg" />
                    </Card>

                </Row>

            </CardDeck>
        </Container>
    )
}

export default PricingTable

{/* <div className="p-3 text-center">
                        <div className="p-3 bg-dark" style={{color: "white"}}>
                            <h3 className="mb-0">
                                Rare One
                            </h3>
                            <span>
                                Affordable IoT device with optional network
                            </span>
                        </div>

                        <div>
                            <span>
                                
                            </span>
                            <span>
                                €99
                            </span>
                        </div>

                    </div>

                    <div className="p-3 text-center">
                        <div className="p-3 bg-dark" style={{color: "white"}}>
                            <h3 className="mb-0">
                                Ultra Rare One
                            </h3> 
                            <span>
                                Choose between EU/ASIA versions
                            </span>
                        </div>
                    </div>

                    <div className="p-3 text-center">
                        <div className="p-3 bg-dark" style={{color: "white"}}>
                            <h3 className="mb-0">
                                Legendary One
                            </h3>
                            <span>
                                Choose between NB-IoT and LTE-M
                            </span>                       
                        </div>
                    </div> */}