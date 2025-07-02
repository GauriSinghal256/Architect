import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaInstagram, FaFacebookF } from 'react-icons/fa';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedSection from '../components/ui/AnimatedSection';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus(result.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

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
      <section className="relative py-24 md:py-32 overflow-hidden h-[66vh]">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 z-[-1] object-cover"
        >
          <source src="v2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="container-custom relative z-10 flex flex-col mx-auto justify-center items-center text-white px-4 text-center h-full">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl pt-4 text-white">
            Get in touch with our team to discuss your project or learn more about our services.
            We're here to turn your architectural vision into reality.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimatedSection direction="left">
              <div className="bg-primary-50 p-8 rounded-lg h-full">
                <SectionTitle 
                  title="Get In Touch" 
                  subtitle="Our information"
                  className="mb-8 text-center"
                />
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start space-x-4 border border-gray-400 p-4 hover:bg-gray-200">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <FaMapMarkerAlt className="w-6 h-6 text-primary-800" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Our Office</h3>
                      <p className="text-primary-600">
                        Sco 8, Green Feild Market, opposite Sector 7, DD colony,
                        Kurukshetra, Haryana 136118
                      </p>
                    </div>
                  </div>
                  
              <div className="flex flex-col border border-gray-400 p-4 hover:bg-gray-200 w-full">
  <div className="flex items-center space-x-3">
    <div className="bg-primary-100 p-3 rounded-lg">
      <FaEnvelope className="w-6 h-6 text-primary-800" />
    </div>
    <h3 className="font-medium text-lg">Email Us</h3>
  </div>
  <p className="text-primary-600 break-words ml-14 mt-2">
    <a href="mailto:projects@anshularchitects.com" className="hover:text-primary-800 transition-colors break-words">
      anshulsharma.upadhyay@gmail.com
    </a>
  </p>
</div>
                  
                  <div className="flex items-start space-x-4 border border-gray-400 p-4 hover:bg-gray-200">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <FaPhone className="w-6 h-6 text-primary-800" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Call Us</h3>
                      <p className="text-primary-600">
                        <a href="tel:+911234567890" className="hover:text-primary-800 transition-colors">
                          89300 00984
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className='text-center'>
                  <h3 className="font-medium text-lg mb-3">Follow Us</h3>
                  <div className="flex items-center justify-center space-x-4">
                    <a href="https://www.instagram.com/anshul_architects/" target="_blank" rel="noopener noreferrer" className="bg-primary-100 hover:bg-primary-200 p-4 rounded-full transition-colors">
                      <FaInstagram className="w-6 h-6 text-primary-800" />
                    </a>
                    <a href="https://www.facebook.com/sharma.anshul.upadhyay/" target="_blank" rel="noopener noreferrer" className="bg-primary-100 hover:bg-primary-200 p-3 rounded-full transition-colors">
                      <FaFacebookF className="w-6 h-6 text-primary-800" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <SectionTitle 
                  title="Send Us a Message" 
                  subtitle="We'd love to hear from you"
                  className="mb-8 text-center"
                />
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-primary-700 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-primary-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-primary-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-primary-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Subject of your message"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-primary-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <div className='text-center'>
                    <button
                      type="submit"
                      className="btn btn-primary w-full md:w-auto"
                    >
                      Send Message
                    </button>
                  </div>
                  
                  {status && (
                    <div className={`mt-4 text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                      {status}
                    </div>
                  )}
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <SectionTitle 
            title="Visit Our Office" 
            subtitle="Find us"
            center={true}
          />
          
          <AnimatedSection delay={0.2}>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.915614059697!2d76.87535871504266!3d29.975402298354058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e46d95e07f587%3A0xc7ce3adc05951279!2sAnshul%20Architects!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Office Hours" 
              subtitle="When to visit"
              center={true}
            />
            
            <AnimatedSection>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="font-medium text-lg mb-3">Weekdays</h3>
                  <p className="text-primary-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="font-medium text-lg mb-3">Weekends</h3>
                  <p className="text-primary-700">Saturday: 10:00 AM - 2:00 PM</p>
                  <p className="text-primary-700">Sunday: Closed</p>
                </div>
              </div>
              <p className="mt-6 text-primary-600">
                We recommend scheduling an appointment before visiting to ensure our team can give you their full attention.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;