import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <h1>Hello, I'm <span>Manas</span></h1>
      <p>MERN Stack Developer | Passionate about building modern web apps</p>
      <a href="/resume.pdf" className="btn">Download Resume</a>
    </section>
  );
};

export default Hero;
