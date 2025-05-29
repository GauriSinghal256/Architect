import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedSection from '../components/ui/AnimatedSection';

// Sample services data
const services = [
  {
    id: 1,
    title: 'Architectural Design',
    description: 'We create innovative and functional architectural designs that balance aesthetics, usability, and sustainability. Our comprehensive approach considers every aspect of your project, from conceptual sketches to detailed construction documents.',
    image: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: [
      'Conceptual design development',
      'Schematic design and modeling',
      'Design development and documentation',
      'Material and finish selection',
      'Construction documents and specifications',
      'Building information modeling (BIM)'
    ]
  },
  {
    id: 2,
    title: 'Interior Design',
    description: 'Our interior design services transform spaces to reflect your style, enhance functionality, and improve quality of life. We meticulously plan every detail, from space planning to furniture selection, creating harmonious interiors that inspire.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: [
      'Space planning and layouts',
      'Material and finish selection',
      'Custom furniture design',
      'Lighting design',
      'Art and accessory curation',
      'Sustainable interior solutions'
    ]
  },
  {
    id: 3,
    title: 'Urban Planning',
    description: 'We develop comprehensive urban planning solutions that create vibrant, sustainable communities. Our approach integrates transportation, infrastructure, environmental considerations, and social dynamics to create places where people thrive.',
    image: 'https://images.pexels.com/photos/3876407/pexels-photo-3876407.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: [
      'Master planning',
      'Urban design guidelines',
      'Mixed-use development planning',
      'Transit-oriented development',
      'Public space design',
      'Sustainable neighborhood planning'
    ]
  },
  {
    id: 4,
    title: 'Landscape Design',
    description: 'Our landscape design services create outdoor environments that connect architecture with nature. We craft gardens, parks, and outdoor spaces that enhance biodiversity, promote sustainability, and provide beautiful spaces for relaxation and recreation.',
    image: 'https://images.pexels.com/photos/4204083/pexels-photo-4204083.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: [
      'Site analysis and planning',
      'Hardscape and softscape design',
      'Water feature design',
      'Sustainable landscape solutions',
      'Native plant selection',
      'Outdoor lighting design'
    ]
  },
  {
    id: 5,
    title: 'Renovation',
    description: 'We breathe new life into existing structures through thoughtful renovation and restoration. Whether updating a historic building or reimagining a modern space, we balance respect for the original architecture with contemporary needs and functions.',
    image: 'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: [
      'Building assessment and documentation',
      'Historical preservation',
      'Adaptive reuse strategies',
      'Modern upgrades and retrofitting',
      'Energy efficiency improvements',
      'Phased renovation planning'
    ]
  },
  {
    id: 6,
    title: 'Construction Management',
    description: 'Our construction management services ensure your project is built to the highest standards, on time and within budget. We coordinate all aspects of construction, from contractor selection to final inspection, providing peace of mind throughout the process.',
    image: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: [
      'Contractor selection and bidding',
      'Schedule development and monitoring',
      'Budget management',
      'Quality control inspections',
      'Construction administration',
      'Project documentation and reporting'
    ]
  }
];

const Services = () => {
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
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-lg max-w-2xl text-primary-100">
            Comprehensive architectural solutions tailored to transform your vision into reality, 
            from concept to completion.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="What We Offer" 
            subtitle="Our expertise"
            center={true}
          />
          
          <AnimatedSection>
            <p className="text-lg text-primary-700 max-w-4xl mx-auto text-center mb-16">
              At Anshul Architects, we provide a comprehensive range of architectural services 
              designed to address the unique needs of each project. From initial concept to final construction, 
              our experienced team delivers innovative solutions with precision and care.
            </p>
          </AnimatedSection>

          {/* Services List */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image */}
                <AnimatedSection direction={index % 2 === 0 ? 'left' : 'right'}>
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8 }}
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                  </div>
                </AnimatedSection>

                {/* Content */}
                <AnimatedSection direction={index % 2 === 0 ? 'right' : 'left'} delay={0.2}>
                  <h2 className="text-3xl font-heading font-semibold mb-4">{service.title}</h2>
                  <p className="text-primary-700 mb-6">{service.description}</p>
                  
                  <h3 className="text-xl font-heading font-medium mb-4">What We Provide:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-primary-800 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-primary-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <SectionTitle 
            title="Our Process" 
            subtitle="How we work"
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: 1,
                title: 'Discovery',
                description: 'We begin by understanding your vision, requirements, and constraints through in-depth consultation and site analysis.',
                icon: (
                  <svg className="w-10 h-10\" fill="none\" stroke="currentColor\" viewBox="0 0 24 24\" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )
              },
              {
                step: 2,
                title: 'Concept Development',
                description: 'We create initial design concepts that translate your requirements into architectural solutions, refining them based on your feedback.',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                step: 3,
                title: 'Design Development',
                description: 'We transform approved concepts into detailed designs, selecting materials, finishes, and technical specifications.',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                step: 4,
                title: 'Implementation',
                description: 'We oversee the construction process, ensuring the design is executed with precision and addressing any challenges that arise.',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )
              }
            ].map((process, index) => (
              <AnimatedSection key={process.step} delay={index * 0.1} direction="up">
                <div className="bg-white rounded-lg shadow-md p-8 h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-800 rounded-full mb-6 mx-auto">
                    {process.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-center">
                    {process.title}
                  </h3>
                  <p className="text-primary-600 text-center">
                    {process.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-primary-800 rounded-lg shadow-xl p-8 md:p-12 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-white">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
                Contact us today to schedule a consultation and discuss how we can bring your architectural vision to life.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <a 
                  href="/contact" 
                  className="btn bg-white text-primary-800 hover:bg-primary-50 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;