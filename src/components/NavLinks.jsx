import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import "./css/home.css";
const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginmenu, setLoginmenu] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleloginMenu = () => {
    setLoginmenu(!loginmenu);
    setIsOpen(false);
  };

  return (
    <nav className="flex justify-end w-full relative">
      <div className="hidden md:flex w-full justify-between items-center">
        {/* Nav Links for Larger Screens */}
        <div className="flex w-[calc(100% - 400px)] gap-6 ml-8 items-center">
          <NavLink
            to="/"
            className="text-black hover:text-blue-500  font-normal text-lg  hover:transition-all hover:duration-200 hover:border-b-2 hover:border-blue-500"
          >
            Home
          </NavLink>
          <NavLink
            to="/course"
            className="text-black hover:text-blue-500  font-normal text-lg  hover:transition-all hover:duration-200 hover:border-b-2 hover:border-blue-500"
          >
            Courses
          </NavLink>
          <NavLink
            to="/trainers"
            className="text-black hover:text-blue-500  font-normal text-lg  hover:transition-all hover:duration-200 hover:border-b-2 hover:border-blue-500"
          >
            Trainers
          </NavLink>
          <NavLink
            to="/corporate_training"
            className="text-black hover:text-blue-500  font-normal text-lg  hover:transition-all hover:duration-200 hover:border-b-2 hover:border-blue-500"
          >
            Corporate Training
          </NavLink>
          <NavLink
            to="/student_enquiry"
            className="text-black hover:text-blue-500  font-normal text-lg  hover:transition-all hover:duration-200 hover:border-b-2 hover:border-blue-500"
          >
            Student Enquiry
          </NavLink>
          <NavLink
            to="/feedback"
            className="text-black hover:text-blue-500  font-normal text-lg  hover:transition-all hover:duration-200 hover:border-b-2 hover:border-blue-500"
          >
            Feedback
          </NavLink>
          <NavLink
            to="/contact"
            className="text-black hover:text-blue-500  font-normal text-lg  hover:transition-all hover:duration-200 hover:border-b-2 hover:border-blue-500"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex items-center">
          <button className="bg-red-500 academy-button secondary is-flat font-medium hover:bg-red-400  hover:transition-all hover:duration-200 hover:shadow-red rounded-md text-white px-8 py-2 mr-3">
            APPLY NOW
          </button>
          <button
            className="hover:!bg-blue-500 bg-transparent rounded-sm  hover:transition-all hover:duration-200  hover:text-white border-[1px] border-blue-500  text-blue-500  font-bold text-center hover:font-bold px-4 py-1.5 mr-1"
            onClick={toggleloginMenu}
          >
            Login
          </button>
        </div>
      </div>

      {loginmenu && (
        <motion.div
          style={{ x: loginmenu ? 0 : "100%" }}
          className="fixed !transition-transform !duration-500 !ease-in-out top-0 right-0 h-screen w-[70%]  bg-white z-50"
        >
          <button
            onClick={toggleloginMenu}
            className="absolute top-0 right-0 m-[2.5rem] transition-transform duration-500 ease-in-out focus:outline-none text-gray-500"
          >
            <X size={24} />
          </button>
        </motion.div>
      )}

      {/* Mobile Navigation */}

      <div className="md:hidden">
        <button
          onClick={toggleNavbar}
          className="text-black focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={`fixed top-0 right-0 w-[50%] h-full bg-white z-50 flex flex-col items-start transition-transform duration-500 ${
            isOpen ? "transform translate-x-0" : "transform translate-x-full"
          }`}
        >
          <button
            onClick={toggleNavbar}
            className="absolute top-0 right-0 m-8 text-gray-800 focus:outline-none"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col items-start mt-[10rem]">
            <NavLink
              to="/"
              className="text-black hover:text-gray-600 font-medium text-sm ml-6 mb-[1rem]"
            >
              Home
            </NavLink>
            <NavLink
              to="/course"
              className="text-black hover:text-gray-600 font-medium text-sm ml-6 mb-[1rem]"
            >
              Courses
            </NavLink>
            <NavLink
              to="/trainers"
              className="text-black hover:text-gray-600 font-medium text-sm ml-6 mb-[1rem]"
            >
              Trainers
            </NavLink>
            <NavLink
              to="/corporate_training"
              className="text-black hover:text-gray-600 font-medium text-sm ml-6 mb-[1rem]"
            >
              Corporate Training
            </NavLink>
            <NavLink
              to="/student_enquiry"
              className="text-black hover:text-gray-600 font-medium text-sm ml-6 mb-[1rem]"
            >
              Student Enquiry
            </NavLink>
            <NavLink
              to="/feedback"
              className="text-black hover:text-gray-600 font-medium text-sm ml-6 mb-[1rem]"
            >
              Feedback
            </NavLink>
            <NavLink
              to="/contact"
              className="text-black hover:text-gray-600 font-medium text-sm ml-6 mb-[1rem]"
            >
              Contact Us
            </NavLink>

            {/* Call to Action Buttons */}
            <div className="ml-4 flex flex-col mt-8">
              <button className="bg-red-500 font-medium hover:bg-red-400  hover:transition-all hover:duration-200 hover:shadow-red rounded-md text-white px-8 py-1.5 mb-4">
                APPLY NOW
              </button>
              <button
                onClick={toggleloginMenu}
                className="hover:bg-blue-500 bg-transparent rounded-sm  hover:transition-all hover:duration-200  hover:text-white border-[1px] border-blue-500  text-blue-500  font-bold text-center hover:font-bold "
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavLinks;
