import React from "react";
import SvgComponent from "./svgcomponents/SvgComponent";

const HomePage = () => {
  return (
    <>
      <div className="bg-white rounded-md w-[100%] px-4">
        <div className="flex">
          <div className="">
            <h2 className="text-gray-700 text-sm md:text-4xl font-bold pt-12 pb-3">
              Upskill & Grab your
            </h2>
            <h2 className="text-blue-500 text-sm md:text-4xl font-bold  pb-3">
              Dream Tech Offer
            </h2>
            <p className="text-gray-600 mt-3 pb-3">
              Learn with a highly structured,personalised & guided world-class
              program. To become the best tech engineer and work at top tech
              companies.
            </p>
            <div className="flex justify-start gap-2 items-center pb-4 py-3">
              <button className="btn btn-primary rounded-none p-2">
                Apply Now
              </button>
              <div className="bg-white rounded-md shadow-md flex">
                <div className="border-l-2 border-blue-500 p-1.5">
                  <SvgComponent />
                </div>
                <button className="rounded-none text-blue-500 btn hover:!text-black font-bold p-2">
                  Download Syllabus
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src="../../src/assets/images/logo.png"
              alt="Logo"
              className=" h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
