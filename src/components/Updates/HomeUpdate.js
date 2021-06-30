import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'; 
import AdImg from '../../assets/images/add-img.png';



export default class HomeUpdate extends Component {
    render() {
        return (
            <div className="update-main mt-5">
                <Container>
                    <Row  className=" main d-flex justify-content-center">
                        <Col md="12">
                        <div>
                            <h4 className="text-5xl text-gray font-normal"> No ifs, buts or games</h4>
                        </div>
                        <br/>
                        <p className="text-xl text-gray font-normal pb-4">
                            Want to get a more detailed overview of how it works? 
                            <br/>
                            please watch our animation video below
                        </p>
                        <img src={AdImg} alt="img"/>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}
