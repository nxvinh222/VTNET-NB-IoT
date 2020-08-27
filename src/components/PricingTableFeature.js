import React, { useEffect, useState } from "react"
import { Card, Button, Col } from "react-bootstrap"

function PricingTableFeature(props) {

    return (
        props.data ? (
            <Col className="price-table-column">
                <Card className="border-0 text-center">
                    {/* Title */}
                    <div className="price-table-title">
                        <Card.Body className="text-light bg-dark" style={{minHeight: "110px"}}>
                            <div className="mx-2">
                                <Card.Title>{props.data.title}</Card.Title>
                                <Card.Text style={{ fontSize: "0.7em" }}>{props.data.titleIntro}</Card.Text>
                            </div>
                        </Card.Body>
                    </div>

                    {/* Body */}
                    <div className="price-table-body">
                        <Card.Body>
                            {/* Price */}
                            <Card.Text className="mb-0" style={{ color: "#b7b4b4", fontSize: "19px" }}>
                                Starting at
                            </Card.Text>
                            <Card.Title className="" style={{ fontSize: "35px" }}>{props.data.price.toLocaleString()}<sup>Đ</sup></Card.Title>
                            {/* Detail */}
                            
                            <ul className="price-table-features pl-0 px-2" style={{
                                listStyleType: "none",
                                color: "#777777"
                            }}>
                                <li className="my-3">
                                    <i className="far fa-check-circle mr-1"></i>
                                    <span>
                                        {props.data.detailsList[0]}
                                    </span>
                                </li>
                                <div className="price-detail-top-border px-2"></div>
                                <li className="my-3">
                                    <i className="far fa-check-circle mr-1"></i>
                                    <span>
                                        {props.data.detailsList[1]}
                                    </span>
                                </li>
                                <div className="price-detail-top-border"></div>
                                <li className="my-3">
                                    <i className="far fa-check-circle mr-1"></i>
                                    <span>
                                        {props.data.detailsList[2]}
                                </span>
                                </li>
                                <div className="price-detail-top-border"></div>
                                <li className="my-3">
                                    <i className="far fa-check-circle mr-1"></i>
                                    <span>
                                        {props.data.detailsList[3]}
                                </span>
                                </li>
                                <div className="price-detail-top-border"></div>
                                <li className="my-3">
                                    <i className="far fa-check-circle mr-1"></i>
                                    <span>
                                    {props.data.detailsList[4]}
                                </span>
                                </li>
                            </ul>

                            <Button className="my-3" href={window.location.href + '/1'} variant="danger">Get Started</Button>{' '}

                            <Card.Text className="mx-2 mt-3" style={{ color: "#707070", fontSize: "13px" }}>
                                {props.data.detailsText}
                            </Card.Text>
                        </Card.Body>
                    </div>
                    
                    <Card.Img variant="top" src="https://sodaq.com/wp-content/uploads/2019/11/SODAQ_WEBSHOP-min.jpg" />
                </Card>
            </Col>
        ) : null
    )

}

export default PricingTableFeature