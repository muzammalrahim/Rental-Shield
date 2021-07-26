import React, { useState } from "react";

import Search from "../../assets/images/serch-icon.svg";
import FaqSearchBox from "../SearchBox/FaqSearchBox";
import setting from "../../assets/images/setting.svg";

function SearchResult() {
  const [TabValue, setTabValue] = useState(1);
  // const [colour , setColour] = useState(false)
  const TabchangeHandler = (value) => {
    setTabValue(value);
    // setColour(true)
  };

  return (
    <div className="searchResult mt-24 carrerTabs">
      <div className="searchResult__accordion mt-8 ">
        <div class="flex rounded-full border-grey-light border mx-4 accordion ">
          <button
            // style={{ color: activeColor }}
            onClick={(e) => TabchangeHandler(1)}
            className={`w-4/12 career-tab font-bold font-body xl:text-xll lg:text-lg rounded-full xl:py-3 xl:px-6 lg:py-3 lg:px-6 xs_tabs_heading ${
              TabValue === 1 ? "bg-green-900 text-white" : ""
            }`}
          >
            What is Proptech
          </button>
          <button
            // style={{ color: activeColor }}
            onClick={(e) => TabchangeHandler(2)}
            className={`w-4/12  rounded-full  xl:text-xll lg:text-lg font-bold font-body xl:py-3 xl:px-6 lg:py-3 lg:px-6
             xs_tabs_heading ${
               TabValue === 2 ? "bg-green-900 text-white" : ""
             }`}
          >
            Why Deposit Shield
          </button>
          <button
            // style={{ color: activeColor }}
            onClick={(e) => TabchangeHandler(3)}
            className={`w-4/12  rounded-full xl:text-xll lg:text-lg font-bold font-body xl:py-3 xl:px-6 lg:py-3 lg:px-6 xs_tabs_heading xs_tab_diver ${
              TabValue === 3 ? "bg-green-900 text-white" : ""
            }`}
          >
            Diversification
          </button>

          <button
            // style={{ color: activeColor }}
            onClick={(e) => TabchangeHandler(4)}
            className={`w-4/12  rounded-full xl:text-xll lg:text-lg font-bold font-body xl:py-3 xl:px-6 lg:py-3 lg:px-6  xs_tabs_heading ${
              TabValue === 4 ? "bg-green-900 text-white" : ""
            }`}
          >
            Working from home
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
