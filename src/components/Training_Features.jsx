import React from "react";
import { motion } from "framer-motion";

const Training_Features = () => {
  return (
    <>
      <div
        id="events"
        className="events-area events-bg-height pt-50 pb-50 bg-white"
        style={{
          backgroundImage: `url(https://www.ashokitech.com/assets/frontend/images/go-ahed-bg.png)`,
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1 wow fadeInUp"
              style={{ visibility: "visible", animation: "fadeInUp" }}
            >
              <div className="section-title mb-50 text-center">
                <div className="section-title-heading mb-20">
                  <motion.h1
                    initial={{ x: -1000 }}
                    animate={{ x: [0, 900, 0] }}
                    transition={{ delay: 0.5 }}
                    whileInView={{ x: [0, 900, 0] }}
                    viewport={{ once: true }}
                  >
                    Training Features
                  </motion.h1>
                </div>
              </div>
            </div>

            <motion.div
              className=" col-lg-6 mx-auto mb-md-4 mb-4"
              initial={{ x: -1000 }}
              animate={{ x: [0, 900, 0] }}
              transition={{ delay: 0.5 }}
              whileInView={{ x: [0, 900, 0] }}
              viewport={{ once: true }}
            >
              <div className="single-events" style={{ overflow: "hidden" }}>
                <div className="row">
                  <div
                    className="col-lg-4 col-md-3 d-md-block d-none p-0"
                    style={{ overflow: "hidden" }}
                  >
                    <img
                      src="https://www.ashokitech.com/assets/frontend/images/training1.png"
                      alt="training1"
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-lg-8 col-md-9 col-12 p-md-0 p-3 bg-white">
                    <div className="events-text white-bg">
                      <div className="event-text-heading mb-10">
                        <div className="events-text-title clearfix">
                          <a href="#">
                            <h4>In-time Course Completion</h4>
                          </a>
                        </div>
                      </div>
                      <div className="events-para">
                        <p>
                          Our courses are strategically and innovatively
                          designed, blending both theoretical and practical
                          teaching methods. The modules are carefully chosen to
                          ensure the course is as industry-relevant as possible.
                          The courses are concise yet thorough and students can
                          kick start their careers at the earliest possible.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6 mx-auto mb-md-4 mb-4"
              initial={{ x: 1000 }}
              animate={{ x: [0, -900, 0] }}
              transition={{ delay: 0.5 }}
              whileInView={{ x: [0, -900, 0] }}
              viewport={{ once: true }}
            >
              <div className="single-events" style={{ overflow: "hidden" }}>
                <div className="row">
                  <div
                    className="col-lg-4 col-md-3 d-md-block d-none p-0"
                    style={{ overflow: "hidden" }}
                  >
                    <img
                      src="https://www.ashokitech.com/assets/frontend/images/training2.png"
                      alt="training1"
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-lg-8 col-md-9 col-12 p-md-0 p-3 bg-white">
                    <div className="events-text white-bg">
                      <div className="event-text-heading mb-10">
                        <div className="events-text-title clearfix">
                          <a href="#">
                            <h4>State-of-the-art Infrastructure</h4>
                          </a>
                        </div>
                      </div>
                      <div className="events-para">
                        <p>
                          At Ashok IT Students study in a learning environment
                          supported by state-of-the-art infrastructure, new and
                          innovative teaching techniques, and high-end
                          technological educational resources.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6 mx-auto mb-md-4 mb-4"
              initial={{ x: -1000 }}
              animate={{ x: [0, 900, 0] }}
              transition={{ delay: 0.5 }}
              whileInView={{ x: [0, 900, 0] }}
              viewport={{ once: true }}
            >
              <div className="single-events" style={{ overflow: "hidden" }}>
                <div className="row">
                  <div
                    className="col-lg-4 col-md-3 d-md-block d-none p-0"
                    style={{ overflow: "hidden" }}
                  >
                    <img
                      src="https://www.ashokitech.com/assets/frontend/images/training3.png"
                      alt="training3"
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-lg-8 col-md-9 col-12 p-md-0 p-3 bg-white">
                    <div className="events-text white-bg">
                      <div className="event-text-heading mb-10">
                        <div className="events-text-title clearfix">
                          <a href="#">
                            <h4>Blended Training Approach</h4>
                          </a>
                        </div>
                      </div>
                      <div className="events-para">
                        <p>
                          We adopt an integrated approach to training that helps
                          our students get both the IT knowledge and skills
                          required to handle the challenging corporate
                          responsibilities. Theoretical learning at Ashok IT is
                          adequately complemented by practice-based heuristic
                          learning that allows our students to learn in an
                          industry-specific way.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className=" col-lg-6 mx-auto mb-md-4 mb-4"
              initial={{ x: 1000 }}
              animate={{ x: [0, -900, 0] }}
              transition={{ delay: 0.5 }}
              whileInView={{ x: [0, -900, 0] }}
              viewport={{ once: true }}
            >
              <div className="single-events" style={{ overflow: "hidden" }}>
                <div className="row">
                  <div
                    className="col-lg-4 col-md-3 d-md-block d-none p-0"
                    style={{ overflow: "hidden" }}
                  >
                    <img
                      src="https://www.ashokitech.com/assets/frontend/images/training4.png"
                      alt="training4"
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-lg-8 col-md-9 col-12 p-md-0 p-3 bg-white">
                    <div className="events-text white-bg">
                      <div className="event-text-heading mb-10">
                        <div className="events-text-title clearfix">
                          <a href="#">
                            <h4>Free Demo Sessions</h4>
                          </a>
                        </div>
                      </div>
                      <div className="events-para">
                        <p>
                          We also provide our prospective students with the
                          option to try the various programs and courses that we
                          offer through our free demo service. Using this
                          service students can test the course quality and get a
                          better understanding of what course they want to
                          study.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Training_Features;
