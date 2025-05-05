
import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <About />
        <Education />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
