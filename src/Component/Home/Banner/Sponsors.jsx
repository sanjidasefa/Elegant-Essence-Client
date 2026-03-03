import React, { use } from 'react';
import Marquee from "react-fast-marquee";

const sponsors = fetch('/Sponsors.json').then(res => res.json())

const Sponsors = () => {
  const sponsorData = use(sponsors)

  return (
    <div className='bg-white dark:bg-base-100 py-16 md:py-24 border-t border-gray-50 dark:border-slate-800 transition-colors duration-300'>
      <div className='max-w-7xl mx-auto'>
        <h1 className="font-black text-center text-3xl md:text-5xl mb-16 text-slate-800 dark:text-cyan-400 tracking-tight">
       Our Partners
        </h1>
        <Marquee 
          pauseOnHover={true} 
          speed={50} 
          gradient={true} 
          gradientColor="white" 
          className="overflow-hidden"
        >
          <div className='flex items-center gap-24 pr-24'>
            {sponsorData.map((item) => {
              return (
                <div key={item.id} className="group flex flex-col justify-center items-center transition-all duration-300">
                  {/* Sponsor Name */}
                  <h1 className="text-4xl md:text-5xl font-black text-slate-300 dark:text-slate-700 group-hover:text-cyan-600 transition-colors duration-300 uppercase tracking-tighter">
                    {item.name}
                  </h1>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-[2px] w-4 bg-amber-400 rounded-full group-hover:w-8 transition-all"></span>
                    <p className="text-xs md:text-sm font-bold text-amber-500 uppercase tracking-widest opacity-80 group-hover:opacity-100">
                      {item.level}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Sponsors;