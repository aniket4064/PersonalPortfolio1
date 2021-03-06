import React from "react";

import "./AboutMe.scss"

function AboutMe() {
  return (
    <div>
      <div className="about-me">
        <div className="about-me-text">
          <h1><span>A</span>bout Me</h1>
          <h5><span><strong>SDE Intern</strong> at <strong>Flipkart</strong></span></h5>
          <br />
          <h5>Full Stack Web Developer</h5>
          <h5><strong>&</strong></h5>
          <h5>Machine Learning Enthusiast</h5>
        </div>
        <img 
          alt=""
          className="img-no-padding img-responsive about-me-img"
          src={require("assets/img/hmabout.png")}
        />
      </div>
      <div className="about-info">
        <p className="about-info-q">Q) Favourite band ? </p>
        <p className="about-info-a">Fun </p>
        <p className="about-info-q">Q) Favourite singer ? </p>
        <p className="about-info-a">Drake </p>
        <p className="about-info-q">Q) Favourite cuisine ? </p>
        <p className="about-info-a">Mexican </p>
        <p className="about-info-q">Q) Favourite sport ? </p>
        <p className="about-info-a">Soccer </p>
        <p className="about-info-q">Q) Favourite framework / programming language ? </p>
        <p className="about-info-a">Language agnostic, depends on use case </p>
      </div>
    </div>
  );
}

export default AboutMe;
