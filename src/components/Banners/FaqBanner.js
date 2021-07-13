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
      <div className="">
        <Row className="">
          <Col xs="3" sm="5" md="4" lg="4">
            <div
              className="xs:left-side lg:left-side sm:left-side bg-local "
              style={{ backgroundImage: `url(${Homebanner})` }}
            ></div>
          </Col>
          <Col md="4" lg="4">
            <div className=" mt-28 z-10 relative">

              <p className="m-auto text-green-500 pt-3 pb-2 lg:text-5xx md:text-4xl  font-bold 2xl font-body ">
              {t("banner.banner-Title-1")}
              </p>
              <p className="text-gray-500 pt-3 pb-2 text-lg md:text-2xl leading-6 font-bold 3xl font-body">
                {t("banner.banner-Heading-1")}
              </p>

              <p className="text-gray-500 pt-3 pb-2 text-lg md:text-2xl leading-6 font-normal 2lx font-body">
                {t("banner.banner-Para-1")}
              </p>
            </div>
          </Col>
          <Col xs="9" sm="7" md="4" lg="4">
            <div className="m-auto bg-no-repeat bg-center no-repeat">
              <img class="ml-auto mr-0" src={RightBg} alt="RightBg" />
            </div>
            <div className=" bg-no-repeat  no-repeat">
              <img
                class="ml-auto mt-auto mr-0"
                src={FaqFrequentlyAskQImg}
                alt="FaqFrequentlyAskQImg"
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default withTranslation(["common"])(FaqBanner);
