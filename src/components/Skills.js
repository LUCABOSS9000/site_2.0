import React from 'react';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    'Python (forte competenza in ambiente 3D)',
    'Autodesk Maya',
    '3ds Max',
    'Blender (modellazione, sculpting, pipeline)',
    'Unreal Engine (Unreal Animation)',
    'V-Ray e rendering',
    'Gestione pipeline 3D e automazioni',
  ];

  const softSkills = [
    'Research',
    'Conflict Resolution',
    'Team work and Adaptability',
    'Problem solving'
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Competenze</h2>
      <div className="skills-grid">
        <div className="skills-card">
          <h3>Competenze tecniche</h3>
          <ul>
            {technicalSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skills-card">
          <h3>Soft skills</h3>
          <ul>
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;