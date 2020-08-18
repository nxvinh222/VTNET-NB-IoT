import React from "react"; 
import { Container, ResponsiveEmbed, Card, Button, Row } from "react-bootstrap"
import '../App.css';

function IntroVideo() {

    return (
        <Container fluid> 
            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">Pricing</h1>
                <p class="lead">Watch the video to see how Internet of Things (IoT) could transform and revolutionise every business</p>
            </div>


                <Card className="col-lg-9 mx-auto p-3 shadow bg-white rounded">
                    <Card.Body>
                        <Row>
                            <ResponsiveEmbed className='col-md-8' aspectRatio="16by9">
                                <iframe  src="https://www.youtube.com/embed/tgbNymZ7vqY" allowfullscreen></iframe>
                            </ResponsiveEmbed>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <Card.Text  className='lead col-md-3 m-3'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                <br></br>
                                <br></br>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Text>
                            
                        </Row>
                    </Card.Body>
                </Card>

            
        </Container> 
    )
}

export default IntroVideo;