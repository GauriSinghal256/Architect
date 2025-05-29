import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Rajiv Mehta',
    role: 'Property Developer',
    company: 'Horizon Developments',
    quote: 'Working with Anshul Architects was a truly exceptional experience. Their innovative approach to our commercial complex project exceeded all expectations, delivering a stunning design that perfectly balanced aesthetics with functionality.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Homeowner',
    company: '',
    quote: 'We hired Anshul Architects to design our dream home, and they transformed our vision into reality. Their attention to detail and ability to maximize space and natural light created a home that feels both luxurious and welcoming.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 3,
    name: 'Vikram Singh',
    role: 'CEO',
    company: 'Innovate Tech',
    quote: 'The team at Anshul Architects designed our corporate headquarters with remarkable insight into our company culture. The space not only looks impressive but has significantly improved workflow and collaboration among our teams.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 4,
    name: 'Aisha Patel',
    role: 'Director',
    company: 'Cultural Arts Foundation',
    quote: 'Our new arts center designed by Anshul Architects has become a landmark in the city. They demonstrated exceptional understanding of acoustics and spatial requirements for performing arts, creating a versatile and beautiful venue.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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

  return (
    <section className="section-padding bg-primary-800 text-white">
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
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm h-full"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-heading font-semibold">{testimonial.name}</h4>
                    <p className="text-primary-200">
                      {testimonial.role}
                      {testimonial.company && ` • ${testimonial.company}`}
                    </p>
                  </div>
                </div>
                <svg
                  className="w-10 h-10 text-primary-400/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 8v6a6 6 0 01-6 6H4v4h4a10 10 0 0010-10V8h-8zm18 0v6a6 6 0 01-6 6h0v4h4a10 10 0 0010-10V8h-8z" />
                </svg>
                <p className="text-primary-100 leading-relaxed">{testimonial.quote}</p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;