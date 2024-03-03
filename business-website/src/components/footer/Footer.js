import React, { useEffect, useState } from "react";
import "../../components/footer/Footer.css";
import { FaArrowUp } from "react-icons/fa6";
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    const listenScroll = () => {
      setIsVisible(window.scrollY > 20);
    };
    window.addEventListener("scroll", listenScroll);

    return () => {
      window.removeEventListener("scroll", listenScroll);
    };
  });
  return (
    <>
      <section className="cotainer">
        <div className="footer">
          <p>
            {" "}
            All Right Reserved 2023 Designed By <a href="/">BusinessWebsite</a>
          </p>
        </div>
      </section>
      {isVisible && (
        <div className="scroll_top" onClick={scrollToTop}>
          <FaArrowUp size={30} color="black"></FaArrowUp>
        </div>
      )}
    </>
  );
};

export default Footer;
