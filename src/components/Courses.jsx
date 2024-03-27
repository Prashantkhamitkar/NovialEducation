import React from "react";
import { motion } from "framer-motion";
const Courses = () => {
  return (
    <>
      <div className="grid grid-cols-1  bg-gradient-to-r from-blue-200 via-purple-300 to-pink-300 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 pb-[5rem]">
        {/* Repeat this for each course */}
        <motion.div
          className="bg-white rounded-lg overflow-hidden  mt-[5rem] shadow-md"
          whileInView={{ rotate: 360 }}
          transition={{ type: "spring", duration: 2, bounce: 0.2 }}
          viewport={{ once: true }}
          //   whileInView={{
          //     scale: [1, 0, 0, 1, 1],
          //     rotate: [0, 0, 270, 360, 0],
          //     borderRadius: ["20%", "20%", "50%", "50%", "3%"],
          //   }}
        >
          <a href="https://www.ashokitech.com/core-java-online-training">
            <img
              src="https://www.ashokitech.com/./uploads/course/core-java-online-training.jpg"
              alt="Core Java"
              className="w-full h-64 object-contain"
            />
          </a>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Core Java</h3>
            <p className="text-gray-700 mb-4">Duration: 2 Months</p>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">&#8377; 5000</span>
                <del className="text-red-500">&#8377; 6000</del>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">
                  <i className="fa fa-star"></i>
                </span>
                <span className="text-yellow-400 mr-1">
                  <i className="fa fa-star"></i>
                </span>
                <span className="text-yellow-400 mr-1">
                  <i className="fa fa-star"></i>
                </span>
                <span className="text-yellow-400 mr-1">
                  <i className="fa fa-star"></i>
                </span>
                <span className="text-yellow-400">
                  <i className="fa fa-star"></i>
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://www.ashokitech.com/core-java-online-training"
                className="text-blue-500 hover:underline"
              >
                View Details
              </a>
              <a
                href="https://www.youtube.com/watch?v=Nhdy5UvLpg0"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </div>
          </div>
        </motion.div>
        {/* End of one course */}
        <motion.div
          className="bg-white rounded-lg overflow-hidden  mt-[5rem] shadow-md"
          whileInView={{ rotate: 360 }}
          transition={{ type: "spring", duration: 2, bounce: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="https://www.ashokitech.com/advanced-java-online-training">
            <img
              src="https://www.ashokitech.com/./uploads/course/advanced-java-online-training.jpeg"
              alt="Advanced Java"
              className="w-full h-64 object-contain"
            />
          </a>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Advanced Java</h3>
            <p className="text-gray-700 mb-4">Duration: 30 Days</p>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">&#8377; 5000</span>
                <del className="text-red-500">&#8377; 6000</del>
              </div>
              <div className="flex items-center">
                <div className="flex">
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://www.ashokitech.com/core-java-online-training"
                className="text-blue-500 hover:underline"
              >
                View Details
              </a>
              <a
                href="https://www.youtube.com/watch?v=Nhdy5UvLpg0"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg overflow-hidden  mt-[5rem] shadow-md"
          whileInView={{ rotate: 360 }}
          transition={{ type: "spring", duration: 2, bounce: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="https://www.ashokitech.com/spring-boot-microservices-online-training">
            <img
              src="https://www.ashokitech.com/./uploads/course/spring-boot-microservices-online-training.jpeg"
              alt="Spring Boot & Microservices"
              className="w-full h-64 object-contain"
            />
          </a>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Spring Boot</h3>
            <p className="text-gray-700 mb-4">Duration: 3 Months</p>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">&#8377; 8000</span>
                <del className="text-red-500">&#8377; 9000</del>
              </div>
              <div className="flex items-center">
                <div className="flex">
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://www.ashokitech.com/spring-boot-microservices-online-training"
                className="text-blue-500 hover:underline"
              >
                View Details
              </a>
              <a
                href="https://www.youtube.com/watch?v=FUE791Fhk4w"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg overflow-hidden  mt-[5rem] shadow-md"
          whileInView={{ rotate: 360 }}
          transition={{ type: "spring", duration: 2, bounce: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="https://www.ashokitech.com/java-realtime-project-online-training">
            <img
              src="https://www.ashokitech.com/./uploads/course/java-realtime-project-online-training.png"
              alt="Java Realtime Project"
              className="w-full h-64 object-contain"
            />
          </a>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">
              Java Realtime Project
            </h3>
            <p className="text-gray-700 mb-4">Duration: 4 Months</p>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">&#8377; 9000</span>
                <del className="text-red-500">&#8377; 11000</del>
              </div>
              <div className="flex items-center">
                <div className="flex">
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://www.ashokitech.com/java-realtime-project-online-training"
                className="text-blue-500 hover:underline"
              >
                View Details
              </a>
              <a
                href="https://www.youtube.com/watch?v=NTBsFTuggDo&list=PLpLBSl8eY8jRWBwxFtqvBoheRgtpoQRfl"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg overflow-hidden  mt-[5rem] shadow-md"
          whileInView={{ rotate: 360 }}
          transition={{ type: "spring", duration: 2, bounce: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="https://www.ashokitech.com/java-fullstack-developer-course">
            <img
              src="https://www.ashokitech.com/./uploads/course/java-fullstack-development-online-training.jpeg"
              alt="Java Fullstack Developer"
              className="w-full h-64 object-contain"
            />
          </a>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Fullstack Course</h3>
            <p className="text-gray-700 mb-4">Duration: 8 Months</p>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">&#8377; 35,000</span>
                <del className="text-red-500">&#8377; 40,000</del>
              </div>
              <div className="flex items-center">
                <div className="flex">
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://www.ashokitech.com/java-fullstack-developer-course"
                className="text-blue-500 hover:underline"
              >
                View Details
              </a>
              <a
                href="https://youtu.be/dxCh2ku0-5k"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg overflow-hidden  mt-[5rem] shadow-md"
          whileInView={{ rotate: 360 }}
          transition={{ type: "spring", duration: 2, bounce: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="https://www.ashokitech.com/microservices-patterns-online-training">
            <img
              src="https://www.ashokitech.com/./uploads/course/microservices-patterns-online-training.jpg"
              alt="Microservices Patterns"
              className="w-full h-64 object-contain"
            />
          </a>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">
              Microservices Patterns
            </h3>
            <p className="text-gray-700 mb-4">Duration: 3 Months</p>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">&#8377; 4000</span>
                <del className="text-red-500">&#8377; 5000</del>
              </div>
              <div className="flex items-center">
                <div className="flex">
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://www.ashokitech.com/microservices-patterns-online-training"
                className="text-blue-500 hover:underline"
              >
                View Details
              </a>
              <a
                href="https://www.youtube.com/c/AshokIT"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg overflow-hidden  mt-[5rem] shadow-md"
          whileInView={{ rotate: 360 }}
          transition={{ type: "spring", duration: 2, bounce: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="https://www.ashokitech.com/java-new-features-online-training">
            <img
              src="https://www.ashokitech.com/uploads/course/java-new-features-online-training.jpg"
              alt="Java New Features"
              className="w-full h-64 object-contain"
            />
          </a>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Java New Features</h3>
            <p className="text-gray-700 mb-4">Duration: 1 Month</p>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">&#8377; 4000</span>
                <del className="text-red-500">&#8377; 5000</del>
              </div>
              <div className="flex items-center">
                <div className="flex">
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                  <i className="fa fa-star text-yellow-500"></i>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://www.ashokitech.com/java-new-features-online-training"
                className="text-blue-500 hover:underline"
              >
                View Details
              </a>
              <a
                href="https://youtu.be/bmj1u9wyl0g"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Courses;
