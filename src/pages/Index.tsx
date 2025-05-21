
import React from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Mukilan V</h1>
          <p className="text-xl md:text-2xl mb-8">Software Engineer</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#contact" 
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>
      
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Mukilan V. All rights reserved.</p>
          <div className="mt-4">
            <button 
              onClick={scrollToTop} 
              className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
