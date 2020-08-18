import React, { useState, useEffect } from "react"; 
import { Container, CardDeck, Row } from "react-bootstrap"
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
                text: " NB-IoT is the ideal connectivity solution if you need long-life batteries and a compact form factor. It’s especially good for applications that generate low data traffic or are deployed across wide geographic areas.",
                picture: "https://www.vodafone.com/business/media/image/1508863266699/640/651386824-h_800x400.jpg"
            },
            {
                title: "Viettel Business",
                text: "test",
                picture: "https://www.vodafone.com/business/media/image/1508875472122/640/shutterstock_1131955979_f_800x400.jpg"
            },
            {
                title: "Narrowband-IoT",
                text: " NB-IoT is the ideal connectivity solution if you need long-life batteries and a compact form factor. It’s especially good for applications that generate low data traffic or are deployed across wide geographic areas.",
                picture: "https://www.vodafone.com/business/media/image/1508863266699/640/651386824-h_800x400.jpg"
            },
            {
                title: "Viettel Business",
                text: "test",
                picture: "https://www.vodafone.com/business/media/image/1508875472122/640/shutterstock_1131955979_f_800x400.jpg"
            },
            {
                title: "Narrowband-IoT",
                text: " NB-IoT is the ideal connectivity solution if you need long-life batteries and a compact form factor. It’s especially good for applications that generate low data traffic or are deployed across wide geographic areas.",
                picture: "https://www.vodafone.com/business/media/image/1508863266699/640/651386824-h_800x400.jpg"
            },
            {
                title: "Viettel Business",
                text: "test",
                picture: "https://www.vodafone.com/business/media/image/1508875472122/640/shutterstock_1131955979_f_800x400.jpg"
            }
        ])

    }, []);

    const allCard = data.map(cardInfo => (
        <IntroCard title={cardInfo.title} text={cardInfo.text} picture={cardInfo.picture}/>
    ))

    return (
        <Container> 
            
                {/* px-3 py-3 pt-md-5 pb-md-4 mx-auto */}
                <h2 class="video-header py-3 pt-lg-5 pb-lg-4 text-center"></h2>
                <CardDeck>
                    <Row xs={1} md={2} lg={3}>
                        {allCard}
                    </Row>
                </CardDeck>
            
        </Container> 
    )
}

export default IntroCards;