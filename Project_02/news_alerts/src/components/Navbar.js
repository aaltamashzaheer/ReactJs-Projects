import React, { Component } from "react";
import "./Navbar.css";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />

        <nav className={"navbar navbar-expand-lg navbar-light  "}>
        
              <a href="/" class="brand-logo">Web Times</a>
  
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">Business</a></li>
              <li><a href="/">Entertainment</a></li>
              <li><a href="/">General</a></li>
              <li><a href="/">Health</a></li>
              <li><a href="/">Science</a></li>
              <li><a href="/">Sports</a></li>
              <li><a href="/">Technology</a></li>


              <div className={"form-check form-switch "}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Dark Mode
                </label>
              </div>
            </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
