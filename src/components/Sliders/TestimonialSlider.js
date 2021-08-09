import React, { Component } from "react";
import Slider from "react-slick";
import NextArrowSlick from '../../assets/images/next-arrow.png';
import Avatar from '../../assets/images/ava.png';

//Translation
import { withTranslation } from 'react-i18next';


function SlickArrowLeft(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background:`url(${NextArrowSlick})`}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color:'#8a8a8a'}}
      onClick={onClick}
    />
  );
}

class TestimonialSlide extends Component {
  render() {
    const { t, i18n } = this.props;
    const settings = {
      dots: false,
      centerMode: true,
      // centerPadding: '60px',
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SlickArrowLeft />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    
    return (
      <div className="h-slider pt-5 mt-20" style={{width:'90%', margin:'0 auto'}}>
        <h2 className="text-6xl font-normal text-gray-500 py-5 font-body pt-5 mt-32 mb-5">What people say</h2>

        <Slider {...settings}>

          {/* Slide 1 */}
          <div className=" text-center slides">
              <h3 className="text-gray-500 font-bold font-body text-2xx text-left pb-3">
            “The best experience 
                
                to rent a house!”.
              </h3>
            <ul className="flex items-center">
              <li className="">
                <div className='img-wrap'>
                  <img className="rounded-full" src={Avatar} alt="avatar"/>
                </div>
              </li>
              <li className="user-info">
                <p className="text-gray-500 font-body font-normal text-lg text-left pl-3 pt-3 leading-5">Mohamed Kahled
                  <br/>
                   <span>Marketing</span> 
                </p>
              </li>  
            </ul>  
          </div>
          {/* Slide 1 */}


          {/* Slide 2 */}
          <div className="text-center slides">
              <h3 className="text-gray-500 font-bold font-body text-2xx text-left pb-3">
            “The best experience 
                
                to rent a house!”.
              </h3>
            <ul className="flex items-center">
              <li>
                <div className='img-wrap'>
                  <img className="rounded-full" src={Avatar} alt="avatar"/>
                </div>
              </li>
              <li className="user-info">
                <p className="text-gray-500 font-body  font-normal text-lg text-left pl-3 pt-3 leading-5 test-title">Mohamed Kahled
                  <br/>
                  <span>Marketing</span> 
                </p>
              </li>  
            </ul>  
          </div>
          {/* Slide 2 */}

          {/* Slide 3 */}
          <div className=" text-center slides">
              <h3 className="text-gray-500 font-bold font-body text-2xx text-left pb-3">
            “The best experience 
                
                to rent a house!”.
              </h3>
            <ul className="flex items-center">
              <li>
                <div className='img-wrap'>
                  <img className="rounded-full" src={Avatar} alt="avatar"/>
                </div>
              </li>
              <li className="user-info">
                <p className="text-gray-500 font-body  font-normal text-lg text-left pl-3 pt-3 leading-5">Mohamed Kahled
                  <br/>
                  <span>Marketing</span> 
                </p>
              </li>  
            </ul>  
          </div>

          {/* Slide 4 */}
          <div className="text-center slides">
              <h3 className="text-gray-500 font-bold font-body text-2xx text-left pb-3">
            “The best experience 
                
                to rent a house!”.
              </h3>
            <ul className="flex items-center">
              <li>
                <div className='img-wrap'>
                  <img className="rounded-full" src={Avatar} alt="avatar"/>
                </div>
              </li>
              <li className="user-info">
                <p className="text-gray-500 font-body font-normal text-lg text-left pl-3 pt-3 leading-5">Mohamed Kahled
                  <br/>
                  <span>Marketing</span> 
                </p>
              </li>  
            </ul>  
          </div>
          {/* Slide 4 */}
        </Slider>
      </div>
    );
  }
}
export default withTranslation(['common'])(TestimonialSlide);