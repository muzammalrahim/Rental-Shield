import React, { Component } from "react";

// Components
import Header from "../components/Header";
import InvestorsBanner from "../components/Banners/InvestorsBanner";
import Vision from "../components/Vision";
import InvestorSteps from "../components/Steps/InvestorSteps";
import Registration from "../components/RegistrationForm/Registration";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default class Investor extends Component {
  language = this.props.match.params.lang;
  url = this.props.match.url;
  render() {
    return (
      <div className="investor-main">
        {/* header */}
        <div className="header">
          <Header lang={this.language} url={this.url} />
        </div>
        {/* header */}

        {/* Banner */}
        <InvestorsBanner />
        {/* Banner */}

        {/* Vision */}
        <Vision />
        {/* Vision */}

        {/* Investors */}
        <InvestorSteps />
        {/* Investors */}

        {/* Registration */}
        <Registration />
        {/* Registration */}

        {/* newsletter */}
        <Newsletter />
        {/* newsletter */}

        {/* Footer */}
        <div className="footer">
          <Footer />
        </div>
        {/* Footer */}
      </div>
    );
  }
}
