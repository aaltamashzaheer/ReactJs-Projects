import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export class Navbar extends Component {

  render() {
    return (
      <div>
        <a
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />

        <nav className={"navbar navbar-expand-lg navbar-light  "}>
        
              <Link className="navbar_items brand-logo" to="/" >Web Times</Link>
  
            <ul>
              <li><Link className="navbar_items" to="/">Home</Link></li>
              <li><Link className="navbar_items" to="/business">Business</Link></li>
              <li><Link className="navbar_items" to="/entertainment">Entertainment</Link></li>
              <li><Link className="navbar_items" to="/general">General</Link></li>
              <li><Link className="navbar_items" to="/health">Health</Link></li>
              <li><Link className="navbar_items" to="/science">Science</Link></li>
              <li><Link className="navbar_items" to="/sports">Sports</Link></li>
              <li><Link className="navbar_items" to="/technology">Technology</Link></li>


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
