import React from "react";
import "./css/footer.css";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <section
        className="footer gtm-track-element"
        data-gtm-allowed-actions="scroll"
        data-gtm-element="footer"
      >
        <div className="sr-container">
          <div className="footer__parent" data-gtm-section="footer">
            <div className="footer__column--branding">
              <Link
                to="/"
                className="footer__logo gtm-track-element"
                data-gtm-tracking-allowed="true"
                data-gtm-parent="logo"
              >
                <Logo />
              </Link>
              <div className="footer__love m-t-5">
                <div className="footer__block">
                  <span className="h4">
                    Build Your Career With{" "}
                    <FontAwesomeIcon icon={faHeart} className="secondary" />{" "}
                    Sogdo
                  </span>
                </div>{" "}
              </div>
            </div>
            <div className="footer__column">
              <div className="footer__heading">
                <div className="h3"> Explore Sogdo</div>
              </div>
              <ul className="footer__contents">
                <li className="footer__list">
                  <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="scaler_academy_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="scaler_academy_footer_link"
                    to="/"
                  >
                    Sogdo Academy
                  </Link>
                </li>
                <li className="footer__list">
                 <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="scaler_devops_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="scaler_devops_footer_link"
                    to="/devops-course/"
                  >
                    Sogdo DevOps
                  </Link>
                </li>
                <li className="footer__list">
                 <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="scaler_data_science_ml_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="scaler_data_science_ml_footer_link"
                    to="/data-science-course/"
                  >
                    Sogdo Data Science &amp; ML
                  </Link>
                </li>
                <li className="footer__list">
                 <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="scaler_school_of_technology_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="scaler_school_of_technology_footer_link"
                    to="/school-of-technology/"
                  >
                    Sogdo School of Technology
                  </Link>
                </li>
                <li className="footer__list">
                 <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="scaler_neovarsity_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="scaler_neovarsity_footer_link"
                    to="/neovarsity/"
                  >
                    Sogdo Neovarsity
                  </Link>
                </li>
                <li className="footer__list">
                 <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="scaler_edge_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="scaler_edge_footer_link"
                    to="/edge/"
                  >
                    Sogdo Edge
                  </Link>
                </li>
                <li className="footer__list">
                 <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="become_a_mentor_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="become_a_mentor_footer_link"
                    to="/mentor/"
                  >
                    Become a Mentor
                  </Link>
                </li>
                <li className="footer__list">
                 <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="become_a_ta_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="become_a_ta_footer_link"
                    to="/teaching-assistant/"
                  >
                    Become a TA
                  </Link>
                </li>
                <li className="footer__list">
                 <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="become_a_career_coach_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="become_a_career_coach_footer_link"
                    to="/career-coach/"
                  >
                    Become a Career Coach
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <div className="footer__heading">
                <div className="h3"> Resources</div>
              </div>
              <ul className="footer__contents">
                <li className="footer__list">
                  <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="blog_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="blog_footer_link"
                    to="/feedback"
                  >
                    FeedBack
                  </Link>
                </li>
                <li className="footer__list">
                  <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="about_us_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="about_us_footer_link"
                    to="/about"
                  >
                    About us
                  </Link>
                </li>
                <li className="footer__list">
                  <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="contact_us_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="contact_us_footer_link"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="footer__list">
                  <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="careers_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="careers_footer_link"
                    to="/careers"
                  >
                    Careers
                  </Link>
                </li>
                <li className="footer__list">
                  <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="review_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="review_footer_link"
                    to="/review"
                  >
                    Review
                  </Link>
                </li>
                <li className="footer__list">
                  <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="join_our_discord_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="join_our_discord_footer_link"
                    to="/terms_condition/"
                  >
                    Terms And Conditions
                  </Link>
                </li>
                <li className="footer__list">
                  <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="terms_of_use_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="terms_of_use_footer_link"
                    to="/refund"
                  >
                    Refund Policy & Shipment Policy
                  </Link>
                </li>
                <li className="footer__list">
                  <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="privacy_policy_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="privacy_policy_footer_link"
                    to="/privacy"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <div className="footer__heading">
                <div className="h3"> Follow us on</div>
              </div>
              <ul className="footer__contents">
                <li className="footer__list">
                 <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="youtube_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="youtube_footer_link"
                    to="https://www.youtube.com/scaler?sub_confirmation=1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="footer__link-icon icon-play"></i>
                    Youtube
                  </Link>
                </li>
                <li className="footer__list">
                 <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="linkedin_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="linkedin_footer_link"
                    to="https://www.linkedin.com/school/scaleracademy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="footer__link-icon icon-linkedin-logo"></i>
                    LinkedIn
                  </Link>
                </li>
                <li className="footer__list">
                 <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="facebook_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="facebook_footer_link"
                    to="https://www.facebook.com/scalerofficial"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="footer__link-icon icon-facebook"></i>
                    Facebook
                  </Link>
                </li>
                <li className="footer__list">
                 <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="twitter_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="twitter_footer_link"
                    to="https://twitter.com/scaler_official"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="footer__link-icon icon-twitter"></i>
                    Twitter
                  </Link>
                </li>
                <li className="footer__list">
                 <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="instagram_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="instagram_footer_link"
                    to="https://www.instagram.com/scaler_official/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="footer__link-icon icon-instagram"></i>
                    Instagram
                  </Link>
                </li>
                <li className="footer__list">
                 <Link
                    className="footer__link gtm-track-element"
                    data-gtm-element="reviews_on_quora_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="reviews_on_quora_footer_link"
                    to="https://www.quora.com/What-is-your-review-of-Scaler-Academy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="footer__link-icon icon-quora"></i>
                    Reviews on Quora
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__hr-lines"></div>
          <div className="footer__link-section" data-gtm-section="footer">
            <div className="footer__heading">
              <div className="h3">Tutorials</div>
            </div>
            <div className="footer__content">
              <div className="footer__link footer__course-link">
                <div className="footer__course-link__container">
                 <Link
                    to="/topics/data-structures/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    Data Structures Tutorial
                  </Link>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                 <Link
                    to="/topics/python/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    Python Tutorial
                  </Link>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                 <Link
                    to="/topics/java/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    Java Tutorial
                  </Link>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                 <Link
                    to="/topics/dbms/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    DBMS Tutorial
                  </Link>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                 <Link
                    to="/topics/c/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    C Tutorial
                  </Link>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                 <Link
                    to="/topics/javascript/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    JavaScript Tutorial
                  </Link>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                 <Link
                    to="/topics/cpp/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    C++ Tutorial
                  </Link>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                 <Link
                    to="/topics/sql/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    SQL Tutorial
                  </Link>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                 <Link
                    to="/topics/data-science/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    Data Science Tutorial
                  </Link>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                 <Link
                    to="/topics/software-engineering/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    Software Engineering Tutorial
                  </Link>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                 <Link
                    to="/topics/html/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    HTML Tutorial
                  </Link>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                 <Link
                    to="/topics/css/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    CSS Tutorial
                  </Link>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="copyright__content">
            <p className="m-h-10">
              Copyright
              <img
                src="https://assets-v2.scaler.com/assets/scaler/svg/copyright-cf0f03018b8d83eae3708502180eefc1d40751202d8ad50acaaa84bbb07defb4.svg.gz"
                alt="copyright"
              />
              <span> 2024 Sogdo Academy Pte. Ltd. All Rights Reserved.</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
