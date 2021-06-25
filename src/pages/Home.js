import React, { Component } from "react";
import Header from '../components/Header';
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