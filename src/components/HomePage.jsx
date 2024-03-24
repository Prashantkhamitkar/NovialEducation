import React from "react";

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
            <p className="text-gray-700 mt-3">
              Learn with a highly structured,personalised & guided world-class
              program. To become the best tech engineer and work at top tech
              companies.
            </p>
          </div>
          <div className="">
            <img
              src="../../src/assets/images/logo.png"
              alt="Logo"
              className=" h-auto"
            />
          </div>
        </div>
        <div className="flex justify-start gap-3 items-center pb-4">
          <button className="btn btn-primary rounded-none px-4">
            Apply Now
          </button>
          |
          <button className="btn btn-primary rounded-none px-4">
            Download Syllabus
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
