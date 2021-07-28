import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Homebanner from "../../assets/images/faqLeftBanner.png";
import RightBg from "../../assets/images/faqRightBanner.png";
import FaqFrequentlyAskQImg from "../../assets/images/FaqFrequentlyAskQImg.png";
import { withTranslation } from "react-i18next";

class FaqBanner extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="flex mt-28 FaqBanner">
        <div className=" bg-no-repeat  no-repeat w-1/4">
          <img class="" src={Homebanner} alt="Homebanner" />
        </div>

        <div className="faq-b-text sm:mt-28 md:mt-28 lg:mt-28 xl:mt-28 float-left w-2/4 ">
          <p className="m-auto text-green-500 pt-3 pb-2 lg:text-5x xl:text-6xl  md:text-4xl 2xl font-body z-20 relative ">
            {t("banner.banner-Title-1")}
          </p>
          <p className="text-gray-500 pt-3 pb-2 text-lg md:text-2xl leading-6 font-bold 3xl font-body">
            {t("banner.banner-Heading-1")}
          </p>

          <p
            className="faq-b-content text-gray-500 pt-3 pb-2 text-lg md:text-2xl leading-6 font-normal 2lx font-body
               w-4/5 m-auto xs_para sm:text-xl"
          >
            {t("banner.banner-Para-1")}
          </p>
        </div>
        <div className="w-1/4 absolute top-0 right-0">
          <div className="bg-no-repeat bg-center no-repeat float-right ">
            <img
              className="lg:max-w-screen-xl z-10"
              src={RightBg}
              alt="RightBg"
            />
          </div>
          <div className=" bg-no-repeat  no-repeat">
            <img
              class="bg-no-repeat bg-center no-repeat float-right mt-24"
              src={FaqFrequentlyAskQImg}
              alt="FaqFrequentlyAskQImg"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default withTranslation(["common"])(FaqBanner);
