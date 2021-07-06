import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'; 
import AdImg from '../../assets/images/add-img.png';

//Translation
import { withTranslation } from 'react-i18next';


class HomeUpdate extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="update-main mt-5">
                <Container>
                    <Row  className=" main d-flex justify-content-center">
                        <Col md="12">
                        <div>
                            <h4 className="text-6xl text-gray-500 font-body font-normal">
                                {t('homeupdate.detail-head')}
                            </h4>
                        </div>
                        <br/>
                        <p className=" text-gray-500 font-normal  font-body text-2xx leading-7 pb-5">
                            {t('homeupdate.detail-1')}
                            <br/>
                            {t('homeupdate.detail-2')}
                        </p>
                        <img src={AdImg} alt="img"/>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}
export default withTranslation(['common'])(HomeUpdate);
