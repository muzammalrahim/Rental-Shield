import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import About1 from "../../assets/images/about-1.png";
import About2 from "../../assets/images/about-2.png";
import About3 from "../../assets/images/about-3.png";
import BgTop from "../../assets/images/team-bg-top.png";
import BgBottom from "../../assets/images/team-bg-bottom.png";

import star from "../../assets/images/star.svg";

function SearchResultCard({ rating, image }) {
  return (
    <div class="">
      {/* Image */}
      <img
        src={image}
        class="h-64 lg:h-full object-cove object-center  w-full rounded-lg p-4"
        alt="..."
      />
      <h6
        className="text-center font-weight-bold"
        style={{ color: "#606060", fontSize: "20px" }}
      >
        Page title
      </h6>
      {/* Image */}
    </div>
  );
}

export default SearchResultCard;
