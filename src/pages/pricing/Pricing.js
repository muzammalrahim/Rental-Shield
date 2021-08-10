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

function Pricing(props) {
  const [isYearly, setIsYearly] = useState(true);
  const toggleHandler = () => {
    setIsYearly(!isYearly);
  };
  let language = props.match.params.lang;
  let url = props.match.url;
  return (
    <div className="PricingPage">
      <div>
        <Header lang={language} url={url} />
      </div>
      <div>
        <PricingBanner />
      </div>

      <div className="sm:mt-12 lg:mt-24 xl:mt-24">
        <br />
        <p
          className="xl:text-6xl lg:text-6xl md:text-5x text-gray-500 font-body 
        font-normal xs_Head xs_Head"
        >
          Choose your pricing plan{" "}
        </p>
        <p className="m-auto w-1/3 text-2x text-gray-500 font-body font-normal xs_para xs_font leading-7">
          {" "}
          We believe the key to aplying monthly rental payments, lies with the
          management of the security rental deposits{" "}
        </p>
      </div>

      <div className=" lg:w-32 xl:w-32 xl:mt-24 lg:mt-24 md:mt-24 main xs_marginTop">
        <span className="xs_mRight lg:mr-40 text-xl">Yearly</span>
        <span className="text-xl">Monthly</span>
        <div className="toggle m-auto" onClick={toggleHandler}>
          {isYearly ? (
            // <img className="pt-2 pl-1 " src={toggle} alt="" />
            <button
              class="ml-2 lg:h-16 lg:w-16
                  rounded-full h-12 w-12 flex items-center justify-center
                    border-8 border-solid  border-green-200 bg-white"
            ></button>
          ) : (
            // <img className="pt-2 pl-32 TogleimgHeight" src={toggle} alt="" />
            <button
              class="ml-32 lg:ml-60 lg:h-16 lg:w-16 xl:ml-60
            rounded-full h-12 w-12 flex items-center justify-center
              border-8 border-solid  border-green-200 bg-white"
            ></button>
          )}
        </div>
      </div>
      {/* pricing plan ends */}

      <div className="pricing__card">
        <div className="container pricing__container">
          <div className="row">
            <div className="col-md-4 ">
              <PricingCard image={Idea} type={"Starter"} price={15} />
            </div>
            <div className="col-md-4">
              <PricingCard image={star} type={"Professional"} price={35} />
            </div>
            <div className="col-md-4 mt-3">
              <PricingCard image={diamond} type={"Organization"} price={55} />
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default Pricing;
