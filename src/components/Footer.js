import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import './Footer.css'; // Ensure the CSS is imported

function Footer() {
  return (
    <footer className="footer bg-primary text-white text-center py-4">
      <div className="container">
        <p>&copy; 2024 Your Name. All Rights Reserved.</p>
        <div className="d-flex justify-content-center mb-3">
          <a href="#" className="social-icon text-white mx-3">
            <FaFacebook />
          </a>
          <a href="#" className="social-icon text-white mx-3">
            <FaInstagram />
          </a>
          <a href="#" className="social-icon text-white mx-3">
            <FaTiktok />
          </a>
          <a href="#" className="social-icon text-white mx-3">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
