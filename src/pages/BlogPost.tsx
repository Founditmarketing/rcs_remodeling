import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) return <Navigate to="/blog" />;

  return (
    <div className="pt-24">
      <article className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/blog" className="flex items-center gap-2 text-accent font-bold mb-12 hover:gap-4 transition-all">
            <ArrowLeft size={20} /> Back to Blog
          </Link>

          <div className="flex items-center gap-6 text-zinc-500 text-sm font-mono uppercase mb-6">
            <span className="flex items-center gap-2"><Calendar size={16} className="text-accent" /> {post.date}</span>
            <span className="flex items-center gap-2"><User size={16} className="text-accent" /> {post.author}</span>
            <span className="px-3 py-1 bg-white/5 rounded-full text-accent">{post.category}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-10 leading-tight">
            {post.title}
          </h1>

          <div className="relative h-[500px] rounded-3xl overflow-hidden mb-16">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-invert prose-accent max-w-none text-zinc-400 leading-relaxed space-y-8 text-lg">
            <p className="text-white font-medium text-xl italic border-l-4 border-accent pl-6 py-2">
              {post.excerpt}
            </p>

            {/* Full article content placeholder - in a real app this would be rich text */}
            <div className="space-y-6">
              <p>{post.content}</p>
              <p>
                When it comes to property in North Texas, the stakes are high. Whether you're dealing with the intense summer heat or the unpredictable spring storms, your home's structural integrity and aesthetic appeal are paramount. At RCS Remodeling, we've seen it all—from the historic homes in Terrell to the modern estates in Dallas.
              </p>
              <h3 className="text-2xl font-display font-bold text-white mt-12">The Professional Advantage</h3>
              <p>
                Many homeowners consider the DIY route to save a few dollars, but the hidden costs often outweigh the initial savings. Professional demolition, for instance, isn't just about swinging a hammer; it's about understanding load-bearing points, utility lines, and environmental hazards.
              </p>
              <img
                src="/Blog%20Images/Blog%20Page%20pictures/Wall%20destruction.png"
                alt="Process"
                className="rounded-2xl w-full my-12"
                referrerPolicy="no-referrer"
              />
              <p>
                Our H.I.T. values (Honesty, Integrity, Transparency) ensure that you're never in the dark. We provide daily updates and clear milestones so you can watch your vision come to life without the stress usually associated with major renovations.
              </p>
              <p>
                If you're ready to take the next step in your property's evolution, our team is standing by to provide a comprehensive assessment and an elite plan of action.
              </p>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex items-center justify-between">
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <Share2 size={20} />
              </button>
            </div>
            <Link to="/contact" className="btn-primary">
              Discuss Your Project
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
