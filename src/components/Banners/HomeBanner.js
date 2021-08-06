import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

// Images
import Homebanner from "../../assets/images/home-banner1.png";
// import MobHBannner from "../../assets/images/h-mob.jpg";
import MobHBannner from "../../assets/images/girl.png";
import RightBg from "../../assets/images/bannerr-right.png";
import { withTranslation } from "react-i18next";

class HomeBanner extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="h-banner sm:home-banner-main   xs:home-banner-main">

        {/* web Banner */}
        <div className="h-web-banner banner-inner">
          <div className="banner-img">
            <div
              className="xs:left-side lg:left-side sm:left-side bg-local"
              style={{ backgroundImage: `url(${Homebanner})` }}
            >
          </div>
          </div>
          <div className="">
            <div
              className="sm:right-inner pb-0 lg:pb-5 md:pb-5  xs:right-inner inner bg-local"
              style={{ backgroundImage: `url(${RightBg})` }}
            >
              <div className="hr-content sm:inner xs:inner md:inner-pt-5 lg:inner">
                <h2 className="h-content lh-70 text-green-600 text-xl md:text-4xl lg:text-6xl font-normal font-body">
                  {t("banner.pay")}
                  <br />
                  {t("banner.rent")}
                  <br />
                  {t("banner.monthly")}
                </h2>
                <p className="text-gray-500 pt-3 pb-3 text-lg lg:text-2lx leading-7">
                  {t("banner.banner-details-1")}
                  <br />
                  {t("banner.banner-details-2")}
                </p>

                <button className="bg-green-600 rounded-full px-4 py-2 text-lg text-white font-bold font-body header-btn">
                  {t("banner.readmore")}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* web Banner */}

        {/* Mob Banner */}
        {/* <div className="h-mob-banner bg-cover bg-no-repeat" style={{ backgroundImage: `url(${MobHBannner})` }}> */}
        <div className="h-mob-banner bg-green-700 relative">
          <div className="mob-inner">
            <div className="m-img-area">
              <img className="w-full" src={MobHBannner} alt="img"/>
            </div>
          
            <div className="mb-text">
              <h2 className=" text-green-600 text-3xl md:text-4xl lg:text-6xl font-normal font-body">
                {t("banner.pay")}
                <br />
                {t("banner.rent")}
                <br />
                {t("banner.monthly")}
              </h2>
              <p className="text-gray-500 pt-3 pb-3 text-4xl lg:text-2lx leading-7">
                {t("banner.banner-details-1")}
                <br />
                {t("banner.banner-details-2")}
              </p>

              <button className="bg-green-600 rounded-full py-2 text-lg text-white font-bold font-body m-header-btn">
                {t("banner.readmore")}
              </button>
            </div>
          </div>
          
        </div>
        {/* Mob Banner */}
      </div>
    );
  }
}

export default withTranslation(["common"])(HomeBanner);
