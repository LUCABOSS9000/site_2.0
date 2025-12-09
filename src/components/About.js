import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="about">
      <h2 className="section-title">{t.about.title}</h2>
      <div className="about-content">
        <div className="about-text">
          <p dangerouslySetInnerHTML={{ __html: t.about.text1 }} />
          <p>{t.about.text2}</p>
          <p>{t.about.text3}</p>
        </div>
        <div className="about-info">
          <div className="info-card">
            <h3>{t.about.contactsTitle}</h3>
            <p><strong>{t.about.email}</strong> lb3Dev.pro@gmail.com</p>
            <p><strong>{t.about.phone}</strong> +39 389 661 5192</p>
            <p><strong>{t.about.linkedin}</strong> <a href="https://linkedin.com/in/lb3dev" target="_blank" rel="noopener noreferrer">lb3dev</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;