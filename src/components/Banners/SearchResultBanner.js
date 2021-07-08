import React, { useState } from "react";

import Search from "../../assets/images/serch-icon.svg";
import FaqSearchBox from "../SearchBox/FaqSearchBox";
import setting from "../../assets/images/setting.svg";

function SearchResult() {
  const [TabValue, setTabValue] = useState(1);
  const TabchangeHandler = (value) => {
    setTabValue(value);
  };
  return (
    <div className="searchResult mt-24">
      <h1 className="searchResult__heading">Search Result</h1>
      <img src={Search} alt="" className="serachResult__icon" />
      <div className="searchResult__bar">
        <FaqSearchBox />
      </div>
      <div className="searchResult__accordion mt-8 ">
        <div class="flex rounded-full border-grey-light border mx-4 accordion ">
          <button
            onClick={(e) => TabchangeHandler(1)}
            className={`w-4/12  rounded-full py-3 px-6 ${
              TabValue === 1 ? "bg-green-900" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={(e) => TabchangeHandler(2)}
            className={`w-4/12  rounded-full py-3 px-6 ${
              TabValue === 2 ? "bg-green-900" : ""
            }`}
          >
            Products
          </button>
          <button
            onClick={(e) => TabchangeHandler(3)}
            className={`w-4/12  rounded-full py-3 px-6 ${
              TabValue === 3 ? "bg-green-900" : ""
            }`}
          >
            BlogPosts
          </button>
          <button
            onClick={(e) => TabchangeHandler(4)}
            className={`w-4/12  rounded-full py-3 px-6 ${
              TabValue === 4 ? "bg-green-900" : ""
            }`}
          >
            Pages
          </button>
        </div>
        <button>
          <img src={setting} alt="" />
        </button>
      </div>
    </div>
  );
}

export default SearchResult;
