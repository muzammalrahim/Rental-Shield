import { FcCheckmark } from "react-icons/fc";
import React from "react";

function PricingCard({ image,type,price }) {
  return (
    <div class="order-1  pt-5 xs_cardP ">
      <div className="relative top-20 ml-28 top_icon">
        <img
          className="bg-white p-8 rounded-full t-icon  "
          // width="40px"
          src={image}
          alt="img"
        />
      </div>
      <div class="p-8 bg-gradient-to-bl from-gray-800 to-gray-900 bg-opacity-25">
        <p class="md:text-center font-normal mb-3.5 font-body text-3xl text-gray-500   mt-16 ">
         {type}
        </p>
        <div className="d-flex justify-center mt-3">
          <small className="text-xl product__currency  font-weight-bold">$</small>
          <h1 class="text-6xl md:text-center  mb-3.5 font-bold text-gray-500 font-body leading-7 ">
           {price}
          </h1>
        </div>

        <p class="md:text-center font-normal leading-7 text-gray-500 font-body text-2x">
          Explore the basics
          <br />
          with this
          <br />
          introductory course
        </p>

        <div className="my-8" style={{marginLeft:"20%"}}>
          <div className="d-flex   text-left text-gray-500">
            <FcCheckmark className="mt-1 mr-2" />{" "}
            <p className="text-left text-lg">Unlimeted files</p>
          </div>
          <div className="d-flex   text-gray-500">
            <FcCheckmark className="mt-1 mr-2 text-lg" /> <p> Unlimeted viewers</p>
          </div>

          <div className="d-flex   text-gray-500">
            <FcCheckmark className="mt-1 mr-2 text-lg" /> <p> commenters</p>
          </div>
          <div className="d-flex    text-gray-500">
            <FcCheckmark className="mt-1 mr-2 text-lg" /> <p> Team porject</p>
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
