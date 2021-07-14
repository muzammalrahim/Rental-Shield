import React, { Component } from 'react'
import KnowBg from '../../assets/images/know-more.png'
import {Container, Row, Col} from 'react-bootstrap'

export default class KnowMore extends Component {
    render() {
        return (
            <div className="know-more-mian">
                <h1 className="text-gray-500 font-body text-6xl font-normal pb-3 m-0">
                    I Still want to know more...
                </h1>
                <p className="text-gray-500  font-body text-2x font-normal pb-5 mb-5">
                    Which category do you fall under. Click below to know more.
                </p>
                <div className="">
                    <Container>
                    {/* <div className="know-inner bg-no-repeat bg-center pt-100 bg-local" style={{ backgroundImage:`url(${KnowBg})` }}>
                        <Row>
                            <Col md="6" className="relative">
                            <div className="para1 text-left">
                                <h1 className="text-gray-500 font-body font-bold text-3xl">I'm a Landlord</h1>
                                <p className="text-gray-500  font-body text-lg leading-5 font-normal">
                                    Why does this benefit me? Can I still protect
                                    my interests? How do I ensure fairness? 
                                    What if I want to dispute?
                                </p>
                                <button className="bg-green-500 font-body rounded-full mt-2 px-4 py-1.5 text-xl text-white font-bold">
                                    View more
                                </button>
                            </div>
                            </Col>
                            <Col md="6"  className="relative">
                                <div className="para2 text-left">
                                    <h1 className="text-gray-500  font-body font-bold text-3xl">I'm a propert manager</h1>
                                    <p className="text-gray-500  font-body text-lg font-normla  leading-6">
                                        Make this yours. Add images, text 
                                        <br/>
                                        and links, or connect  data from your
                                        <br/>
                                        collection.
                                    </p>
                                    <button className="bg-green-500 font-body mt-2 rounded-full px-4 py-1.5 text-xl text-white font-bold">
                                        View more
                                    </button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                            <div className="para3 text-center">
                                <h1 className="text-gray-500 font-body  font-bold text-3xl ">I'm an Agent</h1>
                                <p className="text-gray-500  font-body text-lg font-normal  leading-6">
                                Make this your. Add images, text and links, or
                                connect data from your collection.
                                </p>
                                <button className="bg-green-500 mt-2 font-body rounded-full px-4 py-1.5 text-xl text-white font-bold">
                                    View more
                                </button>
                            </div>
                            </Col>
                            <Col md="6">
                            <div className="para4 text-center">
                                <h1 className="text-gray-500 font-body  font-bold text-3xl">I'm a Tenant</h1>
                                <p className="text-gray-500 font-body text-lg font-normalt leading-6">
                                    Make this your. Add images, text and links, or
                                    <br/>
                                    connect data from your collection.
                                </p>
                                <button className="bg-green-500 mt-2 font-body rounded-full px-4 py-1.5 text-xl text-white font-bold">
                                    View more
                                </button>
                            </div>
                            </Col>
                        </Row>
                        </div> */}



<div className="know-inner bg-no-repeat bg-center pt-100 bg-local" style={{ backgroundImage:`url(${KnowBg})` }}>
                        <div className="row1 grid">
                            <div className="relative">
                            <div className="para1 text-left">
                                <h1 className="text-gray-500 font-body font-bold text-3xl">I'm a Landlord</h1>
                                <p className="text-gray-500  font-body text-lg leading-5 font-normal">
                                    Why does this benefit me? Can I still protect
                                    my interests? How do I ensure fairness? 
                                    What if I want to dispute?
                                </p>
                                <button className="bg-green-500 font-body rounded-full mt-2 px-4 py-1.5 text-xl text-white font-bold">
                                    View more
                                </button>
                            </div>
                            </div>
                            <div className="relative">
                                <div className="para2 text-left">
                                    <h1 className="text-gray-500  font-body font-bold text-3xl">I'm a propert manager</h1>
                                    <p className="text-gray-500  font-body text-lg font-normla  leading-5">
                                        Make this yours. Add images, text 
                                        <br/>
                                        and links, or connect  data from your
                                        <br/>
                                        collection.
                                    </p>
                                    <button className="bg-green-500 font-body mt-2 rounded-full px-4 py-1.5 text-xl text-white font-bold">
                                        View more
                                    </button>
                                </div>
                            </div>
                        </div>


                        {/* Row2 */}
                        <div className="row2">
                        <div className="relative">
                            <div className="para3 text-center">
                                <h1 className="text-gray-500 font-body  font-bold text-3xl ">I'm an Agent</h1>
                                <p className="text-gray-500  font-body text-lg font-normal  leading-5">
                                Make this your. Add images, text and links, or
                                connect data from your collection.
                                </p>
                                <button className="bg-green-500 mt-2 font-body rounded-full px-4 py-1.5 text-xl text-white font-bold">
                                    View more
                                </button>
                            </div>
                            </div>
                            <div className="relative">
                            <div className="para4 text-center">
                                <h1 className="text-gray-500 font-body  font-bold text-3xl">I'm a Tenant</h1>
                                <p className="text-gray-500 font-body text-lg font-normalt leading-5">
                                    Make this your. Add images, text and links, or
                                    <br/>
                                    connect data from your collection.
                                </p>
                                <button className="bg-green-500 mt-2 font-body rounded-full px-4 py-1.5 text-xl text-white font-bold">
                                    View more
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </Container>
                    
                    
                </div>
            </div>
        )
    }
}
