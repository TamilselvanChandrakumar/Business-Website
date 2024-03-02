import React from "react";
import "../../components/contact/Contact.css";
import contactImg from "../../assets/contact/contact.jpg";
const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact_wrapper">
          <div className="contact_col">
            <div className="contact_image">
              <img src={contactImg} alt=""></img>
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
              <div className="btn_wrapper">
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
