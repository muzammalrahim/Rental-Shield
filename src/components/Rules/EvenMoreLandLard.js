import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import EvenBg from '../../assets/images/even-more.png';
import Line from '../../assets/images/line.png';
import Step1 from '../../assets/images/step-11.png';
import Talent1 from '../../assets/images/Rental-bg-3.png';
import Talent2 from '../../assets/images/Rental-bg-4.png';
import Talent3 from '../../assets/images/Rental-bg-5.png';
import BGLeft from '../../assets/images/l-line.png';
import BGTop from '../../assets/images/even-more-top.png';
import BGBottom from '../../assets/images/landlord-s-bg.png';
import LeftLine1 from '../../assets/images/lanlord-line1.png';



export default class EvenMoreLandLard extends Component {
    render() {
        return (
            <div className="even-more pt-5">
                <img className="w-full even-more-t-bg relative top-6" src={BGTop} alt="img"/>
                <div className="even-inner bg-gray-600">
                    
                    <Row className="no-gutters">
                        <Col sm="12">
                            <h1 className="text-gray-500 text-3xl lg:text-6xl font-normal font-body pt-5">
                            ​   Is that everything?
                            </h1>
                            <p className="text-gray-500 text-lg lg:text-2x font-normal font-body">​
                                No believe it or not there is more...
                            </p>
                        </Col>
                    </Row>
                    

                    {/* step1 */}
                    <Row className="step-row pt-5 pl-5 items-center no-gutters relative">
                        <Col lg="6"  sm="12"  xs="12" className="">
                            <img className="relative right-14" src={Talent1} alt="step1"/>
                        </Col>
                        
                        <Col lg="6"  sm="12"  xs="12" xs="12" className="">
                            <div className="step-inner text-left">
                                <ul className="mob-spacing">
                                    <li>
                                        <h4 className="text-gray-500 font-body font-light lg:text-5xl md:text-3xl">
                                            01 
                                        </h4>
                                    </li>
                                    <li>
                                        <img className="md:h-30 head-line" src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3 className="text-gray-500 font-body font-light text-5xl lg:text-5xl md:text-3xl">
                                            No Cheques...
                                        </h3>
                                    </li>
                                </ul>
                                <div className="land-even-inner">
                                    <p className=" text-left  text-gray font-light lg:text-xl md:text-xl lg:pr-5 ">
                                    This is really what it comes down to because at the end of the day tenants want 
                                    to make sure that things are clear when they move-in and start renting? 
                                    </p>

                                    <p className="text-left text-gray font-light lg:text-xl md:text-xl lg:pr-5 ">
                                    Am I allowed to fix that curtain here, hang that photo there? What if there 
                                    are some tiles damaged when I leave? What about small scratches on doors or walls? 
                                    </p>
                                    
                                    <p className="text-left text-gray font-light lg:text-xl md:text-xl lg:pr-5 ">
                                    We cover all of that for you, and our experienced team has 
                                    already worked out best maintenance practice with landlords.
                                    We even get them to agree with the terms and conditions of
                                    using our scheme. 
                                    </p>

                                    <p className="text-lefttext-gray font-light lg:text-xl md:text-xl lg:pr-5 ">
                                    And even though they are not legally bound by them, the cost 
                                    and time it would take to argue the case would almost certainly 
                                    not be in their favour. In the end, a bit of give and take can 
                                    go a long way. 
                                    </p>
                                </div>
                               
                            </div>
                        </Col>
                        <img className="absolute lanlord-lin1 mob-line" src={LeftLine1} alt="img"/>
                    </Row>
                    {/* step1 */}
                    
                    {/* step2 */}
                    
                    <Row className="step-row1 pt-5 pl-5 items-center no-gutters relative">
                        <Col lg={{span:6, order:1}} sm="12" xs={{span:12, order:2}} className="d-flex justify-content-center lg:order-1 sm:order-2">
                            <div className="step-inner text-left">
                                <ul className="mob-spacing">
                                    <li>
                                        <h4 className="text-gray-500 font-body font-light lg:text-5xl md:text-3xl">
                                            02 
                                        </h4>
                                    </li>
                                    <li>
                                        <img className="md:h-30 head-line" src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3 className="text-gray-500 font-body font-light text-5xl lg:text-5xl md:text-3xl">
                                            Upgrade your flats
                                        </h3>
                                    </li>
                                </ul>
                                <div className="land-even-inner">
                                    <p className="text-left text-gray font-light lg:text-xl md:text-xl lg:pr-5 ">
                                    This is really what it comes down to because at the end of the day tenants want 
                                    to make sure that things are clear when they move-in and start renting? 
                                    </p>

                                    <p className="text-left text-gray font-light lg:text-xl md:text-xl lg:pr-5 ">
                                    Am I allowed to fix that curtain here, hang that photo there? What if there 
                                    are some tiles damaged when I leave? What about small scratches on doors or walls? 
                                    </p>
                                    
                                    <p className="text-left text-gray font-light lg:text-xl md:text-xl lg:pr-5 ">
                                    We cover all of that for you, and our experienced team has 
                                    already worked out best maintenance practice with landlords.
                                    We even get them to agree with the terms and conditions of
                                    using our scheme. 
                                    </p>

                                    <p className="text-lefttext-gray font-light lg:text-xl md:text-xl lg:pr-5 ">
                                    And even though they are not legally bound by them, the cost 
                                    and time it would take to argue the case would almost certainly 
                                    not be in their favour. In the end, a bit of give and take can 
                                    go a long way. 
                                    </p>
                                </div>
                                
                            </div>
                        </Col>
                        <Col lg={{span:6, order:2}}  sm="12"  xs={{span:12, order:1}}  className="even-inner-img d-flex justify-content-center md:h-50 lg:order-2 sm:order-1">
                            <img className="relative left-12" src={Talent2} alt="step1"/>
                        </Col>
                        <img className="absolute lanlord-lin2 mob-line" src={LeftLine1} alt="img"/>
                    </Row>
                    {/* step2 */}

                     {/* step3 */}
                     <Row className="step-row pt-5 pl-5 items-center no-gutters">
                        <Col lg="6"  sm="12"  xs="12" className="d-flex justify-content-center ">
                            <img className="relative right-40" src={Talent3} alt="step1"/>
                        </Col>
                        
                        <Col lg="6"  sm="12"  xs="12" xs="12" className="d-flex justify-content-center">
                            <div className="step-inner text-left">
                                <ul className="mob-spacing">
                                    <li>
                                        <h4 className="text-gray-500 font-body font-light lg:text-5xl md:text-3xl">
                                            03
                                        </h4>
                                    </li>
                                    <li>
                                        <img className="md:h-30 head-line" src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3 className="text-gray-500 font-body font-light text-5xl lg:text-5xl md:text-3xl">
                                            ​Check-in/out Forms
                                        </h3>
                                    </li>
                                </ul>
                                <div className="land-even-inner">
                                    <p className="text-left  text-gray font-light lg:text-xl md:text-xl lg:pr-5 ">
                                    This is really what it comes down to because at the end of the day tenants want 
                                    to make sure that things are clear when they move-in and start renting? 
                                    </p>

                                    <p className="text-left text-gray font-light lg:text-xl md:text-xl lg:pr-5 ">
                                    Am I allowed to fix that curtain here, hang that photo there? What if there 
                                    are some tiles damaged when I leave? What about small scratches on doors or walls? 
                                    </p>
                                    
                                    <p className="text-left text-gray font-light lg:text-xl md:text-xl lg:pr-5 ">
                                    We cover all of that for you, and our experienced team has 
                                    already worked out best maintenance practice with landlords.
                                    We even get them to agree with the terms and conditions of
                                    using our scheme. 
                                    </p>

                                    <p className="text-lefttext-gray font-light lg:text-xl md:text-xl lg:pr-5 ">
                                    And even though they are not legally bound by them, the cost 
                                    and time it would take to argue the case would almost certainly 
                                    not be in their favour. In the end, a bit of give and take can 
                                    go a long way. 
                                    </p>
                                </div>
                                
                            </div>
                        </Col>
                        
                    </Row>
                    {/* step3 */}



                    


                   
                </div>
                <img className="w-full" src={BGBottom} alt="img"/>
            </div>
        )
    }
}
