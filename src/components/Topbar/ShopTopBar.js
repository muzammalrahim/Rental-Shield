import React, { Component } from "react";
import Blogmainicon from "../../assets/images/shop-heading-icon.png";
import SearchBox from "../SearchBox/ShopSearchBox";
import ShopTabs from "../Tabs/ShopTabs";

export default class ShopTopBar extends Component {
  render() {
    return (
      <div className="">
        <div className="">
          <div className="md:container md:mx-auto px-0 mx-auto flex  flex-col md:flex-row items-center">
            <div className="flex w-full md:w-2/5 pt-24 sm:pl-8">
              <h1 className="float-left text-green-900 text-6xl mr-5">Shop</h1>
              <img src={Blogmainicon} />
            </div>
            <div className="w-full md:w-3/5 text-center">
              <SearchBox />
            </div>
          </div>
          <ShopTabs />
          <div>        
          </div>
        </div>
      </div>
    );
  }
}
