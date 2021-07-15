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
            <div className="update-main mt-5">
                    <Row  className=" main-home d-flex justify-content-center px-48">
                        <Col md="12">
                        <div>
                            <h4 className="text-6xl pt-5 text-gray-500 font-body font-normal lh-70">
                                {t('homeupdate.detail-head')}
                            </h4>
                        </div>
                        <br/>
                        <p className=" text-gray-500 font-normal  font-body text-2x leading-7 pb-5">
                            {t('homeupdate.detail-1')}
                            <br/>
                            {t('homeupdate.detail-2')}
                        </p>
                        <YoutubeEmbed embedId="rokGy0huYEA" />
                        </Col>
                        
                    </Row>
            </div>
        )
    }
}
export default withTranslation(['common'])(HomeUpdate);
