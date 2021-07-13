import React, { Component } from 'react'
import { Row,Col } from 'react-bootstrap';
import Header from "../components/Header";
import ShopTopBar from '../components/Topbar/ShopTopBar';
import ShopBanner from "../components/Banners/ShopBanner";
import ShopSliderOne from "../components/Sliders/ShopSliderOne"
import shopBannerend from "../assets/images/shop-banner-end.png";

import Footer from "../components/Footer";
export default class Shop extends Component {
    render() {
        return (
          
<div className="shop-page-main">
        {/* header */}
        <div className="header">
          <Header />
        </div>
        {/* header */}

        {/*  ShopTopBar */}
        <div className="bg-green-700">
        <div>
          < ShopTopBar />
        </div>
        {/*  ShopTopBar */}

        {/* Shop Banner */}
        <div>
          {" "}
          <ShopBanner />
        </div>
        
        </div>
        <Row>
          <div className=" bg-no-repeat  no-repeat  w-screen ">
              <img class="w-full" src={shopBannerend} alt="shopBannertwo" />
          </div>
          </Row>
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
                

        )
    }
}
