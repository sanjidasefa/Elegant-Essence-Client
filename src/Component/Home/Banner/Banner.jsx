import React from 'react';
import { Award, Trophy, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import img18 from '../../../assets/18.jpg';

const Banner = () => {
  return (
    <section className='relative w-full min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900'>
      <div className="absolute inset-0 z-0">
        <img 
          src={img18} 
          alt="18th Anniversary" 
          className='w-full h-full object-cover opacity-60'
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>
      <div className='relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 flex flex-col lg:flex-row items-center gap-10'>
        <div className='w-full lg:w-2/3 text-left'>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='inline-flex items-center gap-2 bg-cyan-600/20 backdrop-blur-md border border-cyan-500/30 text-cyan-400 px-5 py-2 rounded-full text-xs font-bold mb-8 uppercase tracking-[0.2em]'
          >
            <Trophy size={14} /> 18 Years of Design Legacy
          </motion.div>
          <h1 className='text-3xl md:text-5xl font-black text-white leading-[1.1] mb-8'>
            Celebrating <span className="text-cyan-500">18 Years</span> of <br className='hidden md:block'/> 
            Architectural Mastery in BD
          </h1>
          <div className='space-y-6 text-slate-300 text-lg leading-relaxed max-w-2xl border-l-4 border-cyan-600 pl-6'>
            <p>
              Since 2008, StyleDecor has been at the forefront of the interior design and construction industry in Bangladesh. 
              We don't just transform spaces; we create environments that inspire creativity and elevate lifestyles.
            </p>
            <p className='hidden md:block'>
              From luxury residences to corporate hubs, our dedication to quality, structural integrity, and 
              cutting-edge aesthetics has made us a trusted name for nearly two decades.
            </p>
          </div>
          <div className='flex flex-wrap items-center gap-6 mt-10'>
            <div className='flex items-center gap-4 py-2 px-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10'>
              <div className='text-center border-r border-white/10 pr-4'>
                <p className='text-2xl font-black text-white tracking-tighter'>18+</p>
                <p className='text-[10px] uppercase font-bold text-cyan-500'>Years</p>
              </div>
              <div className='text-center'>
                <p className='text-2xl font-black text-white tracking-tighter'>500+</p>
                <p className='text-[10px] uppercase font-bold text-cyan-500'>Projects</p>
              </div>
            </div>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className='w-full lg:w-1/3 flex justify-center lg:justify-end'
        >
          <div className='bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/20 shadow-2xl relative'>
            <div className='absolute -top-6 -right-6 bg-cyan-600 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-xl animate-pulse'>
              <Award size={40} />
            </div>
            <h3 className='text-white text-5xl font-black mb-2'>18th</h3>
            <p className='text-cyan-400 font-bold uppercase tracking-widest text-sm mb-6'>Anniversary</p>
            <p className='text-slate-300 text-sm italic leading-relaxed'>
              "Bringing dreams to life with creativity, quality, and dedication since the very beginning."
            </p>
          </div>
        </motion.div>

      </div>
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] -z-0'></div>
    </section>
  );
};

export default Banner;