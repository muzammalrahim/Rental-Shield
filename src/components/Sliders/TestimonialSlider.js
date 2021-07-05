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
      centerPadding: '60px',
      infinite: true,
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
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3
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
      <div className="px-5 pt-5 mt-20">
        <h2 className="text-6xl font-normal text-gray py-5 font-body pt-5 mt-5">What people say</h2>

        <Slider {...settings}>

          {/* Slide 1 */}
          <div className=" text-center">
              <h3 className="text-gray font-bold text-2xx text-left">
            “The best experience 
                <br/>
                to rent a house!”.
              </h3>
            <ul className="flex items-center">
              <li>
                <div className='img-wrap'>
                  <img className="rounded-full" src={Avatar} alt="avatar"/>
                </div>
              </li>
              <li>
                <p className="text-gray font-body text-lg text-left pl-3">Mohamed Kahled
                  <br/>
                    Marketing
                </p>
              </li>  
            </ul>  
          </div>
          {/* Slide 1 */}


          {/* Slide 2 */}
          <div className="px-5 text-center">
              <h3 className="text-gray font-bold text-2xx text-left">
            “The best experience 
                <br/>
                to rent a house!”.
              </h3>
            <ul className="flex items-center">
              <li>
                <div className='img-wrap'>
                  <img className="rounded-full" src={Avatar} alt="avatar"/>
                </div>
              </li>
              <li>
                <p className="text-gray font-body text-lg text-left pl-4">Mohamed Kahled
                  <br/>
                    Marketing
                </p>
              </li>  
            </ul>  
          </div>
          {/* Slide 2 */}

          {/* Slide 3 */}
          <div className="px-5 text-center">
              <h3 className="text-gray font-bold text-2xx text-left">
            “The best experience 
                <br/>
                to rent a house!”.
              </h3>
            <ul className="flex items-center">
              <li>
                <div className='img-wrap'>
                  <img className="rounded-full" src={Avatar} alt="avatar"/>
                </div>
              </li>
              <li>
                <p className="text-gray font-body text-lg text-left pl-4">Mohamed Kahled
                  <br/>
                    Marketing
                </p>
              </li>  
            </ul>  
          </div>

          {/* Slide 4 */}
          <div className="px-5 text-center">
              <h3 className="text-gray font-bold text-2xx text-left">
            “The best experience 
                <br/>
                to rent a house!”.
              </h3>
            <ul className="flex items-center">
              <li>
                <div className='img-wrap'>
                  <img className="rounded-full" src={Avatar} alt="avatar"/>
                </div>
              </li>
              <li>
                <p className="text-gray font-body text-lg text-left pl-4">Mohamed Kahled
                  <br/>
                    Marketing
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