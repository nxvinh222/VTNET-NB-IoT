import React from "react"
import { Card, Button } from "react-bootstrap"

function PricingTableFeature(props) {

    return (

        <Card className="border-0 text-center">
            {/* Title */}
            <Card.Body className="text-light bg-dark">
                <div className="ml-5 mr-5">
                    <Card.Title style={{ fontSize: "1.7em" }}>Fleur de Lis</Card.Title>
                    <Card.Text style={{ fontSize: "0.7em" }}>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </div>

            </Card.Body>
            {/* Body */}
            <Card.Body>
                {/* Price */}
                <Card.Text className="mb-0" style={{ color: "#b7b4b4", fontSize: "19px" }}>
                    Starting at
                </Card.Text>
                <Card.Title className="" style={{ fontSize: "35px" }}>1.000.000<sup>Đ</sup></Card.Title>
                {/* Detail */}

                <ul className="pl-0 ml-5 mr-5" style={{
                    listStyleType: "none",
                    color: "#777777"
                }}>
                    <li className="mt-2 mb-2">
                        <i className="far fa-check-circle mr-1"></i>
                        <span>
                            Bee-compatible slot
                    </span>
                    </li>
                    <div className="price-detail-top-border"></div>
                    <li className="mt-2 mb-2">
                        <i className="far fa-check-circle mr-1"></i>
                        <span>
                            M0+ processor
                    </span>
                    </li>
                    <div className="price-detail-top-border"></div>
                    <li className="mt-2 mb-2">
                        <i className="far fa-check-circle mr-1"></i>
                        <span>
                            Arduino IDE programmable
                    </span>
                    </li>
                    <div className="price-detail-top-border"></div>
                    <li className="mt-2 mb-2">
                        <i className="far fa-check-circle mr-1"></i>
                        <span>
                            Energy efficient
                    </span>
                    </li>
                    <div className="price-detail-top-border"></div>
                    <li className="mt-2 mb-2">
                        <i className="far fa-check-circle mr-1"></i>
                        <span>
                            Energy efficient
                    </span>
                    </li>
                </ul>

                <Button variant="primary">Get Started</Button>{' '}

                <Card.Text className="ml-5 mr-5 mt-3" style={{ color: "#707070", fontSize: "13px" }}>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src="https://sodaq.com/wp-content/uploads/2019/11/SODAQ_WEBSHOP-min.jpg" />
        </Card>
    )

}

export default PricingTableFeature