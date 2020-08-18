import React, { useState, useEffect } from "react"; 
import { Container, CardDeck, Card, Button } from "react-bootstrap"
import IntroCard from "./IntroCard"
import '../App.css';



function IntroCards() {

    // state
    const [data, setData] = useState([])

    useEffect(() => {
        // Update the document title using the browser API
        setData([
            {
                title: "Narrowband-IoT",
                text: " NB-IoT is the ideal connectivity solution if you need long-life batteries and a compact form factor. It’s especially good for applications that generate low data traffic or are deployed across wide geographic areas."
            },
            {
                title: "Viettel Business",
                text: "test"
            },
            {
                title: "Viettel Business",
                text: "test"
            }
        ])

    }, []);

    const allCard = data.map(cardInfo => (
        <IntroCard title={cardInfo.title} text={cardInfo.text}/>
    ))

    return (
        <Container> 
            {/* px-3 py-3 pt-md-5 pb-md-4 mx-auto */}
            <h2 class="video-header py-3 pt-lg-5 pb-lg-4 text-center">See how we’re transforming lives and businesses</h2>
            <CardDeck>
                {allCard}
            </CardDeck>
        </Container> 
    )
}

export default IntroCards;