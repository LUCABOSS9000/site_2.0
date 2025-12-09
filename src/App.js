import React from 'react';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;