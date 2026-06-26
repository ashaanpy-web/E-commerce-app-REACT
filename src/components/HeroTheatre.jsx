import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroTheatre = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden">
      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="glassmorphism p-8 md:p-12 rounded-3xl max-w-3xl mx-auto inline-block"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-block bg-brand-cyan/20 text-brand-cyan px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-6 border border-brand-cyan/30"
          >
            NEXT GEN COMMERCE
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Experience <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
              The Future
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Immerse yourself in our 3D interactive store. Discover cutting-edge electronics with unparalleled detail and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/explore')}
              className="bg-brand-cyan text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              Explore Products
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors backdrop-blur-md">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </div>

      {/* Gradient Overlay for blending into the next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-0 pointer-events-none" />
    </section>
  );
};

export default HeroTheatre;