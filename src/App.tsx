import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import InteractiveMenu from './components/InteractiveMenu';
import Projects from './components/Projects';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import PageTransition from './components/PageTransition';
import './styles/animations.css';
import './i18n';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Mouse move event for custom cursor
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
        {/* Custom cursor */}
        <div 
          className="custom-cursor hidden md:block"
          style={{
            transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
            scale: isHovering ? 1.5 : 1
          }}
        />

        <Header />

        <main className="grow flex flex-col">
          <PageTransition>
            <Routes>
              <Route path="/" element={
                <section className="relative grow flex items-center justify-center pt-8 md:pt-12 px-4">
                  <div className="container mx-auto flex flex-col items-center">
                    <div 
                      className="interactive-container"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <InteractiveMenu />
                    </div>
                  </div>
                </section>
              } />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageTransition>
        </main>
      </div>
    </Router>
  );
}

export default App;