import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import logo from '../assets/images/logo.svg'




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
                                <ul className="list-none">
                                    <li>
                                        <img src={process.env.PUBLIC_URL + '/img/twit.svg'} />
                                    </li>
                                    <li>
                                        <img src={process.env.PUBLIC_URL + '/img/youtube.svg'} />
                                    </li>
                                    <li>
                                        <img src={process.env.PUBLIC_URL + '/img/in.svg'} />
                                    </li>
                                    <li>
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
            </div>
        )
    }
}
