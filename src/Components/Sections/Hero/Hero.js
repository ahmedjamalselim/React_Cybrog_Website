import { Component } from "react";
import "./Hero.css";

class Hero extends Component {
  render() {
    return (
      <div className="hero-main">
        <div className="hero-text">
          <h6 className="hero-subtitle">Welcome To JamalSe</h6>
          <h4 className="hero-title">
            <span>Browse</span> our popular games here
          </h4>
        </div>

        <div className="main-button">
          <a href="browse.html" className="btn btn-primary clicky-button">Browse Now</a>
        </div>
      </div>
    );
  }
}

export default Hero;
