import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import Blogmainicon from '../../assets/images/blog-heading-icon.png';
import Blogfilter from '../../components/Blog/Blog-filters-pills';

import Header from '../Header';

import rentalLeftTop from '../../assets/images/banner-left.png';

export default class RentalShieldz extends Component {
    render() {
        return (
            <div className="rental-shield-banner bg-no-repeat bg-50" style={{ backgroundImage:`url(${rentalLeftTop})` }}>
<Header/>
                <div className="rental-shield-inner">
                <div className="md:container md:mx-auto px-0 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <div className="flex w-full md:w-2/5 flex-wrap pt-96 text-left">
                            <h1 className="float-left text-green-900 text-6xl mr-5 w-6/12">Hello Investors!</h1>
                            <h3 className="float-left text-black text-3xl mr-5 w-9/12">We are Looking for the best</h3>
                            <p className="w-9/12">It has to be more than just money. We are looking for people to join us in our long term vision. </p>
                        </div>
                        <div className="w-full md:w-3/5 text-center">
                            <Blogfilter/>
                        </div>
                </div>

            </div>
                {/* <svg viewBox="0 0 500 150">
                    <path d="M-22.29,128.78 C201.18,196.88 334.93,46.88 533.57,153.45 L500.00,0.00 L-21.72,-13.31 Z" style={{stroke: "none", fill:"#F9F9F9"}}></path>
                </svg> */}

                {/*<div class="wave-container">
                    <h1>Hello, world!</h1>
                    <p>Check out my awesome waves!</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 320">
                        <path d="M-22.29,128.78 C201.18,196.88 334.93,46.88 533.57,153.45 L500.00,0.00 L-21.72,-13.31 Z" style={{stroke: "none", fill:"#F9F9F9"}}></path>
                    </svg>
                </div>*/}


                    {/* <BlogPostSlider/> */}
            </div>
        )
    }
}
