import React, { Component } from 'react'

// Images
import Doller from '../assets/images/doller.png';
import Bulb from '../assets/images/Idea.png';
import Pencil from '../assets/images/pencil.png';
import Chat from '../assets/images/text.png';
import LeftLine from '../assets/images/left-line.png';
import RightLine from '../assets/images/right-line.png';



export default class MoreQuestions extends Component {
    render() {
        return (
            <div className="more-query-main mb-4">
                <h1 className="text-gray-500 font-body text-6xl font-normal pt-5">
                    Still have more questions?
                </h1>
                <p className="text-gray-500 font-body text-2x font-normal mb-0">
                    See below, and then check out our FAQ's page
                </p>
                 <div class="grid grid-cols-4 py-10 px-20">

                     
                    {/* step 1 */}
                    <div class="order-1 relative"> 
                        <div className="more-border-1 absolute">
                            <img src={LeftLine} alt="img"/>
                        </div>
                        <div class="mt-20 text-left pl-20">
                            <h1 class="text-5xx text-green-500 font-body font-normal text-left pb-4 m-0">
                                Fees
                            </h1>
                            <p class="text-2x mb-10 text-gray-500 font-body leading-7 text-left m-0 pb-4">
                                How much will it cost me to use your services? 
                            </p>
                            <a href="#" class="text-xl px-4 py-2 font-body font-medium text-white border bg-green-500 rounded-full">
                                View More
                            </a>
                            
                            <img class="block  ml-5 lg:inline-block lg:mt-0 py-10 text-teal-200 hover:text-white mr-4" width="60" src={Doller}/>
                        </div>
                    </div>
                    {/* step 1 */}

                    

                    {/* step 2 */}
                    <div class="order-2 relative mt-72">
                        <div className="more-border-2 relative">
                            <img className="absolute" src={RightLine} alt="img"/>
                        </div>
                        <div class="text-left pl-20">
                            <img class="block mt-4 lg:inline-block lg:mt-0  ml-5 text-teal-200 hover:text-white mr-4" width="60" src={Bulb}/>
                            <br/>
                            <h1 class="text-5xx text-green-500 font-body font-normal text-left leading-10 pt-4 pb-4 m-0">
                                Existing 
                                <br/>
                                Tenant
                            </h1>
                            <p class="text-2x mb-10 text-gray-500 font-body leading-7 text-left m-0 pb-4">
                                How can I introduce
                                <br/> 
                                an exisitng tenant
                                <br/> 
                                to this scheme 
                            </p>
                            <a href="#" class="text-xl px-4 py-2 font-body font-medium text-white border bg-green-500 rounded-full">
                                View More
                            </a>
                        </div>
                        
                    </div>
                    {/* step 2 */}

                   

                    {/* step 3*/}
                    <div class="order-3 relative">
                        <div className="more-border-1 absolute">
                            <img src={LeftLine} alt="img"/>
                        </div>
                        <div className="text-left pl-20">
                            <h1 class="text-5xx text-green-500 font-body font-normal text-left pt-4 pb-4 m-0">
                                Ejari/<br/>
                                Tawtheeq
                            </h1>
                            <p class="text-2x mb-10 text-gray-500 font-body leading-7 text-left m-0 pb-4">
                                Should I register these 
                                <br/> 
                                agreements with 
                                <br/> Ejari/Tawtheeq 
                            </p>
                            <a href="#" class="text-xl px-4 py-2 font-body font-medium text-white border bg-green-500 rounded-full">
                                View More
                            </a>
                            <br/>
                            <img class="block  lg:inline-block lg:mt-0 py-10 ml-5 text-teal-200 hover:text-white mr-4" width="60" src={Pencil}/>
                        </div>
                    </div>
                    {/* step 3*/}

                    {/* step 4*/}
                    
                    <div class="order-4">
                        <div className="more-border-4 relative">
                            <img className="absolute" src={RightLine} alt="img"/>
                        </div>
                        <div class="mt-52 text-left pl-20">
                            <img class="block mt-4 ml-5 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" width="60" src={Chat}/>
                            <br/>
                            <h1 class="text-5xx text-green-500 font-body font-normal leading-10 text-left pt-4 pb-4 m-0">
                                Consulting
                            </h1>
                            <p class="text-2x mb-10 text-gray-500 font-body leading-7 text-left m-0 pb-4">
                                Do I need a lawyer to check these agreements on my behalf?
                                
                            </p>
                            <a href="#" class="text-xl px-4 py-2 font-body font-medium text-white border bg-green-500 rounded-full">
                                View More
                            </a>
                        </div>
                    </div>
                    {/* step 4*/}
                </div>

                
            </div>
        )
    }
}
