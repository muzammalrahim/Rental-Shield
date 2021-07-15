import React, { Component } from 'react'
import Header from '../components/Header';
import BlogBanner from '../components/Banners/BlogBanner';
import Search from '../components/Search/Search';
import BlogPostSlider from '../components/Sliders/BlogPostSlider';
import Mostread from '../components/Mostread/Mstread';
import Pagination from '../components/Pagination/Pagination';
import Footer  from '../components/Footer';

//
import RentalshieldBanner from '../components/Banners/Rental-shield-investment-banner';

// Images
import BgTop from '../assets/images/client-bg.png';



import {
    useParams,
} from "react-router-dom";

export default function RentalShield() {
    let { id } = useParams();
    var body = document.body;

    body.classList.add("gradient");

        return (
            <div className="rental-shield-main">

                {/* <div className="header">
                    <Header />
                </div> */}
                    <RentalshieldBanner/>

                
                {/* <Footer /> */}
                

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


