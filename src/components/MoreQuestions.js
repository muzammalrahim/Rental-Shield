import React, { Component } from 'react'
import Doller from '../assets/images/doller.png';
import Bulb from '../assets/images/Idea.png';
import Pencil from '../assets/images/pencil.png';
import Chat from '../assets/images/text.png';
import LeftLine from '../assets/images/left-line.png';



export default class MoreQuestions extends Component {
    render() {
        return (
            <div className="more-query-main">
                 <div class="flex justify-between py-10 px-20">
                    {/* step 1 */}
                    <div class="order-1">
                        
                        {/* <img src={LeftLine} alt="img"/> */}
                        <div class="mt-20">
                            <h1 class="text-3xl text-green font-bold py-4">Fees</h1>
                            <p class="text-xl mb-10 text-gray-500 leading-none">How much will it cost me<br/> to use your services? </p>
                            <a href="#" class="text-sm px-4 py-2  text-white border bg-green rounded-full">View More</a>
                            <br/>
                            <img class="block mt-4 lg:inline-block lg:mt-0 py-10 ml-16 text-teal-200 hover:text-white mr-4" width="60" src={Doller}/>
                        </div>
                    </div>
                    {/* step 1 */}

                    {/* step 2 */}
                    <div class="order-2">
                        <div class="mt-72">
                            <img class="block mt-4 lg:inline-block lg:mt-0  ml-6 text-teal-200 hover:text-white mr-4" width="60" src={Bulb}/>
                            <br/>
                            <h1 class="text-3xl text-green font-bold py-4">Existing <br/>Tenant</h1>
                            <p class="text-xl mb-10 text-gray-500 leading-none">How can I introduce<br/> an exisitng tenant<br/> to this scheme </p>
                            <a href="#" class="text-sm px-4 py-2  text-white border  bg-green rounded-full">View More</a>
                        </div>
                    </div>
                    {/* step 2 */}

                    {/* step 3*/}
                    <div class="order-3">
                        <div>
                            <h1 class="text-3xl text-green font-bold py-4">Ejari/<br/>
                                Tawtheeq</h1>
                            <p class="text-xl mb-10 text-gray-500 leading-none">Should I register these <br/> agreements with <br/> Ejari/Tawtheeq </p>
                            <a href="#" class="text-sm px-4 py-2  text-white border  bg-green rounded-full">View More</a>
                            <br/>
                            <img class="block mt-4 lg:inline-block lg:mt-0 py-10 ml-16 text-teal-200 hover:text-white mr-4" width="60" src={Pencil}/>
                        </div>
                    </div>
                    {/* step 3*/}

                    {/* step 4*/}
                    <div class="order-4">
                        <div class="mt-52">
                            <img class="block mt-4 lg:inline-block lg:mt-0  ml-6 text-teal-200 hover:text-white mr-4" width="60" src={Chat}/>
                            <br/>
                            <h1 class="text-3xl text-green font-bold py-4">Existing <br/>Tenant</h1>
                            <p class="text-xl mb-10 text-gray-500 leading-none">How can I introduce<br/> an exisitng tenant<br/> to this scheme </p>
                            <a href="#" class="text-sm px-4 py-2  text-white border bg-green rounded-full">View More</a>
                        </div>
                    </div>
                    {/* step 4*/}
                </div>
            </div>
        )
    }
}
