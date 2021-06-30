import React, { Component } from 'react'
import AdImg from '../../assets/images/talent-img.png';
import Doller from '../../assets/images/doller.png';
import Idea from '../../assets/images/Idea.png';
import Pencil from '../../assets/images/pencil.png';
import Chat from '../../assets/images/text.png';
import Bg from '../../assets/images/client-bg.png'

import {Container, Row, Col} from 'react-bootstrap';

export default class TalentUpdat extends Component {
    render() {
        return (
            <div className="update-main mt-5">
                <Container>
                    <Row  className=" main d-flex justify-content-center">
                        <Col md="12">
                        <div>
                            <h4 className="text-5xl text-gray font-normal"> ​How about a video..</h4>
                        </div>
                        <br/>
                        <p className="text-xl text-gray font-normal pb-4">
                            W​Here's a summary and more. 
                        </p>
                        <img src={AdImg} alt="img"/>
                        </Col>   
                    </Row>
                    
                </Container>

                <div className=" update-inner-bg bg-no-repeat bg-cover"  style={{backgroundImage:`url(${Bg})`}}>
                    <Container>
                        <Row>
                            <Col sm="12">
                            <div className="update-bg">
                                <div class="talent-cards">
                                    <div class="order-1">
                                        <div class="">
                                            <img  width="60" src={Doller} alt="img"/>
                                        </div>
                                        <div class="p-8 bg-green bg-opacity-25">
                                            <h1 class="text-xl text-gray font-bold py-4 text-left">Fees</h1>
                                            <p class="text-base mb-10 text-gray leading-none text-left">How much will it <br/>cost me to use<br/> your services?</p>
                                            <a href="#" class="text-sm px-14 py-2  text-gray border  bg-white 	rounded-full">View More</a>
                                        </div>
                                        
                                    </div>
                                    {/* Box1 */}

                                    {/* Box2 */}
                                    <div class="order-1">
                                        <div class="">
                                            <img  width="60" src={Doller} alt="img"/>
                                        </div>
                                        <div class="p-8 bg-green bg-opacity-25">
                                            <h1 class="text-xl text-gray font-bold py-4 text-left">Fees</h1>
                                            <p class="text-base mb-10 text-gray leading-none text-left">How much will it <br/>cost me to use<br/> your services?</p>
                                            <a href="#" class="text-sm px-14 py-2  text-gray border  bg-white 	rounded-full">View More</a>
                                        </div>
                                        
                                    </div>
                                    {/* Box2 */}

                                    {/* Box3 */}
                                    <div class="order-1">
                                        <div class="">
                                            <img  width="60" src={Doller} alt="img"/>
                                        </div>
                                        <div class="p-8 bg-green bg-opacity-25">
                                            <h1 class="text-xl text-gray font-bold py-4 text-left">Fees</h1>
                                            <p class="text-base mb-10 text-gray leading-none text-left">How much will it <br/>cost me to use<br/> your services?</p>
                                            <a href="#" class="text-sm px-14 py-2  text-gray border  bg-white 	rounded-full">View More</a>
                                        </div>
                                        
                                    </div>
                                    {/* Box3 */}


                                    {/* Box4 */}
                                    <div class="order-1">
                                        <div class="">
                                            <img  width="60" src={Doller} alt="img"/>
                                        </div>
                                        <div class="p-8 bg-green bg-opacity-25">
                                            <h1 class="text-xl text-gray font-bold py-4 text-left">Fees</h1>
                                            <p class="text-base mb-10 text-gray leading-none text-left">How much will it <br/>cost me to use<br/> your services?</p>
                                            <a href="#" class="text-sm px-14 py-2  text-gray border  bg-white 	rounded-full">View More</a>
                                        </div>
                                        
                                    </div>
                                    {/* Box4 */}

                                </div>
                            </div>
                            </Col>
                        </Row>
                    </Container>
                            
                </div>
               
            </div>
        )
    }
}
