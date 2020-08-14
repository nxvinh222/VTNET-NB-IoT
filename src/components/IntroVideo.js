import React from "react"; 
import { Container, ResponsiveEmbed, Card, Button } from "react-bootstrap"
import '../App.css';

function IntroVideo() {

    return (
        <Container> 
            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">Pricing</h1>
            <p class="lead">Watch the video to see how Internet of Things (IoT) could transform and revolutionise every business</p>
            </div>
            <Card >
                <Card.Body>
                    <ResponsiveEmbed aspectRatio="16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/watch?v=QSIPNhOiMoE" allowfullscreen></iframe>
                    </ResponsiveEmbed>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            
        </Container> 
    )
}

export default IntroVideo;