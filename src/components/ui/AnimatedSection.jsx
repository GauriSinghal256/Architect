import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, className, delay = 0, direction = 'up' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { y: 40, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      case 'down':
        return {
          hidden: { y: -40, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      case 'left':
        return {
          hidden: { x: -40, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        };
      case 'right':
        return {
          hidden: { x: 40, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        };
      case 'scale':
        return {
          hidden: { scale: 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1 },
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={getVariants()}
      transition={{ 
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1],
        delay: delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;