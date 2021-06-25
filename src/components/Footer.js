import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import logo from '../assets/images/logo.svg'
import {Link} from 'react-router-dom'




export default class Footer extends Component {
    render() {
        return (
            <div className="footer-main px-5">

                {/* footer logo + Social Links */}
                <div className="footer-top">
                    <Row>
                        <Col md="6" xs="12 text-center">
                            <img src={logo} alt="logo"/>
                        </Col>
                        <Col md="6" xs="12 text-center">
                            <div className="social-links">
                                <ul className="list-none float-right">
                                    <li className="pr-3">
                                        <img src={process.env.PUBLIC_URL + '/img/twit.svg'} />
                                    </li>
                                    <li className="pr-3">
                                        <img src={process.env.PUBLIC_URL + '/img/youtube.svg'} />
                                    </li>
                                    <li className="pr-3">
                                        <img src={process.env.PUBLIC_URL + '/img/in.svg'} />
                                    </li>
                                    <li className="pr-3">
                                        <img src={process.env.PUBLIC_URL + '/img/fb.svg'} />
                                    </li>
                                    <li>
                                        <img src={process.env.PUBLIC_URL + '/img/in.svg'} />
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                {/* footer logo + Social Links */}

                <hr></hr>

                <div className="footer-bottom">
                    <Row>
                        <Col md="6 text-left">
                            <ul>
                                <li>
                                    <p>123-456-7890 </p>
                                </li>
                                <li>
                                    <Link>info@depositshield.com</Link>
                                </li>
                                <li>Adu Dhabi Global Markets
                                    <br></br> Al Maryah Island 
                                    <br></br>bu Dhabi, U.A.E.</li>
                            </ul>
                        </Col>
                        <Col md="1">
                            <h4>About us</h4>
                            <ul>
                                <li>Our team</li>
                                <li>Adjucicatiors</li>
                                <li> Careers</li>
                                <li>Contact us</li>
                                <li>Investors</li>
                                <li>CSR </li>
                                <li>FAQ's</li>
                            </ul>
                        </Col>
                        <Col md="1">
                            <h4>I'm a Landlord</h4>
                            <ul>
                                <li>Landlords</li>
                                <li>Agents</li>
                                <li> Ternats</li>
                                <li>More</li>
                            </ul>
                        </Col>
                        <Col md="1">
                            <h4>About us</h4>
                            <ul>
                                <li>Our team</li>
                                <li>adjucicatiors</li>
                                <li> Careers</li>
                                <li>Contact us</li>
                                <li>Investors</li>
                                <li>CSR </li>
                                <li>FAQ's</li>
                            </ul>
                        </Col>
                        <Col md="1">
                            <h4>Blog</h4>
                            <ul>
                                <li>Latest</li>
                                <li> Important</li>
                            </ul>
                        </Col>
                        <Col md="1">
                            <h4>Account</h4>
                            <ul>
                                <li>Manage Account</li>
                                <li> Settings</li>
                                <li> Support</li>
                            </ul>
                        </Col>
                        <Col md="1">
                            <h4>Princing</h4>
                            <ul>
                                <li>Privacy Policy</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
