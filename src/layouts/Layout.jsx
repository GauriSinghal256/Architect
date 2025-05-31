import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatePresence>
        {isLoading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              {/* <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="4" fill="#262626"/>
                <path d="M9 23V9H16L23 16V23H9Z" stroke="white" strokeWidth="2"/>
                <path d="M16 9V16H23" stroke="white" strokeWidth="2"/>
              </svg> */}
              <img className='w-16 h-16 mx-auto mb-4' src="AA.png" alt="" />
              <h2 className="text-2xl font-heading font-medium">Anshul Architects</h2>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;