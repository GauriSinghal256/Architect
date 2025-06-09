import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedSection from '../components/ui/AnimatedSection';
import { projectsData } from './projectData';





const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id);
  
  // Find the project matching the ID
  const project = projectsData.find(p => p.id === projectId);
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle project not found
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/projects" className="btn btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative mt-16 mx-10 h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10 text-white">
          <Link to="/projects"  className=" inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{project.title}</h1>
          <p className="text-xl max-w-2xl text-white/90">{project.description}</p>
        </div>
      </section>

      {/* Project Details */}
      <section className=" bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Project Info */}
           

            {/* Project Description */}
            
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <SectionTitle 
            title="Project Gallery" 
            subtitle="Visual Journey"
            center={true}
            
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.gallery.map((image, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="overflow-hidden rounded-lg shadow-lg shadow-slate-600">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={image} 
                    alt={`${project.title} - Gallery Image ${index + 1}`}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-heading font-semibold mb-4">Explore More Projects</h3>
          <p className="text-primary-600 mb-8">Discover our diverse portfolio of architectural works</p>
          <Link to="/projects" className="btn btn-primary">
            View All Projects
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetail;