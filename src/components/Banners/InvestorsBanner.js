import React, { Component } from 'react'

// Images
import Homebanner from '../../assets/images/invest-bg1.png';
import RightBg from '../../assets/images/inv-full-bg.png';
import Mobbg from '../../assets/images/inv-full-bg-m.png';
// import Bannerimg from '../../assets/images/invest-bg3.png';
import { withTranslation } from 'react-i18next';



class InvestorsBanner extends Component {
    render() {
        const { t } = this.props;
        return (
            <div investor-banner-main>
                {/* web banner */}
                <div className="investr-b-web">
                    <div className="sm:home-banner-main   xs:home-banner-main">
                            <div className="bg-no-repeat banner-invest" style={{ backgroundImage:`url(${RightBg})` }}>
                            <div className="banner-img">
                                <div className="xs:left-side lg:left-side sm:left-side bg-local" style={{ backgroundImage:`url(${Homebanner})` }}>
                                {/* inner text */}
                                    <div className="invest-banner-content text-left sm:inner xs:inner md:inner-pt-5 lg:inner">
                                            <h2 className="text-green-600 text-xl md:text-4xl lg:text-6xl font-normal">
                                            Hello 
                                            <br/>
                                            Investors!    
                                            </h2>
                                            <h4 className="text-gray-500 font-body text-3xl">
                                                We are Looking for the best
                                            </h4>
                                            <p className="text-gray-500 pt-3 pb-3 text-lg md:text-2lx leading-7">
                                                It has to be more than just 
                                                <br/>
                                                money. We are looking for people
                                                <br/>
                                                to join us in our long term vision. 
                                            </p>
                                        
                                            
                                        </div>
                                    {/* inner text */}

                                </div>
                            </div>
                            
                        </div> 
                    </div>
                </div>
                
                 {/* web banner */}


                  {/* mob banner */}
                    <div className="investor-b-m bg-green-700">
                        <img className="w-full" src={Mobbg} alt="mobbg"/>
                        <div>
                            {/* inner text */}
                            <div className="invest-banner-content text-left">
                                            <h2 className="text-green-600 text-xl md:text-4xl lg:text-6xl font-normal">
                                            Hello 
                                            <br/>
                                            Investors!    
                                            </h2>
                                            <h4 className="text-gray-500 font-body text-3xl">
                                                We are Looking for the best
                                            </h4>
                                            <p className="text-gray-500 pt-3 pb-3 text-lg md:text-2lx leading-7">
                                                It has to be more than just 
                                                <br/>
                                                money. We are looking for people
                                                <br/>
                                                to join us in our long term vision. 
                                            </p>
                                        
                                            
                                        </div>
                                    {/* inner text */}
                        </div>
                    </div>

                  {/* mob banner */}
            </div>
            
        )
    }
}
export default withTranslation(['common'])(InvestorsBanner)
