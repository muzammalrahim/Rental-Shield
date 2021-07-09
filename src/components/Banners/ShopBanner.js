import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import shopBannertwo from "../../assets/images/shopBannertwo.png";

import { withTranslation } from "react-i18next";
class ShopBanner extends Component {
  ShopNowHandler = () => {};

  render() {
    const { t } = this.props;
    return (
      <div>
        <div className="bg-green-700">
          <Row>
            <div className=" bg-no-repeat  no-repeat float-left w-2/5 ">
              <img class="" src={shopBannertwo} alt="shopBannertwo" />
            </div>
            <div className=" m-auto w-2/5 ">
              <div>
                <p className="text-gray-500 pt-3 pb-2 text-lg md:text-6xl leading-6 font-normal 3xl text-left font-body">
                  {t("banner.banner-shop-Title-1")}
                </p>

                <p className=" text-gray-500 pt-3 pb-2 text-lg md:text-2xl leading-6 font-normal 2lx font-body w-2/3 text-justify ">
                  {t("banner.banner-shop-Para-1")}
                </p>

                <p className=" text-gray-500 pt-3 pb-2 text-lg md:text-6xl leading-6 font-bold 2lx text-left font-body ">
                  <sup>
                    {" "}
                    <span className="text-4xl">$</span>
                  </sup>{" "}
                  55
                </p>
                <button
                  onClick={(e) => this.ShopNowHandler()}
                  className="w-4/12  rounded-full py-3 px-6 bg-green-900 float-left my-4"
                >
                  Shop now
                </button>
              </div>
            </div>
         
           
      
          </Row>
        
          
        </div>
      </div>
    );
  }
}

export default withTranslation(["common"])(ShopBanner);
