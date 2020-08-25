import React, { } from "react";
import { Card, Col } from "react-bootstrap"

function IntroCard(props) {
    return (
        <Col className="mb-5">
            <a href={props.href} style={{ textDecoration: "none", color: "black" }}>
                <Card
                    className="h-100 shadow p-1 bg-white rounded"
                >
                    <Card.Img
                        id="card-img-top"
                        variant="top"
                        src={props.picture}
                    />
                    <Card.Body>
                        <Card.Title>
                            {props.title}
                        </Card.Title>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer>
                   <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer> */}
                </Card>
            </a>
        </Col>
    )
}

export default IntroCard;