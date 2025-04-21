import React from 'react';
import './Contact.css';
import { 
  Email, 
  Phone, 
  LocationOn,
  GitHub,
  LinkedIn,
  Twitter,
  Instagram,
  Facebook,
  Telegram
} from '@mui/icons-material';

const Contact = () => {
    const handleTelegramClick = () => {
      
      const telegramUsername = 'danid24'; 
      window.open(`https://t.me/${telegramUsername}`, '_blank');
    }
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h1 className="title">Get In Touch</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <Email className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>dan606193@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <Phone className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <p>+251956479015</p>
              </div>
            </div>
            
            <div className="contact-item">
              <LocationOn className="contact-icon" />
              <div>
                <h3>Location</h3>
                <p>DireDawa City, Ethiopia</p>
                <br />
                <button className="telegram-button" onClick={handleTelegramClick}>
      <Telegram className="telegram-icon" /> 
      Chat with me on Telegram
    </button>
              </div>
              
            </div>
          </div>
          
          <div className="social-section">
            <h3 className="social-title">Connect With Me</h3>
            <div className="social-links">
            
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <GitHub className="social-icon" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <LinkedIn className="social-icon" />
                <span>LinkedIn</span>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <Twitter className="social-icon" />
                <span>Twitter</span>
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram className="social-icon" />
                <span>Instagram</span>
              </a>
              <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <Facebook className="social-icon" />
                <span>Facebook</span>
              </a>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;