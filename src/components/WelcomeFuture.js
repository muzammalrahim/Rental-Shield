import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import FutureImg from '../assets/images/future1.png';



export default class WelcomeFuture extends Component {
    render() {
        return (
            <div className="future-mian px-5 mt-5">
                <Row className="px-5 future-row">
                    <Col sm="12" md="12" lg="6" className="img-area lg:text-right md:img-area">
                        <img className="text-right" src={FutureImg} alt="future-img"></img>
                    </Col>
                    <Col sm="12" md="12" lg="6" className="text-area lg:text-left md:text-center">
                        <h2 className="text-green text-xl font-normal mb-4 md:text-5xl lg:text-6xl ">Welcome to <span className="font-black">future</span></h2>
                        <p className="text-gray text-lg font-normal leading-7 mb-5 md:text-xl  lg:text-2xl ">We believe the key to aplying monthly rental
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
