import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li>Features</li>
        <li>Team</li>
        <li>Sign In</li>
      </ul>
    </nav>
  );
};

export default Navbar;
