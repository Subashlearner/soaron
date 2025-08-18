
import React, { useState } from "react";
import "./ComingSoon.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


export default function ComingSoon() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="comingsoon-container">
      {/* Header */}
      {!menuOpen && (
        <header className="header">
          <img src="soaron-logo.png" alt="Soaron Logo" className="logo-img" />
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(true)}
          >
            Menu <span className="menu-icon">☰</span>
          </button>
        </header>
      )}

      {menuOpen && (
        <div className="menu-overlay">
          <div className="menu-logo">
            <img src="/soaron-logob.png" alt="Soaron Logo" />
          </div>

          <nav className="menu-links">
            <a href="/">Spray</a>
            <a href="/roller">Roller</a>
            <a href="/cleanhigh">CleanHigh</a>
            <a href="/story">Story</a>
            <a href="/partner">Partner with Us</a>
          </nav>

          <button
            className="menu-close-btn"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

      )}



      {/* Main Content */}
      <main className="main-content">
        <img
          src="rocket.png"
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

          {/* Social icons (desktop shows here, mobile will move below with CSS) */}
          <div className="social-icons">
            {/* Facebook */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="icon facebook-icon">
              <FaFacebookF />
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="icon instagram-icon">
              <FaInstagram />
            </a>
            {/* Twitter (bird) */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="icon twitter-icon">
              <FaTwitter />
            </a>



            {/* LinkedIn */}
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon linkedin-icon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom">
          <div className="small-links">
            <a href="/privacy-policy">Privacy Policy</a>
          
            <a href="/terms">Terms & Conditions</a>
          
            <a href="/refund-policy">Refund Policy</a>
           
            <a href="/press">Press or Media</a>
           
            <a href="/help">Help & Support</a>
          </div>

          <p className="copyright">Copyright © Soaron All Rights Reserved</p>
        </div>
      </footer>

    </div>
  );
}
