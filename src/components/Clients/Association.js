import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

export default class Association extends Component {
    render() {
        return (
            <div className="client-t-main p-5">
                <Row className="client-row">
                    <Col sm="12" md="3">
                        <p>Association With</p>
                    </Col>
                    <Col sm="12" md="9">
                        <div className="clients">
                            <ul>
                                <li>
                                    <img src={process.env.PUBLIC_URL + '/img/c1.png'} alt="client"/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + '/img/c2.png'} alt="client"/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + '/img/c3.png'} alt="client"/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + '/img/c4.png'} alt="client"/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + '/img/c5.png'} alt="client"/>
                                </li>
                            </ul>
                        </div>
                        
                    </Col>
                </Row>
            </div>
        )
    }
}
