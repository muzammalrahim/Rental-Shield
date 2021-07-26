import React, { Component } from "react";

// Images
import AdImg from "../../assets/images/talent-img.png";
import Doller from "../../assets/images/doller.png";
import Idea from "../../assets/images/Idea.png";
import Pencil from "../../assets/images/pencil.png";
import Chat from "../../assets/images/text.png";
import Bg from "../../assets/images/client-bg.png";

import { Container, Row, Col } from "react-bootstrap";

// Components
import YoutubeEmbed from "../YoutubeVideo/Video";

export default class TalentUpdat extends Component {

    render() {
        return (
            <div className="tanent-update-main -mt-40">

                    <div className="main-home lg:w-8/12 md:10/12 mx-auto">
                        <div className="h-video-main">
                        <div>
                            <h4 className="text-3xl lg:text-5xl text-gray-500 font-body font-normal">
                                 ​How about a video..
                            </h4>
                        </div>
                        <p className="text-xl text-gray-500 font-body  font-normal pb-4">
                            W​here's a summary and more. 
                        </p>
                        <YoutubeEmbed embedId="rokGy0huYEA" />
                        </div>
                        
                    </div>
                    
                    

                <div className=" update-inner-bg bg-no-repeat bg-cover"  style={{backgroundImage:`url(${Bg})`}}>
                    
                            <div className="update-bg lg:px-36 pt-96">
                                <div class="talent-cards pb-52">
                                    {/* Box1 */}
                                    <div class="order-1 mt-5 pt-5">
                                        <div className="relative top-20 z-10">
                                            <img className="bg-white p-5 rounded-full t-icon" width="" src={Doller} alt="img"/>
                                        </div>
                                        <div class="p-8 tenent-gradient">
                                            <h1 class="text-2xl text-gray-500 font-bold pb-1 mt-16 text-left">
                                                Fees
                                            </h1>
                                            <p class="text-2x mb-11 text-gray-500 font-body font-normal leading-7 text-left">
                                                How much will it 
                                                <br/>
                                                cost me to use
                                                <br/> 
                                                your services?
                                            </p>
                                            <a href="#" class="text-xl px-10 py-2 text-gray-500 border bg-white font-bold font-body rounded-full">
                                                View More
                                            </a>
                                        </div>
                                        
                                    </div>
                                    {/* Box1 */}

                                    {/* Box2 */}
                                    <div class="order-1 mt-5 pt-5">
                                        <div className="relative top-20 z-10">
                                            <img className="bg-white p-5 rounded-full t-icon" width="" src={Idea} alt="img"/>
                                        </div>
                                        <div class="p-8 tenent-gradient">
                                            <h1 class="text-2xl text-gray-500 font-bold  pb-1  mt-16 text-left">
                                            ​Existing Tenant
                                            </h1>
                                            <p class="text-2x mb-11 text-gray-500 font-body font-normal leading-7 text-left">
                                                How much will it 
                                                <br/>
                                                cost me to use
                                                <br/> 
                                                your services?
                                            </p>
                                            <a href="#" class="text-xl px-10 py-2 text-gray-500 border bg-white font-bold font-body rounded-full">View More</a>
                                        </div>
                                        
                                    </div>
                                    {/* Box2 */}

                                    {/* Box3 */}
                                    <div class="order-1 mt-5 pt-5">
                                        <div className="relative top-20 z-10">
                                            <img className="bg-white p-5 rounded-full t-icon" width="" src={Pencil} alt="img"/>
                                        </div>
                                        <div class="p-8 tenent-gradient">
                                            <h1 class="text-2xl text-gray-500 font-bold  pb-1  mt-16 text-left">
                                            Ejari/ Tawtheeq
                                            </h1>
                                            <p class="text-2x mb-11 text-gray-500 font-body font-normal leading-7 text-left">
                                                How much will it 
                                                <br/>
                                                cost me to use
                                                <br/> 
                                                your services?
                                            </p>
                                            <a href="#" class="text-xl px-10 py-2 text-gray-500 border bg-white font-bold font-body rounded-full">View More</a>
                                        </div>
                                        
                                    </div>
                                    {/* Box3 */}


            

                                    {/* Box4 */}
                                    <div class="order-1 mt-5 pt-5">
                                        <div className="relative top-20 z-10">
                                            <img className="bg-white p-5 rounded-full t-icon" width="" src={Chat} alt="img"/>
                                        </div>
                                        <div class="p-8 tenent-gradient">
                                            <div className="wrp">
                                            <h1 class="text-2xl text-gray-500 font-bold pb-1 mt-16 text-left">
                                            Consulting
                                            </h1>
                                            <p class="text-2x mb-11 text-gray-500 font-body font-normal leading-7 text-left">
                                                How much will it 
                                                <br/>
                                                cost me to use
                                                <br/> 
                                                your services?
                                            </p>
                                            <a href="#" class="text-xl px-10 py-2 text-gray-500 border bg-white font-bold font-body rounded-full">View More</a>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    {/* Box4 */}

              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
