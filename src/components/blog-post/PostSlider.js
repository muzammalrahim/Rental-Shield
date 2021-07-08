import React, { Component } from "react";
import Slider from "react-slick";
import {Container, Row, Col} from 'react-bootstrap'; 


// Images
import Slide1 from '../../assets/images/slid1.png';

export default class PostSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider-main">
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>

            {/* Slide 1 */}
          <div className='slide1'>
            <img className="w-full px-11" src={Slide1} alt="img"/>
          </div>
          {/* Slide 1 */}

          {/* Slide 2 */}
          <div>
            <img className="w-full px-11" src={Slide1} alt="img"/>
          </div>
          {/* Slide 2 */}

          {/* Slide 3 */}
          <div>
            <img className="w-full px-11" src={Slide1} alt="img"/>
          </div>
          {/* Slide 3 */}
          
        </Slider>
      </div>
    );
  }
}