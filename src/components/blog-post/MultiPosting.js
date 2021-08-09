import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'; 

// Components
import PostSlider from '../../components/blog-post/PostSlider';
import SliderBg from '../../assets/images/slider-bg.png';



export default class MultiPosting extends Component {
    render() {
        return (
            <div className="">
                <img className="w-full" src={SliderBg} alt=""/>
                <div className='posts-main b-p-slider bg-green-700 mb-20'>
                    <Container>
                        <PostSlider/>
                        <div className="pl-4 pt-3 relative bottom-12 items-center">
                            <h3 className="text-gray-500 font-body font-bold text-3xl text-left pl-3 pb-3">
                                Should I keep my A/C on if I am traveling for the summer?
                            </h3>
                            <p className="text-gray-500 font-body font-normal text-lg text-left pl-3">
                                It can be a tricky question here in the UAE and we hope to 
                                <br/>
                                give you some insider tips on how to preserve...
                            </p>
                            <button className="bg-green-600 rounded-full px-4 py-2 ml-3 mt-3 text-lg text-white font-bold font-body header-btn">
                                View more
                            </button>
                        </div>
                    </Container>
                </div>
               
                
            </div>
        )
    }
}
