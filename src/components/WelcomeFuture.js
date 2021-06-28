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
                        <h2 className="text-green text-6xl font-normal mb-4">Welcome to <span className="font-black">future</span></h2>
                        <p className="text-gray text-2xl font-normal leading-7 mb-5">We believe the key to aplying monthly rental
                        <br/> 
                        payments, lies with the management of the 
                        <br/>
                        security rental deposits</p>
                        <button className="bg-green rounded-full px-4 py-1.5 text-xl text-white font-bold">See more</button>
                    </Col>
                </Row>
            </div>
        )
    }
}
