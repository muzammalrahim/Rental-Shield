import React, { Component } from 'react'
// import {Container, Row, Col} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import {Form} from 'react-bootstrap'
import logo from '../assets/images/logo.svg'
import Enter from '../assets/images/enter.svg'
import {Link} from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <div className="header-main px-5 pt-3">
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
                            <Nav.Link href="#link"><div className="text-gray-700 text-lg">About</div></Nav.Link>
                            <Nav.Link href="#link"><div className="text-gray-700 text-lg">FAQ's</div></Nav.Link>
                            <Nav.Link href="#link"><div className="text-gray-700 text-lg">More</div></Nav.Link>
                        </Nav>
                        {/* Menu Links */}

                        {/* Right Options */}
                        <Form inline>
                            <Button className="bttn mr-3"><div className="text-gray-500">I'm a Landlord</div></Button>
                            <Button className="bttn  px-3">I'm a Tenant</Button>
                            <Link className="logins"><div className="text-gray-700 text-lg ml-3 mr-1">Login</div></Link>/
                            <Link className="logins"><div className="text-gray-700 text-lg ml-1">Sign Up</div></Link>
                            <img className="mx-3" src={Enter} alt="enter"></img>
                            <select className="bg-gray">
                                <option>UK</option>
                                <option>Ar</option>
                            </select>
                        </Form>
                        {/* Right Options */}
                    </Navbar.Collapse>
                </Navbar>                      
            </div>
        )
    }
}
