import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Skills.css';

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">{t.skills.title}</h2>
      <div className="skills-grid">
        <div className="skills-card">
          <h3>{t.skills.technical}</h3>
          <ul>
            {t.skills.techList.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skills-card">
          <h3>{t.skills.soft}</h3>
          <ul>
            {t.skills.softList.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;