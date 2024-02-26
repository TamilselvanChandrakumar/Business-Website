import React from "react";
import "../aboutus/AboutUs.css";
import aboutimg from "../../assets/about/about_img.jpg";
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
          <div className="about_box_details">
            <div className="about_col">
              <div className="about_image">
                <img src={aboutimg} alt=""></img>
              </div>
              <div className="img_info_box">
                <h6 className="img_info_title">GET A PRICE QUOTE TODAY!</h6>
                <p>
                  {" "}
                  Nemo enim ipsam oluptatem quia reoluptas
                  <br /> aut odit aut fugit,{" "}
                </p>
                <a href="/">
                  <span>1-800-654-3210</span>
                </a>
              </div>
            </div>
            <div className="about_col more_space">
              <h3>We Have business skills that will increase your earnings</h3>
              <p>
                {" "}
                Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut odit
                aut fugit, Nemo enim ipsam oluptatem quia reoluptas sit
                aspernatur aut ,
              </p>
              <div className="grid_info">
                <div className="icon"></div>
                <div className="grid_details">
                  <h4>start your own business in minute</h4>
                  <p>
                    {" "}
                    Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut
                    odit aut fugit, Nemo enim
                  </p>
                </div>
              </div>
              <div className="grid_info">
                <div className="icon"></div>
                <div className="grid_details">
                  <h4>Open a business account online</h4>
                  <p>
                    {" "}
                    Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut
                    odit aut fugit, Nemo enim
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
