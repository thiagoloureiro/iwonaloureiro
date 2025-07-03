import React, { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const menuOptions = [
    { key: 'All', label: t('projects.all') },
    { key: 'Homes', label: t('projects.homes') },
    { key: 'Apartments', label: t('projects.apartments') },
  ];
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Homes' | 'Apartments'>('All');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState<number>(0);

  useEffect(() => {
    setSelectedProject(null); // Reset subproject when switching main category
  }, [selectedCategory]);

  let galleryImages: string[] = [];

  if (selectedCategory === 'All') {
    // Show all images from both categories
    galleryImages = [
      ...homeProjects.flatMap(p => p.images),
      ...apartmentProjects.flatMap(p => p.images)
    ];
  } else if (selectedCategory === 'Homes') {
    if (!selectedProject) {
      // Show submenu with homeProjects
      galleryImages = [];
    } else {
      const proj = homeProjects.find(p => p.id === selectedProject);
      galleryImages = proj ? proj.images : [];
    }
  } else if (selectedCategory === 'Apartments') {
    if (!selectedProject) {
      // Show submenu with apartmentProjects
      galleryImages = [];
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
          <h1 className="text-3xl font-light tracking-tight text-gray-900 mb-2">{t('projects.title')}</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Menu */}
          <aside className="md:w-1/4 w-full mb-8 md:mb-0">
            <nav className="sticky top-24">
              <ul className="space-y-2">
                {menuOptions.map((option) => (
                  <li key={option.key}>
                    <button
                      className={`w-full text-left font-medium transition-colors focus:outline-none
                        ${selectedCategory === option.key ? 'text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-900'}`}
                      style={{ background: 'none', border: 'none', padding: 0 }}
                      onClick={() => setSelectedCategory(option.key as 'All' | 'Homes' | 'Apartments')}
                    >
                      {option.label}
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
                  <div key={proj.id} className="cursor-pointer group relative overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl" onClick={() => setSelectedProject(proj.id)}>
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
                  <div key={proj.id} className="cursor-pointer group relative overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl" onClick={() => setSelectedProject(proj.id)}>
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
                  <div key={idx} className="group relative overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer" onClick={() => openModal(idx)}>
                    <div className="aspect-w-16 aspect-h-9">
                      <img src={img} alt="Project" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                ))}
                {galleryImages.length === 0 && (
                  <div className="col-span-full text-center text-gray-500 py-12">{t('projects.noImages')}</div>
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
            <img src={galleryImages[modalIndex]} alt="Project" className="w-full max-h-[96vh] object-contain shadow-lg" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl px-2" onClick={showNext} aria-label="Next">&#8594;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects; 