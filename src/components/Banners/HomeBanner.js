import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap'
import Homebanner from '../../assets/images/home-banner.png';
import RightBg from '../../assets/images/bannerr-right.png';
import Header from '../../components/Header';




export default class HomeBanner extends Component {
    render() {
        return (
            <div className="home-banner-main">
                {/* header */}
               <div className="header">
                    <Header/>
                </div>   
                {/* header */}
                <div className="left-side px-4"  style={{ backgroundImage:`url(${Homebanner})` }}>
                <Row>
                    <Col md="6">
                        <div className="left-side">

                        </div>
                    </Col>
                    <Col md="6 text-right">
                        <div className="right-inner"   style={{ backgroundImage:`url(${RightBg})` }}>
                            <h2>
                                Pay. 
                                <br/>Rent.
                                <br/>Monthly.
                            </h2>
                            <p>
                            Sign up today and change<br/> the way you rent... forever
                            </p>
                            
                            <button className="ring-4 ring-gray-100 ring-opacity-50">Read more</button>
                        </div>
                        
                    </Col>
                </Row>
                </div>
                
              
                <div></div>
            </div>
        )
    }
}
