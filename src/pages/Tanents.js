import React, { Component } from 'react'
import Header from '../components/Header';
import TenantsSteps from '../components/TenantsSteps';
import Registration from '../components/RegistrationForm/Registration';
import Footer  from '../components/Footer'
import EvenMore from '../components/EvenMore';
import TalentUpdat from '../components/Updates/TalentUpdat';
import TanentsBanner from '../components/Banners/TanentsBanner';



export default class Tanents extends Component {
    render() {
        return (
            <div className="lanlord-main">
                {/* header */}
                <div className="header">
                         <Header/>
                </div>   
                {/* header */}

                {/* Banner */}
                <TanentsBanner/>
                {/* Banner */}

                
                <TenantsSteps/>

                {/* Even more */}
                <EvenMore/>
                {/* Even more */}


                {/* updates */}
                <TalentUpdat/>
                {/* updates */}

                {/* Registration */}
                <Registration/>
                {/* Registration */}

                {/* Footer */}
                <div className="footer">
                    <Footer/>
                </div>
                {/* Footer */}

            </div>
        )
    }
}
