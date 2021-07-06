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
                            <Row className="no-gutters">
                                <Col sm="6">
                                
                                </Col>
                                <Col sm="6" className="text-left banner-content pb-5">
                                    <h3 className="text-green-500 text-6xl">
                                        Welcome 
                                        <br/>
                                        to Tenants
                                    </h3>
                                    <h3 className="text-2xl text-gray-500 py-3">
                                        To the future of renting...
                                    </h3>
                                    <p className="text-gray-500">
                                        Join us today on the real estate revolution
                                        <br/>
                                         to change the way you rent today.  We 
                                         <br/>
                                         believe you will find answers to all of the
                                         <br/>
                                          questions you may have below.
                                          <ul className="text-left">
                                              <li>
                                                <p className="text-gray-500">
                                                  What if my landlord doesn't want 
                                                  <br/>
                                                  to join the scheme? ​
                                                  </p>
                                              </li>
                                              <li>
                                                <p className="text-gray-500">
                                                      Is my money protected?

                                                  </p>
                                              </li>
                                              <li>
                                                <p className="text-gray-500">
                                                  Do you really have my best 
                                                  <br/>
                                                  interest at heart?
                                                  </p>
                                              </li>
                                              <li>
                                                <p className="text-gray-500">
                                                  What if I want to dispute
                                                  <br/>
                                                   the case?
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
