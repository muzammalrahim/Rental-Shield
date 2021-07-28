import React, { Component } from 'react'
import KnowBg from '../../assets/images/know-more.png'
import {Container, Row, Col} from 'react-bootstrap'

export default class KnowMore extends Component {
    render() {
        return (
            <div className="know-more-mian">
                <h1 className="text-gray-500 font-body lg:text-6xl md:text-6xl text-3xl font-normal pb-3 m-0">
                    I Still want to know more...
                </h1>
                <p className="text-gray-500  font-body text-2x font-normal pb-5 mb-20">
                    Which category do you fall under. Click below to know more.
                </p>
                <div className="">
                    
                    <div className="know-inner bg-no-repeat bg-center pt-100 bg-local" style={{ backgroundImage:`url(${KnowBg})` }}>
                        <div className="row1">
                            <div className="relative">
                                <div className="para1 text-left absolute w-1/4">
                                    <h1 className="text-gray-500 font-body font-bold pb-2 text-3xl">I'm a Landlord</h1>
                                    <p className="text-gray-500  font-body text-base lg:text-lg leading-5 pb-3 font-normal">
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
                                <div className="para2 text-left absolute">
                                    <h1 className="text-gray-500  font-body font-bold pb-2 text-3xl">I'm a propert manager</h1>
                                    <p className="text-gray-500  font-body text-lg font-normla  pb-3 leading-5">
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



                        <div className="row2">
                        <div className="relative">
                            <div className="para3 text-center absolute  w-1/4">
                                <h1 className="text-gray-500 font-body  pb-2 font-bold text-3xl ">I'm an Agent</h1>
                                <p className="text-gray-500  font-body text-lg font-normal pb-3 leading-5">
                                Make this your. Add images, text and links, or
                                connect data from your collection.
                                </p>
                                <button className="bg-green-500 mt-2 font-body rounded-full px-4 py-1.5 text-xl text-white font-bold">
                                    View more
                                </button>
                            </div>
                            </div>
                            <div className="relative">
                            <div className="para4 text-center absolute">
                                <h1 className="text-gray-500 font-body  pb-2 font-bold text-3xl">I'm a Tenant</h1>
                                <p className="text-gray-500 font-body text-lg font-normalt pb-3 leading-5">
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



{/* <div className="know-inner bg-no-repeat bg-center pt-100 bg-local" style={{ backgroundImage:`url(${KnowBg})` }}>
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
                        {/* <div className="row2">
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
                        </div>  */}
                   
                    
                    
                </div>
            </div>
        )
    }
}
