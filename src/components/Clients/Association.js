import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

export default class Association extends Component {
    render() {
        return (
            <div className="client-t-main px-5">
                <Row className="client-row">
                    <Col sm="12" md="12" lg="2">
                        <p className="text-lg font-body text-gray font-normal">Association With</p>
                    </Col>
                    <Col sm="12" md="12" lg="10">
                        <div className="clients text-center">
                            <ul className="md:flex-shrink-0 grid grid-cols-5">
                                <li >
                                    <img className="md:h-full md:w-48" src={process.env.PUBLIC_URL + '/img/c1.png'} alt="client"/>
                                </li>
                                <li>
                                    <img className="md:h-full md:w-48" src={process.env.PUBLIC_URL + '/img/c2.png'} alt="client"/>
                                </li>
                                <li>
                                    <img className="md:h-full md:w-48" src={process.env.PUBLIC_URL + '/img/c3.png'} alt="client"/>
                                </li>
                                <li>
                                    <img className="md:h-full md:w-48" src={process.env.PUBLIC_URL + '/img/c4.png'} alt="client"/>
                                </li>
                                <li>
                                    <img className="md:h-full md:w-48" src={process.env.PUBLIC_URL + '/img/c5.png'} alt="client"/>
                                </li>
                            </ul>
                        </div>
                        
                    </Col>
                </Row>
            </div>
        )
    }
}
