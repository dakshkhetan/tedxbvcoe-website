import React from "react";
import Fade from "react-reveal/Fade";

import logo from "../../assets/logo/tedxbvcoe_logo.png";

import "./Hero.styles.scss";

const Hero = () => {
  return (
    <section id="home" className="section section-hero">
      <Fade>
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
      </Fade>
    </section>
  );
};

export default Hero;
