import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Hammer, Phone, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { SERVICES } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', dropdown: true },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        scrolled ? 'bg-obsidian/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt="RCS Remodeling"
            className="h-36 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.path}
              className="relative group/nav"
              onMouseEnter={() => link.dropdown && setIsServicesOpen(true)}
              onMouseLeave={() => link.dropdown && setIsServicesOpen(false)}
            >
              <Link
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-accent flex items-center gap-1 py-2',
                  location.pathname === link.path || (link.dropdown && location.pathname.startsWith('/services')) ? 'text-accent' : 'text-zinc-400'
                )}
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} className={cn("transition-transform duration-300", isServicesOpen && "rotate-180")} />}
              </Link>

              {link.dropdown && (
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-64 bg-obsidian/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-2xl"
                    >
                      <div className="grid gap-1">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.slug}`}
                            className="flex flex-col p-3 rounded-lg hover:bg-white/5 transition-colors group/item"
                          >
                            <span className="text-white text-sm font-bold group-hover/item:text-accent transition-colors">{service.title}</span>
                            <span className="text-[10px] text-zinc-500 line-clamp-1">{service.description}</span>
                          </Link>
                        ))}
                        <div className="h-px bg-white/5 my-1" />
                        <Link
                          to="/services"
                          className="p-3 text-xs font-bold text-accent hover:bg-accent/10 rounded-lg transition-colors text-center"
                        >
                          View All Services
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <Link to="/contact" className="btn-primary py-2 px-6 text-sm">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-obsidian border-b border-white/10 p-6 md:hidden flex flex-col gap-4 max-h-[80vh] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <div key={link.path}>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-lg font-medium',
                      location.pathname === link.path ? 'text-accent' : 'text-zinc-400'
                    )}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setIsServicesOpen(!isServicesOpen);
                      }}
                      className="p-2 text-zinc-400"
                    >
                      <ChevronDown size={20} className={cn("transition-transform", isServicesOpen && "rotate-180")} />
                    </button>
                  )}
                </div>

                {link.dropdown && isServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="pl-4 flex flex-col gap-2 mt-2"
                  >
                    {SERVICES.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-zinc-500 py-2 hover:text-accent"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            <Link to="tel:4692945888" className="flex items-center gap-2 text-accent font-bold py-4">
              <Phone size={20} /> 469-294-5888
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
