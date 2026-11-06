import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import InteractiveMenu from './components/InteractiveMenu';
import Projects from './components/Projects';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import './styles/animations.css';
import './i18n';

function App() {
  return (
    <Router>
      <div className="relative flex min-h-screen flex-col bg-paper text-ink">
        <Header />

        <main className="flex min-h-0 flex-1 flex-col">
          <PageTransition>
            <Routes>
              <Route path="/" element={
                <section className="relative flex min-h-0 flex-1 items-center justify-center px-4">
                  <InteractiveMenu />
                </section>
              } />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;