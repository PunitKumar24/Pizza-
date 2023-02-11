import React from "react";
import { foodData } from "../Data/data";
import "./third.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Third() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="">
      <h1 className="lg:text-6xl text-5xl lg:p-24 p-18 lg:my-10 mx-5 my-10 font-notojap text-[#1B1464]">
        Latest Articles
      </h1>
      <div className="container">
        <div className=" lg:p-10 p-1 my-1 lg:gap-8  ">
          <Slider {...settings}>
            {foodData.map &&
              foodData.map((data) => (
                <div
                  key={data.id}
                  className=" border-2 border-gray-500  rounded-3xl lg:w-[430px] lg:h-[650px] p-6 "
                >
                  <img
                    className="object-cover rounded-3xl lg:w-[380px] lg:h-[300px] h-[120px] w-[400px]"
                    src={data.image}
                    alt={data.title}
                  ></img>
                  <h3 className="text-center text-3xl py-7 font-bold text-[#1B1464]">
                    {data.title}
                  </h3>
                  <p className="lg:w-[365px] lg:text-sm lg:text-left lg:mx-auto  text-xs ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nam beatae deserunt maxime maiores ea dolorem neque
                    voluptate ipsam assumenda exercitationem, magni in aperiam
                    voluptatum labore sit asperiores aut aliquid modi.
                  </p>
                  <button className="rounded-full lg:text-xl lg:py-4 lg:font-poppins lg:my-7 border-2 border-gray-600 lg:px-10 text-xs  ">
                    Read More
                  </button>
                </div>
              ))}
          </Slider>
        </div>

        <div className="flex p-10">
          <button className="border-4 border-white text-white">-</button>
          <button className="border-4 border-white text-white">+</button>
        </div>
      </div>
    </div>
  );
}

export default Third;
