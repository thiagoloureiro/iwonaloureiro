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
            <h2 className="text-2xl font-light text-gray-900">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2010, our studio has been at the forefront of architectural innovation, 
              combining timeless design principles with cutting-edge technology. We believe that 
              great architecture should not only be beautiful but also enhance the lives of those 
              who inhabit it.
            </p>
            <p className="text-gray-600">
              Our team of passionate architects and designers brings together diverse perspectives 
              and expertise, allowing us to create unique solutions for each project while 
              maintaining the highest standards of quality and sustainability.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <h3 className="text-xl font-light text-gray-900 mb-4">Innovation</h3>
            <p className="text-gray-600">
              Pushing boundaries and exploring new possibilities in design and construction.
            </p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-light text-gray-900 mb-4">Sustainability</h3>
            <p className="text-gray-600">
              Creating environmentally responsible designs that stand the test of time.
            </p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-light text-gray-900 mb-4">Craftsmanship</h3>
            <p className="text-gray-600">
              Attention to detail and dedication to quality in every aspect of our work.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1488&q=80"
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-light text-gray-900">Sarah Johnson</h3>
              <p className="text-gray-600">Principal Architect</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-light text-gray-900">Michael Chen</h3>
              <p className="text-gray-600">Design Director</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1461&q=80"
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-light text-gray-900">Emma Rodriguez</h3>
              <p className="text-gray-600">Project Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 