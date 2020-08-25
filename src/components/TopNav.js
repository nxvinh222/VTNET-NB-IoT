import React from "react"
import { Nav } from 'react-bootstrap'

function TovNav() {
    return(
        <Nav id="top-nav" variant="tabs" defaultActiveKey="link-2" as="ul" className="bg-dark border-0">
            <Nav.Item as="li">
                <Nav.Link disabled></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link className="top-nav-item" eventKey="link-1">Viettel.com.vn</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link className="top-nav-item" eventKey="link-2">Viettel Business</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default TovNav;