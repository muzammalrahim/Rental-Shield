import React, { Component } from "react";
import SearchBox from "../SearchBox/FaqSearchBox";
import cardIcon from "../../assets/images/FaqcardIcon.png";
import categoryTop from "../../assets/images/team-bg-top.png";



export default class FaqCard extends Component {
  render() {
    return (
      <>
      <div className="relative z-10 FaqCard">
          
        <div class="max-w-3xl  overflow-hidden px-4 py-4  mx-auto ">
          <img
            class="mx-auto  h-48 w-48 mb-8 xs_cardIcon lg:h-40 lg:w-40 lg:mt-6  sm:h-32 sm:w-32"
            src={cardIcon}
            alt="Sunset in the mountains"
          />
           <div class="max-w-3xl  rounded-2xl overflow-hidden shadow-md px-4 pt-4 pb-10  mx-auto">
          <div class="px-6 py-4">
            <p class="text-gray-500  font-body text-2lx font-normal xs_para sm:text-xl">
              In case you a large corporate and what to disucss our terms of
              business in more details, or set up an appointment please also
              contact us here. 
            </p>
          </div>
          <div class="px-6"></div>
          <SearchBox />
        </div>
        </div>
        <div>
            <img style={{zIndex:"-9"}} className="w-full absolute bottom-6" src={categoryTop} alt=""/>
            </div>
         <div className="bg-green-700 mt- mt-64 p-8">
         
         </div>
           
  
        </div>
     </>
    );
  }
}
