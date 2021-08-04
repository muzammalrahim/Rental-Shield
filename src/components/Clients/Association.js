import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import Slider from "react-slick";

// Images
import NextArrowSlick from '../../assets/images/next-arrow.png';
import Avatar from '../../assets/images/ava.png';
import ClientBg from '../../assets/images/client-bg.png';

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

class Association extends Component {
    render() {
        const { t, i18n } = this.props;
        const settings = {
          dots: false,
          centerMode: true,
          // centerPadding: '60px',
          infinite: true,
          autoplay: true,
          autoplaySpeed:3000,
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
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
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
        };
    
        return (
            <div>

                {/* Web View */}
                <div className="client-t-main lg:px-5 md:px-5 sm:px-2 pb-4">
                    <Row className="client-row items-center">
                        <Col sm="12" md="12" lg="3">
                            <p className="text-lg lg:pl-4 lg:text-left md:text-center font-body text-gray text-black font-normal">{t('association-slide.association')}</p>
                        </Col>
                        <Col sm="12" md="12" lg="9">
                            <div className="clients text-center">
                                <ul className="md:flex-shrink-0 grid grid-cols-5">
                                    <li >
                                        <img className="md:h-full md:w-48" src={process.env.PUBLIC_URL + '/img/c1.png'} alt="client"/>
                                    </li>
                                    <li>
                                        <img className="md:h-full md:w-48" src={process.env.PUBLIC_URL + '/img/c2.png'} alt="client"/>
                                    </li>
                                    <li>
                                        <img className="md:h-full md:w-48" src={process.env.PUBLIC_URL + '/img/c3.png'} alt="client"/>
                                    </li>
                                    <li>
                                        <img className="md:h-full md:w-48" src={process.env.PUBLIC_URL + '/img/c4.png'} alt="client"/>
                                    </li>
                                    <li>
                                        <img className="md:h-full md:w-48" src={process.env.PUBLIC_URL + '/img/c5.png'} alt="client"/>
                                    </li>
                                </ul>
                            </div>
                            
                        </Col>
                    </Row>
                </div>
                {/* Web View */}



                {/* Mob View */}
                <div className="c-slider tc-slider" style={{width:'90%', margin:'0 auto'}}>

                    <Slider {...settings}>

                    {/* Slide 1 */}
                    <div className=" text-center slides">
                        <img src={process.env.PUBLIC_URL + '/img/fc1.png'} alt="client"/> 
                    </div>
                    {/* Slide 1 */}


                    {/* Slide 2 */}
                    <div className="text-center slides">
                        <img src={process.env.PUBLIC_URL + '/img/fc2.png'} alt="client"/>
                    </div>
                    {/* Slide 2 */}

                    {/* Slide 3 */}
                    <div className=" text-center slides">
                        <img src={process.env.PUBLIC_URL + '/img/fc3.png'} alt="client"/> 
                    </div>

                    {/* Slide 4 */}
                    <div className="text-center slides">
                        <img src={process.env.PUBLIC_URL + '/img/fc4.png'} alt="client"/>  
                    </div>
                    {/* Slide 4 */}

                    {/* Slide 5 */}
                    <div className="text-center slides">
                        <img src={process.env.PUBLIC_URL + '/img/fc5.png'} alt="client"/> 
                    </div>
                    {/* Slide 5 */}
                    </Slider>
                </div>
                 {/* Mob View */}
            </div>
            
        )
    }
}
export default withTranslation(['common'])(Association);
