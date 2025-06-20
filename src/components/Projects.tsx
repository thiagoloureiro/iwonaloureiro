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

const apartmentProjects = [
  {
    id: 'krakow-lwowska',
    name: 'Kraków / Lwowska - Poland',
    cover: w1, // first image from 01
    images: [
      w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17, w18, w19, w20, w21, w22
    ],
  },
];

const homeProjects = [
  {
    id: 'odporyszow',
    name: 'Odporyszów - Poland',
    cover: a01, // first image from 02
    images: [
      a01, a02, a03, a04, a05, a06, a07, a08, a09, a10, a11, a12, a13, a14, a15, a16, a17
    ],
  },
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Homes' | 'Apartments'>('All');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState<number>(0);

  useEffect(() => {
    setSelectedProject(null); // Reset subproject when switching main category
  }, [selectedCategory]);

  let filteredProjects: Project[] = [];
  let galleryImages: string[] = [];

  if (selectedCategory === 'All') {
    filteredProjects = [...homesImages, ...apartmentsImages];
    galleryImages = filteredProjects.map(p => p.imageUrl);
  } else if (selectedCategory === 'Homes') {
    if (!selectedProject) {
      // Show submenu with homeProjects
      filteredProjects = [];
    } else {
      const proj = homeProjects.find(p => p.id === selectedProject);
      galleryImages = proj ? proj.images : [];
    }
  } else if (selectedCategory === 'Apartments') {
    if (!selectedProject) {
      // Show submenu with apartmentProjects
      filteredProjects = [];
    } else {
      const proj = apartmentProjects.find(p => p.id === selectedProject);
      galleryImages = proj ? proj.images : [];
    }
  }

  const openModal = useCallback((idx: number) => {
    setModalIndex(idx);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const showPrev = useCallback(() => {
    setModalIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, [galleryImages.length]);

  const showNext = useCallback(() => {
    setModalIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, [galleryImages.length]);

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
            <nav className="sticky top-24">
              <ul className="space-y-2">
                {menuOptions.map((option) => (
                  <li key={option}>
                    <button
                      className={`w-full text-left font-medium transition-colors focus:outline-none
                        ${selectedCategory === option ? 'text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-900'}`}
                      style={{ background: 'none', border: 'none', padding: 0 }}
                      onClick={() => setSelectedCategory(option as 'All' | 'Homes' | 'Apartments')}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          {/* Projects Grid or Submenu */}
          <div className="md:w-3/4 w-full">
            {/* Submenu for Homes */}
            {selectedCategory === 'Homes' && !selectedProject && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {homeProjects.map((proj) => (
                  <div key={proj.id} className="cursor-pointer group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl" onClick={() => setSelectedProject(proj.id)}>
                    <div className="aspect-w-16 aspect-h-9">
                      <img src={proj.cover} alt={proj.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                      <span className="text-white text-2xl font-light">{proj.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* Submenu for Apartments */}
            {selectedCategory === 'Apartments' && !selectedProject && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {apartmentProjects.map((proj) => (
                  <div key={proj.id} className="cursor-pointer group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl" onClick={() => setSelectedProject(proj.id)}>
                    <div className="aspect-w-16 aspect-h-9">
                      <img src={proj.cover} alt={proj.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                      <span className="text-white text-2xl font-light">{proj.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* Gallery for selected subproject or All */}
            {(selectedCategory === 'All' || selectedProject) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {galleryImages.map((img, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer" onClick={() => openModal(idx)}>
                    <div className="aspect-w-16 aspect-h-9">
                      <img src={img} alt="Project" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                ))}
                {galleryImages.length === 0 && (
                  <div className="col-span-full text-center text-gray-500 py-12">No images found.</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Modal Popup */}
      {modalOpen && galleryImages[modalIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={closeModal}>
          <div className="relative max-w-5xl w-full mx-4" style={{ maxWidth: '1200px' }} onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-white text-3xl font-light" onClick={closeModal} aria-label="Close">&times;</button>
            <button className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl px-2" onClick={showPrev} aria-label="Previous">&#8592;</button>
            <img src={galleryImages[modalIndex]} alt="Project" className="w-full max-h-[96vh] object-contain rounded-lg shadow-lg" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl px-2" onClick={showNext} aria-label="Next">&#8594;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects; 