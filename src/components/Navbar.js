import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";



function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      {/* Brand */}
      <a className="navbar-brand" href="/">
        Gridlex
      </a>

      {/* Hamburger */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menu */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav m-auto">
          <li className="nav-item">
            <a className="nav-link" href="/index.html">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about.html">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact.html">
              Contact
            </a>
          </li>
            
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;