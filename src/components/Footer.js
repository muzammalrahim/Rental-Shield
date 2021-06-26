import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import logo from '../assets/images/logo.svg'
import {Link} from 'react-router-dom'




export default class Footer extends Component {
    render() {
        return (
            <div className="footer-main px-5 mt-5">

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
                                        <img src={process.env.PUBLIC_URL + '/img/twit.svg'} alt="twitter"/>
                                    </li>
                                    <li className="pr-3">
                                        <img src={process.env.PUBLIC_URL + '/img/youtube.svg'} alt="youtube"/>
                                    </li>
                                    <li className="pr-3">
                                        <img src={process.env.PUBLIC_URL + '/img/in.svg'} alt="insta"/>
                                    </li>
                                    <li className="pr-3">
                                        <img src={process.env.PUBLIC_URL + '/img/fb.svg'} alt="fb"/>
                                    </li>
                                    <li>
                                        <img src={process.env.PUBLIC_URL + '/img/ins.svg'} alt="insta"/>
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
                            <ul className="text-left">
                                <li>
                                    <Link href="tel:123-456-7890" className="text-base">123-456-7890 </Link>
                                </li>
                                <li>
                                    <Link>info@depositshield.com</Link>
                                </li>
                                <li>Adu Dhabi Global Markets
                                    <br></br> Al Maryah Island 
                                    <br></br>bu Dhabi, U.A.E.</li>
                            </ul>
                        </Col>
                        <Col md="1 text-left pl-0">
                            <h4 className="text-gray-500 text-base">About us</h4>
                            <ul>
                                <li className="text-sm">Our team</li>
                                <li className="text-sm">Adjucicatiors</li>
                                <li className="text-sm"> Careers</li>
                                <li className="text-sm">Contact us</li>
                                <li className="text-sm">Investors</li>
                                <li className="text-sm">CSR </li>
                                <li className="text-sm">FAQ's</li>
                            </ul>
                        </Col>
                        <Col md="1 text-left p-0">
                            <h4 className="text-gray-500 text-base">I'm a Landlord</h4>
                            <ul>
                                <li className="text-sm">Landlords</li>
                                <li className="text-sm">Agents</li>
                                <li className="text-sm"> Ternats</li>
                                <li className="text-sm">More</li>
                            </ul>
                        </Col>
                        <Col md="1 text-left pr-0">
                            <h4 className="text-gray-500 text-base">About us</h4>
                            <ul>
                                <li className="text-sm">Our team</li>
                                <li className="text-sm">adjucicatiors</li>
                                <li className="text-sm"> Careers</li>
                                <li className="text-sm">Contact us</li>
                                <li className="text-sm">Investors</li>
                                <li className="text-sm">CSR </li>
                                <li className="text-sm">FAQ's</li>
                            </ul>
                        </Col>
                        <Col md="1 text-left pr-0">
                            <h4 className="text-gray-500 text-base">Blog</h4>
                            <ul>
                                <li className="text-sm">Latest</li>
                                <li className="text-sm"> Important</li>
                            </ul>
                        </Col>
                        <Col md="1 text-left pr-0">
                            <h4 className="text-gray-500 text-base">Account</h4>
                            <ul>
                                <li className="text-sm">Manage Account</li>
                                <li className="text-sm">Settings</li>
                                <li className="text-sm"> Support</li>
                            </ul>
                        </Col>
                        <Col md="1 text-left pr-0">
                            <h4 className="text-gray-500 text-base">Princing</h4>
                            <ul>
                                <li className="text-sm">Privacy Policy</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
