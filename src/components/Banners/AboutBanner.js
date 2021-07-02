import React, { Component } from 'react'

// Images
import AboutBG from '../../assets/images/about-bg.png';

export default class AboutBanner extends Component {
    render() {
        return (
            <div>
                <img class="h-64 lg:h-full object-cover object-center w-full"  src={AboutBG} alt="img"/>
            </div>
        )
    }
}
