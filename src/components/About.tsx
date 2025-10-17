import React from 'react';
import iwonaImg from '../images/iwona.jpg';
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

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const { t } = useTranslation();

  const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17];

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
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-light tracking-tight text-gray-900 mb-4">{t('about.title')}</h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={iwonaImg}
              alt="Iwona Loureiro"
              className="rounded-lg shadow-lg w-3/5 mx-auto"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-light text-gray-900">{t('about.myStory')}</h2>
            <p className="text-gray-600">{t('about.story1')}</p>
            <p className="text-gray-600">{t('about.story2')}</p>
          </div>
        </div>

        {/* My Art Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-light text-gray-900 text-center mb-8">{t('about.myArt')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                className="focus:outline-none"
                onClick={() => openModal(img)}
              >
                <img
                  src={img}
                  alt={`Art ${idx + 1}`}
                  className="shadow-md w-full h-auto cursor-pointer"
                />
              </button>
            ))}
          </div>
          {/* Modal for full-size image */}
          {modalOpen && modalImg && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={() => setModalOpen(false)}>
              <div className="relative max-w-3xl w-full flex justify-center" onClick={e => e.stopPropagation()}>
                <button
                  className="absolute top-2 right-2 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-80 z-10"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                
                {/* Navigation arrows */}
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-80 z-10"
                  onClick={() => navigateImage('prev')}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-80 z-10"
                  onClick={() => navigateImage('next')}
                  aria-label="Next image"
                >
                  ›
                </button>
                
                <img src={modalImg} alt="Full size art" className="max-h-[80vh] w-auto rounded shadow-lg" />
                
                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded text-sm">
                  {currentImageIndex + 1} / {images.length}
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