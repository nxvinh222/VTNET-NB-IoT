import React, { useState, useEffect } from "react"
import { Container, Row, CardDeck } from "react-bootstrap"
import PricingTableFeature from "./PricingTableFeature"
import 'styles/PricingTable.css'

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
            title: "Enuma Elish",
            titleIntro: "I will awaken the breath of the planet, for I walk with humanity.",
            price: 3000000,
            detailsList: ["Bee-compatible slot", "Built-in GPS, Arduino IDE programmable, Magnetometer", "Free Universal Tracker software", "Energy efficient", "Solar charge controller"],
            detailsText: "Enkidu (𒂗𒆠𒄭 EN.KI.DU10), was a legendary figure in ancient Mesopotamian mythology, wartime comrade and friend of king Gilgamesh. Their exploits were composed in Sumerian poems and in the Akkadian Epic of Gilgamesh, written during the 2nd millennium BC."
        },
        {
            title: "Luminosité Eternelle",
            titleIntro: "Oh flag of mine, protect our comrades",
            price: 3500000,
            detailsList: ["NB-IoT, LTE-M and 2G fallback enabled*", "Built-in GPS, Accelerometer, Magnetometer, Antenna", "Arduino IDE programmable", "Free Universal Tracker software", "Energy efficient"],
            detailsText: "Joan of Arc (French: Jeanne d'Arc[3][4] pronounced [ʒan daʁk]; c. 1412 – 30 May 1431),[5] nicknamed \"The Maid of Orléans\" (French: La Pucelle d'Orléans), is considered a heroine of France for her role during the Lancastrian phase of the Hundred Years' War, and was canonized as a Roman Catholic saint."
        }
    ])
    }, [])

    return (
        <div className="pricing-table">
            <Container>
                <div className="pricing-table-header">
                    <h2 className="mt-5 text-center">Pricing</h2>
                    <p className="lead text-center">Browse a range of development boards we offer to create and scale your own projects. Don’t worry – we hold the intellectual property so a production is always possible! Here we highlight a few popular boards, but a range of boards can be found on our store. We offer business discounts, check it out.</p>
                </div>
                

                <CardDeck className="pricing-table-detail">
                    <Row md={1} lg={3} >
                        <PricingTableFeature data={data[0]}/>
                        <PricingTableFeature data={data[1]}/>
                        <PricingTableFeature data={data[2]}/>
                    </Row>

                </CardDeck>
            </Container>
        </div>

    )
}

export default PricingTable
