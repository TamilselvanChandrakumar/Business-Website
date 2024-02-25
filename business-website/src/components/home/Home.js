import React from "react";
import BannerImage from "../../assets/banner/banner-img.jpg";
import "../home/Home.css";
import { FaChartLine } from "react-icons/fa6";
import { FaShieldHalved } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa6";
const Home = () => {
  return (
    <>
      <section id="home">
        <div className="banner_image"></div>
        <div className="container">
          <div className="banner_outer">
            <div className="col">
              <h3 className="title">
                WE PROMOTE YOUR <span>BUSINESS</span>
              </h3>
              <p>
                Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eosqui ratione.
              </p>
              <div className="btn_wrapper">
                <a className="btn" href="/">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col">
              <div className="sub_banner_image">
                <img src={BannerImage} alt="bannerimg"></img>
              </div>
              <div className="banner_style_1">
                <FaChartLine color="blue"></FaChartLine>
                <h4>Business Analytic</h4>
              </div>
              <div className="banner_style_1 banner_style_2">
                <FaShieldHalved color="red"></FaShieldHalved>
                <h4>99.9% Sucess</h4>
              </div>
              <div className="banner_style_1 banner_style_3">
                <FaChartArea color="green"></FaChartArea>
                <h4>Strategy</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
