import React, { Component } from 'react'
import Header from '../components/Header';
import BlogBanner from '../components/Banners/BlogBanner';
import Search from '../components/Search/Search';
import BlogPostSlider from '../components/Sliders/BlogPostSlider';
import Mostread from '../components/Mostread/Mstread';
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
                    <div className="flex w-full md:w-2/5 flex-wrap pt-5 pl-5">
                        <h2 className="float-left text-green-900 text-3xl font-normal">Most read</h2>
                    </div>
                    <div className="w-full md:w-3/5 text-center">
                        <Search/>
                    </div>
                </div>

                <div className="md:container md:mx-auto">
                    <Mostread />
                </div>


                <div className="">
                    <BlogPostSlider/>
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


