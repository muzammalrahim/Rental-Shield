import React from "react";
import "./pricing.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
function Pricing() {
  return (
    <div className="pricing">
      <Header />

      <div className="pricing__banner">
        <h1 className="pricing__heading">
          Welcome to <strong>Future</strong>
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Pricing;
