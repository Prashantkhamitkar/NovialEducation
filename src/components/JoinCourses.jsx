import React from "react";
import "./css/joincourse.css";
import { motion } from "framer-motion";
const JoinCourses = () => {
  return (
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
          1. Upskill in industry-relevant skillsets to become a top 1% tech and
          data professional.
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
          className="px-6 py-2 mb-5 bg-indigo-950 hover:bg-indigo-800 text-white rounded-md transition duration-300 ease-in-out"
        >
          Request A Callback
        </motion.button>
      </div>
    </motion.div>
  );
};

export default JoinCourses;
