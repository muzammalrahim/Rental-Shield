import React, { Component } from 'react'
import Header from '../components/Header';
import BlogBanner from '../components/Banners/BlogBanner';
import Search from '../components/Search/Search';
import BlogPostSlider from '../components/Sliders/BlogPostSlider';
import Mostread from '../components/Mostread/Mstread';
import BgTop from '../assets/images/client-bg.png'
import {
    useParams,
} from "react-router-dom";

export default function Blog() {
    let { id } = useParams();
    var body = document.body;

    body.classList.add("gradient");

        return (
            <div className="blog-main">

                <div className="header">
                    <Header />
                </div>
                    <BlogBanner/>

                <section class="bg-white">
                <div className="md:container md:mx-auto px-0 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div className="flex w-full md:w-2/5 flex-wrap pt-5">
                        <h2 className="float-left text-green-900 text-3xl font-normal">Most read</h2>
                    </div>
                    <div className="w-full md:w-3/5 text-center">
                        <Search/>
                    </div>
                </div>

                <div className="md:container md:mx-auto my-10">
                    <Mostread />
                </div>


                <div className="">
                    <BlogPostSlider/>
                </div>

                <div className="md:container md:mx-auto my-10">
                    <Mostread />
                </div>

                <div className="last-section">
                
                    {/* <svg viewBox="0 0 500 150">
                        <path d="M-6.49,2.47 C137.97,194.89 344.52,-128.78 518.90,75.48 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill:"#DFF8C9"}}></path>
                    
                    </svg> */}
                    <img className="w-full" src={BgTop} alt=""/>
                    <div className="bg">
                    <BlogPostSlider/> 
                    </div>
                  

                </div>


                
                </section>

                

            </div>
        )

}


/*
export default class Blog extends Component {
    render() {
        return (
            <div className="blog-main">
                {/!* header *!/}
                <div className="header">
                         <Header/>
                    </div>   
                    {/!* header *!/}

                    {/!* Banner *!/}
                    <BlogBanner/>

            </div>
        )
    }
}
*/


