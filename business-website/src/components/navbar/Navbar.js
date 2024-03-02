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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
