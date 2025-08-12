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
            <a href="/">Home</a>
            <a href="/story">Story</a>
            <a href="/career">Career</a>
            <a href="/partner">Partner With Us</a>
            <a href="/contact">Contact Us</a>
            <a href="/patent-trademark">Patent & Trademark</a>
          </div>
          <div className="social-icons">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <button
              type="button"
              className="icon-button"
              aria-label="Close"
            >
              <RxCross2 />
            </button>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom">
          <div className="small-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <span>•</span>
            <a href="/terms">Terms & Conditions</a>
            <span>•</span>
            <a href="/refund-policy">Refund Policy</a>
            <span>•</span>
            <a href="/press">Press or Media</a>
            <span>•</span>
            <a href="/help">Help & Support</a>
          </div>
          <p className="copyright">
            Copyright © Soaron All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
