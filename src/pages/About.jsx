import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import AnimatedSection from "../components/ui/AnimatedSection";

// Sample team data
const teamMembers = [
  {
    id: 1,
    name: "Anshul Sharma",
    role: "Principal Architect & Founder",
    bio: "With over 20 years of experience, Anshul leads the firm with a vision for innovative, sustainable architecture. His work has been recognized with numerous awards and featured in international publications.",
    image:
      "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Senior Architect & Partner",
    bio: "Priya specializes in residential and commercial architecture with a focus on human-centered design. Her approach combines functionality with aesthetic excellence.",
    image:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Vikram Patel",
    role: "Urban Planning Director",
    bio: "Vikram brings expertise in urban design and master planning, with a particular interest in sustainable community development and public spaces.",
    image:
      "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Aisha Singh",
    role: "Interior Design Lead",
    bio: "Aisha's innovative approach to interior spaces has transformed numerous projects. She excels at creating harmonious environments that reflect client personalities.",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Rahul Verma",
    role: "Project Manager",
    bio: "Rahul ensures projects are delivered on time and to the highest quality standards. His attention to detail and technical expertise are invaluable to our process.",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    name: "Maya Joshi",
    role: "Sustainability Consultant",
    bio: "Maya specializes in green building design and LEED certification. Her knowledge helps integrate sustainable practices throughout our design process.",
    image:
      "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const About = () => {
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
          <source src="v3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="container-custom relative z-10 flex flex-col mx-auto justify-center items-center text-white px-4 text-center h-full">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About Us
          </h1>
          <p className="text-lg max-w-2xl pt-4 text-white">
            We are a team of passionate architects dedicated to creating spaces
            that inspire, function beautifully, and stand the test of time.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <img
                src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Architects working together"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <SectionTitle title="Our Story" subtitle="The journey" />
              <div className="space-y-6 text-primary-700">
                <p>
                  Founded in 2008 by Anshul Sharma, Anshul Architects began as a
                  small practice with a vision to create architecture that
                  meaningfully enhances people's lives. What started as a
                  three-person studio has grown into a diverse team of over 40
                  talented professionals.
                </p>
                <p>
                  Our journey has been defined by a commitment to excellence,
                  innovation, and sustainability. From our first residential
                  project to large-scale urban developments, we have maintained
                  our founding principles: listen carefully to our clients,
                  respect the context, and design with integrity.
                </p>
                <p>
                  Over the years, we have had the privilege of working on a wide
                  range of projects across India and internationally. Each
                  project has contributed to our growth and deepened our
                  understanding of how thoughtful design can transform spaces
                  and communities.
                </p>
                <p>
                  Today, Anshul Architects is recognized as one of India's
                  leading architectural firms, with a portfolio of award-winning
                  projects and a reputation for innovative, sustainable design.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Philosophy"
            subtitle="What drives us"
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="text-primary-800 mb-4">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  User-Centered Design
                </h3>
                <p className="text-primary-600">
                  We believe that architecture should serve the people who
                  inhabit it. By deeply understanding user needs and behaviors,
                  we create spaces that enhance daily life and provide
                  meaningful experiences.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="text-primary-800 mb-4">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Sustainable Futures
                </h3>
                <p className="text-primary-600">
                  Environmental responsibility is integrated into every project
                  we undertake. We design buildings that minimize resource
                  consumption, reduce carbon footprint, and create healthy
                  environments for occupants.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="text-primary-800 mb-4">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Contextual Innovation
                </h3>
                <p className="text-primary-600">
                  We believe in innovation that responds to context—cultural,
                  environmental, and social. Our designs respectfully engage
                  with their surroundings while pushing boundaries to create
                  architecture that is both timely and timeless.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Team"
            subtitle="The people behind our success"
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.1}>
                <div className="bg-white border border-primary-100 rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg">
                  <div className="h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-500 mb-4">{member.role}</p>
                    <p className="text-primary-600">{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 md:py-32 bg-primary-800 text-gray-500 bg-cover bg-center bg-no-repeat "style={{ backgroundImage: `url('/img.jpg')` }}>
        <div className="container-custom relative z-10 text-white  flex mx-auto justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold shadow-white mb-4">Our Achievements</h1>
        </div>
      </section>
      {/* <section className="py-16 bg-primary-800 text-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Values"
            subtitle="What we believe in"
            center={true}
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: "Excellence",
                description:
                  "We are committed to the highest standards of design and execution, continuously striving to exceed expectations.",
              },
              {
                title: "Integrity",
                description:
                  "We maintain honest, transparent relationships with clients, partners, and communities, building trust through ethical practice.",
              },
              {
                title: "Collaboration",
                description:
                  "We believe the best solutions emerge from inclusive, collaborative processes that value diverse perspectives.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace creative thinking and technological advancement to address complex design challenges.",
              },
              {
                title: "Sustainability",
                description:
                  "We are dedicated to environmental stewardship and creating buildings that contribute to a more sustainable future.",
              },
              {
                title: "Social Responsibility",
                description:
                  "We recognize architecture's power to shape communities and strive to create positive social impact through our work.",
              },
            ].map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-heading font-semibold mb-3 text-white">
                    {value.title}
                  </h3>
                  <p className="text-primary-100">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Achievements"
            subtitle="Recognition and awards"
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-16">
            <AnimatedSection>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-primary-800 mb-2">
                  120+
                </div>
                <div className="text-primary-600">Projects Completed</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-primary-800 mb-2">
                  18
                </div>
                <div className="text-primary-600">Design Awards</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-primary-800 mb-2">
                  15+
                </div>
                <div className="text-primary-600">Years of Excellence</div>
              </div>
            </AnimatedSection>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg">
            <h3 className="text-2xl font-heading font-semibold mb-6 text-center">
              Select Awards and Recognition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <AnimatedSection>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-800 mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">
                      National Architecture Award 2022
                    </p>
                    <p className="text-primary-600">
                      For the Harmonic Culture Center, Delhi
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-800 mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">
                      Sustainable Design Excellence Award 2021
                    </p>
                    <p className="text-primary-600">
                      For the Verdant Office Campus, Bangalore
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-800 mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Urban Intervention Prize 2020</p>
                    <p className="text-primary-600">
                      For the Urban Renewal Mixed-Use Development, Hyderabad
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-800 mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Architect of the Year 2019</p>
                    <p className="text-primary-600">
                      Awarded to Anshul Sharma for outstanding contribution to
                      architecture
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-800 mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">
                      International Hospitality Design Award 2018
                    </p>
                    <p className="text-primary-600">
                      For the Floating Pavilion Restaurant, Kerala
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-800 mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">
                      Residential Excellence Award 2017
                    </p>
                    <p className="text-primary-600">
                      For the Serenity Eco Villas, Goa
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
