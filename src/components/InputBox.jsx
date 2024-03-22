import React from "react";

const InputBox = () => {
  return (
    <div className="max-w-4xl  mx-auto rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="px-8 py-[3rem]">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Form</h2>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-500"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300 hover:shadow-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default InputBox;
