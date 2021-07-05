import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'; 



// Images
import About1 from '../../assets/images/about-1.png';
import About2 from '../../assets/images/about-2.png';
import About3 from '../../assets/images/about-3.png';

export default class TeamCards extends Component {
    render() {
        return (
            <div className="our-team-main px-5 bg-pale">
                <Row>
                    <Col xs="12">
                        <h1>Our Team</h1>
                        <p>​No believe it or not there is more...</p>
                    </Col>
                    
                    {/* Card 1 */}
                    <Col lg="4">
                        <div class="mx-4 my-4">
                            <div class="w-full rounded-md shadow-md bg-white">
                                <img src={About1} class="h-64 lg:h-full object-cove object-center  w-full rounded-lg p-4" alt="..."/>
                                <div class="p-4">
                                <h5 class="pl-4 pb-5 text-left text-sm text-gray font-bold font-3xl font-body tracking-widest mb-2">
                                    James Daniel
                                </h5>
                                <p className="text-left text-lg text-lightgray font-body font-normal px-4">
                                    I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                                </p>
                                <p className="text-left text-lg text-lightgray font-body font-normal px-4 mb-0">
                                    info@mysite.com 
                                </p>
                                <p className="text-left text-lg text-lightgray font-body font-normal px-4">
                                    +123-456-7890
                                </p>
                                <a href="#" class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">Read more</a>
                                </div>
                            </div>
                        
                        </div>
                    </Col>
                    {/* Card 1 */}

                    {/* Card 2 */}
                    <Col lg="4">
                        <div class=" mx-4 my-4">
                            <div class="w-full rounded-md shadow-md bg-white">
                                <img src={About2} class="h-64 lg:h-full object-cover object-center w-full p-4" alt="..."/>
                                <div class="p-4">
                                <h5 class="pl-4 pb-5 text-left text-sm text-gray font-bold font-3xl font-body tracking-widest mb-2">
                                    Barry Mcdonald
                                </h5>
                                <p className="text-left text-lg text-lightgray font-body font-normal px-4">
                                    I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                                </p>
                                <p className="text-left text-lg text-lightgray font-body font-normal px-4 mb-0">
                                    info@mysite.com 
                                </p>
                                <p className="text-left text-lg text-lightgray font-body font-normal px-4">
                                    +123-456-7890
                                </p>
                                    
                                <a href="#" class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">Read more</a>
                                </div>
                            </div>
                        
                        </div>
                    </Col>
                    {/* Card 2 */}

                    {/* Card 3 */}
                    <Col lg="4">
                        <div class=" mx-4 my-4">
                            <div class="w-full rounded-md shadow-md bg-white">
                                <img src={About3} class="h-64 lg:h-full object-cover object-center w-full p-4" alt="..."/>
                                <div class="p-4">
                                    <h5 class="pl-4 pb-5 text-left text-sm text-gray font-bold font-3xl font-body tracking-widest mb-2">
                                        Larry Turner
                                    </h5>
                                    <p className="text-left text-lg text-lightgray font-body font-normal px-4">
                                        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                                    </p>
                                    <p className="text-left text-lg text-lightgray font-body font-normal px-4 mb-0">
                                        info@mysite.com 
                                    </p>
                                    <p className="text-left text-lg text-lightgray font-body font-normal px-4">
                                        +123-456-7890
                                    </p>
                                    <a href="#" class=" bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white  inline-block mt-4 rounded-full">
                                        Read more     
                                    </a>
                                </div>
                            </div>
                        
                        </div>
                    </Col>
                    {/* Card 3 */}
                </Row>
                
            </div>
        )
    }
}
