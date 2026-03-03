import React from "react";

const RouteLoder = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white dark:bg-base-100 transition-colors duration-300">
      
      <div className="w-full max-w-md p-6 flex flex-col gap-6">
        <div className="flex items-center gap-5">
          <div className="skeleton h-16 w-16 shrink-0 rounded-full bg-slate-200 dark:bg-slate-800"></div>
          <div className="flex flex-col gap-3">
            <div className="skeleton h-4 w-24 bg-slate-200 dark:bg-slate-800"></div>
            <div className="skeleton h-6 w-40 bg-slate-200 dark:bg-slate-800"></div>
          </div>
        </div>
        <div className="skeleton h-48 w-full bg-slate-200 dark:bg-slate-800 rounded-3xl"></div>
      </div>
      <div className="mt-8 flex flex-col items-center gap-2">
        <h1 className="text-center text-2xl font-black tracking-widest uppercase text-slate-800 dark:text-white animate-pulse">
          Loading...
        </h1>
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-cyan-600 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-cyan-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
          <span className="w-2 h-2 bg-cyan-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
        </div>
      </div>

    </div>
  );
};

export default RouteLoder;