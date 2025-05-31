import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ y: -10 }}
      className="group overflow-hidden bg-white rounded-lg shadow-md"
    >
      <div className="block">
        <div className="relative overflow-hidden h-64">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out-expo"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 p-4 w-full">
              <span className="bg-white text-primary-800 px-2 py-1 text-xs rounded-full">
                {project.category}
              </span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-primary-600 mb-4 line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;