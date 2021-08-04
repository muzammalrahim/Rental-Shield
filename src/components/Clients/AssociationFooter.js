import React, { Component } from "react";
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

class AssociationFooter extends Component {
  render() {
    const { t, i18n } = this.props;
    const settings = {
      dots: false,
      centerMode: true,
      // centerPadding: '60px',
      infinite: true,
      autoplay: true,
      autoplaySpeed:4000,
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
        <div className="footer-hclients">

            {/* Web Clients */}
            <div className="hc-webdiv">
                <div className="Association-f-main">    
                    <div className="clients bg-no-repeat bg-cover" style={{ backgroundImage:`url(${ClientBg})` }}>
                        <p className="text-gray-500 text-5x pb-5 pt-5">
                        {t('association-footer.association-f')} 
                        </p>
                        <div className="w-10/12 mx-auto">
                            <ul className="m-0 grid grid-cols-5 pl-3  pb-4">
                                <li>
                                        <img src={process.env.PUBLIC_URL + '/img/fc1.png'} alt="client"/>
                                    </li>
                                <li>
                                        <img src={process.env.PUBLIC_URL + '/img/fc2.png'} alt="client"/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + '/img/fc3.png'} alt="client"/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + '/img/fc4.png'} alt="client"/>
                                </li>
                            <li>
                                    <img src={process.env.PUBLIC_URL + '/img/fc5.png'} alt="client"/>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* Web Clients */}

            {/* Mob slider */}
            <div className="c-slider ass-mslider bg-green-700">
                <div className="fc-slider pt-3 bp-4 mt-20" style={{width:'90%', margin:'0 auto'}}>

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
            </div>                
        </div>
      
    );
  }
}
export default withTranslation(['common'])(AssociationFooter);
