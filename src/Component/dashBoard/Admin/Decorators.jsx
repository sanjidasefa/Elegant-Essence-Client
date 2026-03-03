import React from "react";
import useUser from "../../../hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import RouteLoder from "../../../Routes/RouteLoder";
import { Link } from "react-router";
import { Star, Briefcase, Award, Zap, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Decorators = ({ limit }) => {
  const axios = useUser();
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Decorators"],
    queryFn: async () => {
      const res = await axios.get(`/decorators-list`);
      return res.data;
    },
  });

  if (isLoading) return <RouteLoder />;
  if (isError) {
    return (
      <Link to="/" className="flex justify-center mt-20">
        <button className="btn btn-outline border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white transition-all">Go to Home</button>
      </Link>
    );
  }
  const iflimit = limit ? data.slice(0, limit) : data;
  return (
    <div className="bg-white dark:bg-base-100 py-16 px-6 md:px-12 lg:px-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
      
       <div className="text-center mb-10 md:mb-16">
        <h1 className="text-3xl md:text-5xl text-slate-800 dark:text-cyan-400 font-black mb-4">
           Our Creative Decorators
        </h1>
        <div className=" w-20 h-1 bg-cyan-600 mx-auto rounded-full"></div>
  <Link to="/Decorators-List" className="mt-10 text-cyan-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
            See All Professionals <ChevronRight size={20} />
          </Link>
      </div>    
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {iflimit.map((decorator, index) => (
            <motion.div
              key={decorator._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-cyan-500/30 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-cyan-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-cyan-900/20">
                  {decorator.name.charAt(0)}
                </div>
                <div className="flex items-center gap-1 bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
                  <Star size={16} className="text-amber-400 fill-amber-400" />
                  <span className="font-bold text-slate-800 dark:text-slate-200">{decorator.rating}</span>
                </div>
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-cyan-600 transition-colors">
                {decorator.name}
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <Award size={18} className="text-cyan-600 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xs font-black uppercase text-slate-400 dark:text-slate-500 tracking-wider">Specialties</h3>
                    <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                      {decorator.specialties}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Zap size={18} className="text-cyan-600 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xs font-black uppercase text-slate-400 dark:text-slate-500 tracking-wider">Top Service</h3>
                    <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                      {decorator.topServices}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Stats */}
              <div className="flex justify-between pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Briefcase size={16} className="text-slate-400" />
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">
                    {decorator.experienceYears} Years Exp.
                  </span>
                </div>
                <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase">
                  {decorator.totalReviews} Reviews
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Decorators;