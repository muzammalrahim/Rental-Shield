import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import logo from '../assets/images/logo.svg'
import {Link} from 'react-router-dom'

//Translation
import { withTranslation } from 'react-i18next';


class Footer extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="footer-main px-5 mt-5">

                {/* footer logo + Social Links */}
                <div className="footer-top">
                    <Row>
                        <Col xl="6" md="12" xs="12" className="">
                            <img className="footer-logo" src={logo} alt="logo"/>
                        </Col>
                        <Col xl="6" md="12" xs="12">
                            <div className="social-links">
                                <ul className="list-none md:text-center lg:text-right">
                                    <li className="pr-3">
                                        <img src={process.env.PUBLIC_URL + '/img/twit.svg'} alt="twitter"/>
                                    </li>
                                    <li className="pr-3">
                                        <img src={process.env.PUBLIC_URL + '/img/youtube.svg'} alt="youtube"/>
                                    </li>
                                    <li className="pr-3">
                                        <img src={process.env.PUBLIC_URL + '/img/in.svg'} alt="insta"/>
                                    </li>
                                    <li className="pr-3">
                                        <img src={process.env.PUBLIC_URL + '/img/fb.svg'} alt="fb"/>
                                    </li>
                                    <li>
                                        <img src={process.env.PUBLIC_URL + '/img/ins.svg'} alt="insta"/>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                {/* footer logo + Social Links */}

                <hr></hr>

                <div className="footer-bottom pt-5">
                    {/* <Row>
                        <Col md="6 text-left">
                            <ul className="text-left">
                                <li>
                                    <Link href="tel:123-456-7890" className="text-base text-gray font-medium">123-456-7890 </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base text-gray font-medium">info@depositshield.com</Link>
                                </li>
                                <li className="text-base text-gray font-medium">Adu Dhabi Global Markets
                                    <br></br> Al Maryah Island 
                                    <br></br>bu Dhabi, U.A.E.</li>
                            </ul>
                        </Col>
                        <Col md="1 text-left pl-0">
                            <h4 className="text-gray text-base font-bold">About us</h4>
                            <ul>
                                <li className="text-sm text-gray font-medium pb-1">Our team</li>
                                <li className="text-sm text-gray font-medium pb-1">Adjucicatiors</li>
                                <li className="text-sm text-gray font-medium pb-1"> Careers</li>
                                <li className="text-sm text-gray font-medium pb-1">Contact us</li>
                                <li className="text-sm text-gray font-medium pb-1">Investors</li>
                                <li className="text-sm text-gray font-medium pb-4">CSR </li>
                                <li className="text-sm text-gray font-medium">FAQ's</li>
                            </ul>
                        </Col>
                        <Col md="1 text-left p-0">
                            <h4 className="text-gray text-base font-bold">I'm a Landlord</h4>
                            <ul>
                                <li className="text-sm text-gray font-medium pb-2">Landlords</li>
                                <li className="text-sm text-gray font-medium pb-2">Agents</li>
                                <li className="text-sm text-gray font-medium pb-2"> Ternats</li>
                                <li className="text-sm">More</li>
                            </ul>
                        </Col>
                        <Col md="1 text-left pr-0">
                            <h4 className="text-gray text-base font-bold">Blog</h4>
                            <ul>
                                <li className="text-sm text-gray font-medium pb-2">Latest</li>
                                <li className="text-sm text-gray font-medium "> Important</li>
                            </ul>
                        </Col>
                        <Col md="1 text-left pr-0 pl-0">
                            <h4 className="text-gray text-base font-bold">Account</h4>
                            <ul>
                                <li className="text-sm text-gray font-medium pb-2">Manage Account</li>
                                <li className="text-sm text-gray font-medium pb-2">Settings</li>
                                <li className="text-sm text-gray font-medium"> Support</li>
                            </ul>
                        </Col>
                        <Col md="1 text-left pr-0">
                            <h4 className="text-gray text-base font-bold">Princing</h4>
                            <ul>
                                <li className="text-sm text-gray font-medium pb-2">Privacy Policy</li>
                            </ul>
                        </Col> 
                        <Col md="1 text-left pr-0 pl-0">
                            <h4 className="text-gray text-base font-bold">Terms & Conditions</h4>
                            <ul>
                                <li className="text-sm text-gray font-medium pb-2">Privacy Policy</li>
                                <li className="text-sm text-gray font-medium pb-2">Legal</li>
                                <li className="text-sm text-gray font-medium pb-2"> Cockie Policy</li>
                                <li className="text-sm text-gray font-medium pb-2">Terms of use</li>
                                <li className="text-sm text-gray font-medium">Site Map</li>
                            </ul>
                        </Col>
                    </Row> */}




                    <div className="footer-inner grid">
                        <div className="footer-adress text-left pb-3">
                            <ul className="text-left">
                                <li>
                                    <Link href="tel:123-456-7890" className="text-base text-gray font-medium">{t('footer.number')} </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base text-gray font-medium">{t('footer.email')}</Link>
                                </li>
                                <li className="text-base text-gray font-medium">{t('footer.address')}
                                    <br></br>  {t('footer.address-1')}
                                    <br></br>{t('footer.address-2')}</li>
                            </ul>
                        </div>
                        <div className=" text-left pb-3">
                            <h4 className="text-gray text-base font-bold">{t('footer.aboutus')}</h4>
                            <ul>
                                <li className="text-sm text-gray font-medium pb-1">{t('footer.ourteam')}</li>
                                <li className="text-sm text-gray font-medium pb-1">{t('footer.adjucicatiors')}</li>
                                <li className="text-sm text-gray font-medium pb-1">{t('footer.careers')}</li>
                                <li className="text-sm text-gray font-medium pb-1">{t('footer.contactus')}</li>
                                <li className="text-sm text-gray font-medium pb-1">{t('footer.investors')}</li>
                                <li className="text-sm text-gray font-medium pb-4">{t('footer.csr')}</li>
                                <li className="text-sm text-gray font-medium">{t('footer.faqs')}</li>
                            </ul>
                        </div>
                        <div className=" text-left pb-3">
                            <h4 className="text-gray text-base font-bold pb-4">I'm a Landlord</h4>
                            <ul>
                                <li className="text-sm text-gray font-medium pb-3">Landlords</li>
                                <li className="text-sm text-gray font-medium pb-3">Agents</li>
                                <li className="text-sm text-gray font-medium  pb-3"> Ternats</li>
                                <li className="text-sm text-gray font-medium ">More</li>
                            </ul>
                        </div>
                        <div className=" text-left pb-3">
                            <h4 className="text-gray text-base font-bold pb-4">Blog</h4>
                            <ul>
                                <li className="text-sm text-gray font-medium pb-3">Latest</li>
                                <li className="text-sm text-gray font-medium "> Important</li>
                            </ul>
                        </div>
                        <div className=" text-left pb-3">
                            <h4 className="text-gray text-base font-bold pb-4">Account</h4>
                            <ul>
                                <li className="text-sm text-gray font-medium pb-3">Manage Account</li>
                                <li className="text-sm text-gray font-medium pb-3">Settings</li>
                                <li className="text-sm text-gray font-medium"> Support</li>
                            </ul>
                        </div>
                        <div className=" text-left pb-3">
                            <h4 className="text-gray text-base font-bold pb-4">Princing</h4>
                            <ul>
                                <li className="text-sm text-gray font-medium pb-2">Privacy Policy</li>
                            </ul>
                        </div>
                        <div className=" text-left">
                            <h4 className="text-gray text-base font-bold pb-4">Terms & Conditions</h4>
                            <ul>
                                <li className="text-sm text-gray font-medium pb-2">Privacy Policy</li>
                                <li className="text-sm text-gray font-medium pb-2">Legal</li>
                                <li className="text-sm text-gray font-medium pb-2"> Cockie Policy</li>
                                <li className="text-sm text-gray font-medium pb-2">Terms of use</li>
                                <li className="text-sm text-gray font-medium">Site Map</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withTranslation(['common'])(Footer);
