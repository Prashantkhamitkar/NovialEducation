import React from "react";
import "./css/footer.css";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
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
              <a
                href="/"
                className="footer__logo gtm-track-element"
                data-gtm-tracking-allowed="true"
                data-gtm-parent="logo"
              >
                <Logo />
              </a>
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
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="scaler_academy_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="scaler_academy_footer_link"
                    href="/academy/"
                  >
                    Sogdo Academy
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="scaler_devops_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="scaler_devops_footer_link"
                    href="/devops-course/"
                  >
                    Sogdo DevOps
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="scaler_data_science_ml_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="scaler_data_science_ml_footer_link"
                    href="/data-science-course/"
                  >
                    Sogdo Data Science &amp; ML
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="scaler_school_of_technology_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="scaler_school_of_technology_footer_link"
                    href="/school-of-technology/"
                  >
                    Sogdo School of Technology
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="scaler_neovarsity_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="scaler_neovarsity_footer_link"
                    href="/neovarsity/"
                  >
                    Sogdo Neovarsity
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="scaler_edge_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="scaler_edge_footer_link"
                    href="/edge/"
                  >
                    Sogdo Edge
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="become_a_mentor_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="become_a_mentor_footer_link"
                    href="/mentor/"
                  >
                    Become a Mentor
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="become_a_ta_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="become_a_ta_footer_link"
                    href="/teaching-assistant/"
                  >
                    Become a TA
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="become_a_career_coach_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="become_a_career_coach_footer_link"
                    href="/career-coach/"
                  >
                    Become a Career Coach
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <div className="footer__heading">
                <div className="h3"> Resources</div>
              </div>
              <ul className="footer__contents">
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="blog_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="blog_footer_link"
                    href="/blog/"
                  >
                    Blog
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="about_us_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="about_us_footer_link"
                    href="/about/"
                  >
                    About us
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="contact_us_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="contact_us_footer_link"
                    href="/contact/"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="careers_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="careers_footer_link"
                    href="/careers/"
                  >
                    Careers
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="review_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="review_footer_link"
                    href="/review/"
                  >
                    Review
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="join_our_discord_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="join_our_discord_footer_link"
                    href="/discord/"
                  >
                    Join Our Discord
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="terms_of_use_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="terms_of_use_footer_link"
                    href="/terms/"
                  >
                    Terms of Use
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="privacy_policy_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="privacy_policy_footer_link"
                    href="/privacy/"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <div className="footer__heading">
                <div className="h3"> Follow us on</div>
              </div>
              <ul className="footer__contents">
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="youtube_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="youtube_footer_link"
                    href="https://www.youtube.com/scaler?sub_confirmation=1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="footer__link-icon icon-play"></i>
                    Youtube
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="linkedin_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="linkedin_footer_link"
                    href="https://www.linkedin.com/school/scaleracademy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="footer__link-icon icon-linkedin-logo"></i>
                    LinkedIn
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="facebook_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="facebook_footer_link"
                    href="https://www.facebook.com/scalerofficial"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="footer__link-icon icon-facebook"></i>
                    Facebook
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="twitter_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="twitter_footer_link"
                    href="https://twitter.com/scaler_official"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="footer__link-icon icon-twitter"></i>
                    Twitter
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="instagram_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="instagram_footer_link"
                    href="https://www.instagram.com/scaler_official/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="footer__link-icon icon-instagram"></i>
                    Instagram
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    className="footer__link gtm-track-element"
                    data-gtm-element="reviews_on_quora_footer_link"
                    data-gtm-allowed-actions="click"
                    data-gtm-tracking-allowed="true"
                    data-cy="reviews_on_quora_footer_link"
                    href="https://www.quora.com/What-is-your-review-of-Scaler-Academy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="footer__link-icon icon-quora"></i>
                    Reviews on Quora
                  </a>
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
                  <a
                    href="/topics/data-structures/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    Data Structures Tutorial
                  </a>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                  <a
                    href="/topics/python/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    Python Tutorial
                  </a>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                  <a
                    href="/topics/java/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    Java Tutorial
                  </a>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                  <a
                    href="/topics/dbms/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    DBMS Tutorial
                  </a>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                  <a
                    href="/topics/c/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    C Tutorial
                  </a>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                  <a
                    href="/topics/javascript/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    JavaScript Tutorial
                  </a>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                  <a
                    href="/topics/cpp/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    C++ Tutorial
                  </a>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                  <a
                    href="/topics/sql/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    SQL Tutorial
                  </a>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                  <a
                    href="/topics/data-science/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    Data Science Tutorial
                  </a>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                  <a
                    href="/topics/software-engineering/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    Software Engineering Tutorial
                  </a>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                  <a
                    href="/topics/html/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    HTML Tutorial
                  </a>
                  <div className="footer__separator">
                    <span> | </span>
                  </div>
                </div>
                <div className="footer__course-link__container">
                  <a
                    href="/topics/css/"
                    className="gtm-track-element"
                    data-gtm-tracking-allowed="true"
                    data-gtm-parent="footer"
                  >
                    CSS Tutorial
                  </a>
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
