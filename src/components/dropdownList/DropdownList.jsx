import React from 'react';
import './DropdownList.scss';
import { MdArrowOutward } from "react-icons/md";

const DropdownList = ({ isOpen }) => {
  return (
    <div className="dropdown">
      <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li className="dropdown-item">Home <MdArrowOutward /></li>
          <li className="dropdown-item">About-Us <MdArrowOutward /></li>
          <li className="dropdown-item">Services <MdArrowOutward /></li>
          <li className="dropdown-item">Portfolio <MdArrowOutward /></li>
          <li className="dropdown-item">Get a Quote <MdArrowOutward /></li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownList;
