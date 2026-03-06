import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-dark border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6 group">
            <img
              src="/LOGO.png"
              alt="RCS Remodeling"
              className="h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </Link>
          <p className="text-zinc-500 text-sm leading-relaxed mb-6">
            Premium remodeling, demolition, and cleanup services in the Dallas-Fort Worth area. Built on the foundation of Honesty, Integrity, and Transparency.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-zinc-500 text-sm">
            <li><Link to="/services/remodeling" className="hover:text-accent transition-colors">Remodeling</Link></li>
            <li><Link to="/services/demolition" className="hover:text-accent transition-colors">Demolition</Link></li>
            <li><Link to="/services/cleanup" className="hover:text-accent transition-colors">Cleanup</Link></li>
            <li><Link to="/services/debris-removal" className="hover:text-accent transition-colors">Debris Removal</Link></li>
            <li><Link to="/services/squatter-removal" className="hover:text-accent transition-colors">Squatter Removal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-zinc-500 text-sm">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
            <li><Link to="/reviews" className="hover:text-accent transition-colors">Reviews</Link></li>
            <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-zinc-500 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>12445 Amy Lane<br />Terrell, TX 75160</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent shrink-0" />
              <a href="tel:4692945888" className="hover:text-accent">469-294-5888</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent shrink-0" />
              <a href="mailto:info@rcsremodeling.com" className="hover:text-accent">info@rcsremodeling.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4 text-zinc-600 text-xs font-mono uppercase tracking-widest">
        <p>© 2026 RCS Remodeling. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
