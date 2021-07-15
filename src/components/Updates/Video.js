import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'; 
import AdImg from '../../assets/images/video.png';   

// Components
import YoutubeEmbed from '../YoutubeVideo/Video'



export default class Video extends Component {
    render() {
        return (
            <div className="update-main mt-20 mb-5">
                <Container>
                    <Row  className=" 
                    d-flex justify-content-center">
                        <Col md="12">
                        <div>
                            <h4 className="text-5xl text-gray-500 font-normal"> ​How about a video..</h4>
                        </div>
                        <p className="text-xl text-gray-500 font-normal pb-4">
                            ​Here's a summary and more.
                        </p>
                        <YoutubeEmbed embedId="rokGy0huYEA" />
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}
