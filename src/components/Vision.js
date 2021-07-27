import React, { Component } from 'react'
import { Container } from "react-bootstrap";




export default class Vision extends Component {
    render() {
        return (
            <div className="vision-main">
                <Container>
                    <h3 className="font-body text-3xl lg:text-6xl text-gray-500 font-normal pb-4">
                        Our Vision
                    </h3>
                    <p className="font-body text-lg lg:text-2xl text-gray-500 font-normal leading-7 pb-3 px-10">
                        To bring a whole new world of PropTech into the region and beyond. 
                        Thinking big is only the start, we want to be the first to market with 
                        the biggest and longest-lasting impact.
                    </p>
                    <p className="font-body text-lg lg:text-2xl text-gray-500 font-normal pb-3 leading-7 px-10">
                        This concept is rare worldwide and uniqueness is our strength. Through the
                         use of our sophisticated online platforms, we aim to strengthen the whole real estate market. 

                        
                    </p>
                    <p className="font-body text-lg lg:text-2xl text-gray-500 font-normal leading-7 mb-5">
                        Join us on our journey.... 
                    </p>

                    <button className="bg-green-900 rounded-full font-body px-4 py-1.5 text-xl text-white font-bold">
                        Read More
                    </button>
                         
                    
                </Container>
            </div>
        )
    }
}
