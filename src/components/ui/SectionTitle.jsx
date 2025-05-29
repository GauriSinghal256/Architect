import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ 
  title, 
  subtitle, 
  center = false, 
  light = false, 
  className = '' 
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'} ${className}`}>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`text-sm uppercase tracking-widest mb-2 ${
            light ? 'text-primary-200' : 'text-primary-600'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={`text-3xl md:text-4xl font-heading font-semibold ${
          light ? 'text-white' : 'text-primary-800'
        }`}
      >
        <span className="relative inline-block">
          {title}
          <motion.span 
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`absolute bottom-0 left-0 h-0.5 ${
              light ? 'bg-white' : 'bg-primary-800'
            }`}
          />
        </span>
      </motion.h2>
    </div>
  );
};

export default SectionTitle;