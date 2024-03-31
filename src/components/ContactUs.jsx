import React, { useEffect, useState } from "react";
import BasicMap from "./BasicMap";
import "../../node_modules/leaflet/dist/leaflet.css";
import "./css/map.css";

const ContactUs = () => {
  const [contactDetails, setContactDetails] = useState({
    email: "",
    phone: "",
    address: "",
  });

  // Simulated fetch from database
  useEffect(() => {
    // Simulated data
    const fetchedContactDetails = {
      email: "academy@sogdo.com",
      phone: "+91 6363898636",
      address: "123 Main Street, City, Country",
    };
    // Set contact details state
    setContactDetails(fetchedContactDetails);
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row  justify-center items-center h-screen bg-gradient-to-r from-purple-400 to-blue-500">
        <div className="flex flex-col justify-between max-w-md mx-4 mb-5 md:!mb-0 bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className=" font-bold text-yellow-500">126%</div>
              <div className="text-gray-700">Avg. CTC Hike</div>
            </div>
            <div className="text-center  text-lg">
              <div className="font-bold text-blue-500">Top 1%</div>
              <div className="text-gray-700">Industry Instructors</div>
            </div>
            <div className="text-center  text-lg">
              <div className="font-bold text-green-500">900+</div>
              <div className="text-gray-700">Placement Partners</div>
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-4">
            Your Path to a Successful Tech Career!
          </h1>
          <div className="mb-4">
            Now experience the program for{" "}
            <b>
              <span className="text-yellow-500">FREE</span>
            </b>
          </div>
          <div className="flex justify-between">
            <a
              href="/academy/free-live-className/"
              className="bg-blue-500 hover:bg-blue-600 text-white  md:!font-semibold py-2 px-6   rounded-full focus:outline-none focus:shadow-outline transition duration-300"
            >
              Book a Live className
            </a>
            <a
              href="/academy/explore-dashboard/"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
            >
              Explore Academy
            </a>
          </div>
          <div className="text-sm mt-4">
            NEXT BATCH STARTS <span className="text-yellow-500">MID-APRIL</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md items-center justify-center  w-[75%] md:w-[50%]">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Contact Us
          </h1>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Contact Email:
            </label>
            <p id="email" className="text-lg text-gray-900">
              {contactDetails.email}
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700"
            >
              Contact Phone:
            </label>
            <p id="phone" className="text-lg text-gray-900">
              {contactDetails.phone}
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-semibold text-gray-700"
            >
              Address:
            </label>
            <p id="address" className="text-lg text-gray-900">
              {contactDetails.address}
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-gradient-to-r from-purple-400 to-blue-500">
        <div className="container mx-auto py-12">
          <h1 className="text-lg text-center font-bold mb-4 text-white">
            Explore Our Academy
          </h1>
          <BasicMap />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
