import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutGrid, 
  UserCheck, 
  CalendarClock, 
  Home, 
  CreditCard, 
  Activity, 
  Star, 
  BellRing 
} from 'lucide-react';

const Banner2 = () => {
  const features = [
    { 
      icon: <LayoutGrid size={32} />, 
      title: "Package Browsing", 
      desc: "Explore tailored decoration plans",
      bg: "bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400" 
    },
    { 
      icon: <UserCheck size={32} />, 
      title: "Expert Decorators", 
      desc: "Check availability in real-time",
      bg: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400" 
    },
    { 
      icon: <CalendarClock size={32} />, 
      title: "DateTime Slot", 
      desc: "Book your preferred schedule",
      bg: "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400" 
    },
    { 
      icon: <Home size={32} />, 
      title: "Service Modes", 
      desc: "In-Studio or On-Site service",
      bg: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400" 
    },
    { 
      icon: <CreditCard size={32} />, 
      title: "Secure Payment", 
      desc: "Hassle-free digital transactions",
      bg: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400" 
    },
    { 
      icon: <Activity size={32} />, 
      title: "Live Tracking", 
      desc: "Monitor service status live",
      bg: "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400" 
    },
    { 
      icon: <Star size={32} />, 
      title: "Ratings", 
      desc: "Trusted feedback system",
      bg: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400" 
    },
    { 
      icon: <BellRing size={32} />, 
      title: "Notifications", 
      desc: "Instant updates on booking",
      bg: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" 
    },
  ];
  return (
    <section className='rounded-2xl my-2 bg-white dark:bg-base-100 py-24 px-6 md:px-12 transition-colors duration-300'>
      <div className='max-w-7xl mx-auto'>
 <div className="text-center mb-16 ">
        <h1 className="text-3xl md:text-5xl text-slate-800 dark:text-cyan-400 font-black mb-4">
          Smart Management System
        </h1>
         <p className='text-slate-600 mb-4 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed'>
            Everything you need to manage your event decorations in one seamless digital platform.
          </p>
        <div className="w-20 h-1 bg-cyan-600 mx-auto rounded-full"></div>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -8 }}
              className='group p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-cyan-500/30 transition-all duration-300'
            >
              <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500`}>
                {feature.icon}
              </div>           
              <h2 className='font-bold text-slate-900 dark:text-white text-xl mb-2'>
                {feature.title}
              </h2>
              <p className='text-slate-600 dark:text-gray-400 text-sm leading-relaxed'>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner2;