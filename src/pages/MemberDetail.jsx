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
        className="text-center py-24 text-red-600 text-2xl font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Member not found
      </motion.div>
    );
  }

  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 py-20 bg-gradient-to-tr from-white to-gray-50 rounded-3xl shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <motion.img
          src={member.image}
          alt={member.name}
          className="w-80 h-80 object-cover rounded-3xl shadow-2xl border border-gray-200"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />

        <div className="flex-1">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
            {member.name}
          </h1>
          <p className="text-xl text-indigo-600 font-semibold mb-8">{member.role}</p>

          <div className="space-y-10">
            {member.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.25, duration: 0.5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b border-indigo-300 pb-2">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MemberDetail;
