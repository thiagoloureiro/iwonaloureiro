import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light tracking-tight text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Creating spaces that inspire, innovate, and endure.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80"
              alt="Studio workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-light text-gray-900">My Story</h2>
            <p className="text-gray-600">
I founded my own design studio after 13 years of working as an architect in Kraków. Although interior design wasn't part of my original career plans, I eventually realized that it’s the field that brings me the greatest satisfaction and sense of purpose. With every new project, I became more confident that this was the right path — one that allows me to combine my professional experience, aesthetic sensitivity, and the desire to create something truly meaningful for others.

I believe that the spaces we live in have a real impact on our well-being — they’re where we work, relax, sleep, cook, and spend time with loved ones. That’s why I create interiors that are not only functional and comfortable, but also visually pleasing and enjoyable to be in. Spaces that simply feel right.

            </p>
            <p className="text-gray-600">
I am a graduate of the Faculty of Architecture and Urban Planning at the Cracow University of Technology and hold a license for unlimited architectural design. Art has always been a part of my life — painting, drawing, and graphic design have been lifelong passions that continue to inspire my work.

Years of professional experience, aesthetic intuition, and an openness to new ideas allow me to design interiors tailored to the individual needs and lifestyles of my clients — with professionalism and a touch of uniqueness. Every project is a new story, a new challenge, and an opportunity to create something truly special.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default About; 