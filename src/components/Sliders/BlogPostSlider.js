import React, { Component } from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom'


// Images
import NextArrowSlick from '../../assets/images/next-arrow.png';
import Avatar from '../../assets/images/ava.png';
import Slideimg from '../../assets/images/home.jpg';


// Fontawsom
import {FaHeart, FaArrowLeft} from "react-icons/fa";
import {FaRegStar} from "react-icons/fa";
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


  class BlogPostSlider extends Component {
      render() {
        const { t, i18n } = this.props;
        const settings = {
          dots: false,
          centerMode: false,
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
        // <div className="md:container md:mx-auto my-10">
          <div className="md:container md:mx-auto my-10 blog-page-slider">
          <Slider {...settings}>
          {/* <div className="p-3"><img className="w-full rounded-2xl" src={Slideimg} /></div>
          <div className="p-3"><img className="w-full rounded-2xl" src={Slideimg} /></div>
          <div className="p-3"><img className="w-full rounded-2xl" src={Slideimg} /></div>
          <div className="p-3"><img className="w-full rounded-2xl" src={Slideimg} /></div>
          <div className="p-3"><img className="w-full rounded-2xl" src={Slideimg} /></div> */}

          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-8">
            <a href="" className="no-underline hover:no-underline">
              <div class="bg-white rounded-2xl overflow-hidden shadow-lg pl-4 pr-4 pt-3 pb-3">
                <img className="w-full rounded-2xl" src={Slideimg} />
                <div className="pt-4 pl-2 text-left">
                  <span className="inline-block text-green-900 text-normal font-normal">Tag</span>
                  <div className="text-xl font-bold text-gray-500 mb-2">Should I keep my A/C on if I am traveling for the summer?</div>
                  <p className="text-normal text-gray-500">
                        It can be a tricky question here in the UAE and we hope to give you some insider tips on how to preserve...
                  </p>
                </div>
                <div class="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="text-lg">
                    <a class="no-underline text-black" href="#">
                      <div class="flex items-center text-sm text-green-900"><FaRegStar style={{ fontSize: 24 }}/><FaRegStar style={{ fontSize: 24 }}/><FaRegStar style={{ fontSize: 24 }}/><FaRegStar style={{ fontSize: 24 }}/></div>
                    </a>
                  </h1>
                <Link href="#" class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block rounded-full">
                <span class="hidden">Like</span>
                <FaHeart/>
                </Link>
                </div>
              </div>
            </a>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-8">
            <a href="" className="no-underline hover:no-underline">
              <div class="bg-white rounded-2xl overflow-hidden shadow-lg pl-4 pr-4 pt-3 pb-3">
                <img className="w-full rounded-2xl" src={Slideimg} />
                <div className="pt-4 pl-2 text-left">
                  <span className="inline-block text-green-900 text-normal font-normal">Tag</span>
                  <div className="text-xl font-bold text-gray-500 mb-2">Should I keep my A/C on if I am traveling for the summer?</div>
                  <p className="text-normal text-gray-500">
                        It can be a tricky question here in the UAE and we hope to give you some insider tips on how to preserve...
                  </p>
                </div>
                <div class="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="text-lg">
                    <a class="no-underline text-black" href="#">
                      <div class="flex items-center text-sm text-green-900"><FaRegStar style={{ fontSize: 24 }}/><FaRegStar style={{ fontSize: 24 }}/><FaRegStar style={{ fontSize: 24 }}/><FaRegStar style={{ fontSize: 24 }}/></div>
                    </a>
                  </h1>
                <Link href="#" class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block rounded-full">
                <span class="hidden">Like</span>
                <FaHeart/>
                </Link>
                </div>
              </div>
            </a>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-8">
            <a href="" className="no-underline hover:no-underline">
              <div class="bg-white rounded-2xl overflow-hidden shadow-lg pl-4 pr-4 pt-3 pb-3">
                <img className="w-full rounded-2xl" src={Slideimg} />
                <div className="pt-4 pl-2 text-left">
                  <span className="inline-block text-green-900 text-normal font-normal">Tag</span>
                  <div className="text-xl font-bold text-gray-500 mb-2">Should I keep my A/C on if I am traveling for the summer?</div>
                  <p className="text-normal text-gray-500">
                        It can be a tricky question here in the UAE and we hope to give you some insider tips on how to preserve...
                  </p>
                </div>
                <div class="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="text-lg">
                    <a class="no-underline text-black" href="#">
                      <div class="flex items-center text-sm text-green-900"><FaRegStar style={{ fontSize: 24 }}/><FaRegStar style={{ fontSize: 24 }}/><FaRegStar style={{ fontSize: 24 }}/><FaRegStar style={{ fontSize: 24 }}/></div>
                    </a>
                  </h1>
                <Link href="#" class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block rounded-full">
                <span class="hidden">Like</span>
                <FaHeart/>
                </Link>
                </div>
              </div>
            </a>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-8">
            <a href="" className="no-underline hover:no-underline">
              <div class="bg-white rounded-2xl overflow-hidden shadow-lg pl-4 pr-4 pt-3 pb-3">
                <img className="w-full rounded-2xl" src={Slideimg} />
                <div className="pt-4 pl-2 text-left">
                  <span className="inline-block text-green-900 text-normal font-normal">Tag</span>
                  <div className="text-xl font-bold text-gray-500 mb-2">Should I keep my A/C on if I am traveling for the summer?</div>
                  <p className="text-normal text-gray-500">
                        It can be a tricky question here in the UAE and we hope to give you some insider tips on how to preserve...
                  </p>
                </div>
                <div class="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="text-lg">
                    <a class="no-underline text-black" href="#">
                      <div class="flex items-center text-sm text-green-900"><FaRegStar style={{ fontSize: 24 }}/><FaRegStar style={{ fontSize: 24 }}/><FaRegStar style={{ fontSize: 24 }}/><FaRegStar style={{ fontSize: 24 }}/></div>
                    </a>
                  </h1>
                <Link href="#" class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block rounded-full">
                <span class="hidden">Like</span>
                <FaHeart/>
                </Link>
                </div>
              </div>
            </a>
          </div>


          </Slider>
          
        </div>
      );
    }
  }
export default withTranslation(['common'])(BlogPostSlider);