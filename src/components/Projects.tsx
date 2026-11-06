import React, { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from './PageHeader';
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

import wiz01 from '../projects/03/wiz_01.jpg';
import wiz02 from '../projects/03/wiz_02.jpg';
import wiz03 from '../projects/03/wiz_03.jpg';
import wiz04 from '../projects/03/wiz_04.jpg';
import wiz05 from '../projects/03/wiz_05.jpg';
import wiz06 from '../projects/03/wiz_06.jpg';
import wiz07 from '../projects/03/wiz_07.jpg';
import wiz08 from '../projects/03/wiz_08.jpg';
import wiz09 from '../projects/03/wiz_09.jpg';
import wiz10 from '../projects/03/wiz_10.jpg';
import wiz11 from '../projects/03/wiz_11.jpg';
import wiz12 from '../projects/03/wiz_12.jpg';
import wiz13 from '../projects/03/wiz_13.jpg';
import wiz14 from '../projects/03/wiz_14.jpg';
import wiz15 from '../projects/03/wiz_15.jpg';
import wiz16 from '../projects/03/wiz_16.jpg';
import wiz17 from '../projects/03/wiz_17.jpg';

import piasta01 from '../projects/04/WIZ_01.jpg';
import piasta02 from '../projects/04/WIZ_02.jpg';
import piasta03 from '../projects/04/WIZ_03.jpg';
import piasta04 from '../projects/04/WIZ_04.jpg';
import piasta05 from '../projects/04/WIZ_05.jpg';
import piasta06 from '../projects/04/WIZ_06.jpg';
import piasta07 from '../projects/04/WIZ_07.jpg';
import piasta08 from '../projects/04/WIZ_08.jpg';
import piasta09 from '../projects/04/WIZ_09.jpg';
import piasta10 from '../projects/04/WIZ_10.jpg';
import piasta11 from '../projects/04/WIZ_11.jpg';
import piasta12 from '../projects/04/WIZ_12.jpg';
import piasta13 from '../projects/04/WIZ_13.jpg';
import piasta14 from '../projects/04/WIZ_14.jpg';
import piasta15 from '../projects/04/WIZ_15.jpg';
import piasta16 from '../projects/04/WIZ_16.jpg';
import piasta17 from '../projects/04/WIZ_17.jpg';
import piasta18 from '../projects/04/WIZ_18.jpg';
import piasta19 from '../projects/04/WIZ_19.jpg';
import piasta20 from '../projects/04/WIZ_20.jpg';
import piasta21 from '../projects/04/WIZ_21.jpg';
import piasta22 from '../projects/04/WIZ_22.jpg';

import siewna01 from '../projects/05/WIZ_01.jpg';
import siewna02 from '../projects/05/WIZ_02.jpg';
import siewna03 from '../projects/05/WIZ_03.jpg';
import siewna04 from '../projects/05/WIZ_04.jpg';

const apartmentProjects = [
  {
    id: 'krakow-lwowska',
    name: 'Kraków / Lwowska - Poland',
    cover: w1, // first image from 01
    images: [
      w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17, w18, w19, w20, w21, w22
    ],
  },
  {
    id: 'krakow-piasta',
    name: 'Kraków / Piasta - Poland',
    cover: piasta01,
    images: [
      piasta01, piasta02, piasta03, piasta04, piasta05, piasta06, piasta07, piasta08, piasta09, piasta10,
      piasta11, piasta12, piasta13, piasta14, piasta15, piasta16, piasta17, piasta18, piasta19, piasta20, piasta21, piasta22,
    ],
  },
  {
    id: 'krakow-siewna',
    name: 'Kraków / Siewna - Poland',
    cover: siewna01,
    images: [siewna01, siewna02, siewna03, siewna04],
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
  {
    id: 'jankowka',
    name: 'Jankówka - Poland',
    cover: wiz01, // first image from 03
    images: [
      wiz01, wiz02, wiz03, wiz04, wiz05, wiz06, wiz07, wiz08, wiz09, wiz10, wiz11, wiz12, wiz13, wiz14, wiz15, wiz16, wiz17
    ],
  },
];

const PROJECT_DESC_FIELD =
  /^(Typ|Type|Zakres|Scope|Strefa|Zone|Idea|Concept):\s*([\s\S]*)$/;

const FormattedProjectDescription: React.FC<{ text: string }> = ({ text }) => {
  const blocks = text.trim().split(/\n\n+/);
  return (
    <div className="space-y-4 sm:space-y-5">
      {blocks.map((block, i) => {
        const m = block.match(PROJECT_DESC_FIELD);
        if (!m) {
          return (
            <p key={i} className="whitespace-pre-line text-[15px] font-light leading-relaxed text-muted">
              {block}
            </p>
          );
        }
        const label = m[1];
        const value = m[2].trim();
        return (
          <div key={i} className="border-l border-line pl-4">
            <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-muted">{label}</p>
            <p className="text-[15px] font-light leading-relaxed text-ink/80">{value}</p>
          </div>
        );
      })}
    </div>
  );
};

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

  const backToCategoryProjects = useCallback(() => {
    setSelectedProject(null);
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

  const activeSubProject =
    selectedProject && selectedCategory === 'Homes'
      ? homeProjects.find((p) => p.id === selectedProject) ?? null
      : selectedProject && selectedCategory === 'Apartments'
        ? apartmentProjects.find((p) => p.id === selectedProject) ?? null
        : null;

  const projectDescription = activeSubProject
    ? t(`projects.descriptions.${activeSubProject.id}`).trim()
    : '';

  const projectCards = (projects: typeof homeProjects) => (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
      {projects.map((proj, index) => (
        <button
          key={proj.id}
          type="button"
          className="group text-left"
          onClick={() => setSelectedProject(proj.id)}
        >
          <div className="relative aspect-[5/4] overflow-hidden bg-line">
            <img
              src={proj.cover}
              alt={proj.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
          <div className="mt-3 flex items-baseline justify-between gap-4">
            <span className="font-display text-2xl text-ink">{proj.name}</span>
            <span className="text-[11px] tracking-[0.18em] text-muted">{String(index + 1).padStart(2, '0')}</span>
          </div>
        </button>
      ))}
    </div>
  );

  return (
    <div className="px-5 pb-20 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <PageHeader index="01" title={t('projects.title')} />
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <aside className="w-full md:w-44 md:shrink-0">
            <nav className="sticky top-28 border-t border-line">
              <ul>
                {menuOptions.map((option, index) => (
                  <li key={option.key} className="border-b border-line">
                    <button
                      className={`flex w-full items-baseline gap-3 py-3 text-left text-[12px] uppercase tracking-[0.18em] transition-colors focus:outline-none ${
                        selectedCategory === option.key ? 'text-ink' : 'text-muted hover:text-ink'
                      }`}
                      onClick={() => setSelectedCategory(option.key as 'All' | 'Homes' | 'Apartments')}
                    >
                      <span className="text-[10px] tracking-[0.16em]">{String(index + 1).padStart(2, '0')}</span>
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <div className="min-w-0 flex-1">
            {selectedCategory === 'Homes' && !selectedProject && projectCards(homeProjects)}
            {selectedCategory === 'Apartments' && !selectedProject && projectCards(apartmentProjects)}
            {(selectedCategory === 'All' || selectedProject) && (
              <div className="space-y-12">
                {activeSubProject && (
                  <div className="max-w-3xl">
                    {selectedProject && (selectedCategory === 'Homes' || selectedCategory === 'Apartments') && (
                      <button
                        type="button"
                        onClick={backToCategoryProjects}
                        aria-label={t('projects.backToCategory', {
                          category:
                            selectedCategory === 'Apartments' ? t('projects.apartments') : t('projects.homes'),
                        })}
                        className="mb-6 text-[11px] uppercase tracking-[0.22em] text-muted transition-colors hover:text-ink"
                      >
                        ← {selectedCategory === 'Apartments' ? t('projects.apartments') : t('projects.homes')}
                      </button>
                    )}
                    <h2 className="font-display text-4xl leading-none text-ink md:text-5xl">
                      {activeSubProject.name}
                    </h2>
                    {projectDescription && (
                      <div className="mt-8">
                        <FormattedProjectDescription text={projectDescription} />
                      </div>
                    )}
                  </div>
                )}
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="group relative aspect-[5/4] overflow-hidden bg-line"
                    onClick={() => openModal(idx)}
                  >
                    <img src={img} alt="Project" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                  </button>
                ))}
                {galleryImages.length === 0 && (
                  <div className="col-span-full py-12 text-center text-sm text-muted">{t('projects.noImages')}</div>
                )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {modalOpen && galleryImages[modalIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/92" onClick={closeModal}>
          <div className="relative mx-4 w-full max-w-6xl" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-10 right-0 text-2xl font-light text-paper" onClick={closeModal} aria-label="Close">&times;</button>
            <button className="absolute left-0 top-1/2 -translate-y-1/2 px-2 text-2xl font-light text-paper" onClick={showPrev} aria-label="Previous">&#8592;</button>
            <img src={galleryImages[modalIndex]} alt="Project" className="max-h-[86vh] w-full object-contain" />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 px-2 text-2xl font-light text-paper" onClick={showNext} aria-label="Next">&#8594;</button>
            <p className="mt-4 text-center text-[11px] uppercase tracking-[0.22em] text-paper/70">
              {String(modalIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects; 