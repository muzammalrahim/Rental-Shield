import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'; 
import Line from '../assets/images/line.png';
import Step1 from '../assets/images/step-11.png';
import Step2 from '../assets/images/step-22.png';
import Step3 from '../assets/images/step-33.png';
import Step4 from '../assets/images/step-44.png';
import Step5 from '../assets/images/step-55.png';
import Step6 from '../assets/images/step-66.png';

export default class AccSteps extends Component {
    render() {
        return (
            <div className="acc-step-main">
                <Container>
                    {/* step1 */}
                    <Row className="step-row ">
                        <Col sm="6" className="d-flex justify-content-center">
                            <div className="step-inner">
                                <ul>
                                    <li>
                                        <h4>01 </h4>
                                    </li>
                                    <li>
                                        <img src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3>Create an<br/> account</h3>
                                    </li>
                                </ul>
                                <p className="text-right">Sign up with us. have all your questions<br/> 
                                from A-Z answered. Then proceed to<br/> 
                                input your details.</p>
                            </div>
                        </Col>
                        <Col sm="6" className="d-flex justify-content-center">
                            <img src={Step1} alt="step1"/>
                        </Col>
                    </Row>
                    {/* step1 */}

                    {/* step2 */}
                    <Row className="step-row ">
                        <Col sm="6" className="d-flex justify-content-center">
                            <img src={Step2} alt="step1"/>
                        </Col>
                        <Col sm="6" className="d-flex justify-content-center">
                            <div className="step-inner">
                                <ul>
                                    <li>
                                        <h4>02 </h4>
                                    </li>
                                    <li>
                                        <img src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3>Sign <br/> Paperwork</h3>
                                    </li>
                                </ul>
                                <p className="text-right">
                                In order to protect both the tenants and the<br/> 
                                landlords interests, it is imperative that you both<br/> 
                                sign and agree to our online terms and<br/> 
                                conditions.
                                </p>
                            </div>
                        </Col>
                        
                    </Row>
                    {/* step2 */}


                    {/* step3 */}
                    <Row className="step-row ">
                        <Col sm="6" className="d-flex justify-content-center">
                            <div className="step-inner">
                                <ul>
                                    <li>
                                        <h4>03 </h4>
                                    </li>
                                    <li>
                                        <img src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3>Check-in</h3>
                                    </li>
                                </ul>
                                <p className="text-right">
                                    There's an App for everything these days.<br/> 
                                    Why would class app to check in tenants and<br/> 
                                    ensure that they are ready for handover. 
                                </p>
                            </div>
                        </Col>
                        <Col sm="6" className="d-flex justify-content-center">
                            <img src={Step3} alt="step1"/>
                        </Col>
                    </Row>
                    {/* step3 */}

                    {/* step4 */}
                    <Row className="step-row ">
                        <Col sm="6" className="d-flex justify-content-center">
                            <img src={Step4} alt="step1"/>
                        </Col>
                        <Col sm="6" className="d-flex justify-content-center">
                            <div className="step-inner">
                                <ul>
                                    <li>
                                        <h4>04 </h4>
                                    </li>
                                    <li>
                                        <img src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3>Peace of Mind</h3>
                                    </li>
                                </ul>
                                <p className="text-right">
                                Can I add any holes in the walls? What if I damage something?<br/>
                                Rent Hassle free when you go through our simple documents helping<br/> 
                                both tenants and landlords understand what are their options.
                                </p>
                            </div>
                        </Col>
                        
                    </Row>
                    {/* step4 */}

                    {/* step5 */}
                    <Row className="step-row ">
                        <Col sm="6" className="d-flex justify-content-center">
                            <div className="step-inner">
                                <ul>
                                    <li>
                                        <h4>05 </h4>
                                    </li>
                                    <li>
                                        <img src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3>Check-Out</h3>
                                    </li>
                                </ul>
                                <p className="text-right">
                                    This is whre we really come in.<br/>
                                    At this point both the landlords and tenants<br/> 
                                    will be very glad they choose our service.
                                </p>
                            </div>
                        </Col>
                        <Col sm="6" className="d-flex justify-content-center">
                            <img src={Step5} alt="step1"/>
                        </Col>
                    </Row>
                    {/* step5 */}

                    {/* step6 */}
                    <Row className="step-row ">
                        <Col sm="6" className="d-flex justify-content-center">
                            <img src={Step6} alt="step1"/>
                        </Col>
                        <Col sm="6" className="d-flex justify-content-center">
                            <div className="step-inner">
                                <ul>
                                    <li>
                                        <h4>06 </h4>
                                    </li>
                                    <li>
                                        <img src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3>Receive vour <br/> deposit back</h3>
                                    </li>
                                </ul>
                                <p className="text-right">
                                    Even if you have left the country
                                </p>
                            </div>
                        </Col>
                        
                    </Row>
                    {/* step6 */}
                </Container>
            </div>
        )
    }
}
