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
  return <></>;
};

export default Navbar;
