import React, { useState, useCallback, useEffect } from 'react';
import w1 from '../projects/01/w1.jpg';
import w2 from '../projects/01/w2.jpg';
import w3 from '../projects/01/w3.jpg';
import w4 from '../projects/01/w4.jpg';
import w5 from '../projects/01/w5.jpg';
import w6 from '../projects/01/w6.jpg';
import w7 from '../projects/01/w7.jpg';
import w8 from '../projects/01/w8.jpg';
import w9 from '../projects/01/w9.jpg';
import w10 from '../projects/01/w10.jpg';
import w11 from '../projects/01/w11.jpg';
import w12 from '../projects/01/w12.jpg';
import w13 from '../projects/01/w13.jpg';
import w14 from '../projects/01/w14.jpg';
import w15 from '../projects/01/w15.jpg';
import w16 from '../projects/01/w16.jpg';
import w17 from '../projects/01/w17.jpg';
import w18 from '../projects/01/w18.jpg';
import w19 from '../projects/01/w19.jpg';
import w20 from '../projects/01/w20.jpg';
import w21 from '../projects/01/w21.jpg';
import w22 from '../projects/01/w22.jpg';

import a01 from '../projects/02/01 with AI .jpg';
import a02 from '../projects/02/02 with AI.jpg';
import a03 from '../projects/02/03 with AI.jpg';
import a04 from '../projects/02/04 with AI.jpg';
import a05 from '../projects/02/05 with AI.jpg';
import a06 from '../projects/02/06 with AI.jpg';
import a07 from '../projects/02/07 with AI.jpg';
import a08 from '../projects/02/08 with AI.jpg';
import a09 from '../projects/02/09 with AI.jpg';
import a10 from '../projects/02/10 with AI.jpg';
import a11 from '../projects/02/11 with AI.jpg';
import a12 from '../projects/02/12 with AI.jpg';
import a13 from '../projects/02/13 with AI.jpg';
import a14 from '../projects/02/14 with AI.jpg';
import a15 from '../projects/02/15 with AI.jpg';
import a16 from '../projects/02/16 with AI.jpg';
import a17 from '../projects/02/17 with AI.jpg';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Architecture' | 'Interior Design';
  location: string;
  year: string;
  imageUrl: string;
}

