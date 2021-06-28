import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap'
import Homebanner from '../../assets/images/home-banner1.png';
import RightBg from '../../assets/images/bannerr-right.png';
import { withTranslation } from 'react-i18next';


class HomeBanner extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="home-banner-main">
                <Row className="no-gutters">
                <Col md="8">
                    <div className="left-side" style={{ backgroundImage:`url(${Homebanner})` }}>

                    </div>
                </Col>
                <Col md="4">
                    <div className="right-inner" style={{ backgroundImage:`url(${RightBg})` }}>
                        <div className="inner">
                            <h2 className="text-green text-6xl font-normal">
                                {t('pay.pay')}
                                <br/>{t('banner.rent')}
                                <br/>Monthly.
                            </h2>
                            <p className="text-gray pt-3 leading-5">
                            Sign up today and change<br/> the way you rent... forever
                            </p>
                        
                            <button className="bg-green rounded-full px-4 py-1.5 text-xl text-white font-bold">Read more</button>
                        </div>
                        
                    </div>
                    
                </Col>
            </Row> 
        </div>
        )
    }
}

export default withTranslation(['common'])(HomeBanner)