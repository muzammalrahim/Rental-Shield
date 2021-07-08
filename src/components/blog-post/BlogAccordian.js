import React, { Component } from 'react'


// Fontawsom
import 
{ 
    FaAngleDown, FaAngleUp
} 
from "react-icons/fa";


export default class BlogAccordian extends Component {
    render() {
        return (
            <div className="blog-acc-main">
                <div class="panel panel-info">
                <div class="panel-heading collapsed" data-toggle="collapse" data-target="#bar">
                    <FaAngleDown className="fa fa-fw fa-chevron-down"/>
                    <FaAngleUp className="fa fa-fw fa-chevron-right"/>sadas
                </div>
                <div class="panel-body">
                    {/* <!-- The inside div eliminates the 'jumping' animation. --> */}
                    <div class="collapse bg-green-900" id="bar">
                  sadfghjkl;'/l.k,jmnhfdasdfgdfghjk'
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
