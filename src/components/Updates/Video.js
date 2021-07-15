import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'; 
import AdImg from '../../assets/images/video.png';   

// Components
import YoutubeEmbed from '../YoutubeVideo/Video'



export default class Video extends Component {
    render() {
        return (
            <div className="update-main mt-20 mb-5">
                <div className=" main-home px-48">
                        <div className="h-video-main">
                        <div>
                            <h4 className="text-5xl text-gray-500 font-body font-normal"> ​How about a video..</h4>
                        </div>
                        <p className="text-xl text-gray-500 font-body  font-normal pb-4">
                            W​Here's a summary and more. 
                        </p>
                        <YoutubeEmbed embedId="rokGy0huYEA" />
                        </div>
                        
                    </div>
            </div>
        )
    }
}
