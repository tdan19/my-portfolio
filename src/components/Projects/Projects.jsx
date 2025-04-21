import React from 'react';
import './Projects.css';
import { GitHub } from '@mui/icons-material';

const projects = [
  {
    id: 1,
    title: 'Netflix Clone',
    description: 'Movies/TV Shows -Fetches trending, top-rated, from TMDB API',
    technologies: [' React.js', 'Redux', 'TailwindCSS','API'],
    githubLink: 'https://github.com/tdan19/Netflix-Clone',
    image: 'https://github.com/tdan19/Netflix-Clone/blob/master/src/Assets/Screenshot%202025-04-21%20154900.png?raw=true'
  },

{
    id: 2,
    title: 'APPLE-CLONE',
    description: 'It s a front-end practice project that replicates the look and feel of the official Apple homepage',
    technologies: ['HTML5', 'CSS3'],
    githubLink: 'https://github.com/tdan19/apple-clone',
    image: 'https://github.com/tdan19/apple-clone/blob/main/images/Screenshot%202025-04-21%20220128.png?raw=true'
  },
  // {
  //   id: 3,
  //   title: 'Project 3',
  //   description: 'A portfolio website for a photographer',
  //   technologies: ['HTML', 'CSS', 'JavaScript'],
  //   githubLink: 'https://github.com/yourusername/project3',
  //   image: 'https://via.placeholder.com/800x400'
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h1 className="title">My Projects</h1>
        
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <GitHub className="github-icon" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;