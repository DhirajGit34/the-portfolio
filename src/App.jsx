import React, { useState } from 'react';
import UseIntersectionObserver from './components/UseIntersectionObserver';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, then default to true
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : true;
  });
  // Toggle Theme
  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };
  // Intersection Observer for Fade-in Animations
  UseIntersectionObserver()


  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-200 font-sans selection:bg-teal-500/30 transition-colors duration-500">
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
      {/* Global Style for Animations */}
      <style>{`
        .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
};

export default App;