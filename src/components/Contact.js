import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contatti</h2>
      <div className="contact-content">
        <div className="contact-card">
          <p>Per collaborazioni, progetti o opportunità professionali, puoi contattarmi ai seguenti riferimenti:</p>
          <div className="contact-details">
            <p><strong>Email:</strong> <a href="mailto:lb3Dev.pro@gmail.com">lb3Dev.pro@gmail.com</a></p>
            <p><strong>Telefono:</strong> <a href="tel:+393896615192">+39 389 661 5192</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/lb3dev" target="_blank" rel="noopener noreferrer">linkedin.com/in/lb3dev</a></p>
          </div>
          <p className="contact-note">Disponibile per ruoli in pipeline 3D, technical direction, automazione pipeline e supporto tecnico alla produzione.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;