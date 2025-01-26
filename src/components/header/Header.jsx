import React, { useState } from "react";
import "./header.scss";
import Hamburger from "../hamburger/Hamburger";
import DropdownList from "../dropdownList/DropdownList"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="header">
        <div className="dummy"></div>
        <h1>
          OPSI<span>vault</span>
        </h1>
        <ul>
          <Hamburger isOpen={isOpen} onToggle={toggleMenu} />
          <li>Home</li>
          <li>About-Us</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Get a Quote</li>
        </ul>
      </div>
      <DropdownList isOpen={isOpen}/>
    </>
  );
};

export default Header;
