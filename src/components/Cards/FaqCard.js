import React, { Component } from "react";
import SearchBox from "../SearchBox/FaqSearchBox";
import cardIcon from "../../assets/images/FaqcardIcon.png";
import categoryTop from "../../assets/images/team-bg-top.png";
import { Row, Col } from "react-bootstrap";

export default class FaqCard extends Component {
  render() {
    return (
      <div className="relative z-10">
          
        <div class="max-w-xl  overflow-hidden px-4 py-4  mx-auto">
          <img
            class="mx-auto mb-2 max-h-28"
            src={cardIcon}
            alt="Sunset in the mountains"
          />
           <div class="max-w-xl rounded-2xl overflow-hidden shadow px-4 pt-4 pb-10  mx-auto">
          <div class="px-6 py-4">
            <p class="text-grey-darker text-base font-body 2lx">
              In case you a large corporate and what to disucss our terms of
              business in more details, or set up an appointment please also
              contact us here. 
            </p>
          </div>
          <div class="px-6"></div>
          <SearchBox />
        </div>
        </div>
      
         <div className="bg-green-700 mt- mt-64 p-8">
         <div>
            <img style={{zIndex:"-9"}} className="w-full absolute bottom-6" src={categoryTop} alt=""/>
            </div>
         </div>
  
        </div>
    );
  }
}
