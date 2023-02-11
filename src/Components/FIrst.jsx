import React from "react";
import food_truck from "../images/food_truck.png";
import FirstTwo from "./FirstTwo";
function FIrst() {
  return (
    <div className=" lg:grid lg:grid-cols-2 lg:min-w-[1440px] max-w-[375px]  ">
      <div className="lg:order-1">
        <FirstTwo />
      </div>
      <div className=" lg:p-10 lg:px-24 lg:grid   ">
        <img
          className="w-[120px] lg:visible invisible "
          src={food_truck}
          alt="foodtruck"
        ></img>
        <div className="lg:grid lg:gap-1 grid lg:text-left text-center gap-5  ">
          <h1 className="text-[#1B1464] drop-shadow-md lg:w-[400px] lg:text-6xl text-5xl text-[50px] w-[400px] font-notojap ">
            Discover the <span className="text-[#E23744]">Best</span> Food and
            Drinks
          </h1>
          <p className="lg:w-[390px] w-[380px] px-16 text-gray-600 lg:text-xl text-xs">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <div className="py-16">
            <button className="text-xl font-semibold p-8 py-4 rounded-full bg-[#E23744] text-white">
              Explore Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FIrst;
