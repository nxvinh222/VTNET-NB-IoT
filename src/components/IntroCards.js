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
                picture: "https://www.vodafone.com/business/media/image/1508863266699/640/651386824-h_800x400.jpg",
                href: "http://google.com"
            },
            {
                title: "Viettel Business",
                text: "For the place I shall reach one day, I will leave the step of my existence here! Bucephalus!",
                picture: "https://www.vodafone.com/business/media/image/1508875472122/640/shutterstock_1131955979_f_800x400.jpg",
                href: "http://google.com"
            },
            {
                title: "Narrowband-IoT",
                text: " NB-IoT is the ideal connectivity solution if you need long-life batteries and a compact form factor. It’s especially good for applications that generate low data traffic or are deployed across wide geographic areas.",
                picture: "https://www.vodafone.com/business/media/image/1508863266699/640/651386824-h_800x400.jpg",
                href: "http://google.com"
            },
            {
                title: "Viettel Business",
                text: "Born of Mother Earth, imbiber of the wind’s wisdom, fulfilled by the water of life. An armament of fire thou shall wield to drive away the demon known as disease. Thine own justice will be the guiding light to cleanse thy blood. Thou who embraces the name of the Holy Spirit Ruwach – thy name be Adamthe Primordial Man!",
                picture: "https://www.vodafone.com/business/media/image/1508875472122/640/shutterstock_1131955979_f_800x400.jpg",
                href: "http://google.com"
            },
            {
                title: "Narrowband-IoT",
                text: " NB-IoT is the ideal connectivity solution if you need long-life batteries and a compact form factor. It’s especially good for applications that generate low data traffic or are deployed across wide geographic areas.",
                picture: "https://www.vodafone.com/business/media/image/1508863266699/640/651386824-h_800x400.jpg",
                href: "http://google.com"
            },
            {
                title: "Viettel Business",
                text: "Three Wise Men of the East. The Great God of the Norse. The Fruit of Wisdom. My intellect, my omnipotence, surpasses all forms of wisdom! Uomo Universale!",
                picture: "https://www.vodafone.com/business/media/image/1508875472122/640/shutterstock_1131955979_f_800x400.jpg",
                href: "http://google.com"
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