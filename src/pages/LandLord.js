import React, { Component } from 'react'
import Header from '../components/Header';
import Registration from '../components/RegistrationForm/Registration';
import Footer  from '../components/Footer'
import Bg from '../assets/images/landlorg-br.png';
import MoreQuestions from '../components/MoreQuestions'



export default class LandLord extends Component {
    render() {
        return (
            <div className="landlord-main">
                 {/* header */}
                 <div className="header">
                         <Header/>
                </div>   
                {/* header */}
               <div className="landlord-bg bg-cover bg-no-repeat"  style={{ backgroundImage:`url(${Bg})` }}></div>
                
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
