import React from 'react';
import './About.css';
import profileImage from '../../assets/profile.jpg';
import { Code, School, DesignServices, Storage, PhoneAndroid } from '@mui/icons-material';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h1 className="title">About Me</h1>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="profile-image"
            />
          </div>
          
          <div className="about-text">
            <h2 className="subtitle">Software Engineering Student</h2>
            <p className="bio">
              I'm a passionate software engineering student specializing in full-stack development. 
              Currently pursuing my degree while building real-world projects to enhance my skills 
              in modern web technologies. My approach combines academic knowledge with practical 
              application, focusing on creating efficient, scalable, and user-friendly solutions.
            </p>
            
            <div className="education">
              <School className="section-icon" />
              <div>
                <h3>Education</h3>
                <p>B.Sc in Software Engineering - DireDawa University (2021-2026)</p>
              </div>
            </div>
            
            <h3 className="skills-title">
              <Code className="section-icon" />
              Technical Skills
            </h3>
            
            <div className="skills-container">
              <div className="skill-category">
                <h4><DesignServices className="category-icon" /> Frontend</h4>
                <div className="skills-list">
                  <div className="skill-item">
                    <div className="skill-name">React.js</div>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name">JavaScript</div>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name">HTML/CSS</div>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="skill-category">
                <h4><Storage className="category-icon" /> Backend</h4>
                <div className="skills-list">
                  <div className="skill-item">
                    <div className="skill-name">Node.js</div>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name">Express</div>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name">MongoDB</div>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '70%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="skill-category">
                <h4><PhoneAndroid className="category-icon" /> Mobile</h4>
                <div className="skills-list">
                  <div className="skill-item">
                    <div className="skill-name">React Native</div>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name">Flutter</div>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '60%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;