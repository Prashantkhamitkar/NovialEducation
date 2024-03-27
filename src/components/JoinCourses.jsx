import React, { useState } from "react";
import { motion } from "framer-motion";
import "./css/joincourse.css";
const JoinCourses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormdata] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((state) => ({ ...state, [name]: value }));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 0, 1.2, 0, 1] }}
        transition={{ duration: 0.3, delay: 1, ease: "easeInOut" }}
        whileInView={{ scale: [1.2, 0, 1] }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center mx-auto max-w-full px-4 py-8 bg-white rounded-md shadow-lg"
      >
        <div className="flex flex-col items-center justify-center bg-slate-100 md:px-[10rem] rounded-md">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 mt-[1em] text-center highlight">
            Join Sogdo Academy
          </h1>
          <p className="text-gray-700 md:text-lg text-sm mb-2">
            1. Upskill in industry-relevant skillsets to become a top 1% tech
            and data professional.
          </p>
          <p className="text-gray-700 md:text-lg text-sm mb-2 ">
            2. Get interview calls from prominent start-ups and top product
            companies to make a successful career switch.
          </p>
          <p className="text-gray-700 md:text-lg text-sm mb-4">
            Still have questions? Let our program specialist help you out!
          </p>

          <motion.button
            initial={{ rotate: 0 }}
            animate={{ rotate: 0 }}
            whileTap={{ rotate: -45, scale: 0.3 }}
            onClick={openModal}
            className="px-6 py-2 mb-5 bg-indigo-950 hover:bg-indigo-800 text-white rounded-md transition duration-300 ease-in-out"
          >
            Request A Callback
          </motion.button>
        </div>
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <form
            onSubmit={handlesubmit}
            className="relative bg-indigo-500 rounded-md p-8 w-96"
          >
            <h2 className="text-2xl font-bold mb-4">Request Callback Form</h2>
            <div className="mt-3">
              <label
                htmlFor="fullName"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-white font-normal cursor-auto text-md">
                  Full Name
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="block lg:w-[20rem]   rounded-md border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Enter Your Full Name"
                  required
                />
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="email"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-white font-normal cursor-auto text-md">
                  Email
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block lg:w-[20rem]   rounded-md border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Enter Your  Email Address"
                  required
                />
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="phone"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-white font-normal cursor-auto text-md">
                  Phone
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm mb-3">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block lg:w-[20rem]   rounded-md border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Enter Your Phone number"
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-center mb-4">
              {" "}
              <button className="btn  bg-slate-800 hover:bg-indigo-800 text-white px-5">
                Submit
              </button>
            </div>
            {/* Add your callback form JSX here */}
            <div className="flex items-center justify-center">
              <motion.button
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                whileTap={{ rotate: -45, scale: 0.3 }}
                onClick={closeModal}
                className="px-4 py-2 bg-indigo-950 hover:bg-indigo-800 text-white rounded-md transition duration-300 ease-in-out"
              >
                Close
              </motion.button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default JoinCourses;
