import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// Images
import NextArrowSlick from "../../assets/images/next-arrow.png";
import Avatar from "../../assets/images/ava.png";
import ShopSliderOneImg1 from "../../assets/images/ShopSliderOneImg1.png";
import ShopSliderOneImg2 from "../../assets/images/ShopSliderOneImg2.png";
import ShopSliderOneImg3 from "../../assets/images/ShopSliderOneImg3.png";

// Fontawsom
import { FaHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
//Translation
import { withTranslation } from "react-i18next";

function SlickArrowLeft(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: `url(${NextArrowSlick})`,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "#8a8a8a" }}
      onClick={onClick}
    />
  );
}

class ShopSliderOne extends Component {
  render() {
    const { t, i18n } = this.props;
    const settings = {
      dots: false,
      centerMode: false,
      centerPadding: "60px",
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
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="px-5 pt-5 mt-20 md:container md:mx-auto my-10 shop-page-slider">
        <Slider {...settings}>
          {/* Slide 1 */}

          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-8 shopSlider">
            <p className="text-green-500 font-medium text-3xl text-left mb-8">
              Product category
            </p>
            <a href="" className="no-underline hover:no-underline">
              <div class="bg-white rounded-2xl overflow-hidden custom-shadow pl-4 pr-4 pt-3 pb-3">
                <img className="w-full rounded-2xl" src={ShopSliderOneImg1} />
                <div className="pl-2 text-left">
                  <div className="pt-4 text-3xl font-normal text-gray-500 mb-2 mr-2 w-9/12 float-left">
                    Name product
                  </div>
                  <p className=" text-gray-500 pt-3 pb-2 text-lg md:text-5x leading-6 font-normal 2lx text-left font-body ">
                    <sup>
                      {" "}
                      <span className="text-lg">$</span>
                    </sup>{" "}
                   
                    <span className="text-5xl"> 55</span>
                  </p>
                </div>
                {/* <div className="px-6 pt-4 pb-2"> */}
                <div class="flex items-center justify-between leading-tight p-2 md:p-4 float-left w-full">
                  <h1 class="text-lg">
                    <a class="no-underline text-black" href="#">
                      <div class="flex items-center text-sm ">
                        <FaRegStar
                          className="text-green-900"
                          style={{ fontSize: 24 }}
                        />
                        <FaRegStar
                          className="text-green-900"
                          style={{ fontSize: 24 }}
                        />
                        <FaRegStar
                          className="text-green-900"
                          style={{ fontSize: 24 }}
                        />
                        <FaRegStar
                          className="text-gray-900"
                          style={{ fontSize: 24 }}
                        />
                        <FaRegStar
                          className="text-gray-900"
                          style={{ fontSize: 24 }}
                        />
                      </div>
                    </a>
                  </h1>
                  {/* <p class="text-grey-darker text-sm"> */}
                  <Link
                    href="#"
                    class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block rounded-full"
                  >
                    <span class="hidden">Like</span>
                    <FaHeart />
                  </Link>
                  {/* </p> */}
                </div>
              </div>
              {/* </div> */}
            </a>
          </div>
          {/* Slide 1 */}

          {/* Slide 2 */}
          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <p className="text-green-500 font-medium text-3xl text-left mb-8">
              Product category
            </p>
            <a href="" className="no-underline hover:no-underline">
              <div class="bg-white rounded-2xl overflow-hidden custom-shadow pl-4 pr-4 pt-3 pb-3">
                <img className="w-full rounded-2xl" src={ShopSliderOneImg2} />
                <div className="pl-2 text-left">
                <div className="pt-4 text-3xl font-normal text-gray-500 mb-2 mr-2 w-9/12 float-left">
                    Name product
                  </div>
                  <p className=" text-gray-500 pt-3 pb-2 text-lg md:text-5x leading-6 font-normal 2lx text-left font-body ">
                    <sup>
                      {" "}
                      <span className="text-lg">$</span>
                    </sup>{" "}
                    55
                  </p>
                </div>
                {/* <div className="px-6 pt-4 pb-2"> */}
                <div class="flex items-center justify-between leading-tight p-2 md:p-4 float-left w-full">
                  <h1 class="text-lg">
                    <a class="no-underline text-black" href="#">
                      <div class="flex items-center text-sm ">
                        <FaRegStar
                          className="text-green-900"
                          style={{ fontSize: 24 }}
                        />
                        <FaRegStar
                          className="text-green-900"
                          style={{ fontSize: 24 }}
                        />
                        <FaRegStar
                          className="text-green-900"
                          style={{ fontSize: 24 }}
                        />
                        <FaRegStar
                          className="text-gray-900"
                          style={{ fontSize: 24 }}
                        />
                        <FaRegStar
                          className="text-gray-900"
                          style={{ fontSize: 24 }}
                        />
                      </div>
                    </a>
                  </h1>
                  {/* <p class="text-grey-darker text-sm"> */}
                  <Link
                    href="#"
                    class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block rounded-full"
                  >
                    <span class="hidden">Like</span>
                    <FaHeart />
                  </Link>
                  {/* </p> */}
                </div>
              </div>
              {/* </div> */}
            </a>
          </div>
          {/* Slide 2 */}

          {/* Slide 3 */}
          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <p className="text-green-500 font-medium text-3xl text-left mb-8">
              Product category
            </p>
            <a href="" className="no-underline hover:no-underline">
              <div class="bg-white rounded-2xl overflow-hidden custom-shadow pl-4 pr-4 pt-3 pb-3">
                <img className="w-full rounded-2xl" src={ShopSliderOneImg3} />
                <div className=" pl-2 text-left">
                <div className="pt-4 text-3xl font-normal text-gray-500 mb-2 mr-2 w-9/12 float-left">
                    Name product
                  </div>
                  <p className=" text-gray-500 pt-3 pb-2 text-lg md:text-5x leading-6 font-normal 2lx text-left font-body ">
                    <sup>
                      {" "}
                      <span className="text-lg">$</span>
                    </sup>{" "}
                    55
                  </p>
                </div>
                {/* <div className="px-6 pt-4 pb-2"> */}
                <div class="flex items-center justify-between leading-tight p-2 md:p-4 float-left w-full">
                  <h1 class="text-lg">
                    <a class="no-underline text-black" href="#">
                      <div class="flex items-center text-sm ">
                        <FaRegStar
                          className="text-green-900"
                          style={{ fontSize: 24 }}
                        />
                        <FaRegStar
                          className="text-green-900"
                          style={{ fontSize: 24 }}
                        />
                        <FaRegStar
                          className="text-green-900"
                          style={{ fontSize: 24 }}
                        />
                        <FaRegStar
                          className="text-gray-900"
                          style={{ fontSize: 24 }}
                        />
                        <FaRegStar
                          className="text-gray-900"
                          style={{ fontSize: 24 }}
                        />
                      </div>
                    </a>
                  </h1>
                  {/* <p class="text-grey-darker text-sm"> */}
                  <Link
                    href="#"
                    class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block rounded-full"
                  >
                    <span class="hidden">Like</span>
                    <FaHeart />
                  </Link>
                  {/* </p> */}
                </div>
              </div>
              {/* </div> */}
            </a>
          </div>
          {/* Slide 3 */}

          {/* Slide 4 */}
          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <p className="text-green-500 font-medium text-3xl text-left mb-8">
              Product category
            </p>
            <a href="" className="no-underline hover:no-underline">
              <div class="bg-white rounded-2xl overflow-hidden custom-shadow pl-4 pr-4 pt-3 pb-3">
                <img className="w-full rounded-2xl" src={ShopSliderOneImg1} />
                <div className=" pl-2 text-left">
                <div className="pt-4 text-3xl font-normal text-gray-500 mb-2 mr-2 w-9/12 float-left">
                    Name product
                  </div>
                  <p className=" text-gray-500 pt-3 pb-2 text-lg md:text-5x leading-6 font-normal 2lx text-left font-body ">
                    <sup>
                      {" "}
                      <span className="text-lg">$</span>
                    </sup>{" "}
                    55
                  </p>
                </div>
                {/* <div className="px-6 pt-4 pb-2"> */}
                <div class="flex items-center justify-between leading-tight p-2 md:p-4 float-left w-full">
                  <div class="text-lg">
                    <a class="no-underline text-black" href="#">
                      <div class="flex items-center text-sm ">
                        <FaRegStar
                          className="text-green-900"
                          style={{ fontSize: 24 }}
                        />
                        <FaRegStar
                          className="text-green-900"
                          style={{ fontSize: 24 }}
                        />
                        <FaRegStar
                          className="text-green-900"
                          style={{ fontSize: 24 }}
                        />
                        <FaRegStar
                          className="text-gray-900"
                          style={{ fontSize: 24 }}
                        />
                        <FaRegStar
                          className="text-gray-900"
                          style={{ fontSize: 24 }}
                        />
                      </div>
                    </a>
                  </div>
                  {/* <p class="text-grey-darker text-sm"> */}
                  <Link
                    href="#"
                    class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block rounded-full"
                  >
                    <span class="hidden">Like</span>
                    <FaHeart />
                  </Link>
                  {/* </p> */}
                </div>
              </div>
              {/* </div> */}
            </a>
          </div>
          {/* Slide 4 */}
        </Slider>
      </div>
    );
  }
}
export default withTranslation(["common"])(ShopSliderOne);
