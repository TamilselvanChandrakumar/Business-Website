import React, { useState } from "react";
import "../../components/footer/Footer.css";
import { FaArrowUp } from "react-icons/fa6";
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
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
        <div className="scroll_top">
          <FaArrowUp size={30} color="black"></FaArrowUp>
        </div>
      )}
    </>
  );
};

export default Footer;
