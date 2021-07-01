import React, { Component } from 'react';
import Bg from '../../assets/images/landlorg-br.png';
import {Container, Row, Col} from 'react-bootstrap';



export default class LandLordBanner extends Component {
    render() {
        return (
            <div>
                 <div className="landlord-bg bg-cover bg-no-repeat" 
                  style={{ backgroundImage:`url(${Bg})` }}
                  >
                       <Container>
                           <Row>
                               <Col>
                                    <p className="text-gray text-6xl font-normal text-left">
                                        Why is this so 
                                        <br/>
                                        important as a 
                                        <br/>
                                        <span className="font-bold">Landlord? </span> 
                                    </p>
                               </Col>
                           </Row>
                        </Container> 
                  </div>
            </div>
        )
    }
}

