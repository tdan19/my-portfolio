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
                    <div className="skill-name"> <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" width="40" /> </div>
                    
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name"><img src="https://cdn.simpleicons.org/javascript/61DAFB" alt="React" width="40" />
                    </div>
                   
                  </div>
                  <div className="skill-item">
                    <div className="skill-name"><img src="https://cdn.simpleicons.org/html5/61DAFB" alt="React" width="40" /> <img src="https://cdn.simpleicons.org/css/61DAFB" alt="React" width="40" />

                    </div>
                    
                  </div>
                </div>
              </div>
              
              <div className="skill-category">
                <h4><Storage className="category-icon" /> Backend</h4>
                <div className="skills-list">
                  <div className="skill-item">
                    <div className="skill-name"><img src="https://cdn.simpleicons.org/node.js/61DAFB" alt="node.js" width="40" />
                    </div>
                    
                  </div>
                  <div className="skill-item">
                    <div className="skill-name"><img src="https://cdn.simpleicons.org/express/61DAFB" alt="express" width="40" />
                    </div>
                   
                  </div>
                  <div className="skill-item">
                    <div className="skill-name"><img src="https://cdn.simpleicons.org/mongodb/61DAFB" alt="mongodb" width="40" />
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