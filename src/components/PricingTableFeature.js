import React, { useEffect, useState } from "react"
import { Card, Button, Col } from "react-bootstrap"

function PricingTableFeature(props) {

    return (
        props.data ? (
            <Col>
                <Card className="border-0 text-center">
                    {/* Title */}
                    <Card.Body className="text-light bg-dark" style={{minHeight: "110px"}}>
                        <div className="ml-5 mr-5">
                            <Card.Title>{props.data.title}</Card.Title>
                            <Card.Text style={{ fontSize: "0.7em" }}>{props.data.titleIntro}</Card.Text>
                        </div>

                    </Card.Body>
                    {/* Body */}
                    <Card.Body>
                        {/* Price */}
                        <Card.Text className="mb-0" style={{ color: "#b7b4b4", fontSize: "19px" }}>
                            Starting at
                        </Card.Text>
                        <Card.Title className="" style={{ fontSize: "35px" }}>{props.data.price.toLocaleString()}<sup>Đ</sup></Card.Title>
                        {/* Detail */}
                        

                        <ul className="price-table-features pl-0 ml-5 mr-5" style={{
                            listStyleType: "none",
                            color: "#777777"
                        }}>
                            <li className="mt-2 mb-2">
                                <i className="far fa-check-circle mr-1"></i>
                                <span>
                                    {props.data.detailsList[0]}
                                </span>
                            </li>
                            <div className="price-detail-top-border"></div>
                            <li className="mt-2 mb-2">
                                <i className="far fa-check-circle mr-1"></i>
                                <span>
                                    {props.data.detailsList[1]}
                                </span>
                            </li>
                            <div className="price-detail-top-border"></div>
                            <li className="mt-2 mb-2">
                                <i className="far fa-check-circle mr-1"></i>
                                <span>
                                    {props.data.detailsList[2]}
                            </span>
                            </li>
                            <div className="price-detail-top-border"></div>
                            <li className="mt-2 mb-2">
                                <i className="far fa-check-circle mr-1"></i>
                                <span>
                                    {props.data.detailsList[3]}
                            </span>
                            </li>
                            <div className="price-detail-top-border"></div>
                            <li className="mt-2 mb-2">
                                <i className="far fa-check-circle mr-1"></i>
                                <span>
                                {props.data.detailsList[4]}
                            </span>
                            </li>
                        </ul>

                        <Button variant="primary">Get Started</Button>{' '}

                        <Card.Text className="ml-5 mr-5 mt-3" style={{ color: "#707070", fontSize: "13px" }}>
                            {props.data.detailsText}
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="top" src="https://sodaq.com/wp-content/uploads/2019/11/SODAQ_WEBSHOP-min.jpg" />
                </Card>
            </Col>
        ) : null
    )

}

export default PricingTableFeature