import React from "react";
import "./Hamburger.scss"; // SCSS file for styles

const HamburgerMenu = ({ isOpen, onToggle }) => {
  return (
    <div className="hamburger-menu" onClick={onToggle}>
      <div className={`bar ${isOpen ? "open" : ""}`}>
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>
    </div>
  );
};

export default HamburgerMenu;
