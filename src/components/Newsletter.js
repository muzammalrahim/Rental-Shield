import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { FaPaperPlane } from "react-icons/fa";

// Images
import Bg from "../assets/images/newsletter-bg.png";
import NewsIcon from "../assets/images/newsletter-icon.png";




export default class Newsletter extends Component {
    render() {
        return (
            <div className="newsletter-main">
                <Container>
                    <div className="newsletter-inner shadow-lg pb-20 my-28 bg-no-repeat" style={{backgroundImage: `url(${Bg})`}}>
                        
                        <div className="news-inner-top mb-11">
                            <h3 className="text-gray-500 font-body text-5xl text-center font-normal px-5 pt-4"
                            style={{lineHeight:'55px'}}>
                                Or sign up to our newsletter for updates
                            </h3>
                            <p className="text-center text-gray-500 font-body font-normal px-52  mt-4 mb-40 text-2lx leading-7">
                                Still want to keep updated on our progress, then please sign up 
                                to our monthly newsletter that will show you were we've reached on our 
                                journey. Join us
                            </p>
                        </div>

                        <div className="news-inner-bottom relative">
                            <input
                            type="text"
                            className="h-14 relative min-w-1/2 pl-5 pr-5 z-0 focus:outline-none border-2 border-gray-500 rounded-full"
                            placeholder="Email adress here..."
                            />
                            <button>
                                <img className="absolute" src={NewsIcon} alt="img" style={{right:'27%', top:'10px'}}/>
                            </button>
                        </div>
                        
                    </div>
                    
                </Container>
            </div>
        )
    }
}
