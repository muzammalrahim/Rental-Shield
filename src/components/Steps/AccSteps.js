import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'; 
import Line from '../../assets/images/line.png';
import Step1 from '../../assets/images/step-11.png';
import Step2 from '../../assets/images/step-22.png';
import Step3 from '../../assets/images/step-33.png';
import Step4 from '../../assets/images/step-44.png';
import Step5 from '../../assets/images/step-55.png';
import Step6 from '../../assets/images/step-66.png';
// import LineBG from '../../ assets/images/line-bg.png';

//Translation
import { withTranslation } from 'react-i18next';

class AccSteps extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="acc-step-main pt-5">
                <Container>
                    {/* step1 */}
                    <Row className="step-row pt-5">
                        
                        <Col lg={{span:6, order:1}} sm={{span:12, order:2}}  xs={{span:12, order:2}} className="d-flex justify-content-center">
                            <div className="step-inner">
                                <ul className="">
                                    <li>
                                        <h4 className="text-gray font-light lg:text-5xl md:text-3xl">{t('ac-steps.one')}</h4>
                                    </li>
                                    <li>
                                        <img className="md:h-30 " src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3 className="text-gray font-light text-5xl lg:text-5xl md:text-3xl">{t('ac-steps.create')}<br/>{t('ac-steps.ac')}</h3>
                                    </li>
                                </ul>
                                <p className="text-right text-gray font-light lg:text-2xl md:text-xl lg:pr-5 ">{t('ac-steps.create-detail-1')}<br/> 
                                {t('ac-steps.create-detail-2')}<br/> 
                                {t('ac-steps.create-detail-3')}</p>
                            </div>
                        </Col>
                        <Col lg={{span:6, order: 2}}  sm={{span:12, order:1}}  xs={{span:12, order:1}}  className="d-flex justify-content-center md:h-50">
                            <img className="" src={Step1} alt="step1"/>
                        </Col>
                        {/* <div className="bg-line">
                            
                        </div> */}
                        {/* <img className="bg-line" src={LineBG}  alt="img"/> */}
                    </Row>
                    {/* step1 */}

                    {/* step2 */}
                    <Row className="step-row ">
                        <Col sm="6" className="d-flex justify-content-center">
                            <img src={Step2} alt="step1"/>
                        </Col>
                        <Col sm="6" className="d-flex justify-content-center">
                            <div className="step-inner">
                                <ul>
                                    <li>
                                        <h4 className="text-gray font-light lg:text-5xl md:text-3xl">{t('ac-steps.two')} </h4>
                                    </li>
                                    <li>
                                        <img src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3 className="text-gray font-light text-5xl lg:text-5xl md:text-3xl">{t('ac-steps.sign')}<br/>{t('ac-steps.paperwork')}</h3>
                                    </li>
                                </ul>
                                <p className="text-right text-gray font-light lg:text-2xl md:text-xl lg:pr-5 ">
                                {t('ac-steps.paperwork-detail-1')}<br/> 
                                {t('ac-steps.paperwork-detail-2')}<br/> 
                                {t('ac-steps.paperwork-detail-3')}<br/> 
                                {t('ac-steps.paperwork-detail-4')}
                                </p>
                            </div>
                        </Col>
                        
                    </Row>
                    {/* step2 */}


                    {/* step3 */}
                    <Row className="step-row ">
                        <Col lg={{span:6, order:1}} sm={{span:12, order:2}} xs={{span:12, order:2}} className="d-flex justify-content-center">
                            <div className="step-inner">
                                <ul>
                                    <li>
                                        <h4 className="text-gray font-light lg:text-5xl md:text-3xl">{t('ac-steps.three')}</h4>
                                    </li>
                                    <li>
                                        <img src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3 className="text-gray font-light text-5xl lg:text-5xl md:text-3xl">{t('ac-steps.check-in')}</h3>
                                    </li>
                                </ul>
                                <p className="text-right text-gray font-light lg:text-2xl md:text-xl lg:pr-5 ">
                                    {t('ac-steps.check-in-details-1')}<br/> 
                                    {t('ac-steps.check-in-details-2')}<br/> 
                                    {t('ac-steps.check-in-details-3')} 
                                </p>
                            </div>
                        </Col>
                        <Col lg={{span:6, order:2}}  sm={{span:12, order:1}}  xs={{span:12, order:1}}  className="d-flex justify-content-center md:h-50">
                            <img src={Step3} alt="step1"/>
                        </Col>
                    </Row>
                    {/* step3 */}

                    {/* step4 */}
                    <Row className="step-row ">
                        <Col sm="6" className="d-flex justify-content-center">
                            <img src={Step4} alt="step1"/>
                        </Col>
                        <Col sm="6" className="d-flex justify-content-center">
                            <div className="step-inner">
                                <ul>
                                    <li>
                                        <h4 className="text-gray font-light lg:text-5xl md:text-3xl">{t('ac-steps.four')}</h4>
                                    </li>
                                    <li>
                                        <img src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3 className="text-gray font-light text-5xl lg:text-5xl md:text-3xl">{t('ac-steps.pom')}</h3>
                                    </li>
                                </ul>
                                <p className="text-right text-gray font-light lg:text-2xl md:text-xl lg:pr-5 ">
                                {t('ac-steps.pom-detail-1')}<br/>
                                {t('ac-steps.pom-detail-2')}<br/> 
                                {t('ac-steps.pom-detail-3')}
                                </p>
                            </div>
                        </Col>
                        
                    </Row>
                    {/* step4 */}

                    {/* step5 */}
                    <Row className="step-row ">
                        <Col lg={{span:6, order:1}} sm={{span:12, order:2}}  xs={{span:12, order:2}} className="d-flex justify-content-center">
                            <div className="step-inner">
                                <ul>
                                    <li>
                                        <h4 className="text-gray font-light lg:text-5xl md:text-3xl">{t('ac-steps.five')}</h4>
                                    </li>
                                    <li>
                                        <img src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3 className="text-gray font-light text-5xl lg:text-5xl md:text-3xl">{t('ac-steps.check-out')}</h3>
                                    </li>
                                </ul>
                                <p className="text-right text-gray font-light lg:text-2xl md:text-xl lg:pr-5 ">
                                    {t('ac-steps.check-out-detail-1')}<br/>
                                    {t('ac-steps.check-out-detail-2')}<br/> 
                                    {t('ac-steps.check-out-detail-3')}
                                </p>
                            </div>
                        </Col>
                        <Col lg={{span:6, order:2}}  sm={{span:12, order:1}}  xs={{span:12, order:1}}  className="d-flex justify-content-center md:h-50">
                            <img src={Step5} alt="step1"/>
                        </Col>
                    </Row>
                    {/* step5 */}

                    {/* step6 */}
                    <Row className="step-row ">
                        <Col sm="6" className="d-flex justify-content-center">
                            <img src={Step6} alt="step1"/>
                        </Col>
                        <Col sm="6" className="d-flex justify-content-center">
                            <div className="step-inner">
                                <ul>
                                    <li>
                                    <h4 className="text-gray font-light lg:text-5xl md:text-3xl">{t('ac-steps.six')}</h4>
                                    </li>
                                    <li>
                                        <img src={Line} alt="Line"/>
                                    </li>
                                    <li>
                                        <h3 className="text-gray font-light text-5xl lg:text-5xl md:text-3xl">{t('ac-steps.receive-vour')}<br/> {t('ac-steps.deposit-back')}</h3>
                                    </li>
                                </ul>
                                <p className="text-right text-gray font-light lg:text-2xl md:text-xl lg:pr-5 ">
                                    {t('ac-steps.receive-vour-detail')}
                                </p>
                            </div>
                        </Col>
                        
                    </Row>
                    {/* step6 */}
                </Container>
            </div>
        )
    }
}

export default withTranslation(['common'])(AccSteps);