import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedSection from '../components/ui/AnimatedSection';

// Sample project data (would normally come from an API)
const projectsData = [
  {
    id: 1,
    title: 'Azure Horizon Tower',
    description: 'A 42-story mixed-use skyscraper featuring sustainable design elements and a distinctive silhouette on the city skyline.',
    fullDescription: `The Azure Horizon Tower stands as a beacon of sustainable architecture in the heart of Mumbai's financial district. This 42-story mixed-use development integrates commercial office spaces, luxury residential apartments, and retail facilities in a harmonious vertical community.

    The design responds to India's tropical climate with passive cooling strategies, including a double-skin façade that reduces solar heat gain while maximizing natural light. The tower's distinctive stepped form creates a series of sky gardens and terraces that serve as communal spaces and contribute to the building's biophilic design approach.

    Sustainable features include:
    • Rainwater harvesting and greywater recycling systems
    • Rooftop solar panels providing 15% of the building's energy needs
    • Smart building management systems optimizing energy usage
    • Vertical gardens that improve air quality and reduce heat island effect

    The Azure Horizon Tower has received LEED Platinum certification and the Indian Green Building Council's 5-star rating.`,
    client: 'Horizon Developments',
    location: 'Mumbai, India',
    year: '2022',
    area: '75,000 sqm',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/2404843/pexels-photo-2404843.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/425160/pexels-photo-425160.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1266155/pexels-photo-1266155.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1104476/pexels-photo-1104476.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  {
    id: 2,
    title: 'Serenity Eco Villas',
    description: 'Luxury eco-friendly villas designed with passive cooling systems and integrated with the natural landscape.',
    fullDescription: `The Serenity Eco Villas project comprises a collection of 24 luxury residences nestled along the coastline of Goa. Each villa is uniquely designed to harmonize with its specific site conditions while maintaining a cohesive architectural language throughout the development.

    Our design approach prioritized environmental sensitivity and local context. The villas feature traditional Goan architectural elements reinterpreted through a contemporary lens, with sloping roofs, verandas, and courtyards that respond to the tropical climate while creating comfortable living spaces.

    Key design features include:
    • Open floor plans that maximize cross-ventilation and reduce the need for mechanical cooling
    • Strategic orientation to capture prevailing sea breezes and protect from harsh afternoon sun
    • Locally sourced materials including laterite stone, reclaimed teak, and handcrafted tiles
    • Infinity pools that visually blend with the Arabian Sea horizon
    • Drought-resistant landscaping using native species that require minimal irrigation

    The project has won multiple awards for its sustainable approach to luxury residential design, including the prestigious Indian Institute of Architects' Excellence in Architecture Award.`,
    client: 'GreenHaven Properties',
    location: 'Goa, India',
    year: '2021',
    area: '42,000 sqm',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  // More projects would follow the same pattern
];

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
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10 text-white">
          <Link to="/projects" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
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
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Project Info */}
            <div className="lg:col-span-1">
              <AnimatedSection direction="left">
                <div className="bg-primary-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-heading font-semibold mb-6">Project Details</h3>
                  <ul className="space-y-4">
                    <li className="flex flex-col">
                      <span className="text-primary-500 text-sm">Client</span>
                      <span className="font-medium">{project.client}</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-primary-500 text-sm">Location</span>
                      <span className="font-medium">{project.location}</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-primary-500 text-sm">Year</span>
                      <span className="font-medium">{project.year}</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-primary-500 text-sm">Area</span>
                      <span className="font-medium">{project.area}</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-primary-500 text-sm">Category</span>
                      <span className="font-medium">{project.category}</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Project Description */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right">
                <h2 className="text-3xl font-heading font-semibold mb-6">About This Project</h2>
                <div className="prose prose-lg max-w-none text-primary-700">
                  {project.fullDescription.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </AnimatedSection>
            </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((image, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="overflow-hidden rounded-lg shadow-md">
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