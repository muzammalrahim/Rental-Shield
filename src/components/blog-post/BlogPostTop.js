import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'; 

// Components
import SearchBar from '../general/SearchBar';


// Images
import Blogmainicon from '../../assets/images/blog-heading-icon.png';


export default class BlogPostTop extends Component {
    render() {
        return (
            <div className="md:container md:mx-auto px-0 mx-auto flex flex-wrap flex-col">

                <Row className="px- items-center">
                    <Col lg="8">
                        {/* banner */}
                <div className="blog-post-inner">
                    <div className="bp-top-content px-0 flex items-center">
                            <div className="">
                                <h1 className="text-green-900 text-6xl mr-5">Blog</h1> 
                            </div>
                            <div className="pt-5">
                                <img className="bp-img" src={Blogmainicon} />
                            </div>
                    </div>

                </div>
            {/* banner */}
                    </Col>
                    <Col lg="4" className="bp-serach-area">
                        {/* Search Filter */}
                        <div className="">
                            <SearchBar className=""/>
                        </div>
                        
                    </Col>
                </Row>

            </div>
        )
    }
}
