import React from "react";
import pizza from "../images/pizza.png";
function FirstTwo() {
  return (
    <div className="  lg:h-[950px] h-[440px] w-[1200px] bg-no-repeat lg:rounded-bl-[460px] rounded-bl-[610px] max-w-[1240px]  ">
      <div className="z-20">
        <button className="border-white bg-[#E23744] lg:border-4 border-2 lg:p-3 p-2 lg:px-6 px-3 rounded-full z-30 relative top-[12px] left-[270px] shadow-red-500 lg:top-[50px] lg:left-[520px] lg:text-xl text-xs text-white">
          Get In Touch
        </button>
      </div>
      <div className="z-0">
        <img
          className="lg:relative lg:top-[-60px] lg:w-[800px] w-[400px] relative top-[-40px]"
          src={pizza}
        ></img>
      </div>
    </div>
  );
}

export default FirstTwo;
