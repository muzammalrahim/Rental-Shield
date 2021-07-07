import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';

// Images
import Img1 from '../assets/images/timeline1.png';
import Line1 from '../assets/images/t-line1.png';
import Img2 from '../assets/images/t-line2.png';
import Img3 from '../assets/images/t-line3.png';
import Img4 from '../assets/images/t-line4.png';
import Img5 from '../assets/images/t-line5.png';



export default class Timeline extends Component {
    render() {
        return (
            <div className="timeline-main px-5 relative bottom-44">
                    <div className="timeline-inner relative">
                        {/* Step1 */}
                        <div className="relative">
                            <img src={Img1} alt="img"/>
                            <img className="line1 absolute top-0" src={Line1} alt="img"/>
                        </div>
                        {/* Step1 */}

                        {/* Step2 */}
                        <div className="relative timeline-step2">
                            <img src={Img2} alt="img"/>
                            <img className="line2 absolute top-0" src={Line1} alt="img"/>
                        </div>
                        {/* Step2 */}

                        {/* Step3 */}
                        <div className="relative timeline-step3">
                            <img src={Img3} alt="img"/>
                            <img className="line3 absolute top-0" src={Line1} alt="img"/>
                        </div>
                        {/* Step3 */}

                        {/* Step4 */}
                        <div className="relative timeline-step4">
                            <img src={Img4} alt="img"/>
                            <img className="line4 absolute top-0" src={Line1} alt="img"/>
                        </div>
                        {/* Step4 */}

                        {/* Step5 */}
                        <div className="relative timeline-step5">
                            <img src={Img5} alt="img"/>
                        </div>
                        {/* Step5 */}
                    </div>
                
            </div>
        )
    }
}
