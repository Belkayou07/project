import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Utensils, Coffee, Car, Trees, ShoppingBag, Accessibility } from 'lucide-react';
import { SectionTitle } from '../SectionTitle';

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: t('about.features.0.title'),
      description: t('about.features.0.description')
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: t('about.features.1.title'),
      description: t('about.features.1.description')
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: t('about.features.2.title'),
      description: t('about.features.2.description')
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: t('about.features.3.title'),
      description: t('about.features.3.description')
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: t('about.features.4.title'),
      description: t('about.features.4.description')
    },
    {
      icon: <Accessibility className="w-8 h-8" />,
      title: t('about.features.5.title'),
      description: t('about.features.5.description')
    },
  ];

  return (
    <div 
      id="about" 
      className="bg-zinc-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white 
      border-t-[16px] border-l-[16px] border-r-[16px] border-white 
      flex items-center justify-center relative"
    >
      <section 
        id="our-story" 
        className="flex items-center justify-center relative w-full max-w-screen-2xl"
      >
        <div 
          className="absolute top-0 left-0 w-1/3 h-full bg-cover bg-no-repeat opacity-20 mix-blend-overlay" 
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} 
        />
        <div className="max-w-6xl mx-auto px-4 relative z-10 w-full flex flex-col items-center">
          <div className="text-center mb-12 w-full flex justify-center">
            <SectionTitle title={t('about.title')} />
          </div>
          <p className="text-gray-300 mb-8 text-base md:text-lg text-center">
            {t('about.description')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex items-start gap-4 bg-green-900/20 p-4 md:p-6 
                border border-green-700/30 
                hover:bg-green-900/40 
                transition-all duration-300 
                transform hover:-translate-y-2 
                rounded-lg"
              >
                <div className="text-green-500 p-2 bg-green-700/20 rounded-lg flex-shrink-0 
                hidden sm:flex">
                  {feature.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-base md:text-lg text-green-500 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};