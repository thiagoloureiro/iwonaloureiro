import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const services: Service[] = [
  {
    title: 'Architectural Design',
    description: 'Comprehensive architectural solutions from concept to completion.',
    icon: '🏛️',
    features: [
      'Residential Architecture',
      'Commercial Buildings',
      'Urban Planning',
      'Sustainable Design',
      'Renovation & Restoration'
    ]
  },
  {
    title: 'Interior Design',
    description: 'Creating harmonious and functional interior spaces.',
    icon: '🎨',
    features: [
      'Space Planning',
      'Material Selection',
      'Custom Furniture Design',
      'Lighting Design',
      'Color Schemes'
    ]
  },
  {
    title: 'Project Management',
    description: 'End-to-end project management ensuring smooth execution.',
    icon: '📋',
    features: [
      'Budget Management',
      'Timeline Planning',
      'Contractor Coordination',
      'Quality Control',
      'Progress Monitoring'
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

        {/* Process Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="text-lg font-light text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">Initial meeting to understand your vision and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="text-lg font-light text-gray-900 mb-2">Concept Design</h3>
              <p className="text-gray-600">Developing initial concepts and design direction</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="text-lg font-light text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">Refining designs and preparing detailed documentation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="text-lg font-light text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">Overseeing construction and ensuring quality</p>
            </div>
          </div>
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