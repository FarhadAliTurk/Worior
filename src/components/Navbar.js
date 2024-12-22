import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{
          fontSize: '36px', fontWeight: '900', letterSpacing: '5px',
          textTransform: 'uppercase', color: 'white', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
        }}>
          Connect on Social
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <a href="https://wa.me/your-number" className="nav-link" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-white" style={{ fontSize: '30px' }} />
            </a>
            <a href="https://facebook.com/your-profile" className="nav-link" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white" style={{ fontSize: '30px' }} />
            </a>
            <a href="https://instagram.com/your-profile" className="nav-link" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white" style={{ fontSize: '30px' }} />
            </a>
            <a href="https://tiktok.com/@your-profile" className="nav-link" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-white" style={{ fontSize: '30px' }} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
