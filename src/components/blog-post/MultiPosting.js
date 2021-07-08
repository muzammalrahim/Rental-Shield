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
                <div className='posts-main bg-green-700'>
                    <Container>
                        <PostSlider/>
                        <div>
                            <h3 className="text-gray-500 font-body font-bold text-3xl text-left">
                                Should I keep my A/C on if I am traveling for the summer?
                            </h3>
                            <p className="text-gray-500 font-body font-normal text-lg text-left">
                                It can be a tricky question here in the UAE and we hope to 
                                give you some insider tips on how to preserve...
                            </p>
                            <button className="bg-green-600 rounded-full px-4 py-2 text-lg text-white font-bold font-body header-btn">
                                View more
                            </button>
                        </div>
                    </Container>
                </div>
               
                
            </div>
        )
    }
}
