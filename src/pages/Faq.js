import React, { Component } from "react";
import Header from "../components/Header";
import FaqBanner from "../components/Banners/FaqBanner";
import FaqCard from "../components/Cards/FaqCard";
import FaqCategories from "../components/FaqCategory/FaqCategories";
import FaqAccordion from "../components/Accordion/FaqAccordion";
import Footer from "../components/Footer";

export default class Faq extends Component {
  language = this.props.match.params.lang;
  url = this.props.match.url;
  render() {
    return (
      <div className="faq-page-main">
        {/* header */}
        <div className="header">
          <Header lang={this.language} url={this.url} />
        </div>
        {/* header */}

        {/* FAQ Banner */}
        <div>
          {" "}
          <FaqBanner />
        </div>
        {/* FAQ Banner */}

        {/* FAQ Card */}
        <div>
          {" "}
          <FaqCard />
        </div>
        {/* FAQ Card */}

        {/* categories */}
        <FaqCategories />
        {/* categories */}

        {/* FAQ */}
        <FaqAccordion />
        {/* FAQ */}

        {/* Footer */}
        <div className="footer">
          <Footer />
        </div>
        {/* Footer */}
      </div>
    );
  }
}
