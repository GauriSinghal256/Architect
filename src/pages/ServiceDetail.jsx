import React from "react";
import { useParams } from "react-router-dom";
import services from "./services"; // correct path

const ServiceDetail = () => {
	const { id } = useParams();
	const service = services.find((s) => s.id === parseInt(id));

	if (!service) {
		return <div>Service not found</div>;
	}

	return (
		<div className="p-10">
			<h1 className="text-4xl font-bold mb-4">{service.title}</h1>
			<img src={service.image} alt={service.title} className="w-full h-96 object-cover mb-6" />
			<p className="text-lg mb-4">{service.description}</p>
			<h2 className="text-2xl font-semibold mb-2">What We Provide:</h2>
			<ul className="list-disc pl-6">
				{service.features.map((feature, index) => (
					<li key={index} className="text-base">{feature}</li>
				))}
			</ul>
		</div>
	);
};

export default ServiceDetail;
