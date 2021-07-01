import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap'
import Homebanner from '../../assets/images/home-banner1.png';
import RightBg from '../../assets/images/bannerr-right.png';
import { withTranslation } from 'react-i18next';


class HomeBanner extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="sm:home-banner-main   xs:home-banner-main">
                <Row className="no-gutters">
                <Col xs="3" sm="5" md="7" lg="7">
                    <div className="xs:left-side lg:left-side sm:left-side bg-local" style={{ backgroundImage:`url(${Homebanner})` }}>

                    </div>
                </Col>
                <Col xs="9" sm="7" md="5" lg="5">
                    <div className="sm:right-inner pb-5  xs:right-inner inner bg-local" style={{ backgroundImage:`url(${RightBg})` }}>
                        <div className="sm:inner xs:inner md:inner-pt-5 lg:inner">
                            <h2 className="text-green text-xl md:text-4xl lg:text-6xl font-normal">
                                {t('banner.pay')}
                                <br/>{t('banner.rent')}
                                <br/>{t('banner.monthly')}
                            </h2>
                            <p className="text-gray pt-3 pb-2 text-lg md:text-2xl leading-6">
                            {t('banner.banner-details-1')}<br/>{t('banner.banner-details-2')}
                            </p>
                        
                            <button className="bg-green rounded-full px-4 py-1.5 text-xl text-white font-bold">{t('banner.readmore')}</button>
                        </div>
                        
                    </div>
                    
                </Col>
            </Row> 
        </div>
        )
    }
}

export default withTranslation(['common'])(HomeBanner)