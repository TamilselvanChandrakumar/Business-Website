import React from "react";
import "../../components/contact/Contact.css";
const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact_wrapper">
          <div className="contact_col">
            <div className="contact_image">
              <img alt=""></img>
            </div>
          </div>
          <div className="contact_col">
            <h2>Contact Us</h2>
            <form>
              <div className="input_wrapper">
                <input
                  type="text"
                  className="form_controll"
                  placeholder="your name..."
                  autoComplete="off"
                ></input>
              </div>
              <div className="input_wrapper">
                <input
                  type="text"
                  className="form_controll"
                  placeholder="your phone..."
                  autoComplete="off"
                ></input>
              </div>
              <div className="input_wrapper">
                <input
                  type="email"
                  className="form_controll"
                  placeholder="your email..."
                  autoComplete="off"
                ></input>
              </div>
              <div className="input_wrapper">
                <textarea placeholder="write a message..."></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
