import React from "react";
import { useParams } from "react-router-dom";
import services from "../data/services";
import { motion } from "framer-motion";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <motion.div
        className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-rose-500 text-2xl font-bold tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Service not found
      </motion.div>
    );
  }

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl shadow-2xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 text-center"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        {service.title}
      </motion.h1>

      <motion.img
        src={service.image}
        alt={service.title}
        className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-xl border-2 border-indigo-100 transform hover:scale-[1.02] transition-transform duration-300 mb-8"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      />

      <motion.p
        className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed mx-auto max-w-3xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {service.description}
      </motion.p>

      <motion.h2
        className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 border-l-4 border-indigo-500 pl-4"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
      >
        What We Provide:
      </motion.h2>

      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-0"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {service.features.map((feature, index) => (
          <motion.li
            key={index}
            className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow duration-300 text-gray-700 text-sm sm:text-base"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {feature}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default ServiceDetail;