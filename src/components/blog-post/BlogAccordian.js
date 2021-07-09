import { bottom } from '@popperjs/core';
import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

// Fontawsom
import 
{ 
    FaAngleDown, FaAngleUp
} 
from "react-icons/fa";


export default class BlogAccordian extends Component {
    render() {
        return (
            <div className="blog-acc-main">
                
            <Container>
                 
                <div className="bg-white shadow-lg pt-4 px-5">
                    <button className="flex items-center title">
                        <FaAngleDown/><h3 className="text-green-500 text-bold text-3xl text-left pl-4">Comments</h3>
                    </button>
                    
                    <div className="collapse-div">
                         {/* Form */}
                    <form>
                        <Row className="pb-3 mt-4">
                            <Col md="5">
                                {/* Name */}
                                <div className="form-group text-left blog-review">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        aria-describedby="emailHelp"
                                        placeholder="Name"
                                        style={{ background: "",}}
                                    />
                                </div>
                                {/* Name */}
                            </Col>
                            <Col md="5" className="">
                                {/* Email */}
                                <div className="form-group text-left blog-review">
                                    {/* <label htmlFor="exampleInputPassword1" className="text-black font-normal text-lg">Email</label> */}
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="E-mail"
                                        style={{ background: "" }}
                                    />
                                </div>
                                {/* Email */}
                            </Col>
                        </Row>
                        {/* Message */}
                        
                        <div className="form-group text-left border rounded-md border-gray-500">
                            <textarea
                                rows={6}
                                type="text"
                                className="form-control bg-green-800"
                                id=""
                                placeholder="Write your comment"
                                style={{ border: "none", borderRadius: "10px" }}
                            />
                        </div>
                        {/* Message */}

                        {/* Button */}
                        <div className="text-center">
                            <button class="bg-green-500 rounded-full px-5 mb-4 mt-2 py-1 text-2x text-white font-bold">
                                Submit
                            </button>
                        </div>
                        {/* Button */}

                    </form>
                    {/* Form */}
                    </div>
                   
                </div>
                
            </Container>

                
            </div>

            
        )
    }
}
