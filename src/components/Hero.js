import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="greeting">Ciao, sono</span>
          <span className="name">Luca Bottoni</span>
        </h1>
        <p className="hero-subtitle">Pipeline ATD | 3D Artist & Developer</p>
        <p className="hero-description">
          Specializzato in pipeline 3D, animazione e VFX con forte competenza in Python per l'ambiente 3D.
          Esperienza in produzione digitale e commissioning di sistemi tecnici.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Contattami</a>
          <a href="https://linkedin.com/in/lb3dev" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="animated-cube"></div>
      </div>
    </section>
  );
};

export default Hero;