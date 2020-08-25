import React from "react"
import { Container, Row, CardDeck, Card } from "react-bootstrap"

function PricingTable() {
    return (
        <Container>
            <CardDeck>
                <Row sm={1} lg={3}>

                    <Card className="border-0">
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                    </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src="https://sodaq.com/wp-content/uploads/2019/11/SODAQ_WEBSHOP-min.jpg" />

                    </Card>

                    <Card className="border-0">

                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                    </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src="https://sodaq.com/wp-content/uploads/2019/11/SODAQ_WEBSHOP-min.jpg" />
                    </Card>

                    <Card className="border-0">
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
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