import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Pipeline ATD',
      company: 'Check One Srl',
      period: 'Fine 2025',
      type: 'Contratto a tempo determinato',
      description: [
        'Contributo al commissioning di un sistema Uviscan per ente della Pubblica Amministrazione',
        'Supporto tecnico e tutoraggio operativo al personale di servizio',
        'Supporto nelle fasi di testing e validazione con risultati positivi',
        'Feedback positivi dall\'utente finale',
        'Rispetto totale dei requisiti di riservatezza'
      ]
    },
    {
      title: 'Progetto di Servizio Civile',
      company: 'SVS BRIGATA VOLONTARIA ROMA',
      period: '25 Maggio 2022 - 24 Maggio 2023',
      type: 'Servizio Civile Universale',
      description: [
        'Progetto "RISK MITIGATION AND PREVENTION"',
        'Presidenza del Consiglio dei Ministri - Dipartimento Politiche Giovanili',
        'Prevenzione incendi boschivi',
        'Risposta ad alluvioni e terremoti',
        'Attività di supporto alla popolazione'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Esperienza Professionale</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;