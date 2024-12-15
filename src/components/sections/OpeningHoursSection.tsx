import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const OpeningHoursSection: React.FC = () => {
  const { t } = useTranslation();

  const daysOrder = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ];

  return (
    <div id="hours" className="bg-zinc-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white border-t-[16px] border-l-[16px] border-r-[16px] border-white flex items-center justify-center">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-green-700 text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          {t('openingHours.title')}
        </motion.h2>

        <div className="bg-green-900/20 p-6 border border-green-700/30">
          <div className="space-y-2">
            {daysOrder.map((day) => (
              <div 
                key={day} 
                className="flex justify-between px-6 py-4 border-b last:border-b-0 hover:bg-green-900/20 transition-colors"
              >
                <span className="capitalize font-medium text-gray-300">
                  {t(`days.${day}`)}
                </span>
                <span className="text-gray-400">
                  {t(`openingHours.hours.${day}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
