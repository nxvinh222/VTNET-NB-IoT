import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown, Button, Modal } from 'react-bootstrap'
import LoginPopup from 'components/LoginPopup'

function NavBar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    <div className="login-button md-text-right">
                        <Button variant="info"  onClick={handleShow}>
                            Login<i className="fas fa-user-plus ml-3"></i>
                        </Button>
                    </div>
                    <LoginPopup show={show} onHide={handleClose} />
                    {/* <Modal show={show} onHide={handleClose}>
                        <div class="modal-dialog">
                            <div class="modal-content"> 
                                <div class="modal-header text-center">
                                <h3 class="modal-title w-100 dark-grey-text font-weight-bold">Sign In</h3>
                                <button type="button" class="close" data-dismiss="modal" aria-lable="close">&times;</button>
                                </div>

                                <div class="modal-body mx-4">
                                <div class="md-form">
                                    <input type="email" class="form-control validate" />
                                    <label data-error="wrong" data-success="right">Your Email</label>
                                </div>

                                <div class="md-form">
                                    <input type="password" class="form-control validate" />
                                    <label data-error="wrong" data-success="right">Your Password</label>
                                    <p class="font-small blue-text d-flex justify-content-end">Forgot<a href="#" class="blue-text ml-1">Password?</a></p>
                                </div>

                                <div class="text-center mb-3">
                                    <button type="button" class="btn btn-primary btn-block z-depth-1a">Sign in</button>
                                </div>
                                <p class="font-small dark-grey-text d-flex justify-content-center">or sign in with:</p>

                                <div class="row my-3 justify-content-center">
                                    <button type="button" class="btn btn-primary z-depth-1a"><i class="fab fa-facebook-f text-center"></i></button>
                                    <button type="button" class="btn btn-purple z-depth-1a"><i class="fab fa-twitter text-center"></i></button>
                                    <button type="button" class="btn btn-red z-depth-1a"><i class="fab fa-google-plus-g text-center"></i></button>
                                </div>
                                </div>
                            </div>
                        </div> 
                    </Modal> */}
                </Navbar.Collapse>

            </Navbar>              
        </div>
    )
}

export default NavBar