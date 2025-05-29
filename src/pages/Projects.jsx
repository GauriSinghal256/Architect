import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';

// Sample project data (would normally come from an API)
const allProjects = [
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
  },
  {
    id: 4,
    title: 'Verdant Office Campus',
    description: 'A corporate campus designed around central courtyards and featuring extensive green roofs and natural ventilation.',
    image: 'https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Commercial',
    location: 'Bangalore, India'
  },
  {
    id: 5,
    title: 'Floating Pavilion Restaurant',
    description: 'An award-winning waterfront restaurant with panoramic views and a unique floating design that adapts to water levels.',
    image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Hospitality',
    location: 'Kerala, India'
  },
  {
    id: 6,
    title: 'Urban Renewal Mixed-Use Development',
    description: 'A transformative urban project converting former industrial zones into vibrant mixed-use neighborhoods.',
    image: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Urban Planning',
    location: 'Hyderabad, India'
  },
  {
    id: 7,
    title: 'Tranquil Wellness Retreat',
    description: 'A spa and wellness center nestled in the mountains, designed to promote relaxation and connection with nature.',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Hospitality',
    location: 'Uttarakhand, India'
  },
  {
    id: 8,
    title: 'Modernist Family Residence',
    description: 'A private home featuring clean lines, open spaces, and a seamless indoor-outdoor living experience.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Residential',
    location: 'Pune, India'
  },
  {
    id: 9,
    title: 'Sustainable School Campus',
    description: 'An educational facility designed with sustainability at its core, featuring solar power, rainwater harvesting, and natural ventilation.',
    image: 'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Educational',
    location: 'Chennai, India'
  },
];

// Get unique categories for filter
const categories = ['All', ...new Set(allProjects.map(project => project.category))];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter projects based on category and search term
  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
      <section className="relative py-24 md:py-32 bg-primary-800">
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Projects</h1>
          <p className="text-lg max-w-2xl text-primary-100">
            Explore our diverse portfolio of architectural projects spanning residential, 
            commercial, cultural, and urban planning domains.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          {/* Filter and Search Controls */}
          <div className="mb-12 flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    filter === category
                      ? 'bg-primary-800 text-white'
                      : 'bg-white text-primary-600 hover:bg-primary-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>

          {/* Project Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-primary-600 mb-2">No projects found</h3>
              <p className="text-primary-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;