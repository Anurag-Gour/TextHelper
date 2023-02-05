import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Textarea from "./Textarea";
import { NavLink, Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
const Navbar1 = (props) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className={`main-nav ${props.mode === "dark" ? "darkMode" : ""}`}>
        <div className="logo">
          <h2>
            <span>T</span>ext
            <span>H</span>elper
          </h2>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/home">services</Link>
            </li>
            <li>
              <NavLink to="/home">contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <Link to="/">
                <FaFacebookSquare className="facebook" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaInstagramSquare className="instagram" />
              </Link>
            </li>
            <li>
              <i
                type="button"
                className={`fa-${
                  props.mode === "light" ? "solid" : "regular"
                } fa-moon`}
                onClick={props.toggleMode}
              ></i>
            </li>
          </ul>
          
          <div className="hamburger-menu">
            <Link to="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
