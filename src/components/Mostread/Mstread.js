import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Mostreadimg from '../../assets/images/Mostread.png';

import {FaHeart} from "react-icons/fa";
import {FaRegStar} from "react-icons/fa";



export default class Mostread extends Component {
    render() {
        return (
            <div class="bg-white featured mx-0 p-10 md:mx-0 lg:mx-0 lg:w-full sm:w-full md:p-12 lg:p-12 h-auto rounded-2xl shadow-lg flex flex-col sm:flex-row gap-10 select-none">
            {/* <div style={{ backgroundImage:`url(${Mostreadimg})` }} class="sm:w-6/12 rounded-xl bg-gray-100 bg-center bg-cover"> */}
            <div class="sm:w-6/12 rounded-xl bg-gray-100 bg-center bg-cover">
                <img className="rounded-xl w-full" src={Mostreadimg} />
            </div>
            <div class="flex sm:flex-1 flex-col gap-2 p-1 text-left">
                <span class="inline-block text-green-900 text-normal font-normal">Tag</span>
                <h1 class="text-base md:text-3xl lg:text-3xl font-bold text-gray-500 mb-2 w-11/12">
                Should I keep my A/C on if I am traveling for the summer?
                </h1>
                <p class="text-gray-500 text-sm sm:text-base line-clamp-3 w-11/12">
                    This is the desctiption for your card. This is really really long. This is used to describe the content of the card. I hope you like the design...
                </p>
                <button class="blog-view-btn lg:w-4/12 md:6/12 rounded-full py-3 px-6 bg-green-900 text-white font-bold mt-3">View More</button>
                <div class="flex gap-4 mt-auto">

                    <div class="flex items-center space-x-4 space-x-4 w-10/12">
                        <a href="" class="flex-shrink-0 w-10 h-10 overflow-hidden rounded-full ">
                            <img src={Mostreadimg} alt="SmileSharks" class="object-cover w-full h-full" />
                        </a>   
                        <div class="flex flex-col space-y-1">
                            <a href="" class="font-semibol text-base hover:underline text-gray-500">@James Daniel</a> 
                        </div>
                    </div>

                    <div class="flex items-center space-x-4">

                        <h1 class="text-lg">
                            <a class="no-underline text-black" href="#">
                                <div class="flex items-center text-sm text-green-900"><FaRegStar style={{ fontSize: 24 }}/><FaRegStar style={{ fontSize: 24 }}/><FaRegStar style={{ fontSize: 24 }}/><FaRegStar style={{ fontSize: 24 }}/></div>
                            </a>
                        </h1>
                            
                        <Link href="#" class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block rounded-full">
                            <span class="hidden">Like</span>
                            <FaHeart/>
                        </Link>
                            
                    </div>


                </div>
            </div>
        </div>
   
        )
    }
}
