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
      className="group overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative overflow-hidden h-56">
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
          className="text-lg font-heading font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300"
        >
          {project.title}
        </motion.h3>
        <motion.p 
          variants={textVariants}
          className="text-gray-600 text-sm line-clamp-2 mt-1 mb-3"
        >
          {project.description}
        </motion.p>
        <motion.div 
          variants={tagVariants}
          className="flex gap-2 mb-3"
        >
          <span className="bg-primary-100 text-primary-800 px-2 py-0.5 text-xs font-medium rounded-full">
            {project.category}
          </span>
          <span className="bg-primary-100 text-primary-800 px-2 py-0.5 text-xs font-medium rounded-full">
            {project.location}
          </span>
        </motion.div>
        {/* <Link href="/projectpages/page1">
        <button>read more</button>
        </Link> */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
        </motion.div>
        <button onClick={handleReadMore} className=" text-sm text-gray-600 font-medium hover:underline">
            View Details →
          </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;