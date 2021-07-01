import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

//Translation
import { withTranslation } from 'react-i18next';

class Association extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="client-t-main px-5">
                <Row className="client-row">
                    <Col sm="12" md="12" lg="2">
                        <p>{t('association-slide.association')}</p>
                    </Col>
                    <Col sm="12" md="12" lg="10">
                        <div className="clients text-center">
                            <ul className="md:flex-shrink-0 grid grid-cols-5">
                                <li >
                                    <img className="md:h-full md:w-48" src={process.env.PUBLIC_URL + '/img/c1.png'} alt="client"/>
                                </li>
                                <li>
                                    <img className="md:h-full md:w-48" src={process.env.PUBLIC_URL + '/img/c2.png'} alt="client"/>
                                </li>
                                <li>
                                    <img className="md:h-full md:w-48" src={process.env.PUBLIC_URL + '/img/c3.png'} alt="client"/>
                                </li>
                                <li>
                                    <img className="md:h-full md:w-48" src={process.env.PUBLIC_URL + '/img/c4.png'} alt="client"/>
                                </li>
                                <li>
                                    <img className="md:h-full md:w-48" src={process.env.PUBLIC_URL + '/img/c5.png'} alt="client"/>
                                </li>
                            </ul>
                        </div>
                        
                    </Col>
                </Row>
            </div>
        )
    }
}
export default withTranslation(['common'])(Association);
