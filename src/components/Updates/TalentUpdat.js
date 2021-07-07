import React, { Component } from 'react'


// Images
import AdImg from '../../assets/images/talent-img.png';
import Doller from '../../assets/images/doller.png';
import Idea from '../../assets/images/Idea.png';
import Pencil from '../../assets/images/pencil.png';
import Chat from '../../assets/images/text.png';
import Bg from '../../assets/images/client-bg.png'

import {Container, Row, Col} from 'react-bootstrap';


// Components
import YoutubeEmbed from '../YoutubeVideo/Video'


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
                        <YoutubeEmbed embedId="rokGy0huYEA" />
                        </Col>   
                    </Row>
                    
                </Container>

                <div className=" update-inner-bg bg-no-repeat bg-cover"  style={{backgroundImage:`url(${Bg})`}}>
                    
                            <div className="update-bg px-5">
                                <div class="talent-cards mb-32">
                                    {/* Box1 */}
                                    <div class="order-1">
                                        <div className="relative top-20">
                                            <img className="bg-white p-5 rounded-full t-icon" width="" src={Doller} alt="img"/>
                                        </div>
                                        <div class="p-8 bg-gradient-to-bl from-gray-800 to-gray-900 bg-opacity-25">
                                            <h1 class="text-3xl text-gray-500 font-bold pb-3 mt-16 text-left">
                                                Fees
                                            </h1>
                                            <p class="text-2x mb-11 text-gray-500 font-body font-normal leading-7 text-left">
                                                How much will it 
                                                <br/>
                                                cost me to use
                                                <br/> 
                                                your services?
                                            </p>
                                            <a href="#" class="text-xl px-14 py-2.5 text-gray-500 border bg-white font-bold font-body rounded-full">
                                                View More
                                            </a>
                                        </div>
                                        
                                    </div>
                                    {/* Box1 */}

                                    {/* Box2 */}
                                    <div class="order-1">
                                        <div className="relative top-20">
                                            <img className="bg-white p-5 rounded-full t-icon" width="" src={Idea} alt="img"/>
                                        </div>
                                        <div class="p-8 bg-gradient-to-bl from-gray-800 to-gray-900 bg-opacity-25">
                                            <h1 class="text-3xl text-gray-500 font-bold pb-3 mt-16 text-left">
                                                Fees
                                            </h1>
                                            <p class="text-2x mb-11 text-gray-500 font-body font-normal leading-7 text-left">
                                                How much will it 
                                                <br/>
                                                cost me to use
                                                <br/> 
                                                your services?
                                            </p>
                                            <a href="#" class="text-xl px-14 py-2.5 text-gray-500 border bg-white font-bold font-body rounded-full">View More</a>
                                        </div>
                                        
                                    </div>
                                    {/* Box2 */}

                                    {/* Box3 */}
                                    <div class="order-1">
                                        <div className="relative top-20">
                                            <img className="bg-white p-5 rounded-full t-icon" width="" src={Pencil} alt="img"/>
                                        </div>
                                        <div class="p-8 bg-gradient-to-bl from-gray-800 to-gray-900 bg-opacity-25">
                                            <h1 class="text-3xl text-gray-500 font-bold pb-3 mt-16 text-left">
                                                Fees
                                            </h1>
                                            <p class="text-2x mb-11 text-gray-500 font-body font-normal leading-7 text-left">
                                                How much will it 
                                                <br/>
                                                cost me to use
                                                <br/> 
                                                your services?
                                            </p>
                                            <a href="#" class="text-xl px-14 py-2.5 text-gray-500 border bg-white font-bold font-body rounded-full">View More</a>
                                        </div>
                                        
                                    </div>
                                    {/* Box3 */}


                                    {/* Box4 */}
                                    <div class="order-1">
                                        <div className="relative top-20">
                                            <img className="bg-white p-5 rounded-full t-icon" width="" src={Chat} alt="img"/>
                                        </div>
                                        <div class="p-8 bg-gradient-to-bl from-gray-800 to-gray-900 bg-opacity-25">
                                            <h1 class="text-3xl text-gray-500 font-bold pb-3 mt-16 text-left">
                                                Fees
                                            </h1>
                                            <p class="text-2x mb-11 text-gray-500 font-body font-normal leading-7 text-left">
                                                How much will it 
                                                <br/>
                                                cost me to use
                                                <br/> 
                                                your services?
                                            </p>
                                            <a href="#" class="text-xl px-14 py-2.5 text-gray-500 border bg-white font-bold font-body rounded-full">View More</a>
                                        </div>
                                        
                                    </div>
                                    {/* Box4 */}

                                </div>
                            </div>
                            
                </div>
               
            </div>
        )
    }
}
