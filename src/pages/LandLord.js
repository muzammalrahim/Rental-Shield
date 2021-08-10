import React, { Component } from "react";
import Header from "../components/Header";
import LandLordBanner from "../components/Banners/LandLordBanner";
import EvenMoreLandLard from "../components/Rules/EvenMoreLandLard";
import LandLordSteps from "../components/Steps/LandLordSteps";
import Video from "../components/Updates/Video";
import MoreQuestions from "../components/MoreQuestions";
import Registration from "../components/RegistrationForm/Registration";
import Footer from "../components/Footer";

export default class LandLord extends Component {
  language = this.props.match.params.lang;
  url = this.props.match.url;
  render() {
    console.log(this.url);
    console.log("parameter", this.props.match.params.lang);

    return (
      <div className="landlord-main">
        {/* header */}
        <div className="header">
          <Header lang={this.language} url={this.url} />
          {/* <Header /> */}
        </div>
        {/* header */}

        {/* Banner */}
        <LandLordBanner />
        {/* Banner */}

        <LandLordSteps />
        <EvenMoreLandLard />

        <Video />

        <MoreQuestions />

        {/* Registration */}
        <Registration />
        {/* Registration */}

        {/* Footer */}
        <div className="footer">
          <Footer />
          {/* Footer */}
        </div>
      </div>
    );
  }
}
