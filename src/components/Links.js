import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

function Links() {
  const channels = [
    { name: 'WhatsApp Channel 1', url: 'https://chat.whatsapp.com/example1', icon: <FaWhatsapp /> },
    { name: 'WhatsApp Channel 2', url: 'https://chat.whatsapp.com/example2', icon: <FaWhatsapp /> },
    { name: 'Facebook', url: 'https://facebook.com/yourprofile', icon: <FaFacebook /> },
    { name: 'Instagram', url: 'https://instagram.com/yourprofile', icon: <FaInstagram /> },
    { name: 'TikTok', url: 'https://tiktok.com/@yourprofile', icon: <FaTiktok /> },
  ];

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Join My Channels</h3>
      <div className="row justify-content-center">
        {channels.map((channel, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <a href={channel.url} className="btn btn-outline-primary w-100 p-4 rounded-pill shadow-sm d-flex align-items-center justify-content-center" target="_blank" rel="noopener noreferrer">
              <span className="me-3" style={{ fontSize: '40px' }}>{channel.icon}</span>
              <span>{channel.name}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Links;
