import React from 'react';
import { motion } from 'motion/react';
import { History, Users, ShieldCheck, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 px-6 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter">
            DEEP ROOTS. <br />
            <span className="text-accent">ELITE STANDARDS.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
            Based in Terrell, TX, and serving the entire DFW metroplex, RCS Remodeling was founded on a simple principle: doing the job right the first time, every time.
          </p>
        </motion.div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 px-6 bg-slate-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/terrell/800/1000" 
              alt="Terrell TX Roots" 
              className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 glass-card p-8 hidden md:block">
              <h4 className="text-accent font-black text-4xl mb-2">15+</h4>
              <p className="text-zinc-400 text-sm font-mono uppercase">Years of Combined Experience</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-8">A Legacy of Hard Work</h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>
                RCS Remodeling isn't just another contracting firm. We are a team of North Texas natives who understand the unique challenges of DFW properties—from the shifting clay soils of Terrell to the high-end architectural demands of Highland Park.
              </p>
              <p>
                We saw a gap in the market: too many contractors were hiding behind jargon and vague timelines. We decided to build a company focused on **Honesty, Integrity, and Transparency (H.I.T.)**.
              </p>
              <p>
                Whether it's a full kitchen gut or a complex squatter removal cleanup, we bring the same level of intensity and professionalism to every square inch of your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6 bg-obsidian">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-white mb-20 text-center">OUR JOURNEY</h2>
          <div className="space-y-12">
            {[
              { year: '2010', title: 'The Beginning', desc: 'Started as a small debris removal crew in Terrell, TX.' },
              { year: '2015', title: 'Expanding Horizons', desc: 'Launched full-scale demolition and cleanup services across DFW.' },
              { year: '2020', title: 'Remodeling Excellence', desc: 'Brought on master craftsmen to offer high-end residential remodeling.' },
              { year: '2026', title: 'The Gold Standard', desc: 'Recognized as DFW\'s premier choice for premium property transformations.' }
            ].map((item, i) => (
              <div key={item.year} className="flex gap-8 relative">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_rgba(242,125,38,0.5)]" />
                  {i !== 3 && <div className="w-px h-full bg-white/10 mt-2" />}
                </div>
                <div className="pb-12">
                  <span className="text-accent font-mono font-bold text-xl">{item.year}</span>
                  <h3 className="text-2xl font-display font-bold text-white mt-2">{item.title}</h3>
                  <p className="text-zinc-500 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Crew */}
      <section className="py-32 px-6 bg-slate-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold text-white mb-4">THE ELITE SQUAD</h2>
            <p className="text-zinc-500">The hands and minds behind the DFW's finest builds.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Rick C.', role: 'Founder & Lead Strategist', bio: 'A Terrell native with a vision for transparent contracting.' },
              { name: 'Sarah M.', role: 'Design Director', bio: 'Expert in modern Texas aesthetics and high-end finishes.' },
              { name: 'Dave T.', role: 'Operations Chief', bio: 'Ensuring every demo and cleanup is executed with military precision.' }
            ].map((member) => (
              <div key={member.name} className="group relative h-[500px] rounded-3xl overflow-hidden glass-card">
                <img 
                  src={`https://picsum.photos/seed/${member.name}/600/800?grayscale`} 
                  alt={member.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-obsidian to-transparent translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-2xl font-display font-bold text-white">{member.name}</h4>
                  <p className="text-accent text-sm font-mono uppercase mb-4">{member.role}</p>
                  <p className="text-zinc-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-200">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
