import React from "react";
import "./css/companies.css";
import "./css/Alumini.css";
import { motion } from "framer-motion";
const Partner = () => {
  return (
    <>
      <section
        data-gtm-section="partners_section"
        data-gtm-element="partners_section"
        data-gtm-allowed-actions="scroll"
        id="partners"
        className={`section partners gtm-track-element`}
        data-cy=""
        data-variant-key=""
        data-variant-value=""
      >
        <div className="sr-container px-3">
          <div className="section-header ">
            <div className="section-header__content">
              <motion.h2
                className="section-header__title"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              >
                <span>Our Alumni work at some of </span>the best companies in
                the world
              </motion.h2>
            </div>
          </div>

          <div className="partners__description ">
            <div className="partners__companies">
              <div className="partners__company">
                <motion.img
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="w-[150px] h-[60px] partners__companies-icon"
                  src="../../src/assets/images/sogdocompany.png"
                />
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies google one-third hide-in-tablet"
                ></motion.span>
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies directi one-third hide-in-tablet"
                ></motion.span>
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies netflix one-third hide-in-tablet"
                ></motion.span>
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies amazon one-third hide-in-tablet"
                ></motion.span>
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies microsoft one-third hide-in-tablet"
                ></motion.span>
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies twitter one-third hide-in-tablet"
                ></motion.span>
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies adobe one-third hide-in-tablet"
                ></motion.span>
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies mindtickle one-third hide-in-tablet"
                ></motion.span>
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies dream11 one-third hide-in-tablet"
                ></motion.span>
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies flipkart one-third hide-in-tablet"
                ></motion.span>
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies goldman one-third hide-in-tablet"
                ></motion.span>
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies sequoia one-third hide-in-tablet"
                ></motion.span>
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies fab one-third hide-in-tablet"
                ></motion.span>
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies qualcomm one-third hide-in-tablet"
                ></motion.span>
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies rippling one-third hide-in-tablet"
                ></motion.span>
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies youtube one-third hide-in-tablet"
                ></motion.span>
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies zomato one-third hide-in-tablet"
                ></motion.span>
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies curefit one-third hide-in-tablet"
                ></motion.span>
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies myntra one-third hide-in-tablet"
                ></motion.span>
              </div>
              <div className="partners__company">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
                  className="partners__companies-icon companies samsung one-third hide-in-tablet"
                ></motion.span>
              </div>
            </div>
            <motion.div
              className="partners__text"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
            >
              and <span className="partners__company-count"> 500+ </span>{" "}
              companies
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.1, ease: "easeOut" }}
            >
              <img
                data-src="https://assets-v2.scaler.com/assets/scaler_branding/webp/partners-buildings-c70b1f00316cba8a63e4fe6844da4e8aa59aa770d30183c1fe1a72d48ee43c1f.webp.gz"
                className=""
                src="https://assets-v2.scaler.com/assets/scaler_branding/webp/partners-buildings-c70b1f00316cba8a63e4fe6844da4e8aa59aa770d30183c1fe1a72d48ee43c1f.webp.gz"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
