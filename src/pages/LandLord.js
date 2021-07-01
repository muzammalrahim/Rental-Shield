import React, { Component } from 'react'
import Header from '../components/Header';
import LandLordBanner from '../components/Banners/LandLordBanner';
import Registration from '../components/RegistrationForm/Registration';
import Footer  from '../components/Footer';
import MoreQuestions from '../components/MoreQuestions';
import EveryThing from '../components/Rules/EveryThing';
import LandLordSteps from '../components/Steps/LandLordSteps';
import Video from '../components/Updates/Video';



export default class LandLord extends Component {
    render() {
        return (
            <div className="landlord-main">
                 {/* header */}
                 <div className="header">
                         <Header/>
                </div>   
                {/* header */}
              
                {/* Banner */}
                <LandLordBanner/>
                 {/* Banner */}

                <LandLordSteps/>
                 <EveryThing/>

                 <Video/>

                <MoreQuestions/>

                {/* Registration */}
                <Registration/>
                {/* Registration */}

                {/* Footer */}
                <div className="footer">
                    <Footer/>
                {/* Footer */}
                </div>
            </div>




        )
    }
}
