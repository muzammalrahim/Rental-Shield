import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import RegistrationForm from './RegForm';
import RegBg from '../../assets/images/reg-bg.png'



export default class Registration extends Component {
    render() {
        return (
            <div 
                className="registration-main" 
                style=
                {{ 
                    backgroundImage:`url(${RegBg})` 
                }}
            >
                <div 
                    className=" registration-comp pt-3"
                >
                    <Row className="items-center">
                        <Col 
                            
                            lg={{span:9, order:1}} 
                            md={{span:12, order:2}} 
                            xs={{span:12, order:2}} 
                            className="lg:order-1 form-text">
                            <RegistrationForm/>
                        </Col>

                        <Col 
                            lg={{span:3, order:2}} 
                            md={{span:12, order:1}} 
                            xs={{span:12, order:1}}
                        >
                            <div 
                            className=
                                "reg-text text-left text-white py-5"
                            >
                                <p 
                                    className=
                                    "reg-top-para text-3xl pb-2 font-medium font-body lg:text-left md:text-center"       
                                >
                                    I,ve heard enough
                                </p>
                                <h3 
                                    className=
                                    "text-6xl font-normal font-body lh-60 lg:text-left md:text-center pb-4"
                                >
                                    Sign me
                                    <br/> 
                                    up now
                                </h3>
                                <p 
                                    className=
                                    "reg-para2 text-lg pb-2 font-light md:text-center lg:text-left font-body lh-21 w-9/12">
                                    Protect youself today. We can help your
                                    Landlords to sign up.
                                </p>
                                <p 
                                    className=
                                    "text-lg  font-light lh-21  font-body leading-5  md:text-center lg:text-left w-6/12"
                                > 
                                    Our services are 
                                    regulated by the financial authorities. This is a win/win 
                                    situation for all parties.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
                
            </div>
        )
    }
}
