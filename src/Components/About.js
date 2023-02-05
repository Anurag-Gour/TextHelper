import React from "react";
import "./About.css";
import Logo from "./Logo";
import Navbar1 from "./Navbar1";
import { Link } from "react-router-dom";
const About = (props) => {
  return (
    <>
    <Navbar1 mode={props.mode} toggleMode={props.toggleMode}/>
      <section className={`about-us ${props.mode === "dark" ? "darkMode" : ""}`}>
        <div className="about">
          <Logo />
          <div className="text">
            <h2>About Us</h2>
            <h4>Text Helper</h4>
            <p>
              Text Helper is a text utility website which provides text
              manipulation such as convert to upercase, convert to lower case ,
              remove extra space and much more.Our aim is to offer one-stop
              solution for all types of text manipulation
            </p>
            <div className="data">
              <Link to="/home" className="hire">
                Try Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
