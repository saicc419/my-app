import React from "react";

function Hero() {
  return (
    <header id="home" className="bg-primary text-white text-center d-flex align-items-center" style={{height:"100vh"}}>
      <div className="container">
        <h1 className="display-3 fw-bold">Welcome to Gridlex</h1>
        <p className="lead">Innovative Tech Solutions for Your Business</p>
        <a href="#services" className="btn btn-light btn-lg mt-3">Explore Services</a>
      </div>
    </header>
  );
}

export default Hero;
