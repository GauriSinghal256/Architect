import React from "react";
import { useParams } from "react-router-dom";
import services from "../data/services";
import { motion } from "framer-motion";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="p-10 text-center text-2xl text-red-500 font-semibold">
        Service not found
      </div>
    );
  }

  return (
    <motion.div
      className="p-6 md:p-10 mt-8 max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        {service.title}
      </motion.h1>

      <motion.img
        src={service.image}
        alt={service.title}
        className="w-full h-64 md:h-96 object-cover rounded-xl mb-6"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />

      <motion.p
        className="text-lg text-gray-600 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {service.description}
      </motion.p>

      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        What We Provide:
      </motion.h2>

      <motion.ul
        className="list-disc pl-6 space-y-2 text-gray-700"
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
            className="text-base"
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
