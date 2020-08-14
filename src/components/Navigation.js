import React, { Component, useState } from "react"; 
import { Container, Nav, Card, Button } from "react-bootstrap"
import '../App.css';

function Navigation() {

    const card_1 = {
        title: "Choosing the right IoT solutions for your business",
        text: " Whatever industry you’re in, IoT technology has the power to transform your business. It can improve employee efficiency, help deliver better customer experiences and give you unprecedented visibility of your supply chain, assets and operations.\n \
        That’s why it’s so important that you make the right choices. Selecting the wrong components, picking the wrong software or choosing the wrong network technology can make your IoT projects less likely to be successful, more expensive and harder to manage and sale.\n \
        That’s why choosing an experienced partner is so important. At Vodafone, our mission is to help you simplify IoT. We offer a wide range of high-quality, end-to-end solutions to meet your specific requirements. With our expertise at your side, you can rest assured that every element of your project will run smoothly from start to finish. And, of course, you can count on our reliable and secure global network to deliver the best results."
    }

    const card_2 = {
        title: "IoT is transforming industries everywhere2",
        text: "Whatever industry you’re in, the potential benefits of IoT are immense. Leverage our expertise and experience in your sector to accelerate and de-risk your IoT initiatives."
    }

    const card_3 = {
        title: "",
        text: "Ready to embark on your IoT journey? You’ve come to the right place."
    }

    const card_4 = {
        title: "",
        text: "Choosing the right IoT platform is vital to the success of your IoT initiatives."
    }

    const [navContent, setNavContent] = useState({
        title: "Choosing the right IoT solutions for your business",
        text: " Whatever industry you’re in, IoT technology has the power to transform your business. It can improve employee efficiency, help deliver better customer experiences and give you unprecedented visibility of your supply chain, assets and operations.\n \
        That’s why it’s so important that you make the right choices. Selecting the wrong components, picking the wrong software or choosing the wrong network technology can make your IoT projects less likely to be successful, more expensive and harder to manage and sale.\n \
        That’s why choosing an experienced partner is so important. At Vodafone, our mission is to help you simplify IoT. We offer a wide range of high-quality, end-to-end solutions to meet your specific requirements. With our expertise at your side, you can rest assured that every element of your project will run smoothly from start to finish. And, of course, you can count on our reliable and secure global network to deliver the best results."
    })



    // onclick = 

    return (
        <Container className="ml-auto mt-2 mt-lg-0"> 
            <h2 style={{
                textAlign: "center",
                fontSize: "font-size:8vw",
                }}>See how we’re transforming lives and businesses</h2>
            <Card >
                <Card.Header>
                    <Nav 
                        variant="pills" 
                        defaultActiveKey="#first"
                        className="justify-content-center"
                     >
                        <Nav.Item>
                            <Nav.Link className="infoLink" eventKey="card_1" href="#first" onSelect={(selectedKey) => setNavContent(card_1)} >IoT Solution</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="infoLink" eventKey="card_2" href="#second" onSelect={(selectedKey) => setNavContent(card_2)}>Industries</Nav.Link>
                        </Nav.Item>     
                        <Nav.Item>
                            <Nav.Link className="infoLink" eventKey="card_3" href="#third" onSelect={(selectedKey) => setNavContent(card_3)}>Why Viettel</Nav.Link>
                        </Nav.Item> 
                        <Nav.Item>
                            <Nav.Link className="infoLink" eventKey="card_4" href="#forth" onSelect={(selectedKey) => setNavContent(card_4)}>IoT platform</Nav.Link>
                        </Nav.Item> 
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{navContent.title}</Card.Title>
                    <Card.Text>
                        {navContent.text}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    
                </Card.Body>
                
            </Card>
        </Container> 
    )
}

export default Navigation;