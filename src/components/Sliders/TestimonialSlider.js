import React, { Component } from "react";
import Slider from "react-slick";
import NextArrowSlick from '../../assets/images/next-arrow.png';


function SampleNextArrow(props) {
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
      style={{ ...style, display: "block", background:'red', color:'#8a8a8a'}}
      onClick={onClick}
    />
  );
}

export default class TestimonialSlide extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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
      <div className="px-5">
        <h2 className="text-6xl font-normal text-gray py-5">What people say</h2>
        <Slider {...settings}>
          <div className="px-5 text-center">
            <h3 className="text-gray font-bold text-2xl text-left">
                "lorem ipsum dolor 
                <br/>
                the we're is the posicion
                <br/>
                dolor the is”.
              </h3>     
          </div>
          <div>
            <h3 className="text-gray font-bold text-5xl text-left">
                "lorem ipsum dolor 
                <br/>
                the we're is the posicion
                <br/>
                dolor the is”.
              </h3>
          </div>
          <div>
            <h3 className="text-gray font-bold text-2xl text-left">
                "lorem ipsum dolor 
                <br/>
                the we're is the posicion
                <br/>
                dolor the is”.
              </h3>
          </div>
          <div>
            <h3 className="text-gray font-bold text-5xl text-left">
                "lorem ipsum dolor 
                <br/>
                the we're is the posicion
                <br/>
                dolor the is”.
              </h3>
          </div>
          <div>
            <h3 className="text-gray font-bold text-2xl text-left">
                "lorem ipsum dolor 
                <br/>
                the we're is the posicion
                <br/>
                dolor the is”.
              </h3>
          </div>
          <div>
            <h3 className="text-gray font-bold text-2xl text-left">
                "lorem ipsum dolor 
                <br/>
                the we're is the posicion
                <br/>
                dolor the is”.
              </h3>
          </div>
        </Slider>
      </div>
    );
  }
}