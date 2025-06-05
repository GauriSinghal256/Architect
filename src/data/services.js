const services = [
  {
    id: 1,
    title: "Architectural Design",
    description:
      "Our architectural design service lays the foundation for remarkable structures by combining creative vision with technical precision. We take a holistic approach, considering every detail from site analysis to sustainability, ensuring your space is not just built — but thoughtfully designed to enhance human experience.",
    image: "/house.jpg",
    features: [
      "Conceptual design development – Generating the big-picture ideas, sketches, and models that define the project’s vision, goals, and architectural language.",
      "Site analysis and feasibility studies – Evaluating the site’s conditions, zoning codes, and environmental impacts to ensure the design aligns with practical and regulatory constraints.",
      "Schematic design and 3D modeling – Producing early design options in both 2D and 3D, allowing clients to visualize the form, function, and spatial relationships.",
      "Material and finish selection – Choosing eco-conscious and durable materials that support both function and aesthetics while staying aligned with your budget.",
      "Design development and construction documentation – Developing detailed technical drawings, elevations, sections, and plans necessary for contractor bidding and permits.",
      "Building information modeling (BIM) – Creating intelligent 3D models that integrate architecture, structure, and MEP systems for accurate coordination and clash detection.",
      "Code compliance and regulatory approvals – Ensuring that the design adheres to building codes, fire safety norms, accessibility standards, and local regulations.",
      "Sustainable design integration – Incorporating passive solar design, green roofs, efficient HVAC planning, and low-impact materials to reduce environmental footprint."
    ],
  },
  {
    id: 2,
    title: "Interior Design",
    description:
      "Our interior design service transforms empty or outdated spaces into elegant, inviting, and functional environments. Every detail is considered, from the ergonomics of a chair to the emotional tone of a color palette. Our interiors go beyond beauty — they foster productivity, relaxation, and well-being.",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Space planning and layout optimization – Structuring interiors for flow, comfort, and efficiency by analyzing spatial use and circulation.",
      "Lighting design and mood setting – Designing ambient, task, and accent lighting plans to enrich mood, visibility, and aesthetics.",
      "Material, texture, and finish curation – Selecting wall finishes, flooring, ceilings, and textures that complement the brand and spatial goals.",
      "Custom furniture and millwork design – Designing signature furniture pieces, cabinetry, and shelving tailored for your space and style.",
      "Color psychology and theme development – Leveraging color theory to evoke emotion, reinforce branding, and define atmosphere.",
      "Acoustic and thermal comfort planning – Implementing materials and layouts that improve sound insulation and temperature regulation.",
      "Smart home and tech integration – Embedding intelligent lighting, climate control, and AV systems into the interior concept.",
      "Art selection and installation strategy – Choosing artwork, sculptures, and decorative elements that enrich the narrative of the space.",
      "Ergonomics and human-centered design – Ensuring furniture, equipment, and spatial arrangements enhance user comfort and productivity.",
      "Sustainable interior practices – Using non-toxic paints, recycled materials, and natural ventilation to support health and reduce impact."
    ],
  },
  {
    id: 3,
    title: "Urban Planning",
    description:
      "Our urban planning service bridges the gap between visionary city-making and practical community development. We design neighborhoods and cities that are inclusive, walkable, efficient, and prepared for the future. From master planning to zoning analysis, we help shape thriving environments.",
    image: "/UrbanPlanning.jpg",
    features: [
      "Master planning and urban growth strategies – Creating long-term frameworks that balance residential, commercial, and green spaces in sustainable ways.",
      "Zoning regulation and policy alignment – Ensuring land use plans comply with legal, cultural, and governmental policies while supporting innovation.",
      "Transit-oriented development (TOD) – Designing urban hubs that prioritize public transit, pedestrian access, and reduced car reliance.",
      "Public space and community plaza design – Planning inviting parks, squares, and waterfronts that encourage recreation and social interaction.",
      "Mixed-use neighborhood planning – Blending residential, retail, office, and recreational uses into a cohesive, vibrant urban fabric.",
      "Infrastructure and mobility integration – Coordinating roads, bike paths, pedestrian zones, and utilities for long-term resilience and efficiency.",
      "Environmental and green infrastructure – Designing cities with rain gardens, urban forests, and eco-corridors that support biodiversity and climate adaptation.",
      "Social equity and participatory design – Engaging with communities to ensure planning reflects diverse voices, cultures, and economic needs.",
      "Resilient city frameworks – Incorporating disaster preparedness, flood management, and adaptable zoning to future-proof urban areas.",
      "Data-driven urban analysis – Using GIS, simulations, and population studies to make informed decisions and predict urban behavior."
    ],
  },
  {
    id: 4,
    title: "Renovation",
    description:
      "We reimagine existing spaces with creativity and care. Whether you’re preserving historic charm or modernizing your home or office, our renovation service blends respect for the past with the innovation of the present, delivering tailored solutions that maximize beauty and function.",
    image: "/Renovation.jpg",
    features: [
      "Historic building preservation – Retaining architectural heritage through careful restoration of facades, moldings, and structural elements.",
      "Structural reinforcement and safety – Assessing and strengthening buildings to meet seismic, wind, or aging-related safety requirements.",
      "Space reconfiguration – Adjusting room layouts, walls, and circulation to better suit changing user needs or contemporary lifestyles.",
      "Modernization and smart upgrades – Introducing home automation, energy-efficient appliances, and sustainable features to older buildings.",
      "Facade improvement and curb appeal – Redesigning exterior elements like windows, cladding, and lighting to update building image.",
      "Energy-efficient retrofitting – Installing insulation, double glazing, solar panels, or HVAC upgrades to reduce carbon footprint.",
      "Waterproofing and damp control – Protecting basements, roofs, and bathrooms from leakage, humidity, and mold growth.",
      "Interior style refresh – Upgrading color schemes, flooring, furniture, and lighting for a cohesive and revitalized look.",
      "Compliance and permit acquisition – Handling legal procedures, heritage approvals, and municipal permits on behalf of the client.",
      "Phased implementation planning – Managing renovation in strategic stages to minimize disruption and allow for budget flexibility."
    ],
  },
  {
    id: 5,
    title: "Construction Management",
    description:
      "Our construction management ensures that your project is executed efficiently, safely, and precisely. We oversee every step of the building process, from mobilization to commissioning, offering professional guidance and risk mitigation at every milestone.",
    image: "/aacw.png",
    features: [
      "Project planning and timeline development – Creating a realistic, phase-by-phase construction schedule to manage progress efficiently.",
      "Cost estimation and budget tracking – Analyzing costs in advance and monitoring them through procurement and execution stages.",
      "Contractor and vendor coordination – Engaging reliable contractors and ensuring collaboration across structural, MEP, and design teams.",
      "On-site supervision and quality assurance – Monitoring construction to maintain alignment with drawings, safety protocols, and standards.",
      "Procurement and logistics oversight – Managing the timely delivery of materials, tools, and labor to keep the project moving smoothly.",
      "Change order evaluation and mitigation – Assessing and negotiating changes in scope to control delays and budget impact.",
      "Regulatory and safety compliance – Enforcing building codes, fire regulations, and site safety standards through inspections and checklists.",
      "Stakeholder communication and reporting – Providing regular updates, reports, and feedback loops to ensure transparency with clients.",
      "Defect rectification and punch listing – Identifying incomplete or defective works and ensuring resolution before handover.",
      "Final handover and commissioning – Verifying that all systems function correctly and that clients receive warranties, manuals, and as-built documents."
    ],
  },
  {
    id: 6,
    title: "Evaluation",
    description:
      "Evaluation is a crucial phase where proposed architectural solutions are analyzed and validated. This service ensures your design achieves the desired performance, aesthetic, and compliance benchmarks before major investment in development or construction.",
    image:
      "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Functional analysis and layout testing – Reviewing how well floor plans support tasks, workflows, and occupant comfort.",
      "Design aesthetics critique – Examining proportions, materials, and visual language to ensure architectural consistency and elegance.",
      "Code and regulation verification – Checking building code compliance, fire exits, accessibility, and zoning conformity.",
      "Client and user feedback integration – Conducting surveys or interviews with future users to align design with expectations.",
      "Energy modeling and simulation – Analyzing building performance using software tools to predict heating, cooling, and lighting efficiency.",
      "Environmental impact assessment – Evaluating the building’s ecological footprint, including materials, water usage, and emissions.",
      "Cost-benefit and ROI analysis – Measuring long-term financial value, including maintenance, energy savings, and resale potential.",
      "Constructability review – Identifying potential construction challenges, clashes, or inefficiencies in the proposed design.",
      "Health and wellness impact – Ensuring that daylight, air quality, noise, and materials contribute positively to occupant health.",
      "Accessibility and inclusivity evaluation – Validating that the design supports universal access for people with disabilities or mobility limitations."
    ],
  },
];

export default services;
