import React, { Component } from 'react'
import {Link} from 'react-router-dom'

// Fontawsom
import 
{ 
    FaLinkedinIn, FaTwitter, FaFacebookF, FaPhoneAlt,FaHeart,FaRegStar
} 
from "react-icons/fa";


export default class SocialLinks extends Component {
    render() {
        return (
            <div className="social-links-main px-20 flex relative bottom-16 -mt-8">
                <ul className="text-left">
                    <li>
                        <Link  href="#" class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block mt-4 rounded-full">
                            <FaPhoneAlt/>
                        </Link >
                    </li> 
                    <li>
                        <Link  href="#" class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block mt-2 rounded-full">
                            <FaFacebookF/>
                        </Link >
                    </li> 
                    <li>
                        <Link href="#" class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block mt-2 rounded-full">
                            <FaLinkedinIn/>
                        </Link >
                    </li>
                    <li>
                        <Link  href="#" class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block mt-2 rounded-full">
                            <FaTwitter/>
                        </Link >
                    </li>   
                </ul>
                {/* <div class=" p-2 pl-5 pt-36 md:p-4"> */}
                <div class="lg:px-8 pl-10">
                    <div>
                        <p className="text-left font-body pt-16 text-2xx text-gray-500 leading-8">
                            Was this article helpful?
                            <br/>
                            Rate it
                        </p>
                    </div>
                    <h1 class="text-lg">
                        <Link className="no-underline text-black" href="#">
                            <div class="flex items-center text-sm text-green-900 ">
                                <FaRegStar style={{ fontSize: 24 }}/>
                                <FaRegStar style={{ fontSize: 24 }}/>
                                <FaRegStar style={{ fontSize: 24 }}/>
                                <FaRegStar className="mr-36" style={{ fontSize: 24 }}/>
                                <Link href="#" 
                                    className="shadow-2xl bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block rounded-full">
                                    
                                    <FaHeart/>
                                </Link>
                            </div>
                        </Link>
                        
                    </h1>
                </div>
            </div>
        )
    }
}
