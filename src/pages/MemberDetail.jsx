import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import teamMembers from "../data/teamData";

const MemberDetail = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return (
      <motion.div
        className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-rose-500 text-2xl font-bold tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Member not found
      </motion.div>
    );
  }

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl shadow-2xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center gap-12 lg:gap-16">
        <motion.img
          src={member.image}
          alt={member.name}
          className="w-80 h-80 sm:w-96 sm:h-96 object-cover rounded-3xl shadow-xl border-4 border-indigo-100 transform hover:scale-105 transition-transform duration-300"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        />

        <div className="w-full text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            {member.name}
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-gray-500 mb-8 italic">{member.role}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {member.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.25, duration: 0.5, ease: "easeOut" }}
              className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-indigo-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 border-l-4 border-gray-500 pl-3">
                {section.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MemberDetail;