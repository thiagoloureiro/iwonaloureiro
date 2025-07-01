import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const services: Service[] = [
  {
    title: 'Consultation',
    description: 'During our first meeting, we’ll discuss your expectations and vision. I’ll learn more about your needs, inspirations, and lifestyle, and present my offer in more detail.',
    icon: '🏛️',
    features: [
     
    ]
  },
  {
    title: 'Concept Design',
    description: 'I’ll prepare functional layouts in 2D format, divided into zones. You’ll also receive interior visualizations that showcase proposed colors, materials, furniture, and lighting.',
    icon: '🎨',
    features: [
     
    ]
  },
  {
    title: 'Detailed Design',
    description: 'I’ll develop a complete execution-ready interior design package, including: functional plans with descriptions, lighting layouts, sections and elevations, custom furniture drawings with dimensions, equipment specifications, and final visualizations.',
    icon: '📋',
    features: [
    
    ]
  },
   {
    title: 'Author Supervision',
    description: 'As part of my supervision service, I will ensure the project is implemented according to the documentation, assist in selecting specific materials, colors, and solutions, and provide on-site support during construction when needed.',
    icon: '📋',
    features: [
    
    ]
  }
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light tracking-tight text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive architectural and design solutions tailored to your vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

       

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8">Let's discuss how we can bring your vision to life.</p>
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services; 