import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'; 
// import Line from '../../assets/images/line.png';
import Line2 from '../../assets/images/headng-line-2.png';
import Step1 from '../../assets/images/Rental-2.png';
import Step2 from '../../assets/images/Rental-3.png';
import Step3 from '../../assets/images/Rental-4.png';
import LineBG from '../../assets/images/line-bg.png';
import LineBG2 from '../../assets/images/bg-line2.png';



export default class LandLordSteps extends Component {
    render() {
        return (
            <div className="acc-step-main pt-5">
                <Container>
                    {/* step1 */}
                    <Row className="step-row relative pt-5 pb-28">
                        
                        <Col lg={{span:6, order:1}} sm={{span:12, order:2}}  xs={{span:12, order:2}} className="d-flex justify-content-center lg:order-1">
                            <div className="step-inner text-left">
                                <ul className="">
                                    <li>
                                        <h4 className="text-gray-500 font-body font-light lg:text-5xl md:text-3xl"> </h4>
                                    </li>
                                    
                                    <li>
                                        <h3 className="text-gray-500 leading-10 font-body font-light text-5xl lg:text-5xl md:text-3xl">Monthly <br/>Payments</h3>
                                    </li>

                                    <li>
                                        <img className="md:h-30 " src={Line2} alt="Line"/>
                                    </li>
                                </ul>
                                <p className="text-left leading-7 font-body text-gray-500 font-light lg:text-2xl md:text-xl lg:pr-5 ">
                                If you provide a safe and secure way of managing your tenant's rental deposits, 
                                then quite simply you can charge them a higher rate. 
                                </p>

                                <p className="text-left leading-7 font-body text-gray-500 font-light lg:text-2xl md:text-xl lg:pr-5 ">
                                    This is the foundation and essence of managing monthly payments and
                                     ensuring tenants follow their obligations to pay monthly. 
                                </p>

                                <p className="text-left leading-7 font-body text-gray-500 font-light lg:text-2xl md:text-xl lg:pr-5 ">
                                    Whilst you at the same time protect their right to rent worry-free, 
                                    this is a win/win situation for both parties.​
                                </p>
                            </div>
                        </Col>
                        <Col lg={{span:6, order: 2}}  sm={{span:12, order:1}}  xs={{span:12, order:1}}  className="d-flex justify-content-center md:h-50">
                            <img className="" src={Step1} alt="step1"/>
                        </Col>
                        {/* <div className="bg-line">
                            
                        </div> */}
                        <img className="bg-line5" src={LineBG}  alt="img"/>
                    </Row>
                    {/* step1 */}

                    {/* step2 */}
                    <Row className="step-row relative pb-28">
                        <Col sm="6" className="d-flex justify-content-center">
                            <img src={Step2} alt="step1"/>
                        </Col>
                        <Col sm="6" className="d-flex justify-content-center">
                            <div className="step-inner text-left">
                                <ul>
                                    <li>
                                        <h4 className="text-gray-500  font-light lg:text-5xl md:text-3xl"></h4>
                                    </li>
                                    
                                    <li>
                                        <h3 className="text-gray-500 leading-10 font-light text-5xl lg:text-5xl md:text-3xl">Furnish <br/> the Flats</h3>
                                    </li>
                                    <li>
                                        <img src={Line2} alt="Line"/>
                                    </li>
                                </ul>
                                <p className="text-left font-body pb-3 leading-7 text-gray-500 font-light lg:text-2xl md:text-xl lg:pr-5">
                                    ​Wouldn't you want to furnish your flats and attract better tenants? 
                                    Want to stand out in a crowded market? What better way then protecting 
                                    these assets you allow tenants to use. 
                                </p>
                                <p className="text-left font-body pb-3 leading-7 text-gray-500 font-light lg:text-2xl md:text-xl lg:pr-5">
                                     We have specialist teams who deal in furniture damages and can even
                                      advise you on best practices of how to provide tenants with a safe 
                                      and secure home at the right budget. 
                                </p>
                                <p className="text-left font-body leading-7 text-gray-500 font-light lg:text-2xl md:text-xl lg:pr-5">
                                    Again a total win/win situation for everyone. 
                                </p>
                            </div>
                        </Col>
                        <img className="bg-line6" src={LineBG2}  alt="img"/>
                    </Row>
                    {/* step2 */}


                    {/* step3 */}
                    <Row className="step-row relative pb-28">
                        <Col lg={{span:6, order:1}} sm={{span:12, order:2}} xs={{span:12, order:2}} className="d-flex justify-content-center lg:order-1">
                            <div className="step-inner text-left">
                                <ul>
                                    <li>
                                        <h4 className="text-gray-500font-light lg:text-5xl md:text-3xl"> </h4>
                                    </li>
                                    
                                    <li>
                                        <h3 className="text-gray-500  font-body font-light text-5xl lg:text-5xl md:text-3xl">  Check-in</h3>
                                    </li>

                                    <li>
                                        <img src={Line2} alt="Line"/>
                                    </li>
                                </ul>
                                <p className="text-left font-body leading-7 text-gray-500 font-light lg:text-2xl md:text-xl lg:pr-5 ">
                                    There's an App for everything these days.<br/> 
                                    Why would class app to check in tenants and<br/> 
                                    ensure that they are ready for handover. 
                                </p>
                            </div>
                        </Col>
                        <Col lg={{span:6, order:2}}  sm={{span:12, order:1}}  xs={{span:12, order:1}}  className="d-flex justify-content-center md:h-50">
                            <img src={Step3} alt="step1"/>
                        </Col>
                        <img className="bg-line7" src={LineBG}  alt="img"/>
                    </Row>
                    {/* step3 */}

                    
                </Container>
            </div>
        )
    }
}
