import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

const projects = [
  {
    id: 1,
    title: "Architecture Designing",
    description:
      "This architecture and interior design project combines clean lines, warm textures, and open spaces, reflecting a balanced approach to modern innovation and timeless tradition. From the initial concept to final execution, every element is crafted to elevate comfort, functionality, and aesthetic appeal.",
    image: "/homepage/project1.jpg",
    category: "",
    location: "",
  },
  {
    id: 2,
    title: "Modern Hospital Facility",
    description:
      "A state-of-the-art healthcare center thoughtfully designed for patient comfort, staff efficiency, and long-term sustainability. The facility integrates advanced medical technology with welcoming interiors, ensuring a healing environment that prioritizes care, safety, and operational excellence.",
    image: "/homepage/project2.jpeg",
    category: "",
    location: "",
  },
  {
    id: 3,
    title: "Innovative Institutional Design",
    description:
      "Crafting institutional spaces that prioritize adaptability, sustainability, and user well-being for educational and civic communities. This design approach fosters collaborative learning, flexible usage, and eco-friendly solutions, creating inspiring environments that serve communities for generations.",
    image: "/homepage/project3.jpeg",
    category: "",
    location: "",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Featured Projects"
          subtitle="Our latest work"
          center={true}
        />

        <div className="mt-16 space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              <div className="w-full lg:w-2/3 overflow-hidden rounded-2xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="w-full lg:w-1/3">
                {/* <span className="inline-block px-4 py-2 bg-primary-50 text-primary-800 rounded-full text-sm font-medium mb-4">
									{project.category}
								</span> */}
                <h3 className="text-3xl font-heading font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-lg text-primary-600 mb-6">
                  {project.description}
                </p>
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 text-primary-800 hover:underline transition-colors text-base font-medium"
                >
                  View Projects
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
