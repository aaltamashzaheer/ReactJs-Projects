import React, { Component } from 'react'
import './Navbar.css'
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

      <nav
        className={'navbar navbar-expand-lg navbar-light  '}
      >
        <div className="nav-wrapper">
          <a href ="/" className={'brand-logo active '}>Web Times</a>
          <ul>
            <a href="/"
            >
              Home
            </a>
            <a href='/' >
                About
            </a>
            <a href="/">
              FAQ
            </a>

            <div
              className={'form-check form-switch '}
            >
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
        </div>
      </nav>
      </div>
    )
  }
}

export default Navbar