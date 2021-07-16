import React, { useState } from "react";
import "./pricing.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import toggle from "../../assets/images/toggle-btn.png";
import PricingCard from "../../components/Cards/pricingCard";
// import Bg from "../../assets/images/Frame.png";
// import Idea from "../../assets/images/Idea.png";
// import Doller from "../../assets/images/doller.png";
import Idea from "../../assets/images/Idea.png";
import star from "../../assets/images/star.png";
import diamond from "../../assets/images/diamond.png";
import PricingBanner from "../../components/Banners/PricingBanner";

function Pricing() {
  const [isYearly, setIsYearly] = useState(true);
  const toggleHandler = () => {
    setIsYearly(!isYearly);
  };
  return (
    <div className="pricing">
      <Header />
      <PricingBanner/>
      {/* banner starts */}
      <div className="pricing__banner container-fluid">
   
        <h1 className="pricing__heading">
          Welcome to <strong>Future</strong>
        </h1>
      </div>
      {/* banner ends */}
      {/* pricing plan starts */}

      <div className="container pricing__plan m-32">
        <h2 className="pricng__planHead">Choose your pricing plan</h2>
        <p className="pricing__planText mt-8 mb-32">
          We believe the key to aplying monthly rental payments, lies with the
          management of the security rental deposits{" "}
        </p>
      </div>

      <div className="main mb-32">
        <span className="mr-40">Yearly</span>
        <span>Monthly</span>
        <div className="toggle mt-2" onClick={toggleHandler}>
          {isYearly ? (
            <img className="pt-2 pl-1 " src={toggle} alt="" />
          ) : (
            <img className="pt-2 pl-60 " src={toggle} alt="" />
          )}
        </div>
      </div>
      {/* pricing plan ends */}

      <div className="pricing__card mt-64">
        <div className="container pricing__container">
          <div className="row">
            <div className="col-md-4 ">
              <PricingCard image={Idea} />
            </div>
            <div className="col-md-4">
              <PricingCard image={star} />
            </div>
            <div className="col-md-4 mt-3">
              <PricingCard image={diamond} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Pricing;
