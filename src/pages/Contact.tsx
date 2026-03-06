import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Clock, ShieldCheck } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24">
      <section className="py-20 px-6 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter">
            START YOUR <br />
            <span className="text-accent">TRANSFORMATION.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
            Ready for elite results? Fill out the form below or reach out directly to our Terrell headquarters.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="text-accent" size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Call Us</h4>
                    <a href="tel:4692945888" className="text-zinc-400 text-lg hover:text-accent transition-colors">469-294-5888</a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="text-accent" size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Email Us</h4>
                    <a href="mailto:info@rcsremodeling.com" className="text-zinc-400 text-lg hover:text-accent transition-colors">info@rcsremodeling.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-accent" size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Visit Us</h4>
                    <p className="text-zinc-400 text-lg">12445 Amy Lane, Terrell, TX 75160</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 space-y-6">
              <h4 className="text-white font-bold flex items-center gap-2">
                <Clock className="text-accent" size={20} /> Business Hours
              </h4>
              <div className="space-y-2 text-sm text-zinc-500 font-mono uppercase">
                <div className="flex justify-between"><span>Mon - Fri</span> <span>8:00 AM - 6:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span> <span>9:00 AM - 2:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span> <span className="text-accent">Closed</span></div>
              </div>
            </div>

            {/* Google Maps Link */}
            <a
              href="https://www.google.com/maps/place/12445+Amy+Ln,+Terrell,+TX+75161/@32.7217166,-96.1319602,1012m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8649436b4f02733b:0xdf878be55438e8f1!8m2!3d32.7217166!4d-96.1319602!16s%2Fg%2F11h9r7lhl0?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-80 rounded-3xl overflow-hidden relative border border-white/10 group/map"
            >
              <div className="absolute inset-0 bg-slate-dark flex items-center justify-center text-center p-10 group-hover:bg-accent/5 transition-colors duration-500">
                <div>
                  <MapPin className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} />
                  <p className="text-white font-bold mb-2 uppercase tracking-widest">Terrell, TX Headquarters</p>
                  <p className="text-zinc-500 text-sm">12445 Amy Lane, Terrell, TX 75160</p>
                  <span className="text-accent text-[10px] font-mono mt-4 inline-block border-b border-accent/0 group-hover:border-accent/100 transition-all">
                    Click to Open in Google Maps
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldCheck size={120} />
            </div>
            <h2 className="text-4xl font-display font-bold text-white mb-10">Request a Quote</h2>
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-zinc-500">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-zinc-500">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="469-000-0000"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-zinc-500">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-zinc-500">Service Needed</label>
                <select name="service" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none">
                  <option className="bg-obsidian">Remodeling</option>
                  <option className="bg-obsidian">Demolition</option>
                  <option className="bg-obsidian">Cleanup</option>
                  <option className="bg-obsidian">Debris Removal</option>
                  <option className="bg-obsidian">Squatter Removal</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-zinc-500">Project Details</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
