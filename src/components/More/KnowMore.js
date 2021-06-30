import React, { Component } from 'react'
import KnowBg from '../../assets/images/know-more.png'
import {Container, Row, Col} from 'react-bootstrap'

export default class KnowMore extends Component {
    render() {
        return (
            <div className="know-more-mian">
                <h1 className="text-gray text-6xl font-normal pt-5 pb-4">
                    I Still want to know more...
                </h1>
                <p className="text-gray text-xl font-normal pb-5">
                    Which category do you fall under. Click below to know more.
                </p>
                <div className="">
                    <Container>
                    <div className="know-inner bg-no-repeat bg-top pt-100 bg-cover" style={{ backgroundImage:`url(${KnowBg})` }}>
                        <Row>
                            <Col md="6" className="relative">
                            <div className="para1 text-left">
                                <h1 className="text-gray font-bold text-3xl">I'm a Landlord</h1>
                                <p className="text-gray text-lg font-normla">
                                    Why does this benefit me? Can I still protect
                                    <br/>
                                    my interests? How do I ensure fairness? 
                                    <br/>
                                    What if I want to dispute?
                                </p>
                                <button className="bg-green rounded-full px-4 py-1.5 text-xl text-white font-bold">
                                    View more
                                </button>
                            </div>
                            </Col>
                            <Col md="6">
                            <div className="para2 text-left">
                                <h1 className="text-gray font-bold text-3xl">I'm a propert manager</h1>
                                <p className="text-gray text-lg font-normla">
                                    Make this yours. Add images, text 
                                    <br/>
                                    and links, or connect  data from your
                                    <br/>
                                    collection.
                                </p>
                                <button className="bg-green rounded-full px-4 py-1.5 text-xl text-white font-bold">
                                    View more
                                </button>
                            </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                            <div className="para3 text-center">
                                <h1 className="text-gray font-bold text-3xl">I'm an Agent</h1>
                                <p className="text-gray text-lg font-normla">
                                Make this your. Add images, text and links, or
                                <br/>
                                connect data from your collection.
                                </p>
                                <button className="bg-green rounded-full px-4 py-1.5 text-xl text-white font-bold">
                                    View more
                                </button>
                            </div>
                            </Col>
                            <Col md="6">
                            <div className="para4 text-center">
                                <h1 className="text-gray font-bold text-3xl">I'm a Tenant</h1>
                                <p className="text-gray text-lg font-normla">
                                    Make this your. Add images, text and links, or
                                    <br/>
                                    connect data from your collection.
                                </p>
                                <button className="bg-green rounded-full px-4 py-1.5 text-xl text-white font-bold">
                                    View more
                                </button>
                            </div>
                            </Col>
                        </Row>
                        </div>
                    </Container>
                    {/* <div>
                        <h1 className="text-gray font-bold text-3xl">I'm a Landlord</h1>
                        <p className="text-gray text-lg font-normla">
                            Why does this benefit me? Can I still protect
                            <br/>
                             my interests? How do I ensure fairness? 
                             <br/>
                             What if I want to dispute?
                        </p>
                        <button className="bg-green rounded-full px-4 py-1.5 text-xl text-white font-bold">
                            View more
                        </button>
                    </div> */}
                    
                </div>
            </div>
        )
    }
}
