//https://www.youtube.com/watch?v=l0JbuMVXaTs&t=393s

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" className="nav-icon" />
          </Link>
          <button className="nav-btn" onClick={toggleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={`nav-links ${isOpen && "show-nav"}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
