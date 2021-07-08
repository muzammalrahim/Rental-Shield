import React, { Component } from 'react'
import Header from "../components/Header";
import ShopBanner from "../components/Banners/ShopBanner";
import ShopSliderOne from "../components/Sliders/ShopSliderOne"
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

        {/* Shop Banner */}
        <div>
          {" "}
          <ShopBanner />
        </div>
        {/* Shop Banner */}

        {/* Shop SliderOne */}
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
