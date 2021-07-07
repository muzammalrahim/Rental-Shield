import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TanentBg1 from '../../assets/images/tanent-bg1.png';
import TanentBg2 from '../../assets/images/tanent-bg2.png';



export default class TanentsBanner extends Component {
    render() {
        return (
            <div className="tanent-banner-main bg-no-repeat right-0 top-0 relative">
                <div className="absolute talent-bg-img">
                    <img src={TanentBg2} alt="img"/>
                </div>
                <Row className="no-gutters ">
                    <Col md="2">
                        
                        
                    </Col>
                    <Col md="10">
                        <div className=" talent-bg bg-no-repeat"  style={{backgroundImage:`url(${TanentBg1})`}}>
                            <Row className="no-gutters pl-5">
                                <Col sm="6">
                                
                                </Col>
                                <Col sm="6" className="text-left banner-content pb-5">
                                    <h3 className="text-green-500 text-6xl font-body font-normal">
                                        Welcome 
                                        <br/>
                                        to Tenants
                                    </h3>
                                    <h3 className="text-2xl text-gray-500 font-bold font-body  py-3">
                                        To the future of renting...
                                    </h3>
                                    <p className="text-gray-500 text-2x font-normal font-body">
                                        Join us today on the real estate revolution
                                        <br/>
                                         to change the way you rent today.  We 
                                         <br/>
                                         believe you will find answers to all of the
                                         <br/>
                                          questions you may have below.
                                          <ul className="text-left">
                                              <li className="flex items-center pt-4">
                                                <span className="circle bg-gradient-to-r from-green-400 to-green-500  mr-3 rounded-full"></span>
                                                <p className="text-gray-500 font-body leading-7 pt-3">
                                                    
                                                  What if my landlord doesn't want 
                                                  <br/>
                                                  to join the scheme? ​
                                                  </p>
                                              </li>
                                              <li className="flex items-center">
                                                <span className="circle bg-gradient-to-r from-green-400 to-green-500  mr-3 rounded-full"></span>
                                                <p className="text-gray-500 font-body pt-3">
                                                      Is my money protected?

                                                  </p>
                                              </li>
                                              <li className="flex items-center">
                                                <span className="circle bg-gradient-to-r from-green-400 to-green-500  mr-3 rounded-full"></span>
                                                <p className="text-gray-500 font-body pt-3 leading-7">
                                                  Do you really have my best 
                                                  <br/>
                                                  interest at heart?
                                                  </p>
                                              </li>
                                              <li className="flex items-center">
                                                <span className="circle bg-gradient-to-r from-green-400 to-green-500  mr-3 rounded-full"></span>
                                                <p className="text-gray-500 font-body pt-3 leading-7">
                                                  What if I want to dispute
                                                  <br/>
                                                   the case?
                                                  </p>
                                              </li>
                                              <li className="flex items-center">
                                                <span className="circle  mr-3 rounded-full"></span>
                                                <p className="text-gray-500 font-body pt-3 pb-5 leading-7">
                                                    Plus much much more...​ ​​
                                                </p>
                                              </li>
                                          </ul>
​
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        {/* <img className="w-100" src={TanentBg1} alt="bg"/> */}
                    </Col>
                    
                </Row>
                
            </div>
        )
    }
}
