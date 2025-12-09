import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">Chi Sono</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Sono un professionista specializzato in <strong>pipeline 3D e produzione digitale</strong>, 
            con una solida formazione in animazione, VFX e programmazione Python per l'ambiente 3D.
          </p>
          <p>
            Nel 2025 ho contribuito al commissioning di un sistema Uviscan presso Check One Srl, 
            fornendo supporto tecnico e formazione operativa con feedback positivi dal cliente finale.
          </p>
          <p>
            La mia passione per la tecnologia e l'arte digitale mi ha portato a specializzarmi 
            in strumenti come Maya, 3ds Max, Blender e Unreal Engine, con particolare focus 
            sulla creazione di pipeline efficienti e automatizzate.
          </p>
        </div>
        <div className="about-info">
          <div className="info-card">
            <h3>Contatti</h3>
            <p><strong>Email:</strong> lb3Dev.pro@gmail.com</p>
            <p><strong>Telefono:</strong> +39 389 661 5192</p>
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/lb3dev" target="_blank" rel="noopener noreferrer">lb3dev</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;