import React from "react";
import "./counter.scss";
import { motion } from "framer-motion";

const Counter = () => {
  return (
    <motion.section className="counter-main-container">
      <div className="counter-content">
        <div>
          <div className="count projects-completed">5+</div>
          <div className="title projects-completed">Projects Completed</div>
        </div>
        <div>
          <div className="count happy-clients">6+</div>
          <div className="title happy-clients">Happy Clients</div>
        </div>
        <div>
          <div className="count years-of-experience">3+</div>
          <div className="title years-of-experience">Years of Experience</div>
        </div>
        <div>
          <div className="count team-members">20+</div>
          <div className="title team-members">Team Members</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Counter;
