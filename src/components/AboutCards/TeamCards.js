import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'; 

export default class TeamCards extends Component {
    render() {
        return (
            <div className="our-team-main px-5">
                <Row>
                    {/* Card 1 */}
                    <Col lg="4">
                        <div class="mx-4 my-4">
                            <div class="w-full border">
                                <img src="https://source.unsplash.com/nqEJ548Hqjs/800x600" class="h-64 lg:h-full object-cover object-center w-full" alt="..."/>
                                <div class="p-4">
                                <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">Hello World</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                                <a href="#" class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">Read more</a>
                                </div>
                            </div>
                        
                        </div>
                    </Col>
                    {/* Card 1 */}

                    {/* Card 2 */}
                    <Col lg="4">
                        <div class=" mx-4 my-4">
                            <div class="w-full border">
                                <img src="https://source.unsplash.com/nqEJ548Hqjs/800x600" class="h-64 lg:h-full object-cover object-center w-full" alt="..."/>
                                <div class="p-4">
                                <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">Hello World</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                                <a href="#" class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">Read more</a>
                                </div>
                            </div>
                        
                        </div>
                    </Col>
                    {/* Card 2 */}

                    {/* Card 3 */}
                    <Col lg="4">
                        <div class=" mx-4 my-4">
                            <div class="w-full border">
                                <img src="https://source.unsplash.com/nqEJ548Hqjs/800x600" class="h-64 lg:h-full object-cover object-center w-full" alt="..."/>
                                <div class="p-4">
                                <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">Hello World</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                                <a href="#" class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">Read more</a>
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
