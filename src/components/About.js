

import React from "react";
import Projects from "./Projects";
import Contact from "./Contact";
// import Resume from "./Resume";
const About = () => {
  return (
    <div>
    <section className="about">
      <div className="about-content">
        <p className="intro">Hi, my name is</p>
        <h1 className="name">VINNY</h1>
        <h2 className="subtitle">I build backend for mobile and web applications.</h2>
        <p className="description">
          I am a software developer with experience in building full-stack applications using 
          Golang, Python, React.js, AWS, and Kubernetes.
        </p>
      </div>
    </section>
    <Projects />
    {/* <Resume /> */}
    <Contact />
    </div>
  );
};

export default About;