const apartmentsImages: Project[] = [
  { id: 'apartments-1', title: 'w1.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w1 },
  { id: 'apartments-2', title: 'w2.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w2 },
  { id: 'apartments-3', title: 'w3.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w3 },
  { id: 'apartments-4', title: 'w4.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w4 },
  { id: 'apartments-5', title: 'w5.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w5 },
  { id: 'apartments-6', title: 'w6.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w6 },
  { id: 'apartments-7', title: 'w7.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w7 },
  { id: 'apartments-8', title: 'w8.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w8 },
  { id: 'apartments-9', title: 'w9.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w9 },
  { id: 'apartments-10', title: 'w10.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w10 },
  { id: 'apartments-11', title: 'w11.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w11 },
  { id: 'apartments-12', title: 'w12.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w12 },
  { id: 'apartments-13', title: 'w13.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w13 },
  { id: 'apartments-14', title: 'w14.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w14 },
  { id: 'apartments-15', title: 'w15.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w15 },
  { id: 'apartments-16', title: 'w16.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w16 },
  { id: 'apartments-17', title: 'w17.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w17 },
  { id: 'apartments-18', title: 'w18.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w18 },
  { id: 'apartments-19', title: 'w19.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w19 },
  { id: 'apartments-20', title: 'w20.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w20 },
  { id: 'apartments-21', title: 'w21.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w21 },
  { id: 'apartments-22', title: 'w22.jpg', description: '', category: 'Interior Design', location: '', year: '', imageUrl: w22 },
];

const homesImages: Project[] = [
  { id: 'homes-1', title: '01 with AI .jpg', description: '', category: 'Architecture', location: '', year: '', imageUrl: a01 },
  { id: 'homes-2', title: '02 with AI.jpg', description: '', category: 'Architecture', location: '', year: '', imageUrl: a02 },
  { id: 'homes-3', title: '03 with AI.jpg', description: '', category: 'Architecture', location: '', year: '', imageUrl: a03 },
  { id: 'homes-4', title: '04 with AI.jpg', description: '', category: 'Architecture', location: '', year: '', imageUrl: a04 },
  { id: 'homes-5', title: '05 with AI.jpg', description: '', category: 'Architecture', location: '', year: '', imageUrl: a05 },
  { id: 'homes-6', title: '06 with AI.jpg', description: '', category: 'Architecture', location: '', year: '', imageUrl: a06 },
  { id: 'homes-7', title: '07 with AI.jpg', description: '', category: 'Architecture', location: '', year: '', imageUrl: a07 },
  { id: 'homes-8', title: '08 with AI.jpg', description: '', category: 'Architecture', location: '', year: '', imageUrl: a08 },
  { id: 'homes-9', title: '09 with AI.jpg', description: '', category: 'Architecture', location: '', year: '', imageUrl: a09 },
  { id: 'homes-10', title: '10 with AI.jpg', description: '', category: 'Architecture', location: '', year: '', imageUrl: a10 },
  { id: 'homes-11', title: '11 with AI.jpg', description: '', category: 'Architecture', location: '', year: '', imageUrl: a11 },
  { id: 'homes-12', title: '12 with AI.jpg', description: '', category: 'Architecture', location: '', year: '', imageUrl: a12 },
  { id: 'homes-13', title: '13 with AI.jpg', description: '', category: 'Architecture', location: '', year: '', imageUrl: a13 },
  { id: 'homes-14', title: '14 with AI.jpg', description: '', category: 'Architecture', location: '', year: '', imageUrl: a14 },
  { id: 'homes-15', title: '15 with AI.jpg', description: '', category: 'Architecture', location: '', year: '', imageUrl: a15 },
  { id: 'homes-16', title: '16 with AI.jpg', description: '', category: 'Architecture', location: '', year: '', imageUrl: a16 },
  { id: 'homes-17', title: '17 with AI.jpg', description: '', category: 'Architecture', location: '', year: '', imageUrl: a17 },
];

const menuOptions = ['All', 'Homes', 'Apartments'];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Homes' | 'Apartments'>('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState<number>(0);

  let filteredProjects: Project[] = [];
  if (selectedCategory === 'All') {
    filteredProjects = [...homesImages, ...apartmentsImages];
  } else if (selectedCategory === 'Homes') {
    filteredProjects = homesImages;
  } else if (selectedCategory === 'Apartments') {
    filteredProjects = apartmentsImages;
  }

  const openModal = useCallback((idx: number) => {
    setModalIndex(idx);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const showPrev = useCallback(() => {
    setModalIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  }, [filteredProjects.length]);

  const showNext = useCallback(() => {
    setModalIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  }, [filteredProjects.length]);

  useEffect(() => {
    if (!modalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, closeModal, showPrev, showNext]);

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light tracking-tight text-gray-900 mb-4">Our Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Exploring the intersection of form and function through innovative architecture and interior design solutions.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Menu */}
          <aside className="md:w-1/4 w-full mb-8 md:mb-0">
            <nav className="bg-gray-50 rounded-lg shadow p-4 sticky top-24">
              <ul className="space-y-2">
                {menuOptions.map((option) => (
                  <li key={option}>
                    <button
                      className={`w-full text-left px-4 py-2 rounded transition font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 ${
                        selectedCategory === option ? 'bg-gray-200 text-gray-900' : ''
                      }`}
                      onClick={() => setSelectedCategory(option as 'All' | 'Homes' | 'Apartments')}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          {/* Projects Grid */}
          <div className="md:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer" onClick={() => openModal(idx)}>
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-sm uppercase tracking-wider font-medium mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-light mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200 mb-4">{project.description || ' '}</p>
                    <div className="flex justify-between text-sm">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {filteredProjects.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-12">No projects found.</div>
            )}
          </div>
        </div>
      </div>
      {/* Modal Popup */}
      {modalOpen && filteredProjects[modalIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={closeModal}>
          <div className="relative max-w-5xl w-full mx-4" style={{ maxWidth: '1200px' }} onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-white text-3xl font-light" onClick={closeModal} aria-label="Close">&times;</button>
            <button className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl px-2" onClick={showPrev} aria-label="Previous">&#8592;</button>
            <img src={filteredProjects[modalIndex].imageUrl} alt={filteredProjects[modalIndex].title} className="w-full max-h-[96vh] object-contain rounded-lg shadow-lg" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl px-2" onClick={showNext} aria-label="Next">&#8594;</button>
            <div className="text-center text-white mt-4">
              <span className="text-lg font-light">{filteredProjects[modalIndex].title}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects; 