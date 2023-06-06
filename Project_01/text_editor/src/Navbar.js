import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />

      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${
          props.mode
        } text-${props.mode === "light" ? "dark" : "light"} `}
      >
        <div className="nav-wrapper">
          <Link className={`brand-logo active text-${
                props.mode === "light" ? "dark" : "light"
              }`} to ="/">Text Analyzer</Link>
          <ul>
            <Link
              to="/"
              className={` text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              Home
            </Link>
            <Link
              
              className={` text-${props.mode === "light" ? "dark" : "light"} `} to="/about"
            >
              About
            </Link>
            <Link
              to="/faq"
              className={` text-${props.mode === "light" ? "dark" : "light"}`}
            >
              FAQ
            </Link>

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label" 
                htmlfor="flexSwitchCheckDefault" 
              >
                Dark Mode
              </label>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
