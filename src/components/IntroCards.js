import React, { useState, useEffect } from "react";
import { Container, CardDeck, Row } from "react-bootstrap"
import IntroCard from "components/IntroCard"

// Pseudo Data import  
import IntroCardsData from 'PseudoData/IntroCardsData'


function IntroCards() {

    // Create data state
    const [data, setData] = useState([])

    // ComponentDidMount
    // Call API here
    useEffect(() => {
        // Update the document title using the browser API
        setData(IntroCardsData)

    }, []);

    const allCard = data.map((cardInfo, i) => (
        <IntroCard title={cardInfo.title} text={cardInfo.text} picture={cardInfo.picture} href={cardInfo.href} key={i} />
    ))

    return (
        <Container>
            <h3 className="col-sm-10 pt-5 mt-3 pb-0 mb-0 mx-auto text-center" id="card-info-header">Explore our additional resources for greater insight</h3>
            {/* px-3 py-3 pt-md-5 pb-md-4 mx-auto */}
            <h2 className="video-header py-3 pt-lg-5 pb-lg-4 text-center"> </h2>
            <CardDeck>
                <Row xs={1} md={2} lg={3}>
                    {allCard}
                </Row>
            </CardDeck>
        </Container>
    )
}

export default IntroCards;