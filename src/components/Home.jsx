import React from "react";
import "./css/home.css";
import Text from "./Text";
import InputBox from "./InputBox";

import MyCarousel from "./Carousel";
import Sections from "./Sections";
import Animation from "./Animation";
import Training_Features from "./Training_Features";
import Partner from "./Partner";

const Home = () => {
  return (
    <>
      <section
        data-gtm-section="banner_section"
        data-gtm-element="banner_section"
        data-gtm-allowed-actions="scroll"
        id="banner"
        className="section banner is-first gtm-track-element"
        data-cy=""
        data-variant-key=""
      >
        <div className="sr-container ">
          <div className="banner__body">
            <Text />
            <InputBox />
          </div>
        </div>
      </section>
      <div className="mt-8 mb-8 ">
        <Training_Features />
      </div>
      <Sections />

      <div className="mt-8 mb-8 ">
        <Partner />
      </div>
    </>
  );
};

export default Home;
