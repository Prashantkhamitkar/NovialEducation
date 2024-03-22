import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const Animation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the content is in the viewport
      const element = document.getElementById("animationContainer");
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call handleScroll on component mount
    handleScroll();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  return (
    <div
      id="events"
      class="events-area events-bg-height pt-50 pb-50 bg-white"
      style={{
        backgroundImage: `url(https://www.ashokitech.com/assets/frontend/images/go-ahed-bg.png)`,
        overflow: "hidden",
      }}
    >
      <div class="container">
        <div class="row">
          <div
            class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1 wow fadeInUp"
            style={{ visibility: "visible", animation: "fadeInUp" }}
          >
            <div class="section-title mb-50 text-center">
              <div class="section-title-heading mb-20">
                <h1>Training Features</h1>
              </div>
            </div>
          </div>
          <motion.div
            id="animationContainer"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            style={{ overflow: "hidden", width: "100%", height: "100%" }}
          >
            <motion.div
              style={{
                width: "50%",
                float: "left",
                color: "black",
                overflow: "hidden",
              }}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
            >
              <div class=" col-lg-6 mx-auto mb-md-4 mb-4">
                <div class="single-events" style={{ overflow: "hidden" }}>
                  <div class="row">
                    <div
                      class="col-lg-4 col-md-3 d-md-block d-none p-0"
                      style={{ overflow: "hidden" }}
                    >
                      <img
                        src="https://www.ashokitech.com/assets/frontend/images/training1.png"
                        alt="training1"
                        class="img-fluid"
                      />
                    </div>

                    <div class="col-lg-8 col-md-9 col-12 p-md-0 p-3 bg-white">
                      <div class="events-text white-bg">
                        <div class="event-text-heading mb-10">
                          <div class="events-text-title clearfix">
                            <a href="#">
                              <h4>In-time Course Completion</h4>
                            </a>
                          </div>
                        </div>
                        <div class="events-para">
                          <p>
                            Our courses are strategically and innovatively
                            designed, blending both theoretical and practical
                            teaching methods. The modules are carefully chosen
                            to ensure the course is as industry-relevant as
                            possible. The courses are concise yet thorough and
                            students can kick start their careers at the
                            earliest possible.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 mx-auto mb-md-4 mb-4">
                <div class="single-events" style={{ overflow: "hidden" }}>
                  <div class="row">
                    <div
                      class="col-lg-4 col-md-3 d-md-block d-none p-0"
                      style={{ overflow: "hidden" }}
                    >
                      <img
                        src="https://www.ashokitech.com/assets/frontend/images/training2.png"
                        alt="training1"
                        class="img-fluid"
                      />
                    </div>

                    <div class="col-lg-8 col-md-9 col-12 p-md-0 p-3 bg-white">
                      <div class="events-text white-bg">
                        <div class="event-text-heading mb-10">
                          <div class="events-text-title clearfix">
                            <a href="#">
                              <h4>State-of-the-art Infrastructure</h4>
                            </a>
                          </div>
                        </div>
                        <div class="events-para">
                          <p>
                            At Ashok IT Students study in a learning environment
                            supported by state-of-the-art infrastructure, new
                            and innovative teaching techniques, and high-end
                            technological educational resources.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              style={{
                width: "50%",
                float: "right",
                color: "black",
                overflow: "hidden",
              }}
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
            >
              <div class="col-lg-6 mx-auto mb-md-4 mb-4">
                <div class="single-events" style={{ overflow: "hidden" }}>
                  <div class="row">
                    <div
                      class="col-lg-4 col-md-3 d-md-block d-none p-0"
                      style={{ overflow: "hidden" }}
                    >
                      <img
                        src="https://www.ashokitech.com/assets/frontend/images/training3.png"
                        alt="training3"
                        class="img-fluid"
                      />
                    </div>

                    <div class="col-lg-8 col-md-9 col-12 p-md-0 p-3 bg-white">
                      <div class="events-text white-bg">
                        <div class="event-text-heading mb-10">
                          <div class="events-text-title clearfix">
                            <a href="#">
                              <h4>Blended Training Approach</h4>
                            </a>
                          </div>
                        </div>
                        <div class="events-para">
                          <p>
                            We adopt an integrated approach to training that
                            helps our students get both the IT knowledge and
                            skills required to handle the challenging corporate
                            responsibilities. Theoretical learning at Ashok IT
                            is adequately complemented by practice-based
                            heuristic learning that allows our students to learn
                            in an industry-specific way.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class=" col-lg-6 mx-auto mb-md-4 mb-4">
                <div class="single-events" style={{ overflow: "hidden" }}>
                  <div class="row">
                    <div
                      class="col-lg-4 col-md-3 d-md-block d-none p-0"
                      style={{ overflow: "hidden" }}
                    >
                      <img
                        src="https://www.ashokitech.com/assets/frontend/images/training4.png"
                        alt="training4"
                        class="img-fluid"
                      />
                    </div>

                    <div class="col-lg-8 col-md-9 col-12 p-md-0 p-3 bg-white">
                      <div class="events-text white-bg">
                        <div class="event-text-heading mb-10">
                          <div class="events-text-title clearfix">
                            <a href="#">
                              <h4>Free Demo Sessions</h4>
                            </a>
                          </div>
                        </div>
                        <div class="events-para">
                          <p>
                            We also provide our prospective students with the
                            option to try the various programs and courses that
                            we offer through our free demo service. Using this
                            service students can test the course quality and get
                            a better understanding of what course they want to
                            study.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
