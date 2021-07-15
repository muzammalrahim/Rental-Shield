import React from "react";
import styles from "./career.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CareerBanner from "../../components/Banners/CareerBanner";
import phone from "../../assets/images/phone.png";
import girl from "../../assets/images/career-girl.png";

function Career() {
  return (
    <div className="career">
      <div className="career__background mb-32">
        <Header />
        <div className="career__girl container">
          <div className="row mt-16">
            <div className="col-md-6">
              <img src={girl} alt="" />
            </div>
            <div className="col-md-6 mt-32">
              <h1 className="career__head mb-8">Welcome to Our Careers Page</h1>
              <h6 className="career__text">Join the Prop-Tech revolution</h6>
            </div>
          </div>
        </div>
      </div>

      <CareerBanner />
      {/* property yech section starts */}

      <div className="career__tech container text-left mt-32">
        <h1 className="property__tech">Property Technology</h1>
        <div className="row">
          <div className="col-md-6 text-left mt-8 property__techText">
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

      <div className="career__brand mt-16">
        <div className="container brand__content ">
          <div className="row">
            <div className="col-3">
              <h2 className="brand__head mb-8 ">Your Brand</h2>
              <p className="brand__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, deserunt. Odit ab accusamus voluptates voluptate
                pariatur molestias optio neque maxime!
              </p>
              <div className="text-left">
                <button class="bg-black rounded-full px-5 mb-5 mt-3 py-1.5 text-xl text-white font-bold ">
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
