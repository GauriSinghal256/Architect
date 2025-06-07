import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ui/ScrollToTop';
import ServiceDetail from './pages/ServiceDetail';
import MemberDetail from './pages/MemberDetail';
import AnshulProfile from './pages/AnshulProfile';

function App() {
  return (
    <>
      <ScrollToTop /> {/* Move this above <Routes> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="about" element={<About />} />
          <Route path="/team/anshul" element={<AnshulProfile />} />
          <Route path="/team/:id" element={<MemberDetail />} />
          <Route path="services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="contact" element={<Contact />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;