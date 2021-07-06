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
      <div className="sm:home-banner-main   xs:home-banner-main">
        <Row className="no-gutters">
          <Col xs="3" sm="5" md="4" lg="4">
            <div
              className="xs:left-side lg:left-side sm:left-side bg-local mt-56"
              style={{ backgroundImage: `url(${Homebanner})` }}
            ></div>
          </Col>
          <Col md="4" lg="4">
            <div className="sm:inner xs:inner md:inner-pt-5 lg:inner">
              <h2 className="text-green text-xl md:text-4xl lg:text-6xl font-normal">
                <br />
                {t("banner.banner-Title-1")}
              </h2>

              <h4 className="text-gray-500 pt-3 pb-2 text-lg md:text-2xl leading-6">
                {t("banner.banner-Heading-1")}
              </h4>

              <p className="text-gray-500 pt-3 pb-2 text-lg md:text-2xl leading-6">
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
