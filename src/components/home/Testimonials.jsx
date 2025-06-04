import React from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

// Sample testimonial data with rating field
const testimonials = [
  {
    id: 1,
    name: 'Raman Sharma',
    quote: "Anshul Architects is truly one of the best architects in Kurukshetra! They turned my dream home into a reality with their innovative design ideas and attention to detail. The team is professional, creative, and very supportive throughout the entire home designing process. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: 'Devansh Maudgil',
    quote: "I recently had the pleasure of working with Anshul Architects on my home project. From the very beginning, their team showed a high level of professionalism, creativity, and attention to detail. They truly listened to my ideas and transformed them into something beyond my expectations. My house now looks absolutely stunning, with a perfect blend of modern design and functionality. If you're looking for the best architects in Kurukshetra, I highly recommend Anshul Architects. They made the entire process seamless and delivered a home that I’m proud of. Thank you, Anshul Architects!",
    rating: 5,
  },
  {
    id: 3,
    name: 'Surbhi',
    quote: 'Anshul Architects are truly the best architects in Kurukshetra when it comes to modern home designing. The entire process was smooth and hassle-free. They transformed our vision into a beautiful, functional space. Highly recommended if you want your home to stand out.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Amrita Chauhan',
    quote: 'Our new arts center designed by Anshul Architects has become a landmark in the city. They demonstrated exceptional understanding of acoustics and spatial requirements for performing arts, creating a versatile and beautiful venue.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Sumita Saini',
    quote: 'Absolutely loved the home design done by Anshul Architects. Their ideas were innovative, and they listened to our needs carefully. A perfect blend of creativity and practicality. Hands down, the best architects in Kurukshetra.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Kapil Kaushik',
    quote: 'I gave my house project to Anshul Architects, and I’m really happy with the results. They designed my home beautifully and gave it a trendy, modern look just the way I wanted. Truly one of the best architects in Kurukshetra – highly recommended!',
    rating: 5,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Animation variants for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: 'easeOut',
        staggerChildren: 0.2 
      }
    },
    exit: { 
      opacity: 0, 
      x: -100, 
      scale: 0.95,
      transition: { duration: 0.6, ease: 'easeIn' }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  // Star rating component
  const StarRating = ({ rating }) => (
    <motion.div variants={childVariants} className="flex mb-4">
      {[...Array(5)].map((_, index) => (
        <motion.svg
          key={index}
          variants={childVariants}
          className={`w-6 h-6 ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.971c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.971a1 1 0 00-.364-1.118L2.88 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
        </motion.svg>
      ))}
    </motion.div>
  );

  return (
    <section className="section-padding bg-zinc-700 text-white">
      <div className="container-custom">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Testimonials"
          center={true}
          light={true}
        />
        
        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <AnimatePresence mode="wait">
                <motion.div 
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-white/10 p-8 rounded-lg backdrop-blur-sm h-full"
                >
                  <motion.h4 
                    variants={childVariants}
                    className="text-2xl font-heading font-semibold mb-4 text-white"
                  >
                    {testimonial.name}
                  </motion.h4>
                  <StarRating rating={testimonial.rating} />
                  <motion.svg
                    variants={childVariants}
                    className="w-10 h-10 text-primary-400/30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 8v6a6 6 0 01-6 6H4v4h4a10 10 0 0010-10V8h-8zm18 0v6a6 6 0 01-6 6h0v4h4a10 10 0 0010-10V8h-8z" />
                  </motion.svg>
                  <motion.p 
                    variants={childVariants}
                    className="text-primary-100 leading-relaxed"
                  >
                    {testimonial.quote}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;