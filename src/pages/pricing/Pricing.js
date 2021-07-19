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
    <div className="PricingPage">
      <div>
      <Header />
      </div>
      <div>
        <PricingBanner/>
      </div>
    
      <div className="mt-24">
        <br/>
        <p className="xl:text-6xl lg:text-6xl md:text-5x text-gray-500 font-body font-normal xs_Head">Choose your pricing plan </p>
        <p className="m-auto w-1/3 text-2x text-gray-500 font-body font-normal xs_para">    We believe the key to aplying monthly rental payments, lies with the
          management of the security rental deposits{" "}</p>
      </div>

  
      <div className="w-32 mt-24 main">
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

      <div className="pricing__card">
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
<div>   <Footer /></div>
   
    </div>
  );
}

export default Pricing;
