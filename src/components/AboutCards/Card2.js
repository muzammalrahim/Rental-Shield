import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'; 


export default class Card2 extends Component {
    render() {
        return (
            <div className="card1-mian">
                    <Row className="items-center no-gutters">
                        {/* <Col sm="7">
                            <h3 className="text-green text-6xl font-normal font-body">Better Yet..</h3>
                        </Col> */}
                        <Col sm="12">
                        <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 lg:ml-20">
                            <div>
                                <h2 class="text-gray text-5xl font-light font-body text-left pb-3">
                                    Independent
                                </h2>
                                <p class="mt-2 text-gray text-left text-2x font-light font-body">
                                    Our business model is the same for the biggest landlord up to the 
                                    smallest tenant. This allows us to ensure freedom from any outside 
                                    interest and allow us to conduct our services transparently. 
                                </p>
                                <p class="mt-2 text-gray text-left text-2x font-light font-body">
                                    We charge the landlord and tenants the same fees per check-in and 
                                    check-out. Ultimately benefiting both in a win-win situation. 
                                </p>
                            </div>
                        </div>
                        </Col>
                    </Row>
                 
            </div>
        )
    }
}
