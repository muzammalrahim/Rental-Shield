import React, { Component } from "react";


// Compnonant
import Header from '../components/Header';
import HomeBanner from '../components/Banners/HomeBanner';
import Association from '../components/Clients/Association';
import WelcomeFuture from '../components/WelcomeFuture';
import AssociationFooter from '../components/Clients/AssociationFooter';
import AccSteps from '../components/Steps/AccSteps';
import HomeUpdate from '../components/Updates/HomeUpdate';
import TestimonialSlider from '../components/Sliders/TestimonialSlider';
import Faq from '../components/FAQ/Faq';
import KnowMore from '../components/More/KnowMore';
import Registration from '../components/RegistrationForm/Registration';
import Footer  from '../components/Footer';



class Home extends Component {
    render() {
        return (
                <div className="home-mian">

                    
                    {/* header */}
                    <div className="header">
                         <Header/>
                    </div>   
                    {/* header */}

                    {/* Home Banner */}
                    <div className="home-banner">
                        <HomeBanner/>
                    </div>
                    {/* Home Banner */}

                    {/* Clients */}
                    <Association/>
                    {/* Clients */}

                    {/* Future Banner */}
                    <WelcomeFuture/>
                    {/* Future Banner */}

                    {/* Signup Steps */}
                    <div className="mt-5">
                        <AccSteps/>
                    </div>
                    {/* Signup Steps */}

                    {/* Updates */}
                    <HomeUpdate/>
                    {/* Updates */}

                    {/* FAQ */}
                     <Faq/>
                    {/* FAQ */}

                    {/* KnowMore */}
                    <KnowMore/>
                    

                    {/* Testimonal Slider */}
                     <TestimonialSlider/>
                    {/* Testimonal Slider */}  

                    {/* Footer Clients */}
                    <AssociationFooter/>
                    {/* Footer Clients */}

                    {/* Registration */}
                     <Registration/>
                    {/* Registration */}

                    {/* Footer */}
                    <div className="footer">
                        <Footer/>
                    </div>
                    {/* Footer */}


                    

                    
                </div>
            );
        }
};

export default Home;