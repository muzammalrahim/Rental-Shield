import React, { Component } from "react";
import Blogmainicon from "../../assets/images/shop-heading-icon.png";
import SearchBox from "../SearchBox/ShopSearchBox";
import ShopTabs from "../Tabs/ShopTabs";

export default class ShopTopBar extends Component {
  render() {
    return (
      <div className="blog-banner">
        <div className="shop-text-inner">
          <div className="md:container md:mx-auto px-0 mx-auto flex  flex-col md:flex-row items-center">
            <div className="flex w-full md:w-2/5  pt-5">
              <h1 className="float-left text-green-900 text-6xl mr-5">Shop</h1>
              <img src={Blogmainicon} />
            </div>
            <div className="w-full md:w-3/5 text-center">
              <SearchBox />
            </div>
          </div>
          <div className="md:container md:mx-auto px-0 mx-auto flex  flex-col ">
            <ShopTabs />
          </div>
          <div></div>
        </div>
        <svg viewBox="0 0 500 150">
          <path
            d="M-22.29,128.78 C201.18,196.88 334.93,46.88 533.57,153.45 L500.00,0.00 L-21.72,-13.31 Z"
            style={{ stroke: "none", fill: "#F9F9F9" }}
          ></path>
        </svg>
      </div>
    );
  }
}
