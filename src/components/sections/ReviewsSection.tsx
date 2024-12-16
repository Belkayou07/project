import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      name: 'Najat',
      text: t('reviews.list.0.text'),
      rating: 5,
      image: '' // No image
    },
    {
      name: 'Wendy Hoolants',
      text: t('reviews.list.1.text'),
      rating: 5,
      image: '' // No image
    },
    {
      name: 'Leen De Witte',
      text: t('reviews.list.2.text'),
      rating: 5,
      image: '' // No image
    }
  ];

  return (
    <div id="reviews" className="bg-zinc-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white border-t-[16px] border-l-[16px] border-r-[16px] border-white flex items-center justify-center">
      <section id="customer-reviews" className="flex items-center justify-center relative">
        <div 
          className="absolute top-0 left-0 w-1/3 h-full bg-cover bg-no-repeat opacity-20 mix-blend-overlay" 
          style={{
            backgroundImage: `url('/src/images/BackgroundImages/neutral-background.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} 
        />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-700 mb-6">
              {t('reviews.title')}
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              {t('reviews.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col gap-4 bg-green-900/20 p-6 border border-green-700/30"
              >
                <div>
                  <h3 className="font-semibold text-lg text-green-500 mb-1">
                    {review.name}
                  </h3>
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300">{review.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};