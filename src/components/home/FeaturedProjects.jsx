import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

const projects = [
  {
    id: 1,
    title: 'Azure Horizon Tower',
    description: 'A 42-story mixed-use skyscraper featuring sustainable design elements and a distinctive silhouette on the city skyline.',
    image: 'https://images.pexels.com/photos/2404843/pexels-photo-2404843.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Commercial',
    location: 'Mumbai, India'
  },
  {
    id: 2,
    title: 'Serenity Eco Villas',
    description: 'Luxury eco-friendly villas designed with passive cooling systems and integrated with the natural landscape.',
    image: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Residential',
    location: 'Goa, India'
  },
  {
    id: 3,
    title: 'Harmonic Culture Center',
    description: 'A cultural hub featuring a concert hall, art galleries, and educational spaces with stunning acoustics and lighting design.',
    image: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Cultural',
    location: 'Delhi, India'
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Featured Projects"
          subtitle="Our latest work"
          center={true}
        />

        <div className="mt-16 space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              <div className="w-full lg:w-2/3 overflow-hidden rounded-2xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="w-full lg:w-1/3">
                <span className="inline-block px-4 py-2 bg-primary-50 text-primary-800 rounded-full text-sm font-medium mb-4">
                  {project.category}
                </span>
                <h3 className="text-3xl font-heading font-bold mb-4">{project.title}</h3>
                <p className="text-lg text-primary-600 mb-6">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-500">{project.location}</span>
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center text-primary-800 font-medium hover:text-primary-600 transition-colors"
                  >
                    View Project
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="btn bg-primary-800 text-white hover:bg-primary-700 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;