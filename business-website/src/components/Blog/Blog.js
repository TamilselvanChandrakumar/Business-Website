import React from "react";
import "../Blog/Blog.css";
import blogImage from "../../assets/blog/blog.jpg";
const Blog = () => {
  return (
    <section id="blog">
      <div className="container">
        <div className="blog_wrapper">
          <div className="blog_col">
            <h3>We Help Business Launch ,Grow and Succeed</h3>
            <p>
              {" "}
              Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eosqui ratione.
              Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eosqui ratione.
            </p>
            <div className="btn_wrapper">
              <a className="btn" href="/">
                Get Started
              </a>
            </div>
          </div>
          <div className="blog_col">
            <div className="blog_imgge">
              <img src={blogImage} alt="blog"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
