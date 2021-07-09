import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHeart, FaRegStar } from "react-icons/fa";

import About1 from "../../assets/images/about-1.png";
import About2 from "../../assets/images/about-2.png";
import About3 from "../../assets/images/about-3.png";
import BgTop from "../../assets/images/team-bg-top.png";
import BgBottom from "../../assets/images/team-bg-bottom.png";

import star from "../../assets/images/star.svg";

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

            <h5 class="pl-1  text-left  mb-2 tag">Tag</h5>
            <h6 className="blog__title">
              Should I keep my A/C on if I am traveling for the summer?
            </h6>
            <p className="blog__des">
              It can be a tricky question here in the UAE and we hope to give
              you some insider tips on how to preserve...
            </p>
            <div className="d-flex ">
              <div className="text-left d-flex  ">
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
                  class="bg-gradient-to-t from-green-500 to-green-400 hover:bg-green-400 text-white p-2 inline-block rounded-full ml-2 "
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
