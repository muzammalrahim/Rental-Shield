import React, { Component } from 'react'
// import {Container, Row, Col} from 'react-bootstrap'; 


// Images
import BlogImg from '../../assets/images/blog-detail-img.png';

// Component

import SocialLinks from '../blog-post/SocialLinks';


export default class BlogDetail extends Component {
    render() {
        return (
            <div className="blog-detail">
                    <div className="blog-content px-40">

                        {/* Tag */}
                        <p className="text-green-500 font-body text-left font-normal text-lg pt-5">
                            Tag
                        </p>
                        {/* Tag */}

                        {/* Main Heading */}
                        <h3 className="text-green-500 font-body text-left font-normal text-6xl">
                            What to look for when 
                            <br/>
                            renting in the UAE?
                        </h3>
                        {/* Main Heading */}

                        {/* Img Brief Description */}
                        <p className="text-3xl font-body font-bold text-gray-500 text-left leading-9 pt-4 pb-3">
                            Create a blog post subtitle that summarizes your post in a few short,
                            punchy sentences and entices your audience to continue reading.
                        </p>
                        {/* Img Brief Description */}

                        {/* Blog Image */}
                        <img className="w-full" src={BlogImg } alt="img"/>
                        {/* Blog Image */}

                        <p className="text-gray-500 font-body text-left font-normal text-2lx leading-8 pt-5">
                            Welcome to your blog post. Use this space to connect with your readers 
                            and potential customers in a way that’s current and interesting. Think 
                            of it as an ongoing conversation where you can share updates about business, 
                            trends, news, and more. 
                        </p>
                        
                        <p className="text-green-500 font-body font-normal text-left text-3xl leading-8 pt-4">
                            Do you have a design in mind for your blog? Whether you prefer a trendy 
                            postcard look or you’re going for a more editorial style blog - there’s a 
                            stunning layout for everyone.
                        </p>

                        <p className="text-gray-500 font-body text-left font-normal text-2lx leading-8 pt-4">
                            You’ll be posting loads of engaging content, so be sure to keep your blog 
                            organized with Categories that also allow visitors to explore more of what 
                            interests them.
                        </p>

                        <p className="text-gray-500 font-body text-left font-bold text-2lx leading-8 py-4"> 
                            Create Relevant Content
                        </p>

                        <p className="text-gray-500 font-body text-left font-normal text-2lx leading-8">
                            Writing a blog is a great way to position yourself as an authority 
                            in your field and captivate your readers’ attention. Do you want to 
                            improve your site’s SEO ranking? Consider topics that focus on relevant 
                            keywords and relate back to your website or business. You can also add 
                            hashtags (#vacation #dream #summer) throughout your posts to reach more 
                            people, and help visitors search for relevant content. 
                        </p>
                        
                        <p className="text-gray-500 font-body text-left font-normal text-2lx leading-8">
                            Blogging gives your site a voice, so let your business’ personality shine 
                            through. Choose a great image to feature in your post or add a video for 
                            extra engagement. Are you ready to get started? Simply create a new post now.
                            
                        </p>
                    </div>
                    <SocialLinks/>
                
            </div>
        )
    }
}
