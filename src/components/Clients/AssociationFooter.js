import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import ClientBg from '../../assets/images/client-bg.png';



export default class AssociationFooter extends Component {
    render() {
        return (
            <div className="Association-f-main">
                        
                        <div className="clients" style={{ backgroundImage:`url(${ClientBg})` }}>
                        <p>In association with</p>
                            <ul className="m-0">
                                <li>
                                    <img src={process.env.PUBLIC_URL + '/img/fc1.png'} alt="client"/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + '/img/fc2.png'} alt="client"/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + '/img/fc3.png'} alt="client"/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + '/img/fc4.png'} alt="client"/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + '/img/fc5.png'} alt="client"/>
                                </li>
                            </ul>
                        </div>
            </div>
        )
    }
}
