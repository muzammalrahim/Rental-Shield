import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import EvenBg from '../../assets/images/even-more.png';
import Line from '../../assets/images/line.png';
import Step1 from '../../assets/images/step-11.png';
import Talent1 from '../../assets/images/talent-1.png';
import Talent2 from '../../assets/images/talent-2.png';
import Talent3 from '../../assets/images/talent-3.png';
import BGLeft from '../../assets/images/l-line.png'; 
// import BGLeft from '../../assets/images/even-more-top.png';
//import BGTop from '../../assets/images/even-more-top.png';
import BGTop from '../../assets/images/tanents-steps-bg.png';
//import BGBottom from '../../assets/images/even-more-b.png'
import BGBottom from '../../assets/images/tanents-steps-bg-bottom.jpg'

export default class EvenMore extends Component {
    render() {
        return (
            <div className="even-more pt-5">
                
                <div className="t-even-inner">
                    
                    
                    
                    {/* step1 */}
                    
                    
                   
                    <Container>
                        <img className="g-line relative top-48" src={BGLeft} alt="img"></img>
                    </Container>
                    <img className="w-full even-more-t-bg" src={BGTop} alt="img"/>

                    <div className="tenant-inner bg-gray-600 pb-6">
                        
                        <Row className="no-gutters">
                            <Col sm="12">
                                <h1 className="text-gray-500 text-6xl font-normal font-body pt-5">Even more?</h1>
                                <p className="text-gray-500 text-2x font-body font-normal">​No believe it or not there is more...</p>
                            </Col>
                            
                            
                        </Row>
                        <Row className="step-row1 pt-5 pl-5 items-center no-gutters">
                        <Col lg={{span:6, order:1}}  md={{span:12, order:2}} xs={{span:12, order:2}} className="d-flex justify-content-center lg:order-1">
                            <div className="step-inner">
                                <ul className="">
                                    <li>
                                        <h4 className="text-gray-500 font-light lg:text-5xl md:text-3xl">01 </h4>
                                    </li>
                                    <li>
                                        <img className="md:h-30 " src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3 className="text-gray-500 font-light text-5xl lg:text-5xl md:text-3xl">Fair Wear & Tear</h3>
                                    </li>
                                </ul>
                                <p className="text-left text-gray-500 font-light lg:text-xl md:text-xl lg:pr-5 ">
                                This is really what it comes down to because at the end of the day tenants want 
                                to make sure that things are clear when they move-in and start renting? 
                                </p>

                                <p className="text-left text-gray-500 font-light lg:text-xl md:text-xl lg:pr-5 ">
                                Am I allowed to fix that curtain here, hang that photo there? What if there 
                                are some tiles damaged when I leave? What about small scratches on doors or walls? 
                                </p>
                                
                                <p className="text-left text-gray-500 font-light lg:text-xl md:text-xl lg:pr-5 ">
                                We cover all of that for you, and our experienced team has 
                                already worked out best maintenance practice with landlords.
                                 We even get them to agree with the terms and conditions of
                                 using our scheme. 
                                 </p>

                                 <p className="text-left text-gray-500 font-light lg:text-xl md:text-xl lg:pr-5 ">
                                And even though they are not legally bound by them, the cost 
                                and time it would take to argue the case would almost certainly 
                                not be in their favour. In the end, a bit of give and take can 
                                go a long way. 
                                </p>
                            </div>
                        </Col>
                        <Col lg={{span:6, order:2}} md={{span:12, order:1}} sm={{span:12, order:1}}  xs={{span:12, order:1}}  className="d-flex justify-content-center md:h-50 lg:order-2">
                            <img className="t-img tanents-center absolute right-0" src={Talent1} alt="step1"/>
                        </Col>
                    </Row>
                    {/* step1 */}


                     {/* step2 */}
                     <Row className="step-row pt-5 pl-5 items-center no-gutters">
                        <Col lg="6"  sm="12"  xs="12" className="d-flex justify-content-center ">
                            <img className="relative right-40" src={Talent2} alt="step1"/>
                        </Col>
                        
                        <Col lg="6"  sm="12"  xs="12" xs="12" className="d-flex justify-content-center">
                            <div className="step-inner">
                                <ul className="">
                                    <li>
                                        <h4 className="text-gray-500 font-light lg:text-5xl md:text-3xl">01 </h4>
                                    </li>
                                    <li>
                                        <img className="md:h-30 " src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3 className="text-gray-500 font-light text-5xl lg:text-5xl md:text-3xl">Fair Wear & Tear</h3>
                                    </li>
                                </ul>
                                <p className="text-left text-gray-500 font-light lg:text-xl md:text-xl lg:pr-5 ">
                                This is really what it comes down to because at the end of the day tenants want 
                                to make sure that things are clear when they move-in and start renting? 
                                </p>

                                <p className="text-left text-gray-500 font-light lg:text-xl md:text-xl lg:pr-5 ">
                                Am I allowed to fix that curtain here, hang that photo there? What if there 
                                are some tiles damaged when I leave? What about small scratches on doors or walls? 
                                </p>
                                
                                <p className="text-left text-gray-500 font-light lg:text-xl md:text-xl lg:pr-5 ">
                                We cover all of that for you, and our experienced team has 
                                already worked out best maintenance practice with landlords.
                                 We even get them to agree with the terms and conditions of
                                 using our scheme. 
                                 </p>

                                 <p className="text-left text-gray-500 font-light lg:text-xl md:text-xl lg:pr-5 ">
                                And even though they are not legally bound by them, the cost 
                                and time it would take to argue the case would almost certainly 
                                not be in their favour. In the end, a bit of give and take can 
                                go a long way. 
                                </p>
                            </div>
                        </Col>
                        
                    </Row>
                    {/* step2 */}


                    {/* step3 */}
                    <Row className="step-row pt-5 pl-5 items-center no-gutters">
                        
                        <Col lg={{span:6, order:1}} md={{span:12, order:2}} sm={{span:12, order:2}} xs={{span:12, order:2}} className="d-flex justify-content-center lg:order-1">
                            <div className="step-inner">
                                <ul className="">
                                    <li>
                                        <h4 className="text-gray-500 font-light lg:text-5xl md:text-3xl">01 </h4>
                                    </li>
                                    <li>
                                        <img className="md:h-30 " src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3 className="text-gray-500 font-light text-5xl lg:text-5xl md:text-3xl">Fair Wear & Tear</h3>
                                    </li>
                                </ul>
                                <p className="text-left text-gray-500 font-light lg:text-xl md:text-xl lg:pr-5 ">
                                This is really what it comes down to because at the end of the day tenants want 
                                to make sure that things are clear when they move-in and start renting? 
                                </p>

                                <p className="text-left text-gray-500 font-light lg:text-xl md:text-xl lg:pr-5 ">
                                Am I allowed to fix that curtain here, hang that photo there? What if there 
                                are some tiles damaged when I leave? What about small scratches on doors or walls? 
                                </p>
                                
                                <p className="text-left text-gray-500 font-light lg:text-xl md:text-xl lg:pr-5 ">
                                We cover all of that for you, and our experienced team has 
                                already worked out best maintenance practice with landlords.
                                 We even get them to agree with the terms and conditions of
                                 using our scheme. 
                                 </p>

                                 <p className="text-left text-gray-500 font-light lg:text-xl md:text-xl lg:pr-5 ">
                                And even though they are not legally bound by them, the cost 
                                and time it would take to argue the case would almost certainly 
                                not be in their favour. In the end, a bit of give and take can 
                                go a long way. 
                                </p>
                            </div>
                        </Col>
                        <Col lg={{span:6, order:2}} md={{span:12, order:1}}  sm={{span:12, order:1}}  xs={{span:12, order:1}}  className="d-flex justify-content-center md:h-50">
                            <img className="tanents-center absolute right-0" src={Talent3} alt="step1"/>
                        </Col>
                    </Row>
                    {/* step3 */}

                    </div>
                    
                    
                    <img className="w-full" src={BGBottom} alt="img"/>
                    



                   
                </div>
            </div>
        )
    }
}
