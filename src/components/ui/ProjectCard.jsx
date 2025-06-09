import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 



const ProjectCard = ({ project, index, }) => {

  const navigate = useNavigate(); 

  const handleReadMore = () => {
    navigate(`/projects/${project.id}`);
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
        when: "beforeChildren",
        staggerChildren: 0.08
      }
    },
    hover: { 
      y: -8, 
      scale: 1.03,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
    hover: { scale: 1.06, transition: { duration: 0.4 } }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const tagVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="group overflow-hidden  bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative overflow-hidden h-[350px] ">
        <motion.img
          variants={imageVariants}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </div>
      <div className="p-4">
        <motion.h3 
          variants={textVariants}
          className="text-2xl font-heading font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300"
        >
          {project.title}
        </motion.h3>
        
        
        
        {/* <button>read more</button> */}
        
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden mt-3"
        >
    
        </motion.div>
        <button onClick={handleReadMore} className=" text-sm text-primary-600 font-medium hover:underline">
            View Details →
          </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;