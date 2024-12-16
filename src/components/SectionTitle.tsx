import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  className?: string;
  textColor?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  className = '', 
  textColor = 'text-green-700' 
}) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-[60px] font-bold mb-6 text-center ${textColor} ${className}`}
    >
      {title}
    </motion.h2>
  );
};
