import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import FutureImg from '../assets/images/future1.png';

//Translation
import { withTranslation } from 'react-i18next';



 class WelcomeFuture extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="future-mian px-5 lg:mt-5">
                <Container>
                    <Row className="future-row items-center">
                        <Col sm="12" md="12" lg="6" className="img-area lg:text-right md:img-area p-0">
                            <img className="text-right" src={FutureImg} alt="future-img"></img>
                        </Col>
                        <Col sm="12" md="12" lg="6" className="text-area lg:text-left md:text-center lg:pt-5 lg:mt-6 p-0">
                            <h2 className="text-green-600 text-xl font-body font-normal mb-0 lg:mb-5 md:text-5xl lg:text-6xl lh-70">
                                {t('tanetb.welcome')}
                                <span className="font-black">
                                    {t('tanetb.to-future')}
                                </span>
                            </h2>
                            <p className="text-gray-500 text-lg font-body font-normal leading-7 mb-3 lg:mb-5 md:text-xl  lg:text-2x ">
                                {t('tanetb.tanetb-detail-1')}
                            <br/> 
                            {t('tanetb.tanetb-detail-2')}
                            <br/>
                            {t('tanetb.tanetb-detail-3')}</p>
                            <button className="bg-green-600 rounded-full font-body px-4 py-1.5 text-xl text-white font-normal">
                                {t('tanetb.tanetb-detail-4')}
                            </button>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}
export default withTranslation(['common'])(WelcomeFuture);
