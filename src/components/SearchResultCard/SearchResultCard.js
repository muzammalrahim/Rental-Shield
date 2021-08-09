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
import { FaRegStar } from "react-icons/fa";

function SearchResultCard({ rating, image }) {
  return (
    <div className="searchResultCard">
      <div class="mx-4 my-4">
        <div class="w-full rounded-md shadow-md bg-white">
          {/* Image */}
          <img
            src={image}
            class="h-64 lg:h-full object-cove object-center  w-full rounded-lg p-4"
            alt="..."
          />
          {/* Image */}

          <div class="p-4">
            {/* Name */}
            <div className="d-flex">
              <h5 class="pl-1  text-left   mb-2 product__name">Name Product</h5>
              <div className="d-flex ml-auto">
                <small className="product__currency  font-weight-bold">$</small>
                <h5 className="product__price ">55</h5>
              </div>
            </div>
            <div className="d-flex ">
              <div className="text-left d-flex mt-4 ">
                {Array(rating)
                  .fill()
                  .map((_) => (
                    <p className="text-green-900">
                      <FaRegStar />
                    </p>
                  ))}
              </div>

              <div className="text-right ml-auto">
                <Link
                  href="#"
                  class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block mt-4 rounded-full ml-2 "
                >
                  <FaHeart />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResultCard;
