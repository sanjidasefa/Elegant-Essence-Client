import React from 'react';
import { Target, History, Award, Users } from 'lucide-react';

const CompanyOverview = () => {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4">
      <h1 className='text-cyan-600 my-8 font-black text-3xl md:text-5xl border-l-8 border-cyan-600 pl-6 tracking-tight'>
        Company Overview
      </h1>
      <div className="tabs tabs-lifted w-full">
        {/* --- Our Story Tab --- */}
        <input
          type="radio"
          name="overview_tabs"
          className="tab h-14 [--tab-bg:white] dark:[--tab-bg:#0f172a] [--tab-border-color:#cbd5e1] dark:[--tab-border-color:#334155] text-slate-600 dark:text-slate-300 font-bold text-lg checked:!text-cyan-600"
          aria-label="Our Story"
          defaultChecked
        />
        <div className="tab-content bg-white dark:bg-[#0f172a] border-slate-200 dark:border-slate-700 rounded-box p-6 md:p-12 shadow-xl border-t-0">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <div className="bg-cyan-600/10 p-3 w-fit rounded-2xl text-cyan-600 mb-6">
                <History size={32} />
              </div>
              <p className="mb-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                <span className="text-cyan-600 font-black text-2xl">StyleDecor</span> was born from a passion for transforming spaces beautifully. We noticed that clients often struggled to find reliable decorators who could manage schedules efficiently.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border-l-4 border-cyan-500 italic text-slate-700 dark:text-slate-300 font-medium">
                "Our vision is clear: Seamless Bookings. Flexible Services. Happy Customers."
              </div>
            </div>
            <div className="hidden md:block w-1/3 bg-cyan-600/5 h-64 rounded-[3rem] border-2 border-dashed border-cyan-200 dark:border-cyan-800 flex items-center justify-center">
                <span className="text-cyan-200 dark:text-cyan-900 font-black text-8xl">SD</span>
            </div>
          </div>
        </div>

        {/* --- Mission Tab --- */}
        <input
          type="radio"
          name="overview_tabs"
          className="tab h-14 [--tab-bg:white] dark:[--tab-bg:#0f172a] [--tab-border-color:#cbd5e1] dark:[--tab-border-color:#334155] text-slate-600 dark:text-slate-300 font-bold text-lg checked:!text-cyan-600"
          aria-label="Mission"
        />
        <div className="tab-content bg-white dark:bg-[#0f172a] border-slate-200 dark:border-slate-700 rounded-box p-6 md:p-12 shadow-xl border-t-0">
          <div className="flex items-center gap-4 mb-8">
             <Target className="text-cyan-600" size={32} />
             <h2 className="font-black text-3xl text-slate-800 dark:text-white">Our Mission</h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Easy online booking for event services",
              "Ensuring decorators are responsive 24/7",
              "Clear service tracking and updates",
              "Maintaining quality with top partners",
              "Customer-first seamless experience"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl text-slate-700 dark:text-slate-300 font-semibold border border-transparent hover:border-cyan-500/30 transition-all">
                <span className="bg-cyan-600 text-white rounded-full p-1"><Award size={14}/></span> {text}
              </li>
            ))}
          </ul>
        </div>

        {/* --- Success Tab --- */}
        <input
          type="radio"
          name="overview_tabs"
          className="tab h-14 [--tab-bg:white] dark:[--tab-bg:#0f172a] [--tab-border-color:#cbd5e1] dark:[--tab-border-color:#334155] text-slate-600 dark:text-slate-300 font-bold text-lg checked:!text-cyan-600"
          aria-label="Success"
        />
        <div className="tab-content bg-white dark:bg-[#0f172a] border-slate-200 dark:border-slate-700 rounded-box p-6 md:p-12 shadow-xl border-t-0">
          <h2 className="font-black text-3xl text-slate-800 dark:text-white mb-8">Milestones Achieved</h2>
          <div className="stats stats-vertical lg:stats-horizontal shadow-lg bg-slate-50 dark:bg-slate-800 w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="stat p-10">
              <div className="stat-title font-bold text-slate-500">Managed Appointments</div>
              <div className="stat-value text-cyan-600 text-5xl">1000+</div>
              <div className="stat-desc font-medium mt-2 text-slate-400">Successfully completed across BD</div>
            </div>
            <div className="stat p-10 border-l border-slate-200 dark:border-slate-700">
              <div className="stat-title font-bold text-slate-500">Client Satisfaction</div>
              <div className="stat-value text-rose-500 text-5xl">99%</div>
              <div className="stat-desc font-medium mt-2 text-slate-400">Based on verified reviews</div>
            </div>
          </div>
        </div>

        {/* --- Team & Values Tab --- */}
        <input
          type="radio"
          name="overview_tabs"
          className="tab h-14 [--tab-bg:white] dark:[--tab-bg:#0f172a] [--tab-border-color:#cbd5e1] dark:[--tab-border-color:#334155] text-slate-600 dark:text-slate-300 font-bold text-lg checked:!text-cyan-600"
          aria-label="Team & Values"
        />
        <div className="tab-content bg-white dark:bg-[#0f172a] border-slate-200 dark:border-slate-700 rounded-box p-6 md:p-12 shadow-xl border-t-0">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-black text-cyan-600 mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
                <Users size={18}/> Core Values
              </h3>
              <ul className="space-y-4">
                {["Creativity", "Reliability", "Transparency"].map((val, idx) => (
                  <li key={idx} className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                    <span className="text-slate-700 dark:text-slate-300 font-bold">{val}</span> 
                    <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 px-4 py-1 rounded-full text-xs font-black italic uppercase">Guaranteed</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-600/20 blur-3xl group-hover:bg-cyan-600/40 transition-all"></div>
              <h3 className="font-black text-2xl mb-4 relative z-10">The StyleDecor Team</h3>
              <p className="text-slate-400 italic relative z-10 leading-relaxed">
                A synergy of talented decorators, tech experts, and support staff working together to make your special moments unforgettable.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CompanyOverview;