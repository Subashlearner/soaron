import React from "react";
import "./ComingSoon.css";
import { FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function ComingSoon() {
  return (
    <div className="comingsoon-container">
      {/* Header */}
      <header className="header">
        <h1 className="logo">
          soar<span className="logo-highlight">on</span>
        </h1>
        <button className="menu-btn">
          Menu <span className="menu-icon">☰</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRyUoJ34RPWAHd8B7Zo9ogzvb4RkmU1mzuOQ&s"
          alt="Rocket"
          className="rocket-img"
        />
        <h2 className="main-title">WE ARE COMING SOON!!</h2>
        <p className="subtitle">Stay tuned for something amazing</p>
      </main>

      {/* Footer */}
     <footer className="footer">
  {/* Top Row */}
  <div className="footer-top">
    <div className="footer-links">
      <a href="#">Home</a>
      <a href="#">Story</a>
      <a href="#">Career</a>
      <a href="#">Partner With Us</a>
      <a href="#">Contact Us</a>
      <a href="#">Patent & Trademark</a>
    </div>
    <div className="social-icons">
      <FaYoutube />
      <FaLinkedin />
      <RxCross2 />
      <FaInstagram />
    </div>
  </div>

  {/* Bottom Row */}
  <div className="footer-bottom">
    <div className="small-links">
      <a href="#">Privacy Policy</a>
      <span>•</span>
      <a href="#">Terms & Conditions</a>
      <span>•</span>
      <a href="#">Refund Policy</a>
      <span>•</span>
      <a href="#">Press or Media</a>
      <span>•</span>
      <a href="#">Help & Support</a>
    </div>
    <p className="copyright">Copyright © Soaron All Right Reserved</p>
  </div>
</footer>

    </div>
  );
}
