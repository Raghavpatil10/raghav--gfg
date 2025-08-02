import React from "react";
import "./Hero.css";
import placeholder from "../assets/placeholder.jpg"; // Replace this with your actual image path

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-header">
        <h1>
          THE BEST STORIES<br />
          <span>ARE THE ONES YOU LOVE.</span>
        </h1>
      </div>

      <div className="hero-body">
        <div className="hero-img-wrapper">
          <img src={placeholder} alt="Woman with flower" />
        </div>

        <div className="hero-text">
          <p>
            WHETHER YOU’RE LOOKING FOR TIMELESS CLASSICS, MODERN<br />
            BESTSELLERS, RARE FINDS...
          </p>
          <hr className="separator" />
          <a href="#" className="subscribe-link">SUBSCRIPTION NOW</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
