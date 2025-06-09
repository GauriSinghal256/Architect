import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';


// Sample project data (would normally come from an API)
const allProjects = [

	{
		id: 1,
		title: 'Home Interior',
		image: '/projectSection/p1.jpeg',
	},
	{
		id: 2,
		title: 'Office Interior',
		image: '/projectSection/p2.jpeg',

	},
	{
		id: 3,
		title: 'Your Dream Home',
		image: '/projectSection/p3.jpeg',
	},
	{
		id: 4,
		title: 'School Interior',
		image: '/projectSection/p4.jpeg',
	},
];

// Get unique categories for filter
const categories = ['All', ...new Set(allProjects.map(project => project.category))];

const Projects = () => {
	const [filter, setFilter] = useState('All');
	const [searchTerm, setSearchTerm] = useState('');

	// Filter projects based on category and search term
	const filteredProjects = allProjects.filter(project => {
		const matchesCategory = filter === 'All' || project.category === filter;
		const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.location.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesCategory && matchesSearch;
	});

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
		<>
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
						<source src="project2.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>

					{/* Content */}
					{/* <div className="container-custom relative z-10 flex flex-col mx-auto justify-center items-center text-black px-4 text-center h-full">
					<h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
						Our Projects
					</h1>
					<p className="text-lg max-w-2xl pt-4 text-black">
						Explore our diverse portfolio of architectural projects spanning residential, 
            commercial, cultural, and urban planning domains.
					</p>
				</div> */}
				</section>
				<div className="flex flex-col justify-center items-center">
					<h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 relative animate__animated animate__fadeInDown pt-2">
						Our Projects
						<span className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 origin-left animate__animated animate__slideInLeft animate__delay-1s" style={{ animationDuration: '1s', animationFillMode: 'forwards' }}></span>
					</h1>
					<p className="text-lg pt-3 text-black animate__animated animate__fadeInUp" style={{ animationDuration: '1s', animationDelay: '0.5s' }}>
						Explore our diverse portfolio of architectural projects spanning residential, commercial, cultural, and urban planning domains.
					</p>
				</div>

				{/* Projects Section */}
				<section className="section-padding bg-primary-50">
					<div className="container-custom">
						{/* Project Grid */}
						{filteredProjects.length > 0 ? (
							<div className="grid grid-cols-1 md:grid-cols-2 gap-20">
								{filteredProjects.map((project, index) => (
									<ProjectCard key={project.id} project={project} index={index} />
								))}

							</div>
						) : (
							<div className="text-center py-12">
								<h3 className="text-xl font-medium text-primary-600 mb-2">No projects found</h3>
								<p className="text-primary-500">Try adjusting your search or filter criteria</p>
							</div>
						)}
					</div>

				</section>
			</motion.div>

		</>
	);
};

export default Projects;