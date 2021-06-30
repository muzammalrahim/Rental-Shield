import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import RegistrationForm from './RegForm';
import RegBg from '../../assets/images/reg-bg.png'



export default class Registration extends Component {
    render() {
        return (
            <div className="registration-main" style={{ backgroundImage:`url(${RegBg})` }}>
                <Container>
                    <Row className="items-center">
                        <Col className="form-text" lg={{span:9, order:1}} md={{span:12, order:2}} xs={{span:12, order:2}}>
                            <RegistrationForm/>
                        </Col>
                        <Col lg={{span:3, order:2}} md={{span:12, order:1}} xs={{span:12, order:1}}>
                            <div className="reg-text text-right text-white py-5">
                                <p className="text-2xl font-normal md:text-center">I,ve heard enough</p>
                                <h3 className="text-5xl font-normal md:text-center">Sign me<br/> up now</h3>
                                <p className="text-base font-normal md:text-center">Protect youself today. We can help your<br/> 
                                Landlords to sign up.</p>
                                <p className="text-base font-normal md:text-center"> Our services are<br/>
                                regulated by the financial<b/> authorities. This is a win/win<br/> 
                                situation for all parties.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}
