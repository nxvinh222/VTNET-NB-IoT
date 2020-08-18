import React from "react"; 
import { Container, Card, Button, Col } from "react-bootstrap"
import '../App.css';

function IntroCard(props) {

    return (
        // <Col>
        <Col>
            <Card className="h-100 shadow p-3 mb-5 bg-white rounded">
                        <Card.Img variant="top" src="https://www.vodafone.com/business/media/image/1508863266699/640/651386824-h_800x400.jpg" />
                        <Card.Body>
                        <Card.Title>
                            {props.title}
                        </Card.Title>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
            </Card> 
        </Col>
        // </Col>

    )
}

export default IntroCard;