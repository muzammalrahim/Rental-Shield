import React, { Component } from "react";
import SearchBox from "../SearchBox/FaqSearchBox";
import cardIcon from "../../assets/images/FaqcardIcon.png";

export default class FaqCard extends Component {
  render() {
    return (
      <div>
        <div class="max-w-xl rounded overflow-hidden shadow-lg p-4 mb-28 mx-auto">
          <img
            class="m-auto max-h-20"
            src={cardIcon}
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <p class="text-grey-darker text-base">
              In case you a large corporate and what to disucss our terms of
              business in more details, or set up an appointment please also
              contact us here. 
            </p>
          </div>
          <div class="px-6 py-4"></div>
          <SearchBox />
        </div>
      </div>
    );
  }
}
