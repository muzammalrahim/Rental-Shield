import React, { Component } from "react";
import Footer  from '../components/Footer';
import HomeBanner from '../components/Banners/HomeBanner';
import Association from '../components/Clients/Association';
import WelcomeFuture from '../components/WelcomeFuture';
import Registration from '../components/RegistrationForm/Registration';
import AssociationFooter from '../components/Clients/AssociationFooter';
import AccSteps from '../components/AccSteps';
import HomeUpdate from '../components/Updates/HomeUpdate';




class Home extends Component {
    render() {
        return (
                <div className="home-mian">

                    

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
                    <AccSteps/>
                    {/* Signup Steps */}

                    {/* Updates */}
                    <HomeUpdate/>
                    {/* Updates */}

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