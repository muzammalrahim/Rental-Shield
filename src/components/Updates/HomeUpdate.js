import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'; 

// Components
import YoutubeEmbed from '../YoutubeVideo/Video'

// Images
import AdImg from '../../assets/images/add-img.png';

//Translation
import { withTranslation } from 'react-i18next';


class HomeUpdate extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="update-main mt-5 lg:w-8/12 md:10/12 mx-auto">
                    {/* <div className="main-home px-3 lg:px-48 md:px-28 sm:px-10"> */}
                    <div className="main-home px-3 lg:pl-48 lg:pr-48">
                        <div className="h-video-main">
                        <div>
                            <h4 className="lg:text-6xl text-4xl md:5xl pt-5 text-gray-500 font-body font-normal lh-70">
                                {t('homeupdate.detail-head')}
                            </h4>
                        </div>
                        <br/>
                        <p className=" text-gray-500 font-normal sm:pb-0 font-body text-2x leading-7 lg:pb-5 md:pb-5">
                            {t('homeupdate.detail-1')}
                            <br/>
                            {t('homeupdate.detail-2')}
                        </p>
                        <YoutubeEmbed embedId="rokGy0huYEA" />
                        </div>
                        
                    </div>
            </div>
        )
    }
}
export default withTranslation(['common'])(HomeUpdate);
