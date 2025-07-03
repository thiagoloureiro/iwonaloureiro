import React from 'react';
import { useTranslation } from 'react-i18next';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const Services: React.FC = () => {
  const { t } = useTranslation();
  const services: Service[] = [
    {
      title: t('services.consultation'),
      description: t('services.consultationDesc'),
      icon: '🏛️',
      features: [
       
      ]
    },
    {
      title: t('services.concept'),
      description: t('services.conceptDesc'),
      icon: '🎨',
      features: [
       
      ]
    },
    {
      title: t('services.detailed'),
      description: t('services.detailedDesc'),
      icon: '📋',
      features: [
      
      ]
    },
    {
      title: t('services.supervision'),
      description: t('services.supervisionDesc'),
      icon: '📋',
      features: [
      
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-light tracking-tight text-gray-900 mb-4">{t('services.title')}</h1>
          <p className="text-lg text-gray-600  mx-auto">
            {t('services.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300">
              <div className="text-4xl mb-4 font-extrabold text-gray-200 select-none">
                {String(index + 1).padStart(2, '0')}
              </div>
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
          <h2 className="text-2xl font-light text-gray-900 mb-4">{t('services.ctaTitle')}</h2>
          <p className="text-gray-600 mb-8">{t('services.ctaDesc')}</p>
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300"
          >
            {t('services.ctaBtn')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services; 