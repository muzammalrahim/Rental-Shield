import React from "react";
import styles from "./career.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CareerBanner from "../../components/Banners/CareerBanner";
import phone from "../../assets/images/phone.png";
import girl from "../../assets/images/career-girl.png";
import brand from "../../assets/images/brand.png";

function Career() {
  return (
    <div className="career">
      <div className="career__background xl:mb-32 lg:mb:mb-32 md:mb-32">
        <Header />
        <div className="career__girl container">
          {/* <div>
            
          <img
             className="bg-no-repeat bg-center no-repeat w-full -mt-20 xsBgImg"
              src={girl}
              alt="RightBg"
            />
          </div> */}
          <div className="row xl:mt-16 lg:mt-16 md:mt-16 ">
            <div className="col-md-6">
              <img src={girl} alt="" />
            </div>
            <div className="col-md-6  xl:mt-32 lg:mt-32 md:mt-32">
              {/* <h1 className=" career__head mb-8">Welcome to Our Careers Page</h1> */}
              <h1 className="xl:text-6xl lg:text-6xl md:text-5x 
 font-normal text-green-900 font-body 
  xs_Title lineHeight mb-6">Welcome to Our Careers Page</h1>
              {/* <h6 className="career__text ">Join the Prop-Tech revolution</h6> */}
              <h6 className="xl:text-3xl lg:text-3xl md:text-xl 
 font-bold text-gray-500 font-body  
  xs_heading lineHeightt ">Join the Prop-Tech revolution</h6>
            </div>
          </div>
        </div>
      </div>

      <CareerBanner />
      {/* property yech section starts */}

      <div className="career__tech container text-left mt-32">
        {/* <h1 className="property__tech ">Property Technology</h1> */}
        <h1 className="xs_Title font-body font-normal text-gray-500 ">Property Technology</h1>
        <div className="row">
          <div className="col-md-6 text-left mt-8 property__techText xs_para_size">
            We consider ourselves a property technology company... <br />
            <br />
            Why is that so important I hear you ask? <br />
            <br />
            Simple... <br />
            <br />
            It is well known that around the world technology is developing very
            fast. However, we believe there is a lag in Property Technology. In
            many "developed" nations property is very years old, and expensive
            to change. 
            <br />
            <br />
            Our aim is to be part of the property technology revolution and
            truly change the way people live/rent their homes. Join us.. <br />
            <br />
            This is only the begining and we want to use this as a platform to
            branch out into other fields and truly use technology to shake up
            the industry as it needs. <br />
            <br />
            What are you waiting for.... Fill out an application below. 
            <br />
            <br />
          </div>
          <div className="col-md-6 right">
            <img src={phone} alt="" className="phone" />
          </div>
        </div>
      </div>
      {/* property tech section ends */}

      {/* your brand section starts */}

      <div className="xl:mt-16 lg:mt-16">
      <img
             className="bg-no-repeat bg-center no-repeat w-full "
              src={brand}
              alt="RightBg"
            />
        <div className="container brand__content my-auto ">
     
          <div className="row mt-4">
            <div className="col-lg-3 col-xl-3 col-6">
              <h2 className="xl:mb-8 lg:mb-8  xl:text-5xl lg:text-5xl md:text-3xl sm:text-2xl
               text-white font-normal font-body xs_head_size2">Your Brand</h2>
              <p className="xs_text_size text-white font-normal font-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, deserunt. Odit ab accusamus voluptates voluptate
                pariatur molestias optio neque maxime!
              </p>
              <div className="text-left">
                <button class="bg-black rounded-full px-5 mb-5 xl:mt-3 lg:mt-3 md:mt-3 py-1.5 text-xl 
                text-white font-bold xs_lineHeight xs_text_size">
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
