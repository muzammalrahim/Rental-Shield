import React, { useState } from "react";
import Header from "../components/Header";
import "./searchResult.css";
import SearchResultBanner from "../components/Banners/SearchResultBanner";
import IIcon from "../assets/images/i-icon.svg";
import SearchResultCard from "../components/SearchResultCard/SearchResultCard";
import Footer from "../components/Footer";
import BlogCard from "../components/SearchResultCard/BlogCard";
import PagesCard from "../components/SearchResultCard/PagesCard";
import product1 from "../assets/images/product1.svg";
import product2 from "../assets/images/product2.svg";
import product3 from "../assets/images/product3.svg";

import blog1 from "../assets/images/blog1.svg";
import blog2 from "../assets/images/blog2.svg";
import blog3 from "../assets/images/blo3.svg";
import page1 from "../assets/images/page-img1.svg";
import page2 from "../assets/images/page-img2.svg";
import page3 from "../assets/images/page-img3.svg";

function SearchResult(props) {
  let language = props.match.params.lang;
  let url = props.match.url;
  return (
    <div>
      <Header lang={language} url={url} />
      <SearchResultBanner />

      <div className="results">
        <div className="resultIcon mt-32">
          <img src={IIcon} alt="" />
        </div>
        <h6 className="results__items">195 results found</h6>
        <p className="results__des mt-3">
          To see how real results look, go to your published site.
        </p>
      </div>
      {/* products start */}
      <div className="products mt-24">
        <div className="container">
          <h6 className="products__heading text-left ml-4 ">Products</h6>
          <div className="row">
            <div className="col-md-4">
              <SearchResultCard rating={5} image={product1} />
            </div>
            <div className="col-md-4">
              <SearchResultCard rating={5} image={product2} />
            </div>
            <div className="col-md-4">
              <SearchResultCard rating={4} image={product3} />
            </div>
          </div>
          <button className="bg-green-600 rounded-full px-4 py-2 text-lg text-white font-bold font-body header-btn mt-4">
            View All
          </button>
        </div>
      </div>
      {/* products end */}

      {/* blog posts start */}
      <div className="products mt-24">
        <div className="container">
          <h6 className="products__heading text-left ml-4 ">Blog Posts</h6>
          <div className="row">
            <div className="col-md-4">
              <BlogCard rating={5} image={blog1} />
            </div>
            <div className="col-md-4">
              <BlogCard rating={4} image={blog2} />
            </div>
            <div className="col-md-4">
              <BlogCard rating={4} image={blog3} />
            </div>
          </div>
          <button className="bg-green-600 rounded-full px-4 py-2 text-lg text-white font-bold font-body header-btn mt-4">
            View All
          </button>
        </div>
      </div>
      {/* blog posts end */}

      {/* pages start */}
      <div className="products mt-24 mb-64">
        <div className="container">
          <h6 className="products__heading text-left ml-4 ">Pages</h6>
          <div className="row">
            <div className="col-md-4">
              <PagesCard image={page1} />
            </div>
            <div className="col-md-4">
              <PagesCard image={page2} />
            </div>
            <div className="col-md-4">
              <PagesCard image={page3} />
            </div>
          </div>
          <button className="bg-green-600 rounded-full px-4 py-2 text-lg text-white font-bold font-body header-btn mt-4">
            View All
          </button>
        </div>
      </div>
      {/* pages end */}
      <Footer />
    </div>
  );
}

export default SearchResult;
