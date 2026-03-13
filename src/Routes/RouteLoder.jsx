import React from 'react';

const RouteLoder = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="relative flex items-center justify-center">
        <div className="absolute animate-ping h-20 w-20 rounded-full bg-cyan-500/20"></div>
        <div className="h-16 w-16 rounded-full border-4 border-t-cyan-600 border-r-transparent border-b-slate-200 border-l-transparent animate-spin"></div>
        <div className="absolute h-8 w-8 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50">
           <div className="h-2 w-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-lg font-bold tracking-[0.2em] text-slate-800 dark:text-slate-100 uppercase">
          Elegant Essence
        </h3>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 font-medium tracking-widest">
          LOADING EXPERIENCE...
        </p>
      </div>
    </div>
  );
};

export default RouteLoder;