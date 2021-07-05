import React, { Component } from 'react'
// import {Container, Row, Col} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import {Form} from 'react-bootstrap'
import logo from '../assets/images/logo.svg'
import Enter from '../assets/images/enter.svg'
import {Link} from 'react-router-dom'
//Translation
import { withTranslation } from 'react-i18next';


function Header({ t, i18n }) {
    // const {t, i18n} = useTranslation('common');

        return (
            <div className="header-main px-5  pt-3">
                <Navbar  expand="lg" className="p-0">
                    {/* logo */}
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo"/>
                    </Navbar.Brand>
                    {/* logo */}

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* Menu Links */}
                        <Nav className="mr-auto">
                            <Nav.Link href="/about"><div className="text-gray text-lg">{t('header.about')}</div></Nav.Link>
                            <Nav.Link href="#link"><div className="text-gray text-lg">{t('header.faqs')}</div></Nav.Link>
                            <Nav.Link href="#link"><div className="text-gray text-lg">{t('header.more')}</div></Nav.Link>
                        </Nav>
                        {/* Menu Links */}

                        {/* Right Options */}
                        <Form inline>
                            <Button className="bttn mr-3 p-0">
                                <Nav.Link href="/landlord">
                                <div className="text-gray">
                                    {t('header.landlord')}
                                </div>
                                </Nav.Link>
                            </Button>
                            <Button className="bttn px-3 p-0">
                                <Nav.Link href="/tanents">
                                <div className="text-gray">
                                    {t('header.tenat')}
                                </div>
                                </Nav.Link>
                            </Button>
                            <Link className="logins"><div className="text-gray text-lg ml-3 mr-1">{t('header.login')}</div></Link>/
                            <Link className="logins"><div className="text-gray text-lg ml-1">{t('header.signup')}</div></Link>
                            <img className="mx-3" src={Enter} alt="enter"></img>
                            <select className="bg-gray" onChange={(e) => i18n.changeLanguage(e.target.value)}>
                                <option value="en">UK</option>
                                <option value="ar">Ar</option>
                            </select>
                        </Form>
                        {/* Right Options */}
                    </Navbar.Collapse>
                </Navbar>                      
            </div>
        )

}
export default withTranslation(['common'])(Header);