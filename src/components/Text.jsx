import React from "react";
import HomePage from "./HomePage";
const Text = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:w-[75%] mt-[5.5rem]">
        <div className="w-half  ml-auto mt-4 overflow-hidden  py-3">
          <HomePage />
        </div>
        <div className="max-w-md self-center rounded-lg overflow-hidden shadow-xl transform hover:scale-105  transition duration-300">
          <div className="px-6 py-8">
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
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 transform hover:translate-y-1 hover:shadow-lg md:py-4 md:px-8">
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Text;
