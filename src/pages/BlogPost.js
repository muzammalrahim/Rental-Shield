import React, { Component } from 'react';


// Components
import Header from '../components/Header';
import BlogPostTop  from '../components/blog-post/BlogPostTop';
import BlogPostBanner from '../components/Banners/BlogPostBanner';
import BlogDetail from '../components/blog-post/BlogDetail';
import MultiPosting from '../components/blog-post/MultiPosting';




// images



export default class BlogPost extends Component {
    render() {
        return (
            <div className="blog-post-main">
                 {/* header */}
                 <div className="header">
                         <Header/>
                </div>   
                {/* header */}

                {/* Topbar */}
                <BlogPostTop />
                {/* Topbar */}

                {/* Banner */}
                <BlogPostBanner/>
                {/* Banner */}
                
                {/* Blog detail */}
                <BlogDetail/>
                {/* Blog detail */}

                {/* Slider */}
                <MultiPosting/>
                {/* Slider */}

            </div>
        )
    }
}
