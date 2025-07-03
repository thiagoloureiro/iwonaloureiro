import React from 'react';
import iwonaImg from '../images/iwona.jpg';
import img0 from '../images/0.jpg';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
import img9 from '../images/9.jpg';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);
  const { t } = useTranslation();

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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[img0, img1, img2, img3, img4, img5, img6, img7, img8, img9].map((img, idx) => (
              <button
                key={idx}
                type="button"
                className="focus:outline-none"
                onClick={() => {
                  setModalImg(img);
                  setModalOpen(true);
                }}
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
                  className="absolute top-2 right-2 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-80"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <img src={modalImg} alt="Full size art" className="max-h-[80vh] w-auto rounded shadow-lg" />
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default About; 