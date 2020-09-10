import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function NavBar() {
    return(
        <div className="navbar-top">
            <Navbar bg="light" expand="sm">
                <Navbar.Brand href="/">
                    <img
                        src={window.location.origin + '/viettel_logo.png'}
                        height="50vw"
                        className="d-inline-block align-top"
                        alt="Viettel logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="primary">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>              
        </div>
    )
}

export default NavBar