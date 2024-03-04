import React, { useState } from "react";
import logo from "../../assets/logo/companylogo.png";
import { BsXLg } from "react-icons/bs";
import { MdDensityMedium } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);
  // side nav
  const sideNavBar = () => {
    setSideNav(!sideNav);
  };
  // scroll fixed navbar
  return (
    <>
      <header className="navbar-header">
        <div className="logo">
          <img src={logo} alt=""></img>
        </div>
        <div className="sidebar-icon" onClick={sideNavBar}>
          <MdDensityMedium color="white" size={20}></MdDensityMedium>
        </div>
        <nav
          className={`navlink-container ${sideNav ? "active-sidebar" : null} `}
        >
          <div className="sidebar-cancelbtn" onClick={() => sideNavBar(false)}>
            <BsXLg color="white" size={30}></BsXLg>
          </div>
          <ul>
            <li>
              <a href="#home" onClick={() => setSideNav(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setSideNav(false)}>
                About us
              </a>
            </li>
            <li>
              <a href="#service" onClick={() => setSideNav(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#blog" onClick={() => setSideNav(false)}>
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setSideNav(false)}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
