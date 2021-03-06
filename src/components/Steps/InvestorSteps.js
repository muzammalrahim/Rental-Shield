import React, { Component } from 'react'


// Images
import Img1 from "../../assets/images/investor1.png";
import Img2 from "../../assets/images/investor2.png";
import Img3 from "../../assets/images/investor3.png";
import Img4 from "../../assets/images/investor4.png";
import Img5 from "../../assets/images/investor5.png";
import Img6 from "../../assets/images/investor6.png";


export default class InvestorSteps extends Component {
    render() {
        return (
            <div className="investor-stpes-main px-5 grid grid-cols-2 mb-20 mt-20">

                {/* ----------------------------Left Side--------------------------- */}
                <div className="left-side inner-position">
                    {/* step1 */}
                    <div className="text-left  relative">
                        <img className="w-full investor-mob-img" src={Img1} alt="img"/>
                        <div className="inner-content absolute bottom-20">
                            <h3 className="text-3xl font-bold font-body text-gray-500">
                                About Us
                            </h3>
                            <p className="text-lg font-normal font-body text-gray-500 leading-5">
                                Learn more about us, what is our
                                long term strategy
                            </p>
                        </div>
                            
                        </div>
                        {/* step1 */}

                        {/* step2 */}
                        <div className="text-left relative">
                            <img  className="w-full investor-mob-img" src={Img2} alt="img"/>
                            <div className="inner-content l-inner-content2 absolute bottom-20">
                                <h3 className="text-3xl font-bold font-body text-gray-500">
                                    Awards
                                </h3>
                                <p className="text-lg font-normal font-body text-gray-500 leading-6">
                                    All the awards we have received.
                                </p>
                            </div>
                        </div>
                        {/* step2 */}

                        {/* step3 */}
                        <div className="text-left relative">
                            <img  className="w-full investor-mob-img"  src={Img3} alt="img"/>
                            <div className="inner-content3 absolute  bottom-20">
                                <h3 className="text-3xl font-bold font-body text-gray-500">
                                    Contact US
                                </h3>
                                <p className="text-lg font-normal font-body text-gray-500 leading-6">
                                    Get in touch today to find out more 
                                    details
                                </p>
                            </div>
                        </div>
                        {/* step3 */}
                </div>
                {/* ----------------------------Left Side--------------------------- */}



                {/* ----------------------------Right Side--------------------------- */}
                <div className="right-side inner-position-r pt-36">
                    {/* step1 */}
                    <div className="text-left relative">
                        <img className="w-full investor-mob-img"  src={Img4} alt="img"/>
                        <div className="inner-content1 absolute bottom-20">
                            <h3 className="text-3xl font-bold font-body text-gray-500">
                                Projects
                            </h3>
                            <p className="i-mob-para text-lg font-normal font-body text-gray-500 leading-5 w-8/12">
                                Some of our projects that we  
                                have experience in 
                            </p>
                        </div>
                            
                        </div>
                        {/* step1 */}

                        {/* step2 */}
                        <div className="text-left relative">
                            <img  className="w-full investor-mob-img"  src={Img5} alt="img"/>
                            <div className="inner-content2 absolute  bottom-20">
                                <h3 className="text-3xl font-bold font-body text-gray-500">
                                    Team
                                </h3>
                                <p className="text-lg font-normal font-body text-gray-500 leading-5 w-8/12">
                                    Find out about our fantastic team
                                </p>
                            </div>
                        </div>
                        {/* step2 */}

                        {/* step3 */}
                        <div className="text-left relative">
                            <img  className="w-full investor-mob-img"  src={Img6} alt="img"/>
                            <div className="inner-content3 absolute  bottom-20">
                                <h3 className="text-3xl font-bold font-body text-gray-500">
                                    Clients
                                </h3>
                                <p className="text-lg font-normal font-body text-gray-500 leading-5 w-8/12">
                                    Some of our prestigious clients 
                                </p>
                            </div>
                        </div>
                        {/* step3 */}
                </div>
                {/* ----------------------------Right Side--------------------------- */}
            </div>
        )
    }
}
