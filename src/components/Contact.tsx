import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LINKEDIN_URL = 'https://www.linkedin.com/in/iwona-loureiro-b9ba4b3b/';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-light tracking-tight text-gray-900 mb-4">{t('contact.title')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact.intro')}
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-light text-gray-900 mb-6">{t('contact.infoTitle')}</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-gray-900 mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-light text-gray-900">{t('contact.emailLabel')}</h3>
                  <a
                    href="mailto:iwonaloureiro@outlook.com"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    iwonaloureiro@outlook.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Linkedin className="w-6 h-6 text-gray-900 mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-light text-gray-900">{t('contact.linkedinLabel')}</h3>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors underline-offset-2 hover:underline"
                  >
                    {t('contact.linkedinLinkText')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
