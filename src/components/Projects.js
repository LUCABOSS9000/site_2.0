import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Projects.css';

const Projects = () => {
  const { t } = useLanguage();
  
  const projectsData = [
    {
      videoUrl: 'https://youtu.be/e7C6kWfZyx8',
      videoId: 'e7C6kWfZyx8'
    },
    {
      videoUrl: 'https://youtu.be/xn-8-mY-KHk',
      videoId: 'xn-8-mY-KHk'
    },
    {
      videoUrl: 'https://youtu.be/E5iFb0Ndye4',
      videoId: 'E5iFb0Ndye4'
    },
    {
      videoUrl: 'https://youtu.be/4HaxrUTv7uA',
      videoId: '4HaxrUTv7uA'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">{t.projects.title}</h2>
      <div className="projects-grid">
        {t.projects.items.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-thumbnail">
              <img 
                src={`https://img.youtube.com/vi/${projectsData[index].videoId}/maxresdefault.jpg`}
                alt={project.title}
                onError={(e) => {
                  e.target.src = `https://img.youtube.com/vi/${projectsData[index].videoId}/hqdefault.jpg`;
                }}
              />
              <a 
                href={projectsData[index].videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="play-overlay"
                aria-label={`Watch ${project.title} on YouTube`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </a>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-date">{project.date}</p>
              <p className="project-description">{project.description}</p>
              <a 
                href={projectsData[index].videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                {t.projects.watchOn}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;