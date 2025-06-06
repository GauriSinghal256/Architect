import aa2 from "../assets/projectSection/aa2.webp"; // moved from public to src/assets
import aaps1 from "../assets/projectSection/aaps1.jpg";
import aaps2 from "../assets/projectSection/aaps2.jpg";
import aa6 from "../assets/aa6.webp";
import m3 from "../assets/m3.png";
import photo3 from "../assets/photo3.jpg";

import p1m1 from "../assets/project2/m1.jpeg";
import p1m2 from "../assets/project2/m2.jpeg";
import p1m3 from "../assets/project2/m3.jpeg";
import p1m4 from "../assets/project2/m4.jpeg";
import p1m5 from "../assets/project2/m5.jpeg";
import p1m6 from "../assets/project2/m6.jpeg";

import aa4 from "../assets/project4/aa4.png";
import p4m1 from "../assets/project4/m1.jpeg";
import p4m2 from "../assets/project4/m2.png";
import p4m3 from "../assets/project4/m3.png";
import p4m4 from "../assets/project4/m4.jpeg";
import p4m5 from "../assets/project4/m5.jpeg";
import p4m6 from "../assets/project4/m6.jpeg";

import p6m1 from "../assets/project6/m1.jpeg";
import p6m2 from "../assets/project6/m2.jpeg";
import p6m3 from "../assets/project6/m3.jpeg";
import p6m4 from "../assets/project6/m4.jpeg";
import p6m5 from "../assets/project6/m5.jpeg";
import p6m6 from "../assets/project6/m6.jpeg";

import p9m1 from "../assets/project9/m1.png";
import p9m2 from "../assets/project9/m2.png";
import p9m3 from "../assets/project9/m3.png";
import p9m4 from "../assets/project9/m4.png";
import p9m5 from "../assets/project9/m5.png";
import p9m6 from "../assets/project9/m6.png";

import p8m1 from "../assets/project8/m1.jpeg";
import p8m2 from "../assets/project8/m2.png";
import p8m3 from "../assets/project8/m3.jpeg";
import p8m4 from "../assets/project8/m4.png";
import p8m5 from "../assets/project8/m5.jpeg";
import p8m6 from "../assets/project8/m7.jpeg";

