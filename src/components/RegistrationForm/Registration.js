import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import RegistrationForm from './RegForm';
import RegBg from '../../assets/images/reg-bg.png'



export default class Registration extends Component {
    render() {
        return (
            <div className="registration-main" style={{ backgroundImage:`url(${RegBg})` }}>
                <Container>
                    <Row>
                        <Col sm="9">
                            <RegistrationForm/>
                        </Col>
                        <Col sm="3">
                            <div className="reg-text text-right text-white py-5">
                                <p>I,ve heard enough</p>
                                <h3>Sign me<br/> up now</h3>
                                <p className="text-lg">Protect youself today. We can help your<br/> 
                                Landlords to sign up.</p>
                                <p> Our services are<br/>
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
