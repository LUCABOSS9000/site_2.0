import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Education.css';

const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="education">
      <h2 className="section-title">{t.education.title}</h2>
      <div className="education-grid">
        <div className="education-column">
          <h3>{t.education.studiesTitle}</h3>
          <ul className="education-list">
            {t.education.studies.map((item, index) => (
              <li key={index} className="education-item">
                <div className="edu-main">
                  <h4>{item.title}</h4>
                  <span className="edu-date">{item.date}</span>
                </div>
                <p className="edu-school">{item.school}</p>
                {item.extra && <p className="edu-extra">{item.extra}</p>}
              </li>
            ))}
          </ul>
        </div>
        <div className="education-column">
          <h3>{t.education.certsTitle}</h3>
          <ul className="cert-list">
            {t.education.certs.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;