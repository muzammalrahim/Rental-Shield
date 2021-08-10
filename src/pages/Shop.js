import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import ShopTopBar from "../components/Topbar/ShopTopBar";
import ShopBanner from "../components/Banners/ShopBanner";
import ShopSliderOne from "../components/Sliders/ShopSliderOne";
import shopBannertop from "../assets/images/shop-banner-top.png";
import shopBannerend from "../assets/images/shop-banner-end.png";

import Footer from "../components/Footer";
export default class Shop extends Component {
  language = this.props.match.params.lang;
  url = this.props.match.url;
  render() {
    return (
      <div className="shop-page-main">
        {/* header */}
        <div className="header">
          <Header lang={this.language} url={this.url} />
        </div>
        {/* header */}
        {/*  ShopTopBar */}
        <div>
          <ShopTopBar />
        </div>{" "}
        <br />
        {/*  ShopTopBar */}
        <div className=" bg-no-repeat  no-repeat  w-screen ">
          <img class="w-full" src={shopBannertop} alt="shopBannertwo" />
        </div>
        {/* Shop Banner */}
        <div>
          <ShopBanner />
        </div>
        <div className=" bg-no-repeat  no-repeat  w-screen ">
          <img class="w-full" src={shopBannerend} alt="shopBannertwo" />
        </div>
        {/* Shop Banner */}
        {/* Shop SliderOne */}
        <div>
          {" "}
          <ShopSliderOne />
        </div>
        <div>
          {" "}
          <ShopSliderOne />
        </div>
        <div>
          {" "}
          <ShopSliderOne />
        </div>
        {/* Shop SliderOne*/}
        {/* Shop Slidertwo */}
        {/* <ShopSliderTwo /> */}
        {/* Shop Slidertwo */}
        {/* Shop Sliderthree*/}
        {/* <ShopSliderThree /> */}
        {/* Shop */}
        {/* Footer */}
        <div className="footer">
          <Footer />
        </div>
        {/* Footer */}
      </div>
    );
  }
}
