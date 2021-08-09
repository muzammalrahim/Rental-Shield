import React, { Component } from "react";

// Components
import Header from "../components/Header";
import BlogPostTop from "../components/blog-post/BlogPostTop";
import BlogPostBanner from "../components/Banners/BlogPostBanner";
import BlogDetail from "../components/blog-post/BlogDetail";
import BlogAccordian from "../components/blog-post/BlogAccordian";
import MultiPosting from "../components/blog-post/MultiPosting";
import Footer from "../components/Footer";

// images

export default class BlogPost extends Component {
  language = this.props.match.params.lang;
  render() {
    return (
      <div className="blog-post-main">
        {/* header */}
        <div className="header">
          <Header lang={this.language} />
        </div>
        {/* header */}

        {/* Topbar */}
        <BlogPostTop />
        {/* Topbar */}

        {/* Banner */}
        <BlogPostBanner />
        {/* Banner */}

        {/* Blog detail */}
        <BlogDetail />
        {/* Blog detail */}

        <BlogAccordian />

        {/* Slider */}
        <MultiPosting />
        {/* Slider */}

        {/* Footer */}
        <div className="footer">
          <Footer />
        </div>
        {/* Footer */}
      </div>
    );
  }
}
