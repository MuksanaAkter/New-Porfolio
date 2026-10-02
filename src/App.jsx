import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Expertise from './components/sections/Expertise';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import CustomCursor from './components/CustomCursor';

const App = () => {
  return (
    <div className="relative z-0 bg-bg-primary transition-colors duration-300 w-full min-h-screen flex flex-col">
      <CustomCursor />
      
      <div className="page-backdrop fixed inset-0 -z-10 pointer-events-none" aria-hidden="true" />

      <Navbar />
      
      <main className="grow w-full flex flex-col items-center">
        <Hero />
        <Expertise />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
