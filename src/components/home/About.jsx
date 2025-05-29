import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import SectionTitle from '../ui/SectionTitle';

const About = () => {
  return (
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Architect working on blueprints"
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ height: '500px' }}
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-lg rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-4xl font-bold text-primary-800">15+</span>
                  <span className="text-primary-600">Years of Experience</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <SectionTitle 
              title="About Anshul Architects" 
              subtitle="Our story"
            />
            <p className="text-primary-600 mb-6">
              Founded in 2008, Anshul Architects has established itself as a leading architectural firm
              dedicated to creating thoughtful and innovative designs that transform spaces and enrich lives.
            </p>
            <p className="text-primary-600 mb-6">
              Our team of talented architects and designers brings a wealth of knowledge and creativity
              to every project, ensuring that each design is unique, functional, and aesthetically pleasing.
              We believe that great architecture should not only be visually striking but also environmentally
              responsible and perfectly tailored to our clients' needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary-800 mb-2">120+</div>
                <div className="text-primary-600">Projects Completed</div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary-800 mb-2">18</div>
                <div className="text-primary-600">Design Awards</div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary-800 mb-2">40+</div>
                <div className="text-primary-600">Team Members</div>
              </div>
            </div>
            
            <Link 
              to="/about"
              className="btn btn-primary inline-flex items-center"
            >
              Learn More About Us
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
                ></path>
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;