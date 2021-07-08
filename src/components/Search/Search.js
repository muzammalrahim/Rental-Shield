import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import Searchicon from '../../assets/images/search.svg';


export default class Search extends Component {
    render() {
        return (
            // <div className="bg-white shadow p-4 flex">
            //     <span class="w-auto flex justify-end items-center text-gray-500 p-2">
            //         <img src={Searchicon} />
            //     </span>
            //     <input className="w-full rounded p-2 focus:ring-blue-600" type="text" placeholder="Try 'Los Angeles'" />
            // </div>

            <div className="bg-gray-200">
    <div className="flex float-right">
        <div class="relative">
            <div className="absolute top-4 left-6"> <img src={Searchicon} /> </div> 
            <input type="text" className="h-14 w-96 pl-16 pr-5 z-0 focus:outline-none border-2 border-gray-500 rounded-full" placeholder="Search..." />
            {/* <div className="absolute top-2 right-2"> <button class="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">Search</button> </div> */}
        </div>
    </div>
</div>
   
        )
    }
}
