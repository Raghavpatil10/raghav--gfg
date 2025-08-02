import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        BOOKWORLD
      </div>

      <div className="navbar-center">
        <div className="nav-item">Home</div>
        <div className="nav-item">Genres</div>
        <div className="nav-item">Bestsellers</div>
        <div className="nav-item">Collections</div>
        <div className="nav-item">Blog</div>
      </div>

      <div className="navbar-right">
        <a href="#" className="nav-link">Subscribe</a>
      </div>
    </nav>
  );
};

export default Navbar;
