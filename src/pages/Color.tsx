import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const SCHEMES = [
    { name: 'MIDNIGHT & AMBER (ORIGINAL)', base: '#050505', color: '#f27d26', glow: 'rgba(242, 125, 38, 0.4)' },
    { name: 'CHARCOAL & ELECTRIC', base: '#121212', color: '#2563EB', glow: 'rgba(37, 99, 235, 0.4)' },
    { name: 'SLATE & TEAL', base: '#1e293b', color: '#0d9488', glow: 'rgba(13, 148, 136, 0.4)' },
    { name: 'DEEP FOREST & COPPER', base: '#061a15', color: '#b87333', glow: 'rgba(184, 115, 51, 0.4)' },
    { name: 'ESPRESSO & GOLD', base: '#1a120b', color: '#d4af37', glow: 'rgba(212, 175, 55, 0.4)' },
    { name: 'GRAPHITE & CRIMSON', base: '#1c1c1c', color: '#9a031e', glow: 'rgba(154, 3, 30, 0.4)' },
    { name: 'NAVY & SILVER', base: '#0a1128', color: '#c0c0c0', glow: 'rgba(192, 192, 192, 0.4)' },
    { name: 'VOID & NEON', base: '#000000', color: '#39ff14', glow: 'rgba(57, 255, 20, 0.4)' },
    { name: 'BASALT & AZURE', base: '#262626', color: '#007fff', glow: 'rgba(0, 127, 255, 0.4)' },
    { name: 'BORDEAUX & PLATINUM', base: '#2d0320', color: '#e5e4e2', glow: 'rgba(229, 228, 226, 0.4)' },
];

const LaserBeam = ({ top, delay = 0, duration = 2, vertical = false, color }: { top?: string; delay?: number; duration?: number; vertical?: boolean; color: string }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <motion.div
            initial={vertical ? { y: '-100%', opacity: 0 } : { x: '-100%', opacity: 0 }}
            animate={vertical ? { y: '200%', opacity: [0, 1, 1, 0] } : { x: '200%', opacity: [0, 1, 1, 0] }}
            transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "linear",
            }}
            style={vertical ? { left: top, width: '1px' } : { top, height: '1px' }}
            className={`absolute ${vertical ? 'h-full bg-gradient-to-b' : 'w-full bg-gradient-to-r'} from-transparent via-[var(--accent)] to-transparent shadow-[0_0_15px_var(--accent)]`}
        />
    </div>
);

interface ShowcaseProps {
    name: string;
    base: string;
    color: string;
    glow: string;
}

const ShowcaseSection = ({ name, base, color, glow }: ShowcaseProps) => {
    const [heroIndex, setHeroIndex] = useState(0);
    const kitchenImages = [
        '/page-images/kitchen-1.jpg',
        '/page-images/kitchen-4.jpg',
        '/page-images/kitchen-5.jpg',
        '/page-images/untitled-design-14.png',
        '/page-images/untitled-design-108.png'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % kitchenImages.length);
        }, 10000);
        return () => clearInterval(timer);
    }, [kitchenImages.length]);

    return (
        <div className="relative border-b-8 border-white/10" style={{ '--color-accent': color, '--color-accent-glow': glow, '--accent': color, backgroundColor: base } as any}>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
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
                        <span className="inline-block px-4 py-1 rounded-full bg-[var(--color-accent-glow)] border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs font-mono uppercase tracking-[0.3em] mb-6">
                            Color Showcase: {name}
                        </span>
                        <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-[0.9] mb-8 tracking-tighter">
                            WE BUILD <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-white/40">
                                {name}.
                            </span>
                        </h1>
                        <p className="text-zinc-200 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                            Experience the elite {name} theme. Premium remodeling, demolition, and cleanup services for those who demand perfection.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="relative px-8 py-4 bg-[var(--color-accent)] text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_var(--color-accent-glow)]">
                                Start Your Project
                            </button>
                            <button className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2">
                                Explore Services <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* H.I.T. Values Section */}
            <section className="py-32 px-6 relative overflow-hidden" style={{ backgroundColor: base }}>
                <LaserBeam top="20%" delay={0} duration={3} color={color} />
                <LaserBeam top="50%" delay={1} duration={2.5} color={color} />
                <LaserBeam top="80%" delay={2} duration={4} color={color} />
                <LaserBeam top="15%" delay={0.5} duration={5} vertical={true} color={color} />
                <LaserBeam top="85%" delay={1.5} duration={4.5} vertical={true} color={color} />

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                        {[
                            { title: 'Honesty', icon: Star, desc: 'Straight talk, fixed pricing, and no hidden surprises. We tell it like it is.' },
                            { title: 'Integrity', icon: Shield, desc: 'Our word is our bond. We treat every home as if it were our own family estate.' },
                            { title: 'Transparency', icon: Zap, desc: 'Real-time updates, daily progress photos, and clear communication from start to finish.' }
                        ].map((value, i) => (
                            <div
                                key={value.title}
                                className="glass-card p-10 glow-border group relative border-[var(--color-accent)]/10"
                            >
                                <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-2xl flex items-center justify-center mb-8 mx-auto md:mx-0 group-hover:bg-[var(--color-accent)] transition-colors duration-500">
                                    <value.icon className="text-[var(--color-accent)] group-hover:text-white transition-colors" size={32} />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">{value.title}</h3>
                                <p className="text-zinc-300 leading-relaxed font-medium">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default function Color() {
    return (
        <div className="bg-obsidian min-h-screen">
            <div className="py-20 text-center bg-black/80 border-b border-white/5 relative z-50">
                <h1 className="text-4xl font-display font-black text-white">COLOR THEME EXPLORER</h1>
                <p className="text-zinc-500 mt-4">Scroll down to see 10 unique combinations of "Base" and "Main" colors.</p>
            </div>
            {SCHEMES.map((scheme) => (
                <ShowcaseSection key={scheme.name} {...scheme} />
            ))}
            <div className="py-20 text-center bg-black border-t border-white/5">
                <p className="text-zinc-600">End of Showcase</p>
            </div>
        </div>
    );
}
