import React, { useState } from 'react';
import './Header.css';
import { Menu, Close } from '@mui/icons-material';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">Portfolio</span>
            <span className="logo-dot" style={{ color: '#3a86ff' }}>.</span>
          </div>
          
          <button 
            className="menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <Close className="menu-icon" /> : <Menu className="menu-icon" />}
          </button>
          
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('home')}
            >
              <span className="nav-link-text">Home</span>
              <span className="nav-link-underline"></span>
            </button>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('about')}
            >
              <span className="nav-link-text">About</span>
              <span className="nav-link-underline"></span>
            </button>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('projects')}
            >
              <span className="nav-link-text">Projects</span>
              <span className="nav-link-underline"></span>
            </button>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('contact')}
            >
              <span className="nav-link-text">Contact</span>
              <span className="nav-link-underline"></span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;