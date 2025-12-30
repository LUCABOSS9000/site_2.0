import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Experience.css';

const Experience = () => {
  const { t } = useLanguage();
  
  const experiences = [
    {
      title: t.experience.uviscan.title,
      company: t.experience.uviscan.company,
      period: t.experience.uviscan.period,
      type: t.experience.uviscan.type,
      description: t.experience.uviscan.desc,
      link: 'https://www.uviscan-italy.com',
      linkText: t.experience.uviscan.link
    },
    {
      title: t.experience.civil.title,
      company: t.experience.civil.company,
      period: t.experience.civil.period,
      type: t.experience.civil.type,
      description: t.experience.civil.desc,
      link: 'https://www.svsroma.net',
      linkText: t.experience.civil.link
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">{t.experience.title}</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div 
              className={`timeline-content ${exp.link ? 'clickable' : ''}`}
              onClick={exp.link ? () => window.open(exp.link, '_blank') : undefined}
              role={exp.link ? 'button' : undefined}
              tabIndex={exp.link ? 0 : undefined}
              onKeyPress={exp.link ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.open(exp.link, '_blank');
                }
              } : undefined}
            >
              <div className="exp-header">
                <div>
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                </div>
                <div className="exp-period">{exp.period}</div>
              </div>
              <p className="exp-type">{exp.type}</p>
              <ul className="exp-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {exp.link && (
                <div className="exp-link">
                  {exp.linkText}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;