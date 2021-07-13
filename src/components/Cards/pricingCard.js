import { FcCheckmark } from "react-icons/fc";
import React from "react";

function PricingCard({ image }) {
  return (
    <div class="order-1  pt-5 ">
      <div className="relative top-20 ml-28 top_icon">
        <img
          className="bg-white p-8 rounded-full t-icon  "
          // width="40px"
          src={image}
          alt="img"
        />
      </div>
      <div class="p-8 bg-gradient-to-bl from-gray-800 to-gray-900 bg-opacity-25">
        <p class="font-semibold md:text-center mb-3.5 text-xl text-gray-500   mt-16 ">
          Starter
        </p>
        <div className="d-flex justify-center">
          <small className="product__currency  font-weight-bold">$</small>
          <h1 class="md:text-center text-4xl mb-3.5 font-bold text-gray-500 font-body font-normal leading-7 ">
            15
          </h1>
        </div>

        <p class="md:text-center text-xl font-semibold text-gray-500">
          Explore the basics
          <br />
          with this
          <br />
          introductory course
        </p>

        <div className="my-8">
          <div className="d-flex justify-center text-xl font-semibold text-left text-gray-500">
            <FcCheckmark className="mt-1 mr-2" />{" "}
            <p className="text-left">Unlimeted files</p>
          </div>
          <div className="d-flex justify-center text-xl font-semibold text-gray-500">
            <FcCheckmark className="mt-1 mr-2" /> <p> Unlimeted viewers</p>
          </div>

          <div className="d-flex justify-center text-xl font-semibold text-gray-500">
            <FcCheckmark className="mt-1 mr-2" /> <p> commenters</p>
          </div>
          <div className="d-flex justify-center text-xl font-semibold text-gray-500">
            <FcCheckmark className="mt-1 mr-2" /> <p> Team porject</p>
          </div>
        </div>

        {/* <ul class=" mt-10 mb-14 text-xl font-semibold text-gray-500">
          <FcCheckmark />

          <li class=" mb-3 text-base font-semibold text-gray-500">
            Unlimeted files
          </li>
          <li class=" mb-3 text-base font-semibold text-gray-500">
            Unlimeted viewers
          </li>
          <li class=" mb-3 text-base font-semibold text-gray-500">
            commenters
          </li>
          <li class=" text-base font-semibold text-gray-500">1 Team porject</li>
        </ul> */}
        <a
          href="#"
          class="text-xl px-14 py-2.5 text-white border bg-green-500 font-bold font-body rounded-full"
        >
          Choose
        </a>
      </div>
    </div>

    // <div>
    //   <div className="pricingCard"></div>
    //   <div className="circle">asas</div>
    // </div>
  );
}

export default PricingCard;
