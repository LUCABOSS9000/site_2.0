import React from 'react';
import './Education.css';

const Education = () => {
  const studies = [
    {
      title: 'Master in 3D Animation and VFX',
      school: 'Maya 2024 - 3D Digital Production 24',
      extra: 'Specializzazione in Pipeline | Certificazione Autodesk',
      date: '08.06.2023'
    },
    {
      title: 'Master in 3D Computer Graphics',
      school: 'Rainbow Academy',
      date: '21.12.2023'
    },
    {
      title: 'Master "3D Modeling e Animation" (3DSMax e Maya)',
      school: 'Istituto Cefi',
      date: '18.06.2025'
    },
    {
      title: 'Scientific High School Diploma (indirizzo Informatica)',
      school: 'Istituto Statale Maria Montessori, Roma',
      date: '2019'
    }
  ];

  const certifications = [
    'Specialized Training Certificate in Python with Blender - Blender Italia (12.09.2023)',
    'Specialized Training Certificate in Sculpting with Blender - Blender Italia (03.05.2022)',
    'Advanced Training Certificate in Blender - Blender Italia (29.04.2022)',
    'Basic Training Certificate in Blender - Blender Italia (22.04.2022)',
    'Project "Assembly Line" in Unreal Animation - Prometeo Lab (Giugno - Settembre 2025)',
    'First Aid and BLS (Basic Life Support Pediatric Defibrillation) - CSV Lazio (25.05.2023)',
    'Modulo formazione rischi per volontari Servizio Civile - CSV Lazio (25.05.2023)',
    'Training Course "The Importance of Soft Skills" - Porta Futuro Lazio (10.05.2023)'
  ];

  return (
    <section id="education" className="education">
      <h2 className="section-title">Formazione</h2>
      <div className="education-grid">
        <div className="education-column">
          <h3>Percorso di studi</h3>
          <ul className="education-list">
            {studies.map((item, index) => (
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
          <h3>Certificazioni e corsi</h3>
          <ul className="cert-list">
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;