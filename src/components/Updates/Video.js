import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'; 
import AdImg from '../../assets/images/video.png';   



export default class Video extends Component {
    render() {
        return (
            <div className="update-main mt-5">
                <Container>
                    <Row  className=" main d-flex justify-content-center">
                        <Col md="12">
                        <div>
                            <h4 className="text-5xl text-gray font-normal"> ​How about a video..</h4>
                        </div>
                        <br/>
                        <p className="text-xl text-gray font-normal pb-4">
                            ​Here's a summary and more.
                        </p>
                        <img src={AdImg} alt="img"/>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}