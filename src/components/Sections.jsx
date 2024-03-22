import React from "react";
import { motion } from "framer-motion";
import "./css/section.css";

const Sections = () => {
  return (
    <>
      <div className="services bg-red" style={{ overflow: "hidden" }}>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-10 offset-md-1 wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div className="section-title mb-50 text-center">
                <motion.div
                  className="section-title-heading mb-20"
                  initial={{ y: 100, opacity: 0 }}
                  //   animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h1>The Bright Place to Build The Best Career Value</h1>
                  <p>
                    Best Opportunity To Learn From Currently Working
                    Professionals
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="row training-features ml-auto mr-auto">
            <div className="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 ml-auto mr-auto">
              <div className="row">
                {/* Column 1 */}
                <motion.div
                  className="col-lg-4 col-md-6 wow fadeInLeft"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{
                    delay: 0.3,
                    ease: "easeInOut",
                    duration: 0.6,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <a href="https://www.ashokitech.com/service#online">
                    <div className="item box-bg1">
                      <span className="icon feature_box_col_one">
                        <img
                          data-src="https://www.ashokitech.com/assets/frontend/images/classroom-training.png"
                          alt="classroom-training"
                          className="center serviceImg lazyloaded"
                          loading="lazy"
                          src="https://www.ashokitech.com/assets/frontend/images/classroom-training.png"
                        />
                      </span>
                      <div className="ml-3">
                        <h3>Online Training</h3>
                      </div>
                    </div>
                  </a>
                </motion.div>

                {/* Column 2 */}
                <motion.div
                  className="col-lg-4 col-md-6"
                  initial={{ opacity: 0, y: 100 }}
                  transition={{
                    delay: 0.3,
                    ease: "easeInOut",
                    duration: 0.6,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <a href="https://www.ashokitech.com/service#classroom">
                    <div className="item box-bg2">
                      <span className="icon feature_box_col_two">
                        <img
                          data-src="https://www.ashokitech.com/assets/frontend/images/on-campus-training.png"
                          alt="classroom-training"
                          className="center serviceImg lazyloaded"
                          loading="lazy"
                          src="https://www.ashokitech.com/assets/frontend/images/on-campus-training.png"
                        />
                      </span>
                      <div className="ml-3">
                        <h3>Classroom Training</h3>
                      </div>
                    </div>
                  </a>
                </motion.div>

                {/* Column 3 */}
                <motion.div
                  className="col-lg-4 col-md-6 wow fadeInRight"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{
                    delay: 0.3,
                    ease: "easeInOut",
                    duration: 0.6,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <a href="https://www.ashokitech.com/services#corporate">
                    <div className="item box-bg3">
                      <span className="icon feature_box_col_three">
                        <img
                          data-src="https://www.ashokitech.com/assets/frontend/images/corporate-training.png"
                          alt="classroom-training"
                          className="center serviceImg lazyloaded"
                          loading="lazy"
                          src="https://www.ashokitech.com/assets/frontend/images/corporate-training.png"
                        />
                      </span>
                      <div className="ml-3">
                        <h3>Corporate Training</h3>
                      </div>
                    </div>
                  </a>
                </motion.div>

                {/* Column 4 */}
                <motion.div
                  className="col-lg-4 col-md-6  wow fadeInLeft"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{
                    delay: 0.3,
                    ease: "easeInOut",
                    duration: 0.6,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <a href="https://www.ashokitech.com/weekend-workshops">
                    <div className="item box-bg4">
                      <span className="icon feature_box_col_four">
                        <img
                          data-src="https://www.ashokitech.com/assets/frontend/images/conference.png"
                          alt="conference"
                          className="center serviceImg lazyloaded"
                          loading="lazy"
                          src="https://www.ashokitech.com/assets/frontend/images/conference.png"
                        />
                      </span>
                      <div className="ml-3">
                        <h3>Weekend Workshops</h3>
                      </div>
                    </div>
                  </a>
                </motion.div>
                {/* Column 5 */}
                <motion.div
                  className="col-lg-4 col-md-6"
                  initial={{ opacity: 0, y: 100 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <a href="https://www.ashokitech.com/services#placement">
                    <div className="item box-bg5">
                      <span className="icon feature_box_col_five">
                        <img
                          data-src="https://www.ashokitech.com/assets/frontend/images/recruitment.png"
                          alt="recruitment"
                          className="center serviceImg lazyloaded"
                          loading="lazy"
                          src="https://www.ashokitech.com/assets/frontend/images/recruitment.png"
                        />
                      </span>
                      <div className="ml-4">
                        <h3>Placement</h3>
                      </div>
                    </div>
                  </a>
                </motion.div>

                {/* Column 6 */}
                <motion.div
                  className="col-lg-4 col-md-6 wow fadeInLeft"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{
                    delay: 0.3,
                    ease: "easeInOut",
                    duration: 0.6,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <a href="https://www.ashokitech.com/services#internship">
                    <div className="item box-bg6">
                      <span className="icon feature_box_col_six">
                        <img
                          data-src="https://www.ashokitech.com/assets/frontend/images/expert.png"
                          alt="expert"
                          className="center serviceImg lazyloaded"
                          loading="lazy"
                          src="https://www.ashokitech.com/assets/frontend/images/expert.png"
                        />
                      </span>
                      <div className="ml-3">
                        <h3>Internships</h3>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sections;
