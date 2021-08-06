import React, { Component } from 'react'
import Header from '../components/Header';
import BlogBanner from '../components/Banners/BlogBanner';
import Search from '../components/Search/Search';
import BlogPostSlider from '../components/Sliders/BlogPostSlider';
import Mostread from '../components/Mostread/Mstread';
import Pagination from '../components/Pagination/Pagination';
import Footer  from '../components/Footer';

//
//import RentalshieldBanner from '../components/Banners/Rental-shield-investment-banner';

// Images
import BgTop from '../assets/images/client-bg.png';



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
                    <div className="flex lg:w-2/5 md:w-2/5 flex-wrap sm:py-5 lg:pt-5 lg:px-0">
                        <h2 className="float-left text-green-900 text-3xl font-normal">Most read</h2>
                    </div>
                    <div className="b-mob-search">
                        <div className="lg:w-3/5 md:w-3/5 text-center lg:pl-12">
                            <Search/>
                        </div>
                    </div>
                    
                </div>

                <div className="md:container md:mx-auto my-10">
                    <Mostread />
                </div>


                <div className="mt-12">
                    <BlogPostSlider/>
                </div>

                <div className="md:container md:mx-auto my-10">
                    <Mostread />
                    <Pagination/>
                </div>

                <div className="last-section pt-96 pb-32">
                    <div class="md:container md:mx-auto px-0 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <div class="flex lg:w-2/5 md:w-2/5 flex-wrap sm:py-5 lg:pt-5 lg:px-0 px-4 pb-0">
                            <h2 class="float-left text-green-900 text-3xl font-normal">To know Rent</h2>
                        </div>
                        <div class="lg:w-3/5 md:w-3/5 text-center lg:pl-12">
                        </div>
                    </div>

                    {/* <svg viewBox="0 0 500 150">
                        <path d="M-6.49,2.47 C137.97,194.89 344.52,-128.78 518.90,75.48 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill:"#DFF8C9"}}></path>
                    
                    </svg> */}
                    {/* <img className="w-full" src={BgTop} alt=""/> */}
                    
                    <BlogPostSlider/> 
                    
                </div>

                </section>
                <Footer />
                

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


