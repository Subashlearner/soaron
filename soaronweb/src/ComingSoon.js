
import React, { useState } from "react";
import "./ComingSoon.css";
import { FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";

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
          <div className="social-icons">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="icon youtube-icon"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="icon linkedin-icon"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="icon twitter-icon"
            >
              {/* Inline SVG for X logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1227"
                fill="currentColor"
                width="11"
                height="11"

              >
                <path d="M714.163 519.284L1160.89 0H1056.1L668.74 450.887L388.508 0H0l466.977 729.032L0 1227h104.782l407.182-478.552L811.492 1227h388.508L714.163 519.284zM562.189 674.546l-47.51-72.34L142.343 91.421h181.239l305.081 464.988l47.51 72.34l389.828 592.661H884.762L562.189 674.546z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="icon instagram-icon"
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
