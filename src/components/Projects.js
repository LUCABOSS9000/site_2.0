import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: '3DDP24 Course Pipeline Reel',
      description: 'Pipeline reel del corso 3DDP24 presso Rainbow Academy. Workflow completo e custom tools sviluppati durante la formazione, progettati per ottimizzare le varie fasi del processo di produzione 3D.',
      thumbnail: 'https://raw.githubusercontent.com/LUCABOSS9000/web-app/main/webpage/images/Pipeline.jpg',
      videoUrl: 'https://youtu.be/e7C6kWfZyx8',
      date: 'Settembre 2024'
    },
    {
      title: 'The Lost Idea',
      description: 'Progetto del gruppo MareFuori nel corso 3DDP24 presso Rainbow Academy. Collaborazione di team per la realizzazione di un cortometraggio 3D completo.',
      thumbnail: 'https://raw.githubusercontent.com/LUCABOSS9000/web-app/main/webpage/images/MareFuori.png',
      videoUrl: 'https://youtu.be/xn-8-mY-KHk',
      date: 'Settembre 2024'
    },
    {
      title: 'Hero in the Robot Invasion',
      description: 'Progetto di animazione 3D che esplora dinamiche action e character animation in un contesto sci-fi.',
      thumbnail: 'https://raw.githubusercontent.com/LUCABOSS9000/web-app/main/webpage/images/Hero%20in%20the%20Robot%20invasion.jpg',
      videoUrl: 'https://youtu.be/E5iFb0Ndye4',
      date: '2024'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Progetti</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-thumbnail">
              <img src={project.thumbnail} alt={project.title} />
              <a 
                href={project.videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="play-overlay"
                aria-label={`Guarda ${project.title} su YouTube`}
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
                href={project.videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                Guarda su YouTube →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;