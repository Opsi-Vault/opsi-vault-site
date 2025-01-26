import React, { useState } from "react";
import "../loader.scss";
import "./project.scss";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="projects-main-container" id="projects">
      <div className="projects-content">
        <motion.div
          className="upper-content-pjt"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut"  }}
        >
          <h5>PROJECT GALLERY</h5>
          <h3 className="sub-heading-pjt">Elevating Your Business</h3>
          <div className="loader"></div>
        </motion.div>
        <motion.div
          className="lower-content-pjt"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut"  }}
        >
          <ul className="nav-links">
            <li
              className={`nav-link ${activeTab === "all" ? "active" : ""}`}
              onClick={() => handleClick("all")}
            >
              Our Work
            </li>
            <li
              className={`nav-link ${
                activeTab === "web-application" ? "active" : ""
              }`}
              onClick={() => handleClick("web-application")}
            >
              Web Application
            </li>
            <li
              className={`nav-link ${
                activeTab === "app-development" ? "active" : ""
              }`}
              onClick={() => handleClick("app-development")}
            >
              App Development
            </li>
            <li
              className={`nav-link ${activeTab === "ui-ux" ? "active" : ""}`}
              onClick={() => handleClick("ui-ux")}
            >
              UI/UX
            </li>
          </ul>

          <div className="tab-content">
            <div className={`tab-pane ${activeTab === "all" ? "active" : ""}`}>
              <ul>
                <li>
                  <div className="tab-pane-card">
                    <div className="tp-card-content">
                      <img
                        src="assets/web-mockup-one.png"
                        alt=""
                        className="img-bg-mockup"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tab-pane-card">
                    <div className="tp-card-content">
                      <img
                        src="assets/web-mockup-two.png"
                        alt=""
                        className="img-bg-mockup"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tab-pane-card">
                    <div className="tp-card-content">
                      <img
                        src="assets/mobile-mockup-one.png"
                        alt=""
                        className="img-bg-mockup"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tab-pane-card">
                    <div className="tp-card-content">
                      <img
                        src="assets/mobile-mockup-two.png"
                        alt=""
                        className="img-bg-mockup"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tab-pane-card">
                    <div className="tp-card-content">
                      <img
                        src="assets/ui-mockup-one.png"
                        alt=""
                        className="img-bg-mockup"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tab-pane-card">
                    <div className="tp-card-content">
                      <img
                        src="assets/ui-mockup-two.png"
                        alt=""
                        className="img-bg-mockup"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className={`tab-pane ${
                activeTab === "web-application" ? "active" : ""
              }`}
            >
              <ul>
                <li>
                  <div className="tab-pane-card">
                    <div className="tp-card-content">
                      <img
                        src="assets/web-mockup-one.png"
                        alt=""
                        className="img-bg-mockup"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tab-pane-card">
                    <div className="tp-card-content">
                      <img
                        src="assets/web-mockup-two.png"
                        alt=""
                        className="img-bg-mockup"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className={`tab-pane ${
                activeTab === "app-development" ? "active" : ""
              }`}
            >
              <ul>
                <li>
                  <div className="tab-pane-card">
                    <div className="tp-card-content">
                      <img
                        src="assets/mobile-mockup-one.png"
                        alt=""
                        className="img-bg-mockup"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tab-pane-card">
                    <div className="tp-card-content">
                      <img
                        src="assets/mobile-mockup-two.png"
                        alt=""
                        className="img-bg-mockup"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className={`tab-pane ${activeTab === "ui-ux" ? "active" : ""}`}
            >
              <ul>
                <li>
                  <div className="tab-pane-card">
                    <div className="tp-card-content">
                      <img
                        src="assets/ui-mockup-one.png"
                        alt=""
                        className="img-bg-mockup"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tab-pane-card">
                    <div className="tp-card-content">
                      <img
                        src="assets/ui-mockup-two.png"
                        alt=""
                        className="img-bg-mockup"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
