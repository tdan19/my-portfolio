import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {new Date().getFullYear()} daniel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;