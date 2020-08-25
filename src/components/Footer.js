import React from "react";
// import { Container } from "react-bootstrap"

function Footer() {

    return (
        <footer className="pt-4 pt-md-5 bg-dark" style={{ color: "white" }}>
            <div className="container row">
                <div className="col-12 col-md">
                    <img className="mb-2" src={window.location.origin + '/Logo_Viettel.svg'} alt="" width="24" height="24" />
                    <small className="d-block mb-3 text-muted">&copy; 2001-2020</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="https://www.google.com/">Cool stuff</a></li>
                        <li><a className="text-muted" href="https://www.google.com/">Random feature</a></li>
                        <li><a className="text-muted" href="https://www.google.com/">Team feature</a></li>
                        <li><a className="text-muted" href="https://www.google.com/">Stuff for developers</a></li>
                        <li><a className="text-muted" href="https://www.google.com/">Another one</a></li>
                        <li><a className="text-muted" href="https://www.google.com/">Last time</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="https://www.google.com/">Resource</a></li>
                        <li><a className="text-muted" href="https://www.google.com/">Resource name</a></li>
                        <li><a className="text-muted" href="https://www.google.com/">Another resource</a></li>
                        <li><a className="text-muted" href="https://www.google.com/">Final resource</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="https://www.google.com/">Team</a></li>
                        <li><a className="text-muted" href="https://www.google.com/">Locations</a></li>
                        <li><a className="text-muted" href="https://www.google.com/">Privacy</a></li>
                        <li><a className="text-muted" href="https://www.google.com/">Terms</a></li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}

export default Footer;