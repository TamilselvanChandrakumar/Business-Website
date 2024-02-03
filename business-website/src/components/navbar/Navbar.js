import React from "react";
import logo from "../../assets/logo/companylogo.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div id="site_header">
      <div className="container">
        <nav className="navbar" id="Navbar">
          <div className="navbar_brand">
            <a href="/">
              <img src={logo} alt="logo"></img>
            </a>
          </div>
          <div className="navbar_toggler">{FaBars}</div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
