import React, { Component } from 'react'
import { withTranslation } from "react-i18next";
import PricingTopImg from "../../assets/images/PricingTopImg.png";


class PricingBanner extends Component {
    render() {
        const { t } = this.props;
        return (
   

<div className="absolute top-0 right-0  bg-no-repeat bg-cover w-full h-full" style={{ backgroundImage:`url(${PricingTopImg})` }}>      

</div>
    
          
        )
    }
}

export default withTranslation(["common"])(PricingBanner);

