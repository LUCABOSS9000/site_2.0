import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="greeting">{t.hero.greeting}</span>
          <span className="name">Luca Bottoni</span>
        </h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <p className="hero-description">{t.hero.description}</p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">{t.hero.contactBtn}</a>
          <a href="https://linkedin.com/in/lb3dev" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">{t.hero.linkedinBtn}</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="animated-cube"></div>
      </div>
    </section>
  );
};

export default Hero;