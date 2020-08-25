import React, { useState, useEffect } from "react"
import { Container, Row, CardDeck } from "react-bootstrap"
import PricingTableFeature from "./PricingTableFeature"

function PricingTable() {

    // Create data state
    const [data, setData] = useState([])

    // ComponentDidMount
    // Call API here
    useEffect(() => {
        setData([{
            title: "Fleur de Lis",
            titleIntro: "May the Royal Family's Lily be eternal",
            price: 1000000,
            detailsList: ["Bee-compatible slot", "M0+ processor", "Arduino IDE programmable", "Energy efficient", "Solar charge controller"],
            detailsText: "D'Éon was born at the Hôtel d'Uzès in Tonnerre, Burgundy, into a poor noble family. D'Éon's father, Louis d'Éon de Beaumont, was an attorney and director of the king's dominions, later mayor of Tonnerre and sub-delegate of the intendant of the généralité of Paris."
        },
        {
            title: "Fleur de Lis",
            titleIntro: "May the Royal Family's Lily be eternal",
            price: 1000000,
            detailsList: ["Bee-compatible slot", "M0+ processor", "Arduino IDE programmable", "Energy efficient", "Solar charge controller"],
            detailsText: "D'Éon was born at the Hôtel d'Uzès in Tonnerre, Burgundy, into a poor noble family. D'Éon's father, Louis d'Éon de Beaumont, was an attorney and director of the king's dominions, later mayor of Tonnerre and sub-delegate of the intendant of the généralité of Paris."
        },
        {
            title: "Fleur de Lis",
            titleIntro: "May the Royal Family's Lily be eternal",
            price: 1000000,
            detailsList: ["Bee-compatible slot", "M0+ processor", "Arduino IDE programmable", "Energy efficient", "Solar charge controller"],
            detailsText: "D'Éon was born at the Hôtel d'Uzès in Tonnerre, Burgundy, into a poor noble family. D'Éon's father, Louis d'Éon de Beaumont, was an attorney and director of the king's dominions, later mayor of Tonnerre and sub-delegate of the intendant of the généralité of Paris."
        }
    ])
    }, [])

    return (
        <Container>
            <h2 className="mt-5 text-center">Pricing</h2>
            <p className="lead text-center">Browse a range of development boards we offer to create and scale your own projects. Don’t worry – we hold the intellectual property so a production is always possible! Here we highlight a few popular boards, but a range of boards can be found on our store. We offer business discounts, check it out.</p>

            <CardDeck>
                <Row sm={1} lg={3}>
                    <PricingTableFeature data={data[0]}/>
                    <PricingTableFeature data={data[1]}/>
                    <PricingTableFeature data={data[2]}/>
                </Row>

            </CardDeck>
        </Container>
    )
}

export default PricingTable
