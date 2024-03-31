import React, { useState } from "react";
import HomePage from "./HomePage";

const Text = () => {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const handleToggleInfo = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center md:w-[50%] mt-[5rem]  mr-[30px]">
        <div className="w-half  ml-10 mr-3  overflow-hidden  py-3">
          <HomePage />
        </div>
        <div className="max-w-md self-center rounded-lg overflow-hidden shadow-xl transform hover:scale-105  transition duration-300">
          <div className="pr-[1.5rem] pl-[3.5rem] py-8">
            <h1 className="text-4xl font-bold text-white  mb-4">
              Welcome to Sogdo Academy
            </h1>
            <p className="text-white text-lg mb-6 leading-relaxed">
              At Sogdo Academy, we offer comprehensive courses in various
              subjects including programming, data science, web development, and
              more. Our expert instructors are dedicated to providing
              high-quality education and practical skills that will help you
              succeed in your career.
            </p>
            <div className="text-center">
              <button
                onClick={handleToggleInfo}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 transform hover:translate-y-1 hover:shadow-lg md:py-4 md:px-8"
              >
                {showAdditionalInfo ? "Close" : "Explore Courses"}
              </button>
            </div>
            {showAdditionalInfo && (
              <div className="text-white mt-6">
                <h2 className="text-xl font-semibold mb-4">Testimonials</h2>
                <div className="mb-4">
                  <p className="text-white  leading-relaxed text-lg italic mb-2">
                    "I had a great experience learning at Sogdo Academy. The
                    instructors are knowledgeable and supportive, and the course
                    material is comprehensive."
                  </p>
                  <p className="text-sm text-white">- Prashant Khamitkar</p>
                </div>
                <div className="mb-4">
                  <p className="text-white  leading-relaxed text-lg italic mb-2">
                    "Sogdo Academy helped me enhance my skills and advance in my
                    career. I highly recommend their courses to anyone looking
                    to upskill."
                  </p>
                  <p className="text-sm text-white">- Nitin</p>
                </div>
                {/* Add more testimonials as needed */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Text;
