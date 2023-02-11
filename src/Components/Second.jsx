import React from "react";

function Second() {
  return (
    <div className="lg:bg-gray-100 bg-gray-100 grid grid-cols-2 lg:max-w-[1600px] max-w-[375px] items-center  ">
      <div className=" lg:visible invisible lg:block lg:mx-auto ">
        <img
          className=" w-[480px] object-cover h-[600px] "
          src="https://images.unsplash.com/photo-1495461199391-8c39ab674295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        ></img>
      </div>
      <div className="lg:bg-gray-100 bg-gray-100 lg:my-auto lg:gap-3 text-center lg:text-left w-[140px] lg:w-[200px] lg:h-[550px] relative right-[60px]  ">
        <h1 className="lg:text-[44px] lg:my-5 font-poppins text-[30px] my-3 text-[#1B1464] font-bold ">
          About Us
        </h1>
        <p className="lg:my-5 my-3 lg:w-[600px] text-xs w-[200px] relative right-[35px] ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          possimus et iusto minima optio ullam, cupiditate, sed, dolores natus
          repudiandae dicta impedit pariatur exercitationem eum repellendus amet
          facere delectus. Ullam?
        </p>

        <button className=" lg:my-5 lg:p-5 lg:px-12 lg:text-xl lg:font-semibold text-gray-100 bg-[#E23744] rounded-full my-3 p-3 px-7 ">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Second;
