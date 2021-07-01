import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'; 
import Line from '../../assets/images/line.png';
import Step1 from '../../assets/images/Rental-2.png';
import Step2 from '../../assets/images/Rental-3.png';
import Step3 from '../../assets/images/Rental-4.png';


export default class LandLordSteps extends Component {
    render() {
        return (
            <div className="acc-step-main pt-5">
                <Container>
                    {/* step1 */}
                    <Row className="step-row pt-5">
                        
                        <Col lg={{span:6, order:1}} sm={{span:12, order:2}}  xs={{span:12, order:2}} className="d-flex justify-content-center">
                            <div className="step-inner">
                                <ul className="">
                                    <li>
                                        <h4 className="text-gray font-light lg:text-5xl md:text-3xl"> </h4>
                                    </li>
                                    <li>
                                        <img className="md:h-30 " src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3 className="text-gray font-light text-5xl lg:text-5xl md:text-3xl">Monthly <br/>Payments</h3>
                                    </li>
                                </ul>
                                <p className="text-right text-gray font-light lg:text-2xl md:text-xl lg:pr-5 ">Sign up with us. have all your questions<br/> 
                                from A-Z answered. Then proceed to<br/> 
                                input your details.</p>
                            </div>
                        </Col>
                        <Col lg={{span:6, order: 1}}  sm={{span:12, order:1}}  xs={{span:12, order:1}}  className="d-flex justify-content-center md:h-50">
                            <img className="" src={Step1} alt="step1"/>
                        </Col>
                        {/* <div className="bg-line">
                            
                        </div> */}
                        {/* <img className="bg-line" src={LineBG}  alt="img"/> */}
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
                                        <h4 className="text-gray font-light lg:text-5xl md:text-3xl">02 </h4>
                                    </li>
                                    <li>
                                        <img src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3 className="text-gray font-light text-5xl lg:text-5xl md:text-3xl">Sign <br/> Paperwork</h3>
                                    </li>
                                </ul>
                                <p className="text-right text-gray font-light lg:text-2xl md:text-xl lg:pr-5 ">
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
                        <Col lg={{span:6, order:1}} sm="6" xs={{span:12, order:2}} className="d-flex justify-content-center">
                            <div className="step-inner">
                                <ul>
                                    <li>
                                        <h4 className="text-gray font-light lg:text-5xl md:text-3xl">03 </h4>
                                    </li>
                                    <li>
                                        <img src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3 className="text-gray font-light text-5xl lg:text-5xl md:text-3xl">  Check-in</h3>
                                    </li>
                                </ul>
                                <p className="text-right text-gray font-light lg:text-2xl md:text-xl lg:pr-5 ">
                                    There's an App for everything these days.<br/> 
                                    Why would class app to check in tenants and<br/> 
                                    ensure that they are ready for handover. 
                                </p>
                            </div>
                        </Col>
                        <Col lg={{span:6, order:2}}  sm="6"  xs={{span:12, order:1}}  className="d-flex justify-content-center md:h-50">
                            <img src={Step3} alt="step1"/>
                        </Col>
                    </Row>
                    {/* step3 */}

                    
                </Container>
            </div>
        )
    }
}
