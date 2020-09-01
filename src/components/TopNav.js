import React from "react"
import { Nav } from 'react-bootstrap'
import 'styles/TopNav.css'

function TovNav() {
    return (
        <div className="top-nav">
            <Nav id="top-nav" variant="tabs" defaultActiveKey="link-2" as="ul" className="bg-dark border-0">
                <Nav.Item as="li">
                    <Nav.Link disabled></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link className="top-nav-item" eventKey="link-1" href="http://viettel.com.vn">Viettel.com.vn</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link className="top-nav-item" eventKey="link-2">Viettel Business</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>

    )
}

export default TovNav;