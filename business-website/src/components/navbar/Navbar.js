import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/companylogo.png";
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
      <div id="site_header" className={`${sticky ? "sticky" : null}`}>
        <div className="container">
          <nav className="navbar" id="Navbar">
            <div className="navbar_brand">
              <a href="/">
                <img src={logo} alt="logo"></img>
              </a>
            </div>
            <div className="navbar_toggler" onClick={sideNavBar}>
              <MdDensityMedium color="white" />
            </div>
            <div className={`menu_items ${sideNav === true ? "active" : null}`}>
              <ul>
                <li>
                  <Link activeClass="active" to="home" spy={true} smooth={true}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" spy={true} smooth={true}>
                    About US{" "}
                  </Link>
                </li>
                <li>
                  <Link to="services" spy={true} smooth={true}>
                    Services{" "}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="blog" spy={true} smooth={true}>
                    Blog{" "}
                  </Link>
                </li>
                <li>
                  <Link to="contact" spy={true} smooth={true}>
                    Contact US{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* <div style={{ height: "1200px" }}></div> */}
    </>
  );
};

export default Navbar;
