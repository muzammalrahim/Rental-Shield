import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import MindPeace from '../assets/images/Icon-tenant1.png';
import Calander from '../assets/images/calendar 1.png';
import BGLeft from '../assets/images/l-line.png';
import BGRight from '../assets/images/r-line.png';
import Reports from '../assets/images/reports.png';



export default class TenantsSteps extends Component {
    render() {
        return (
            <div className="tenant-main">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="talent-haeding text-gray-500 font-body text-6xl font-normal  pb-3">​
                                Anything more?
                            </h2>
                            <p className="text-gray-500 font-body leading-7 font-center text-xl pb-10">
                                We believe this scheme primarily benefits, you, the tenants. 
                                <br/>
                                Below are examples of just some of those benefits
                            </p>
                        </Col>
                    </Row>
                    {/* step 1 */}
                    <Row className="items-center">
                        <Col lg="6" md="12" sm="12">
                            <img src={MindPeace} alt="img"/>
                        </Col>
                        <Col lg="6" md="12" sm="12">
                            <h1 className="text-5xl text-gray-500 font-body leading-7  font-light text-left pb-3">Peace of mind</h1>
                            <p className="text-gray-500 font-body text-xl text-left font-light pb-3">
                            Ever worried about what this deposit money will be used for. 
                            With our scheme you have the highest chance ever of getting 
                            this deposit back fully. ​
                            </p>

                            <p className="text-gray-500 font-body leading-7 text-xl text-left font-light pb-3">
                            No need to worry about what is in your scope, what is in the landlords scope, 
                            if you can paint a room, or if you put holes for pictures & frames here? ​
                            </p>

                            <p className="text-gray-500 font-body leading-7   text-xl text-left font-light pb-3">
                            We use a state of the art check-in and check-out software so there 
                            are no miscommunications. We also provide specific agreements and 
                            brochures that will help you know how to rent, and what landlords 
                            should accept as fair wear and tear. ​
                            </p>
                            <p className="text-gray-500 font-body leading-7   text-xl text-left font-light pb-3">
                            Plus our experienced team will be able to fairly evaluate any 
                            problems if they do show up later down the line.  
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <img src={BGLeft} alt="img"></img>
                    </Row>

                    {/* step 2 */}
                    <Row className="items-center">
                        
                        <Col lg={{span:6, order:1}} md={{span:12, order:2}} sm={{span:12, order:2}} xs={{span:12, order:2}}  className="lg:order-1">
                            <h1 className="text-5xl text-gray-500 font-body  font-light text-left pb-2">
                                Monhtly Payments 
                            </h1>
                            <p className="text-gray-500 font-body leading-7 text-xl text-left font-light pb-3">
                            Ever worried about what this deposit money will be used for. 
                            With our scheme you have the highest chance ever of getting 
                            this deposit back fully. ​
                            </p>

                            <p className="text-gray-500 font-body leading-7 text-xl text-left font-light pb-3">
                            No need to worry about what is in your scope, what is in the landlords scope, 
                            if you can paint a room, or if you put holes for pictures & frames here? ​
                            </p>

                            <p className="text-gray-500 font-body leading-7  text-xl text-left font-light pb-3">
                            We use a state of the art check-in and check-out software so there 
                            are no miscommunications. We also provide specific agreements and 
                            brochures that will help you know how to rent, and what landlords 
                            should accept as fair wear and tear. ​
                            </p>
                            <p className="text-gray-500 font-body leading-7  text-xl text-left font-light pb-3">
                            Plus our experienced team will be able to fairly evaluate any 
                            problems if they do show up later down the line.  
                            </p>
                        </Col>
                        <Col lg={{span:6, order:2}}  md={{span:12, order:1}} sm={{span:12, order:1}} xs={{span:12, order:1}}>
                            <img src={Calander} alt="img"/>
                        </Col>
                    </Row>

                    <Row>
                        <img src={BGRight} alt="img"></img>
                    </Row>

                    {/* step 3 */}
                    <Row className="items-center">
                        <Col lg="6" md="6" sm="12">
                            <img src={Reports} alt="img"/>
                        </Col>
                        <Col lg="6" md="6" sm="12">
                            <h1 className="text-5xl text-gray-500 font-body font-light text-left pb-3">
                                Check in/out reports
                            </h1>
                            <p className="text-gray-500 leading-7 font-body text-xl text-left font-light pb-3">
                            Ever worried about what this deposit money will be used for. 
                            With our scheme you have the highest chance ever of getting 
                            this deposit back fully. ​
                            </p>

                            <p className="text-gray-500 leading-7 font-body text-xl text-left font-light pb-3">
                            No need to worry about what is in your scope, what is in the landlords scope, 
                            if you can paint a room, or if you put holes for pictures & frames here? ​
                            </p>

                            <p className="text-gray-500 leading-7 font-body text-xl text-left font-light pb-3">
                            We use a state of the art check-in and check-out software so there 
                            are no miscommunications. We also provide specific agreements and 
                            brochures that will help you know how to rent, and what landlords 
                            should accept as fair wear and tear. ​
                            </p>
                            <p className="ttext-gray-500 leading-7 font-body text-xl text-left font-light pb-3">
                            Plus our experienced team will be able to fairly evaluate any 
                            problems if they do show up later down the line.  
                            </p>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}
