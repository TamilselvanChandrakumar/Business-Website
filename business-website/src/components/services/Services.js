import React from "react";
import "../services/Services.css";

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="title_heading">
          <h3>What's Services We Are Offering To Our Customers</h3>
          <p>
            {" "}
            Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eosqui ratione.
          </p>
        </div>
        <div className="service_wrapper">
          <div className="service_box">
            <div className="service_icon"></div>
            <h4 className="number">01</h4>
            <div className="service_content">
              <h5>Cloud Computing</h5>
              <p>
                {" "}
                Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eosqui ratione.
              </p>
              <a href="/" className="read">
                Read More
              </a>
            </div>
          </div>
          <div className="service_box">
            <div className="service_icon"></div>
            <h4 className="number">02</h4>
            <div className="service_content">
              <h5>Business Strategy</h5>
              <p>
                {" "}
                Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eosqui ratione.
              </p>
              <a href="/" className="read">
                Read More
              </a>
            </div>
          </div>
          <div className="service_box">
            <div className="service_icon"></div>
            <h4 className="number">03</h4>
            <div className="service_content">
              <h5>Report Analysis</h5>
              <p>
                {" "}
                Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eosqui ratione.
              </p>
              <a href="/" className="read">
                Read More
              </a>
            </div>
          </div>
          <div className="service_box">
            <div className="service_icon"></div>
            <h4 className="number">04</h4>
            <div className="service_content">
              <h5>Decision Maker</h5>
              <p>
                {" "}
                Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eosqui ratione.
              </p>
              <a href="/" className="read">
                Read More
              </a>
            </div>
          </div>
          <div className="service_box">
            <div className="service_icon"></div>
            <h4 className="number">05</h4>
            <div className="service_content">
              <h5>Customer Oriented</h5>
              <p>
                {" "}
                Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eosqui ratione.
              </p>
              <a href="/" className="read">
                Read More
              </a>
            </div>
          </div>
          <div className="service_box">
            <div className="service_icon"></div>
            <h4 className="number">06</h4>
            <div className="service_content">
              <h5>Solution Focused</h5>
              <p>
                {" "}
                Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eosqui ratione.
              </p>
              <a href="/" className="read">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
