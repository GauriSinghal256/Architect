import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-700 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              {/* <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="4" fill="white"/>
                <path d="M9 23V9H16L23 16V23H9Z" stroke="#262626" strokeWidth="2"/>
                <path d="M16 9V16H23" stroke="#262626" strokeWidth="2"/>
              </svg> */}
              <img className='h-6 w-6' src="/AA.png" alt="" />
              <span className="text-xl font-heading font-semibold">Anshul Architects</span>
            </div>
            <p className="text-primary-200 mb-6">
              Creating spaces that inspire. We blend innovative design with functionality to create architectural masterpieces.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all duration-300">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all duration-300">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-200 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="text-primary-200 hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-200 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-200 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-200 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-primary-200 hover:text-white transition-colors">Architectural Design</li>
              <li className="text-primary-200 hover:text-white transition-colors">Interior Design</li>
              <li className="text-primary-200 hover:text-white transition-colors">Urban Planning</li>
              <li className="text-primary-200 hover:text-white transition-colors">Landscape Design</li>
              <li className="text-primary-200 hover:text-white transition-colors">Renovation</li>
              <li className="text-primary-200 hover:text-white transition-colors">Construction Management</li>
              <li className="text-primary-200 hover:text-white transition-colors">Evaluation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 mt-1 text-primary-200" />
                <span className="text-primary-200">Sco 8, Green Feild Market, opposite Sector 7, DD colony, Kurukshetra, Haryana 136118</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-primary-200" />
                <a href="mailto:info@anshularchitects.com" className="text-primary-200 hover:text-white transition-colors">
                  info@anshularchitects.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-primary-200" />
                <a href="tel:+911234567890" className="text-primary-200 hover:text-white transition-colors">
                  +91 89300 00984
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-primary-700 text-center md:flex md:justify-between md:items-center">
          <p className="text-primary-300 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Anshul Architects. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm text-primary-300">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;