import React from "react";
import styles from "./career.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CareerBanner from "../../components/Banners/CareerBanner";
import phone from "../../assets/images/phone.png";
import brand from "../../assets/images/brand.png";
import CareerBannerImg from "../../assets/images/CareerBanner.png";
// import CBImg from "../../assets/images/career-banner.jpg";
import CBImg from "../../assets/images/career-banner2.jpg";

function Career(props) {
  const language = props.match.params.lang;
  let url = props.match.url;
  return (
    <div className="career">
      {/* <div
        className="relative c-h-screen bg-no-repeat"
        style={{ backgroundImage: `url(${CBImg})` }}
      > */}
      <div className="relative c-h-screen bg-no-repeat">
        {/* <div> */}
        <div className="">
          <Header lang={language} url={url} />
        </div>

        {/* <img className="min-w-full -mt-20" src={CareerBannerImg} alt="" /> */}
        <div className="relative caree-b-main">
          <div className="cm-bg"></div>
          <img className="cb-img w-full -mt-20" src={CBImg} alt="" />
          <div className="c-banner-text">
            <div className="first-side"></div>
            <div className="sec-side w-8/12">
              {/* <h1 className=" career__head mb-8">Welcome to Our Careers Page</h1> */}
              <h1
                className="xl:text-5xl lg:text-5xl md:text-5x 
                            font-normal text-green-900 font-body 
                          xs_Title lineHeight mb-6"
              >
                Welcome to Our Careers Page
              </h1>
              {/* <h6 className="career__text ">Join the Prop-Tech revolution</h6> */}
              <h6
                className="xl:text-3xl lg:text-3xl md:text-xl 
  font-bold text-gray-500 font-body  
    xs_heading lineHeightt "
              >
                Join the Prop-Tech revolution
              </h6>
            </div>
          </div>
        </div>
      </div>

      <CareerBanner />
      {/* property yech section starts */}

      <div className="career__tech container text-left mt-32">
        {/* <h1 className="property__tech ">Property Technology</h1> */}
        <h1 className="xs_Title font-body font-normal text-gray-500 ">
          Property Technology
        </h1>
        <div className="row">
          <div className="col-md-6 text-left mt-8 property__techText xs_para_size">
            <p>We consider ourselves a property technology company... </p>
            <p>Why is that so important I hear you ask?</p>
            <p>Simple...</p>
            <br />
            <p>
              It is well known that around the world technology is developing
              very fast. However, we believe there is a lag in Property
              Technology. In many "developed" nations property is very years
              old, and expensive to change. 
            </p>

            <p>
              Our aim is to be part of the property technology revolution and
              truly change the way people live/rent their homes. Join us..
            </p>
            <p>
              This is only the begining and we want to use this as a platform to
              branch out into other fields and truly use technology to shake up
              the industry as it needs.
            </p>
            <p>What are you waiting for.... Fill out an application below. </p>
          </div>
          <div className="col-md-6 right">
            <img src={phone} alt="" className="phone" />
          </div>
        </div>
      </div>
      {/* property tech section ends */}

      {/* your brand section starts */}

      <div className="xl:mt-16 lg:mt-16 relative">
        <img
          className="bg-no-repeat bg-center no-repeat w-full "
          src={brand}
          alt="RightBg"
        />
        <div className="absolute  xl:left-44 lg:left-32 xl:bottom-80 lg:bottom-44 left-8 bottom-6 xs_left_bottom ">
          <div className="">
            <div className=" ">
              <div className=" w-4/12 text-left">
                <h2
                  className="xl:mb-8 lg:mb-8  xl:text-5xl lg:text-5xl md:text-3xl sm:text-2xl
               text-white font-normal font-body xs_head_size2  "
                >
                  Your Brand
                </h2>
                <p className="xs_text_size text-white font-normal font-body  ">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.
                </p>
              </div>
              <div className="text-left">
                <button
                  class="bg-black rounded-full px-5 mb-5 xl:mt-3 lg:mt-3 md:mt-3 py-1.5 text-xl 
                text-white font-bold xs_lineHeight xs_text_size"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* your brand section ends */}

      <Footer />
    </div>
  );
}

export default Career;
