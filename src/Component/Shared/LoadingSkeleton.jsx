import React from 'react';

const LoadingSkeleton = () => {
  return (
     <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 p-10">
    <div className="w-full max-w-md space-y-4">
      <div className="flex items-center gap-4">
        <div className="skeleton h-16 w-16 shrink-0 rounded-full bg-slate-200 dark:bg-slate-800"></div>
        <div className="space-y-2">
          <div className="skeleton h-4 w-28 bg-slate-200 dark:bg-slate-800"></div>
          <div className="skeleton h-6 w-36 bg-slate-200 dark:bg-slate-800"></div>
        </div>
      </div>
      <div className="skeleton h-48 w-full bg-slate-200 dark:bg-slate-800 rounded-3xl"></div>
    </div>
    <h1 className="text-slate-400 font-medium animate-pulse text-xl">Loading...</h1>
  </div>
  );
};

export default LoadingSkeleton;