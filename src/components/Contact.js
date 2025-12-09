import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">{t.contact.title}</h2>
      <div className="contact-content">
        <div className="contact-card">
          <p>{t.contact.intro}</p>
          <div className="contact-details">
            <p><strong>{t.contact.email}</strong> <a href="mailto:lb3Dev.pro@gmail.com">lb3Dev.pro@gmail.com</a></p>
            <p><strong>{t.contact.phone}</strong> <a href="tel:+393896615192">+39 389 661 5192</a></p>
            <p><strong>{t.contact.linkedin}</strong> <a href="https://linkedin.com/in/lb3dev" target="_blank" rel="noopener noreferrer">linkedin.com/in/lb3dev</a></p>
          </div>
          <p className="contact-note">{t.contact.note}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;