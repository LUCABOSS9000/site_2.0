import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>LB</div>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection('about')}>{t.nav.about}</button></li>
          <li><button onClick={() => scrollToSection('experience')}>{t.nav.experience}</button></li>
          <li><button onClick={() => scrollToSection('education')}>{t.nav.education}</button></li>
          <li><button onClick={() => scrollToSection('skills')}>{t.nav.skills}</button></li>
          <li><button onClick={() => scrollToSection('projects')}>{t.nav.projects}</button></li>
          <li><button onClick={() => scrollToSection('contact')}>{t.nav.contact}</button></li>
          <li>
            <button 
              className="lang-toggle" 
              onClick={toggleLanguage}
              aria-label="Toggle language"
            >
              {language === 'it' ? '🇬🇧 EN' : '🇮🇹 IT'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;