// Sample project data (would normally come from an API)
export const projectsData = [
  {
    id: 1,
    title: "Azure Horizon Tower",
    description:
      "A 42-story mixed-use skyscraper featuring sustainable design elements and a distinctive silhouette on the city skyline.",
    fullDescription: `The Azure Horizon Tower stands as a beacon of sustainable architecture in the heart of Mumbai's financial district. This 42-story mixed-use development integrates commercial office spaces, luxury residential apartments, and retail facilities in a harmonious vertical community.

    The design responds to India's tropical climate with passive cooling strategies, including a double-skin façade that reduces solar heat gain while maximizing natural light. The tower's distinctive stepped form creates a series of sky gardens and terraces that serve as communal spaces and contribute to the building's biophilic design approach.

    Sustainable features include:
    • Rainwater harvesting and greywater recycling systems
    • Rooftop solar panels providing 15% of the building's energy needs
    • Smart building management systems optimizing energy usage
    • Vertical gardens that improve air quality and reduce heat island effect

    The Azure Horizon Tower has received LEED Platinum certification and the Indian Green Building Council's 5-star rating.`,
    client: "Horizon Developments",
    location: "Mumbai, India",
    year: "2022",
    area: "75,000 sqm",
    category: "Commercial",
    image:
      "https://images.pexels.com/photos/2404843/pexels-photo-2404843.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/425160/pexels-photo-425160.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200",
      m3,
      "https://images.pexels.com/photos/1104476/pexels-photo-1104476.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  {
    id: 2,
    title: "Serenity Eco Villas",
    description:
      "Luxury eco-friendly villas designed with passive cooling systems and integrated with the natural landscape.",
    fullDescription: `The Serenity Eco Villas project comprises a collection of 24 luxury residences nestled along the coastline of Goa. Each villa is uniquely designed to harmonize with its specific site conditions while maintaining a cohesive architectural language throughout the development.

    Our design approach prioritized environmental sensitivity and local context. The villas feature traditional Goan architectural elements reinterpreted through a contemporary lens, with sloping roofs, verandas, and courtyards that respond to the tropical climate while creating comfortable living spaces.

    Key design features include:
    • Open floor plans that maximize cross-ventilation and reduce the need for mechanical cooling
    • Strategic orientation to capture prevailing sea breezes and protect from harsh afternoon sun
    • Locally sourced materials including laterite stone, reclaimed teak, and handcrafted tiles
    • Infinity pools that visually blend with the Arabian Sea horizon
    • Drought-resistant landscaping using native species that require minimal irrigation

    The project has won multiple awards for its sustainable approach to luxury residential design, including the prestigious Indian Institute of Architects' Excellence in Architecture Award.`,
    client: "GreenHaven Properties",
    location: "Goa, India",
    year: "2021",
    area: "42,000 sqm",
    category: "Residential",
    image:
      "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  {
    id: 3,
    title: "Harmonic Culture Center",
    description:
      "A cultural hub featuring a concert hall, art galleries, and educational spaces with stunning acoustics and lighting design.",
    fullDescription: `The Serenity Eco Villas project comprises a collection of 24 luxury residences nestled along the coastline of Goa. Each villa is uniquely designed to harmonize with its specific site conditions while maintaining a cohesive architectural language throughout the development.

    Our design approach prioritized environmental sensitivity and local context. The villas feature traditional Goan architectural elements reinterpreted through a contemporary lens, with sloping roofs, verandas, and courtyards that respond to the tropical climate while creating comfortable living spaces.

    Key design features include:
    • Open floor plans that maximize cross-ventilation and reduce the need for mechanical cooling
    • Strategic orientation to capture prevailing sea breezes and protect from harsh afternoon sun
    • Locally sourced materials including laterite stone, reclaimed teak, and handcrafted tiles
    • Infinity pools that visually blend with the Arabian Sea horizon
    • Drought-resistant landscaping using native species that require minimal irrigation

    The project has won multiple awards for its sustainable approach to luxury residential design, including the prestigious Indian Institute of Architects' Excellence in Architecture Award.`,
    client: "GreenHaven Properties",
    location: "Delhi, India",
    year: "2021",
    area: "42,000 sqm",
    category: "Cultural",
    image: aa2,
    gallery: [p1m1, p1m2, p1m3, p1m4, p1m5, p1m6],
  },
  {
    id: 4,
    title: "Verdant Office Campus",
    description:
      "A corporate campus designed around central courtyards and featuring extensive green roofs and natural ventilation.",
    fullDescription: `The Serenity Eco Villas project comprises a collection of 24 luxury residences nestled along the coastline of Goa. Each villa is uniquely designed to harmonize with its specific site conditions while maintaining a cohesive architectural language throughout the development.

    Our design approach prioritized environmental sensitivity and local context. The villas feature traditional Goan architectural elements reinterpreted through a contemporary lens, with sloping roofs, verandas, and courtyards that respond to the tropical climate while creating comfortable living spaces.

    Key design features include:
    • Open floor plans that maximize cross-ventilation and reduce the need for mechanical cooling
    • Strategic orientation to capture prevailing sea breezes and protect from harsh afternoon sun
    • Locally sourced materials including laterite stone, reclaimed teak, and handcrafted tiles
    • Infinity pools that visually blend with the Arabian Sea horizon
    • Drought-resistant landscaping using native species that require minimal irrigation

    The project has won multiple awards for its sustainable approach to luxury residential design, including the prestigious Indian Institute of Architects' Excellence in Architecture Award.`,
    client: "GreenHaven Properties",
    location: "Bangalore, India",
    year: "2021",
    area: "42,000 sqm",
    category: "Commercial",
    image: aa4,
    gallery: [p4m1, p4m2, p4m3, p4m4, p4m5, p4m6],
  },
  
  {
    id: 6,
    title: "Office Designs",
    description:
      "Best office designs are available this is one of them showcasing the art of designing.",
    fullDescription: `The Serenity Eco Villas project comprises a collection of 24 luxury residences nestled along the coastline of Goa. Each villa is uniquely designed to harmonize with its specific site conditions while maintaining a cohesive architectural language throughout the development.

    Our design approach prioritized environmental sensitivity and local context. The villas feature traditional Goan architectural elements reinterpreted through a contemporary lens, with sloping roofs, verandas, and courtyards that respond to the tropical climate while creating comfortable living spaces.

    Key design features include:
    • Open floor plans that maximize cross-ventilation and reduce the need for mechanical cooling
    • Strategic orientation to capture prevailing sea breezes and protect from harsh afternoon sun
    • Locally sourced materials including laterite stone, reclaimed teak, and handcrafted tiles
    • Infinity pools that visually blend with the Arabian Sea horizon
    • Drought-resistant landscaping using native species that require minimal irrigation

    The project has won multiple awards for its sustainable approach to luxury residential design, including the prestigious Indian Institute of Architects' Excellence in Architecture Award.`,
    client: "GreenHaven Properties",
    location: "Hyderabad, India",
    year: "2021",
    area: "42,000 sqm",
    category: "Hospitality",
    image: aaps2,
    gallery: [p6m1, p6m2, p6m3, p6m4, p6m5, p6m6],
  },

  {
    id: 8,
    title: "Modernist Family Residence",
    description:
      "A private home featuring clean lines, open spaces, and a seamless indoor-outdoor living experience.",
    fullDescription: `The Serenity Eco Villas project comprises a collection of 24 luxury residences nestled along the coastline of Goa. Each villa is uniquely designed to harmonize with its specific site conditions while maintaining a cohesive architectural language throughout the development.

    Our design approach prioritized environmental sensitivity and local context. The villas feature traditional Goan architectural elements reinterpreted through a contemporary lens, with sloping roofs, verandas, and courtyards that respond to the tropical climate while creating comfortable living spaces.

    Key design features include:
    • Open floor plans that maximize cross-ventilation and reduce the need for mechanical cooling
    • Strategic orientation to capture prevailing sea breezes and protect from harsh afternoon sun
    • Locally sourced materials including laterite stone, reclaimed teak, and handcrafted tiles
    • Infinity pools that visually blend with the Arabian Sea horizon
    • Drought-resistant landscaping using native species that require minimal irrigation

    The project has won multiple awards for its sustainable approach to luxury residential design, including the prestigious Indian Institute of Architects' Excellence in Architecture Award.`,
    client: "GreenHaven Properties",
    location: "Pune, India",
    year: "2021",
    area: "42,000 sqm",
    category: "Residential",
    image: photo3,
    gallery: [p8m1, p8m2, p8m3, p8m4, p8m5, p8m6],
  },

  {
    id: 9,
    title: "Sustainable Homes",
    description:
      "A private home featuring clean lines, open spaces, and a seamless indoor-outdoor living experience.",
    fullDescription: `The Serenity Eco Villas project comprises a collection of 24 luxury residences nestled along the coastline of Goa. Each villa is uniquely designed to harmonize with its specific site conditions while maintaining a cohesive architectural language throughout the development.

    Our design approach prioritized environmental sensitivity and local context. The villas feature traditional Goan architectural elements reinterpreted through a contemporary lens, with sloping roofs, verandas, and courtyards that respond to the tropical climate while creating comfortable living spaces.

    Key design features include:
    • Open floor plans that maximize cross-ventilation and reduce the need for mechanical cooling
    • Strategic orientation to capture prevailing sea breezes and protect from harsh afternoon sun
    • Locally sourced materials including laterite stone, reclaimed teak, and handcrafted tiles
    • Infinity pools that visually blend with the Arabian Sea horizon
    • Drought-resistant landscaping using native species that require minimal irrigation

    The project has won multiple awards for its sustainable approach to luxury residential design, including the prestigious Indian Institute of Architects' Excellence in Architecture Award.`,
    client: "GreenHaven Properties",
    location: "Chennai, India",
    year: "2021",
    area: "42,000 sqm",
    category: "Residential",
    image: aa6,
    gallery: [p9m1, p9m2, p9m3, p9m4, p9m5, p9m6],
  },

  // More projects would follow the same pattern
];
