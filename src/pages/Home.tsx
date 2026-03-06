import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, Zap, CheckCircle2, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, REVIEWS, GALLERY_ITEMS, BLOG_POSTS } from '../constants';
import Carousel from '../components/Carousel';
import { useState, useEffect } from 'react';
import { AnimatePresence, useScroll, useSpring } from 'motion/react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const kitchenImages = [
    '/page-images/kitchen-1.jpg',
    '/page-images/kitchen-4.jpg',
    '/page-images/kitchen-5.jpg',
    '/page-images/untitled-design-14.png',
    '/page-images/untitled-design-108.png'
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % kitchenImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [kitchenImages.length]);

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,20,0)_0%,rgba(10,10,10,0.5)_100%)]" />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Cinematic Background Slider */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-obsidian/60 z-10" />
          <AnimatePresence mode="wait">
            <motion.img
              key={heroIndex}
              src={kitchenImages[heroIndex]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.4, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 4 }}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto text-center">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono uppercase tracking-[0.3em] mb-6">
              Dallas-Fort Worth's Elite Remodelers
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-[0.9] mb-8 tracking-tighter">
              WE BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">LEGACIES.</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Premium remodeling, demolition, and cleanup services for those who demand perfection. No jargon. No shortcuts. Just elite results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                Start Your Project
              </Link>
              <Link to="/services" className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2">
                Explore Services <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        >
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </section>

      {/* H.I.T. Values Section */}
      <section className="py-32 px-6 bg-obsidian relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Honesty', icon: Star, desc: 'Straight talk, fixed pricing, and no hidden surprises. We tell it like it is.' },
              { title: 'Integrity', icon: Shield, desc: 'Our word is our bond. We treat every home as if it were our own family estate.' },
              { title: 'Transparency', icon: Zap, desc: 'Real-time updates, daily progress photos, and clear communication from start to finish.' }
            ].map((value, i) => (
              <div
                key={value.title}
                className="glass-card p-10 glow-border group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-500">
                  <value.icon className="text-accent group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">{value.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Preview */}
      <section className="py-32 px-6 bg-slate-dark relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter leading-none">
                ELITE SERVICES <br /> FOR ELITE HOMES.
              </h2>
            </div>
            <Link to="/services" className="text-accent font-bold flex items-center gap-2 hover:gap-4 transition-all pb-2">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
                transition={{
                  y: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative h-[400px] rounded-3xl overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] shadow-2xl"
              >
                <Link to={`/services/${service.slug}`} className="block h-full w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent p-10 flex flex-col justify-end">
                    <h3 className="text-3xl font-display font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-zinc-400 text-sm mb-6 line-clamp-2">{service.description}</p>
                    <span className="text-accent font-bold text-sm uppercase tracking-widest border-b border-accent/0 group-hover:border-accent/100 transition-all inline-block w-fit">
                      View Details
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Gallery (Recent Projects) */}
      <section className="py-32 px-6 bg-obsidian relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">Our Portfolio</span>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter leading-none">
                RECENT <br /> TRANSFORMATIONS.
              </h2>
            </div>
            <Link to="/gallery" className="text-accent font-bold flex items-center gap-2 hover:gap-4 transition-all pb-2">
              View Full Gallery <ArrowRight size={20} />
            </Link>
          </div>

          <Carousel
            items={GALLERY_ITEMS.slice(0, 8).map((item, i) => (
              <div
                key={item.id}
                className="group relative h-[450px] rounded-3xl overflow-hidden glass-card"
              >
                <Link to="/gallery" className="block h-full w-full">
                  <img
                    src={item.imageAfter}
                    alt={item.category}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-accent font-mono text-xs uppercase mb-2">{item.category}</span>
                  </div>
                </Link>
              </div>
            ))}
            interval={4000}
          />
        </div>
      </section>

      {/* Social Proof Slider */}
      <section className="py-32 px-6 bg-slate-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4">TRUSTED BY DFW</h2>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} className="fill-accent text-accent" />)}
            </div>
          </div>

          <Carousel
            items={REVIEWS.map((review, i) => (
              <motion.div
                key={review.id}
                whileHover={{ y: -5, boxShadow: "0 0 30px rgba(255,107,0,0.1)" }}
                className="glass-card p-8 h-full flex flex-col transition-shadow duration-300"
              >
                <p className="text-zinc-300 italic mb-8 flex-grow">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold">{review.name}</h4>
                    <p className="text-zinc-500 text-xs">{review.location}</p>
                  </div>
                  <CheckCircle2 className="text-accent" size={24} />
                </div>
              </motion.div>
            ))}
            interval={5000}
          />
        </div>
      </section>

      {/* Latest Insights (Mini Blog) */}
      <section className="py-32 px-6 bg-obsidian relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">The Authority</span>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter leading-none">
                LATEST <br /> INSIGHTS.
              </h2>
            </div>
            <Link to="/blog" className="text-accent font-bold flex items-center gap-2 hover:gap-4 transition-all pb-2">
              Read All Articles <ArrowRight size={20} />
            </Link>
          </div>

          <Carousel
            items={BLOG_POSTS.slice(0, 8).map((post, i) => (
              <article
                key={post.id}
                className="group flex flex-col h-[500px] glass-card overflow-hidden glow-border"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-zinc-500 text-[10px] font-mono uppercase mb-4">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <Link
                    to={`/blog/${post.id}`}
                    className="mt-auto flex items-center gap-2 text-accent font-bold text-sm group-hover:gap-4 transition-all"
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
            interval={6000}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-slate-dark">
        <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8">READY TO TRANSFORM?</h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">
            Don't settle for average. Get the premium DFW remodeling experience you deserve.
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
