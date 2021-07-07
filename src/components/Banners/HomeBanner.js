import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import Homebanner from '../../assets/images/home-banner1.png';
import RightBg from '../../assets/images/bannerr-right.png';
import { withTranslation } from 'react-i18next';


class HomeBanner extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="sm:home-banner-main   xs:home-banner-main">
                <div className="banner-inner">
                <div className="banner-img">
                    <div className="xs:left-side lg:left-side sm:left-side bg-local" style={{ backgroundImage:`url(${Homebanner})` }}>

                    </div>
                </div>
                <div className="">
                    <div className="sm:right-inner pb-5  xs:right-inner inner bg-local" style={{ backgroundImage:`url(${RightBg})` }}>
                        <div className="sm:inner xs:inner md:inner-pt-5 lg:inner">
                            <h2 className="text-green-600 text-xl md:text-4xl lg:text-6xl font-normal le">
                                {t('banner.pay')}
                                <br/>
                                {t('banner.rent')}
                                <br/>
                                {t('banner.monthly')}
                            </h2>
                            <p className="text-gray-500 pt-3 pb-3 text-lg md:text-2lx leading-7">
                                {t('banner.banner-details-1')}
                                <br/>
                                {t('banner.banner-details-2')}
                            </p>
                        
                            <button className="bg-green-600 rounded-full px-4 py-2 text-lg text-white font-bold font-body header-btn">{t('banner.readmore')}</button>
                        </div>
                        
                    </div>
                    
                </div>
            </div> 
        </div>
        )
    }
}

export default withTranslation(['common'])(HomeBanner)