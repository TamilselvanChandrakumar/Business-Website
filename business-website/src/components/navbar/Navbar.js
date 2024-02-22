import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/companylogo.png";
import { BsXLg } from "react-icons/bs";
import { Link } from "react-scroll";
import { MdDensityMedium } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);
  const [sticky, setSticky] = useState(false);
  // side nav
  const sideNavBar = () => {
    setSideNav(!sideNav);
  };
  // scroll fixed navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
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
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#aboutus">about us</a>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#contactus">Contacus</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
