import React from "react"; 
import { Container, ResponsiveEmbed, Card, Button, Row } from "react-bootstrap"

function IntroVideo() {

    return (
        <Container> 
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Pricing</h1>
                <p className="lead">Watch the video to see how Internet of Things (IoT) could transform and revolutionise every business</p>
            </div>


                <Card className="col-lg-9 mx-auto shadow bg-white rounded">
                    <Card.Body className="p-0">
                        <Row className="">
                            <ResponsiveEmbed className='col-md-8' aspectRatio="16by9">
                                <iframe title="introVideo" src="https://www.youtube.com/embed/392676Cbv28" style={{height: "100%"}} allowFullScreen></iframe>
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