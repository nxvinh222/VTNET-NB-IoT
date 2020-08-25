import React from "react"
import { Container, Row, CardDeck } from "react-bootstrap"
import PricingTableFeature from "./PricingTableFeature"

function PricingTable() {
    return (
        <Container>
            <h2 className="mt-5 text-center">Pricing</h2>
            <p className="lead text-center">Browse a range of development boards we offer to create and scale your own projects. Don’t worry – we hold the intellectual property so a production is always possible! Here we highlight a few popular boards, but a range of boards can be found on our store. We offer business discounts, check it out.</p>

            <CardDeck>
                <Row sm={1} lg={3}>
                    <PricingTableFeature />
                    <PricingTableFeature />
                    <PricingTableFeature />
                </Row>

            </CardDeck>
        </Container>
    )
}

export default PricingTable
