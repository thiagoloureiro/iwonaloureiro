import React from 'react';
import img0 from '../images/_0.jpg';
import img1 from '../images/_1.jpg';
import img2 from '../images/_2.jpg';
import img3 from '../images/_3.jpg';
import img4 from '../images/_4.jpg';
import img5 from '../images/_5.jpg';
import img6 from '../images/_6.jpg';
import img7 from '../images/_7.jpg';
import img8 from '../images/_8.jpg';
import img9 from '../images/9.jpg';
import img10 from '../images/10.jpg';
import img11 from '../images/11.jpg';
import img12 from '../images/12.jpg';
import img13 from '../images/13.jpg';
import img14 from '../images/14.jpg';
import img15 from '../images/15.jpg';
import img16 from '../images/16.jpg';
import img17 from '../images/17.jpg';
import img18 from '../images/papayas.png';
import img19 from '../images/botanical-leaves.png';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from './PageHeader';

const About: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const { t } = useTranslation();

  const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19];

  const openModal = (img: string) => {
    const index = images.indexOf(img);
    setCurrentImageIndex(index);
    setModalImg(img);
    setModalOpen(true);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    } else {
      newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    }
    setCurrentImageIndex(newIndex);
    setModalImg(images[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!modalOpen) return;
      
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          navigateImage('prev');
          break;
        case 'ArrowRight':
          event.preventDefault();
          navigateImage('next');
          break;
        case 'Escape':
          event.preventDefault();
          setModalOpen(false);
          break;
      }
    };

    if (modalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [modalOpen, currentImageIndex]);

  return (
    <div className="px-5 pb-20 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <PageHeader index="03" title={t('about.title')} compact />
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted">{t('about.myStory')}</p>
          </div>
          <div className="space-y-7 lg:col-span-7 lg:col-start-6">
            <p className="text-[16px] font-light leading-relaxed text-ink/80">{t('about.story1')}</p>
            <p className="text-[16px] font-light leading-relaxed text-ink/80">{t('about.story2')}</p>
          </div>
        </div>

        <div className="mt-24 border-t border-line pt-10">
          <div className="mb-8 flex items-baseline justify-between gap-6">
            <h2 className="font-display text-4xl text-ink md:text-5xl">{t('about.myArt')}</h2>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted">{images.length}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                className="group aspect-[4/5] overflow-hidden bg-line focus:outline-none"
                onClick={() => openModal(img)}
              >
                <img
                  src={img}
                  alt={`Art ${idx + 1}`}
                  className="h-full w-full cursor-pointer object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
          {/* Modal for full-size image */}
          {modalOpen && modalImg && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90" onClick={() => setModalOpen(false)}>
              <div className="relative flex w-full max-w-5xl justify-center px-4" onClick={e => e.stopPropagation()}>
                <button
                  className="absolute -top-12 right-4 text-2xl font-light text-paper"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-3xl font-light text-paper"
                  onClick={() => navigateImage('prev')}
                  aria-label="Previous image"
                >
                  &#8592;
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-3xl font-light text-paper"
                  onClick={() => navigateImage('next')}
                  aria-label="Next image"
                >
                  &#8594;
                </button>
                <img src={modalImg} alt="Full size art" className="max-h-[82vh] w-auto" />
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.22em] text-paper/80">
                  {String(currentImageIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default About; 