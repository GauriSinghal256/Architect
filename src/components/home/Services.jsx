import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import SectionTitle from '../ui/SectionTitle';

const services = [
	{
		id: 1,
		title: 'Architectural Design',
		description:
			'Innovative architectural solutions tailored to your vision, needs, and site constraints.',
		icon: (
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
					d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
				/>
			</svg>
		),
	},
	{
		id: 2,
		title: 'Interior Design',
		description:
			'Create beautiful, functional interior spaces that reflect your personality and lifestyle.',
		icon: (
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
					d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
				/>
			</svg>
		),
	},
	{
		id: 3,
		title: 'Urban Planning',
		description:
			'Comprehensive urban planning services focusing on sustainable, community-centered development.',
		icon: (
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
					d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>
		),
	},
	{
		id: 4,
		title: 'Landscape Design',
		description:
			'Harmonize buildings with their surroundings through thoughtful landscape architecture.',
		icon: (
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
					d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
				/>
			</svg>
		),
	},
	{
		id: 5,
		title: 'Renovation',
		description:
			'Breathe new life into existing structures with our expert renovation and restoration services.',
		icon: (
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
					d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
				/>
			</svg>
		),
	},
	{
		id: 6,
		title: 'Construction Management',
		description:
			'Comprehensive oversight of your construction project from inception to completion.',
		icon: (
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
					d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
				/>
			</svg>
		),
	},
];

const Services = () => {
	return (
		<section className="section-padding bg-gradient-to-br from-primary-50 via-white to-primary-100">
			<div className="container-custom">
				<SectionTitle
					title="Our Services"
					subtitle="What we offer"
					center={true}
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
					{services.map((service, index) => (
						<AnimatedSection key={service.id} delay={index * 0.1}>
							<motion.div
								whileHover={{
									scale: 1.06,
									boxShadow: '0 8px 32px rgba(30,41,59,0.12)',
									background:
										'linear-gradient(135deg,rgba(255,255,255,0.95) 0%,rgba(240,240,255,0.85) 100%)',
								}}
								transition={{ type: 'spring', stiffness: 300 }}
								className="bg-white rounded-2xl shadow-md p-10 h-full flex flex-col items-center text-center transition-all duration-300 group"
							>
								<motion.div
									whileHover={{ rotate: 8 }}
									transition={{ type: 'spring' }}
									className="mb-6 text-primary-800"
								>
									{service.icon}
								</motion.div>
								<h3 className="text-xl font-heading font-semibold mb-3 text-primary-900 group-hover:text-gray-500 transition-colors duration-300">
									{service.title}
								</h3>
								<p className="text-primary-600 mb-0 group-hover:text-gray-500 transition-colors duration-300">
									{service.description}
								</p>
							</motion.div>
						</AnimatedSection>
					))}
				</div>

				<div className="text-center mt-16">
					<motion.div
						whileHover={{ scale: 1.08 }}
						whileTap={{ scale: 0.97 }}
						transition={{ type: 'spring', stiffness: 300 }}
						className="inline-block"
					>
						<Link
							to="/services"
							className="btn btn-primary px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300"
						>
							View All Services
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Services;