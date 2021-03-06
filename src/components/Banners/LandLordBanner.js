import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

// Image
import Bg from '../../assets/images/landlorg-br.png';
import Bgimg from '../../assets/images/landlorg-b.png';





export default class LandLordBanner extends Component {
    render() {
        return (
            <div>
                 <div className="landlord-bg  bg-no-repeat" 
                  style={{ backgroundImage:`url(${Bg})` }}
                  >
                       <Container>
                           <Row>
                               <Col>
                                    <p className="landlord-para text-gray-500 text-4xl  lg:text-6xl font-normal text-left lh-1">
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
                  {/* <div>
                      <img className='w-full' src={Bgimg} alt=""/>
                  </div> */}

            </div>
        )
    }
}

