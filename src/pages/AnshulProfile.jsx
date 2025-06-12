import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AnshulProfile = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-3xl shadow-xl">
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/TeamMember/Anshul.jpg"
              alt="Anshul Sharma"
              className="rounded-2xl object-cover w-full h-96 shadow-lg"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-2/3 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-900">Anshul Sharma</h2>
            <p className="text-xl text-indigo-600 font-semibold mt-2">Master in Architecture</p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              With over 18 years of experience in the field of architecture, Anshul Sharma has established himself as a seasoned professional with a passion for creating functional and aesthetically pleasing spaces.
            </p>
          </motion.div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Specialization */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4 border-b pb-2 border-indigo-300">
              Specialization
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Institutional design: Schools, universities, and educational institutions</li>
              <li>Hospital design: Healthcare facilities, hospitals, and clinics</li>
              <li>Residential design: Luxury homes, apartments, and housing complexes</li>
              <li>Spatial planning: Efficient use of space to enhance functionality and user experience</li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4 border-b pb-2 border-indigo-300">
              Comprehensive Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Architectural design: Innovative, functional building designs</li>
              <li>Structural design: Stability and safety of constructions</li>
              <li>Valuation: Accurate property valuation expertise</li>
              <li>Interior design: Beautiful and usable residential/commercial interiors</li>
            </ul>
          </motion.div>

          {/* Pan India Presence */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4 border-b pb-2 border-indigo-300">
              Pan India Presence
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Anshul's studio operates across the North belt of India with a vast clientele. His team is equipped to handle projects of varying scales and complexities — from concept to completion.
            </p>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
          >
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4 border-b pb-2 border-indigo-300">
              Expertise & Philosophy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Anshul believes in designing spaces that are functional, sustainable, and visually appealing. Each project is tailored to the client's unique needs, guided by a detail-oriented and high-quality approach that has earned him industry trust.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnshulProfile;
