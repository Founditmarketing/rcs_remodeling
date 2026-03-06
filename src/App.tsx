import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesHub from './pages/ServicesHub';
import ServiceDetail from './pages/ServiceDetail';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Color from './pages/Color';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col mesh-gradient overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesHub />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/color" element={<Color />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
