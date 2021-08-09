import React, { Component } from 'react'


// Images
import BlogPostImg from '../../assets/images/blog-post-banner.png';

export default class BlogPostBanner extends Component {
    render() {
        return (
            <div>
              
                <img className="w-full" src={BlogPostImg} alt="img"/>
            </div>
        )
    }
}
