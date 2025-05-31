import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const processSteps = [
  {
    number: "01",
    title: "We Visit You At Home",
    description: "",
    image: "image.png" 
  },
  {
    number: "02",
    title: "Preliminary Computer Designs",
    description: "",
    image: "bg-2.jpg" 
  },
  {
    number: "03",
    title: "Begin The Detailed Design Process",
    description: "",
    image: "bg-4.jpg" // 
  },
  {
    number: "04",
    title: "Project Execution",
    description: "",
    image: "bg-5.jpg" 
  },
];

const heroSlides = [
  {
    id: 1,
    image: '/photo3.jpg',
    title: 'Innovative Design Solutions',
    subtitle: 'Creating spaces that inspire and endure'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
    title: 'Modern Architecture',
    subtitle: 'Where form meets function'
  },
  {
    id: 3,
    image: 'bg-2.jpg',
    title: 'Sustainable Living',
    subtitle: 'Designing for tomorrow'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-white">
      {/* Hero Slider */}
      <div className="relative h-[95vh] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/30 z-10" />
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="btn bg-white text-primary-800 hover:bg-primary-50 hover:text-primary-900 transition-all duration-300"
                >
                  View Our Projects
                </Link>
                <Link
                  to="/contact"
                  className="btn border-2 border-white text-white hover:bg-white hover:text-primary-800 transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Process Steps */}
     <div className="flex flex-col items-center pt-5">
      <h3 className="text-gray-600 text-3xl text-center font-semibold uppercase tracking-wider pt-3 pb-0.5">
        How We Works
      </h3>

      <motion.div
        className="w-48 h-0.5 bg-primary-700 mt-2"
        initial={{ width: 0 }}
        whileInView={{ width: "18rem" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.8 }}
      />
    </div>
       
   <div className="flex flex-col md:flex-row items-center justify-between p-3 ">
      <div className="md:w-1/2 mb-2 md:mb-0">
        <h1 className="text-4xl md:text-2xl font-bold text-gray-800 leading-tight">
          4 easy steps to get <br />
          architecture design in Kurukshetra
        </h1>
      </div>

      {/* Right Section: Description */}
      <div className="md:w-1/3">
        <p className="text-gray-600 text-base leading-relaxed">
          The final design of your space varies from one layout to another. The shape of individual spaces also determines the space for cabinets, countertops, and accessories.
        </p>
      </div>
    </div>
              <div className="bg-gray-100 py-16">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                height: '90vh',
                width: '110%',
                zIndex: 10,
                position: 'relative',
                transition: { duration: 0.4, ease: 'easeInOut' },
              }}
              className="relative bg-gray-500 text-white p-8 rounded-2xl overflow-hidden group h-[600px] w-full shadow-lg transition-all duration-300"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div className="absolute inset-0 opacity-60 group-hover:opacity-90 group-hover:brightness-150 group-hover:contrast-120 transition-all duration-500">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover rounded-2xl"
                  style={{ height: '600px', width: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <span className="absolute -top-6 -left-2 text-[140px] font-heading font-bold text-white opacity-15 select-none">
                  {step.number}
                </span>
                <h3 className="text-3xl font-heading font-semibold mt-12 mb-4 leading-tight">{step.title}</h3>
                {step.description && (
                  <p className="text-white text-opacity-90 text-lg mb-6">{step.description}</p>
                )}
                <div className="mt-auto">
                  <a
                    href="#"
                    className="inline-block text-white text-lg font-semibold underline opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Read More →
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/60 transition-all duration-500 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    </section>
  );
};

export default Hero;