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

const About: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-light tracking-tight text-gray-900 mb-4">ABOUT ME</h1>
         
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
            <h2 className="text-2xl font-light text-gray-900">My Story</h2>
            <p className="text-gray-600">
I founded my own design studio after 13 years of working as an architect in Kraków. Although interior design wasn't part of my original career plans, I eventually realized that it's the field that brings me the greatest satisfaction and sense of purpose. With every new project, I became more confident that this was the right path — one that allows me to combine my professional experience, aesthetic sensitivity, and the desire to create something truly meaningful for others.

I believe that the spaces we live in have a real impact on our well-being — they're where we work, relax, sleep, cook, and spend time with loved ones. That's why I create interiors that are not only functional and comfortable, but also visually pleasing and enjoyable to be in. Spaces that simply feel right.

            </p>
            <p className="text-gray-600">
I am a graduate of the Faculty of Architecture and Urban Planning at the Cracow University of Technology and hold a license for unlimited architectural design. Art has always been a part of my life — painting, drawing, and graphic design have been lifelong passions that continue to inspire my work.

Years of professional experience, aesthetic intuition, and an openness to new ideas allow me to design interiors tailored to the individual needs and lifestyles of my clients — with professionalism and a touch of uniqueness. Every project is a new story, a new challenge, and an opportunity to create something truly special.
            </p>
          </div>
        </div>

        {/* My Art Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-light text-gray-900 text-center mb-8">My Art</h2>
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