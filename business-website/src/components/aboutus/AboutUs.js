import React from "react";
import "../aboutus/AboutUs.css";
import { FaBusinessTime } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
const AboutUs = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="title_heading">
            <h3>We Provide Shortage Remarkable Ideas</h3>
            <p>
              Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut odit
              aut fugit, sed quia{" "}
            </p>
          </div>
          <div className="about_box_wrapper">
            <div className="about_box">
              <div className="about_icon">
                <FaBusinessTime color="red" size={40}></FaBusinessTime>
              </div>
              <div className="about_content">
                <h5>Development</h5>
                <p>
                  {" "}
                  Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut
                  odit aut fugit,
                </p>
              </div>
            </div>
            <div className="about_box">
              <div className="about_icon">
                <FaChartPie color="green" size={40}></FaChartPie>
              </div>
              <div className="about_content">
                <h5>Integration</h5>
                <p>
                  {" "}
                  Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut
                  odit aut fugit,
                </p>
              </div>
            </div>
            <div className="about_box">
              <div className="about_icon">
                <FaTruckFast color="blue" size={40}></FaTruckFast>
              </div>
              <div className="about_content">
                <h5>Branding</h5>
                <p>
                  {" "}
                  Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut
                  odit aut fugit,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
