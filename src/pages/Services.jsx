import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../components/ui/SectionTitle";
import AnimatedSection from "../components/ui/AnimatedSection";
import services from "../data/services";

const Services = () => {
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
					<source src="v4.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>

				{/* Content */}
				<div className="container-custom relative z-10 flex flex-col mx-auto justify-center items-center text-white px-4 text-center h-full">
					<h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
						Our Services
					</h1>
					<p className="text-lg max-w-2xl pt-4 text-white">
						Comprehensive architectural solutions tailored to transform your
						vision into reality, from concept to completion.
					</p>
				</div>
			</section>

			{/* Services Overview */}
			<section className="py-16 bg-white">
  <div className="container-custom">
    <SectionTitle
      title="What We Offer"
      subtitle="Our expertise"
      center={true}
    />

    <AnimatedSection>
      <p className="text-lg text-primary-700 max-w-4xl mx-auto text-center mb-16">
        At Anshul Architects, we provide a comprehensive range of
        architectural services designed to address the unique needs of
        each project. From initial concept to final construction, our
        experienced team delivers innovative solutions with precision and
        care.
      </p>
    </AnimatedSection>

    {/* Services List */}
    <div className="flex flex-col gap-24">
      {services.map((service, index) => (
        <div
          key={service.id}
          className="shadow-lg rounded-2xl overflow-hidden bg-white"
        >
          <Link to={`/services/${service.id}`}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`grid grid-cols-1 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <AnimatedSection>
                <div className="w-full h-80 lg:h-[450px]">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>

              {/* Content */}
              <AnimatedSection delay={0.2}>
  <div className="w-full h-full p-8 flex flex-col justify-center text-center lg:text-left">
    <h2 className="text-3xl font-heading font-semibold mb-4 group-hover:text-primary-800 transition-colors duration-300">
      {service.title}
    </h2>
    <p className="text-primary-700 group-hover:text-gray-500 transition-colors duration-300">
      {service.description}
    </p>
  </div>
</AnimatedSection>
            </motion.div>
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>



			{/* Process Section */}
			<section className="py-16 bg-primary-50">
				<div className="container-custom">
					<SectionTitle
						title="Our Process"
						subtitle="How we work"
						center={true}
					/>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
						{[
							{
								step: 1,
								title: "Discovery",
								description:
									"We begin by understanding your vision, requirements, and constraints through in-depth consultation and site analysis.",
								icon: (
									<img
										src="/discovery.svg"
										alt="Discovery Icon"
										className="w-10 h-10"
									/>
								),
							},
							{
								step: 2,
								title: "Concept Development",
								description:
									"We create initial design concepts that translate your requirements into architectural solutions, refining them based on your feedback.",
								icon: (
									<svg
										className="w-10 h-10"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
								),
							},
							{
								step: 3,
								title: "Design Development",
								description:
									"We transform approved concepts into detailed designs, selecting materials, finishes, and technical specifications.",
								icon: (
									<svg
										className="w-10 h-10"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
								),
							},
							{
								step: 4,
								title: "Implementation",
								description:
									"We oversee the construction process, ensuring the design is executed with precision and addressing any challenges that arise.",
								icon: (
									<svg
										className="w-10 h-10"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
										/>
									</svg>
								),
							},
						].map((process, index) => (
							<AnimatedSection
								key={process.step}
								delay={index * 0.1}
								direction="up"
							>
								<motion.div
									whileHover={{
										scale: 1.05,
										boxShadow: "0 8px 32px rgba(30,41,59,0.12)",
									}}
									className="bg-white rounded-lg shadow-md p-8 h-full group transition-all duration-300"
								>
									<div className="flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-800 rounded-full mb-6 mx-auto">
										{process.icon}
									</div>
									<h3 className="text-xl font-heading font-semibold mb-2 text-center group-hover:text-gray-500 transition-colors duration-300">
										{process.title}
									</h3>
									<p className="text-primary-600 text-center group-hover:text-gray-500 transition-colors duration-300">
										{process.description}
									</p>
								</motion.div>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section
				className="relative py-24 w-full overflow-hidden"
				style={{
					backgroundImage: "url('abc.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				{/* Overlay */}
				<div className="absolute inset-0"></div>
				<div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
					<AnimatedSection>
						<h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white drop-shadow-lg">
							Ready to Start Your Project?
						</h2>
						<p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8 drop-shadow">
							Contact us today to schedule a consultation and discuss how we can
							bring your architectural vision to life.
						</p>
						<motion.div
							whileHover={{ scale: 1.07 }}
							transition={{ duration: 0.3 }}
							className="inline-block"
						>
							<Link
								to="/contact"
								className="btn bg-white text-primary-800 hover:bg-primary-50 shadow-xl px-8 py-4 text-lg rounded-full transition-all duration-300"
							>
								Get in Touch
							</Link>
						</motion.div>
					</AnimatedSection>
				</div>
			</section>
		</motion.div>
	);
};

export default Services;