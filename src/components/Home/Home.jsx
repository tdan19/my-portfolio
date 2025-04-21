import React, { useEffect } from 'react';
import './Home.css';
// import profileImage from '../../assets/profile.jpg';
import { motion } from 'framer-motion';
import { Code, School, DesignServices } from '@mui/icons-material';

const COLORS = ['#3a86ff', '#ff006e', '#8338ec', '#00ff88', '#ffbe0b'];

const Home = () => {
  const [currentColor, setCurrentColor] = React.useState(COLORS[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = COLORS.indexOf(currentColor);
      const nextIndex = (currentIndex + 1) % COLORS.length;
      setCurrentColor(COLORS[nextIndex]);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentColor]);

  return (
    <section id="home" className="home section">
      <div className="container">
        <motion.div 
          className="welcome-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="welcome-title">
            Hi,<span style={{ color: currentColor }}>  🤚 I'm  Daniel</span>
          </h1>
          <motion.p 
            className="welcome-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Software Engineering Student & Full-Stack Developer
          </motion.p>
        </motion.div>
        
        <div className="quick-info">
          <motion.div 
            className="info-card"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="info-icon" />
            <h3>2+ Years</h3>
            <p>Development Experience</p>
          </motion.div>
          
          <motion.div 
            className="info-card"
            whileHover={{ scale: 1.05 }}
          >
            <School className="info-icon" />
            <h3>B.Sc</h3>
            <p>Software Engineering</p>
          </motion.div>
          
          <motion.div 
            className="info-card"
            whileHover={{ scale: 1.05 }}
          >
            <DesignServices className="info-icon" />
            <h3>5+</h3>
            <p>Projects Completed</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;