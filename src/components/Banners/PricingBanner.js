
import React, { Component } from 'react'
import { withTranslation } from "react-i18next";
import PricingTopImg from "../../assets/images/PricingTopImg.png";


class PricingBanner extends Component {
    render() {
        const { t } = this.props;
        return (   
        <div className=" top-0 right-0 relative PricingPageBanner">
  
            <img
             className="bg-no-repeat bg-center no-repeat w-full -mt-20"
              src={PricingTopImg}
              alt="RightBg"
            />
              <p className="xl:text-6xl lg:text-6xl md:text-5x md:w-1/3 md:top-32 md:left-14 
              font-black text-green-900 font-body absolute lg:top-36 lg:left-20 text-left lg:w-96 
               xl:top-64 xl:left-48  xl:w-96 xs_heading">Welcome to future</p>
        </div>     
        )
    }
}

export default withTranslation(["common"])(PricingBanner);