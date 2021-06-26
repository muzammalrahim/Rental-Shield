import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import FutureImg from '../assets/images/future1.png';



export default class WelcomeFuture extends Component {
    render() {
        return (
            <div className="future-mian px-5">
                <Row className="px-5 future-row">
                    <Col sm="12" md="6" className="img-area">
                        <img src={FutureImg} alt="future-img"></img>
                    </Col>
                    <Col sm="12" md="6" className="text-area text-left">
                        <h2>Welcome to <span>future</span></h2>
                        <p>We believe the key to aplying monthly rental payments, 
                            lies with the management of the security rental deposits</p>
                        <button>See more</button>
                    </Col>
                </Row>
            </div>
        )
    }
}
