import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'; 

// Images
import AboutBG from '../../assets/images/about-bg.png';

export default class AboutBanner extends Component {
    render() {
        return (
            <div className="about-banenr-mian relative">
                <img class="h-64 lg:h-full object-cover object-center w-full relative"  src={AboutBG} alt="img"/>

                <div className="about-inner absolute top-24">
                    <Row className="pl-5 pt-5 mt-3">
                        <Col lg="4" className="pl-5 ml-3">
                            <h3 className="about-banner-text text-gray-500 text-3xl lg:text-5xl text-left pt-52">
                                Moulding Rent...
                            </h3>
                            <p className="text-gray-500 text-lg lg:text-2xl text-left">
                                Our Ideaology is simple. We are here to shake up the renting market and provide a 
                                quality service to both landlords and tenants. Transparency is our foundation and we 
                                believe what we do can't be easily replicated.
                            </p>
                        </Col>
                        <Col lg="8"></Col>
                    </Row>
                    
                </div>
            </div>
        )
    }
}
