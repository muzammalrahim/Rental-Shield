import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Components
import Header from "../components/Header";
import AboutBG from "../components/Banners/AboutBanner";
import Card1 from "../components/AboutCards/Card1";
import Timeline from "../components/Timeline";
import Card2 from "../components/AboutCards/Card2";
import TeamCards from "../components/AboutCards/TeamCards";
import Footer from "../components/Footer";

// Images
import OurAim from "../assets/images/about3.png";

export default class About extends Component {
  language = this.props.match.params.lang;
  url = this.props.match.url;
  render() {
    return (
      <div className="about-main">
        {/* header */}
        <div className="header">
          <Header lang={this.language} url={this.url} />
        </div>
        {/* header */}

        <AboutBG />

        {/* intro section */}
        <div className="head-section">
          <Container>
            <Row>
              <Col xs="12">
                <div className="about-story">
                  <h2 className="text-gray-500 text-3xl lg:text-6xl font-normal font-body pb-3">
                    Our Story
                  </h2>
                  <p className="text-gray-500 text-2x font-normal font-body leading-7">
                    Born out of a practiced & proven concept. We've designed it
                    to
                    <br />
                    fit into this region perfectly. Our aim is to help landlords
                    and
                    <br />
                    tenants alike and provide an invaluable service.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* intro section */}

        {/* Crad Section */}
        <Card1 />
        <Timeline />

        <Card2 />
        {/* Crad Section */}

        {/* Our aim section */}
        <div className="our-aim grid justify-items-center relative">
          <img className="m-3 " src={OurAim} alt="img" />
          <div className="aim-inner">
            <p className="text-gray-500 font-body text-3xl lg:text-6xl font-normal text-left mb-0">
              Our aim&nbsp;
              <span className="text-gray-500 font-body text-3xl lg:text-6xl font-black">
                is to...
              </span>
            </p>
            <p className="text-gray-500 font-body text-3xl lg:text-6xl font-normal mb-0">
              Change renting
            </p>
            <p className="text-gray-500 font-body text-3xl lg:text-6xl font-black text-left mb-0">
              forever...
            </p>
          </div>
        </div>
        {/* Our aim section */}

        {/* Team */}
        <TeamCards />
        {/* Team */}

        {/* Footer */}
        <div className="footer">
          <Footer />
        </div>
        {/* Footer */}
      </div>
    );
  }
}
