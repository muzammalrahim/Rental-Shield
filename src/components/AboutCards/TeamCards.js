import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'; 
import {Link} from 'react-router-dom'

// Fontawsom
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";



// Images
import About1 from '../../assets/images/about-1.png';
import About2 from '../../assets/images/about-2.png';
import About3 from '../../assets/images/about-3.png';
import BgTop from '../../assets/images/team-bg-top.png';
import BgBottom from '../../assets/images/team-bg-bottom.png';

export default class TeamCards extends Component {
    render() {
        return (
            <div className="our-team-main">
                <Row>
                    <img className="w-full" src={BgTop} alt=""/>
                </Row>
                <Row className="px-5 bg-green-700">
                    <Col xs="12">
                        <h1>Our Team</h1>
                        <p>​No believe it or not there is more...</p>
                    </Col>
                    
                    {/* Card 1 */}
                    <Col lg="4">
                        <div class="mx-4 my-4">
                            <div class="w-full rounded-md shadow-md bg-white">
                                {/* Image */}
                                <img src={About1} class="h-64 lg:h-full object-cove object-center  w-full rounded-lg p-4" alt="..."/>
                                {/* Image */}

                                <div class="p-4">
                                    {/* Name */}
                                    <h5 class="pl-4 pb-5 text-left text-sm text-gray-500 font-bold font-3xl font-body tracking-widest mb-2">
                                        James Daniel
                                    </h5>
                                    {/* Name */}

                                    {/* Info */}
                                    <p className="text-left text-lg text-gray-400 font-body font-normal px-4">
                                        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                                    </p>
                                    {/* Info */}

                                    {/* Contact Info */}
                                    <div className="text-left">
                                        <Link href="mailto: info@mysite.com"  className="text-left text-lg text-gray-400 font-body font-normal px-4 mb-0 hover:no-underline hover:text-green-400">
                                            info@mysite.com 
                                        </Link >
                                        <br/>
                                        <Link href="tel:+ 123-456-7890" className="text-left text-lg text-gray-400 font-body font-normal px-4 hover:no-underline hover:text-green-400">
                                            +123-456-7890
                                        </Link >
                                    </div>
                                    {/* Contact Info */}

                                    {/* Social links */}
                                    <div className="text-right">
                                        <Link href="#" class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block mt-4 rounded-full">
                                            <FaLinkedinIn/>
                                        </Link >
                                        <Link  href="#" class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block mt-4 rounded-full ml-2">
                                            <FaTwitter/>
                                        </Link >
                                    </div>
                                    {/* Social links */}
                                </div>
                            </div>
                        
                        </div>
                    </Col>
                    {/* Card 1 */}

                    {/* Card 2 */}
                    <Col lg="4">
                        <div class=" mx-4 my-4">
                            <div class="w-full rounded-md shadow-md bg-white">
                                {/* Image */}
                                <img src={About2} class="h-64 lg:h-full object-cover object-center w-full p-4" alt="..."/>
                                {/* Image */}

                                <div class="p-4">
                                    {/* Name */}
                                    <h5 class="pl-4 pb-5 text-left text-sm text-gray-500 font-bold font-3xl font-body tracking-widest mb-2">
                                        Barry Mcdonald
                                    </h5>
                                    {/* Name */}

                                    {/* Info */}
                                    <p className="text-left text-lg text-gray-400 font-body font-normal px-4">
                                        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                                    </p>
                                    {/* Info */}

                                    {/* Contact Info */}
                                    <div className="text-left">
                                        <Link href="mailto: info@mysite.com"  className="text-left text-lg text-gray-400 font-body font-normal px-4 mb-0 hover:no-underline hover:text-green-400">
                                            info@mysite.com 
                                        </Link >
                                        <br/>
                                        <Link href="tel:+ 123-456-7890" className="text-left text-lg text-gray-400 font-body font-normal px-4 hover:no-underline hover:text-green-400">
                                            +123-456-7890
                                        </Link >
                                    </div>
                                    {/* Contact Info */}

                                    {/* Social links */}
                                    <div className="text-right">
                                        <Link href="#" class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block mt-4 rounded-full">
                                            <FaLinkedinIn/>
                                        </Link >
                                        <Link  href="#" class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block mt-4 rounded-full ml-2">
                                            <FaTwitter/>
                                        </Link >
                                    </div>
                                    {/* Social links */}
                                
                                </div>
                            </div>
                        
                        </div>
                    </Col>
                    {/* Card 2 */}

                    {/* Card 3 */}
                    <Col lg="4">
                        <div class=" mx-4 my-4">
                            <div class="w-full rounded-md shadow-md bg-white">
                                {/* Image */}
                                <img src={About3} class="h-64 lg:h-full object-cover object-center w-full p-4" alt="..."/>
                                {/* Image */}

                                <div class="p-4">
                                    {/* Name */}
                                    <h5 class="pl-4 pb-5 text-left text-sm text-gray-500 font-bold font-3xl font-body tracking-widest mb-2">
                                        Larry Turner
                                    </h5>
                                    {/* Name */}

                                    {/* Info */}
                                    <p className="text-left text-lg text-gray-400 font-body font-normal px-4">
                                        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                                    </p>
                                    {/* Info */}
                                    
                                    {/* Contact Info */}
                                    <div className="text-left">
                                        <Link href="mailto: info@mysite.com"  className="text-left text-lg text-gray-400 font-body font-normal px-4 mb-0 hover:no-underline hover:text-green-400">
                                            info@mysite.com 
                                        </Link >
                                        <br/>
                                        <Link href="tel:+ 123-456-7890" className="text-left text-lg text-gray-400 font-body font-normal px-4 hover:no-underline hover:text-green-400">
                                            +123-456-7890
                                        </Link >
                                    </div>
                                    {/* Contact Info */}

                                    {/* Social links */}
                                    <div className="text-right">
                                        <Link href="#" class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block mt-4 rounded-full">
                                            <FaLinkedinIn/>
                                        </Link >
                                        <Link  href="#" class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block mt-4 rounded-full ml-2">
                                            <FaTwitter/>
                                        </Link >
                                    </div>
                                    {/* Social links */}
                                </div>
                            </div>
                        
                        </div>
                    </Col>
                    {/* Card 3 */}
                </Row>
                <Row>
                    <img className="w-full" src={BgBottom} alt="img"/>
                </Row>
                
            </div>
        )
    }
}
