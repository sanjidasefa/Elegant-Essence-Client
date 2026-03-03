import React from 'react';
import { Sparkles } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center group cursor-pointer">
      <div className="bg-cyan-500 p-2 rounded-xl text-white mr-3 group-hover:rotate-12 transition-transform duration-300">
        <Sparkles size={24} className="md:w-8 md:h-8" />
      </div>
      <h1 className='font-black text-2xl lg:text-3xl tracking-tighter text-slate-800 dark:text-white flex items-center'>
  Elegant <span className='text-cyan-500 ml-1 font-extralight'>Essence</span>
</h1>
      <div className="w-2 h-2 bg-cyan-500 rounded-full ml-1 self-end mb-2 hidden md:block"></div>
    </div>
  );
};

export default Logo;