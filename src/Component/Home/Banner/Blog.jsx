import React, { use } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const blog = fetch("/Blog.json").then((res) => res.json());

const Blog = ({ limit }) => {
  const blogData = use(blog);
  const iflimit = limit ? blogData.slice(0, limit) : blogData;

  return (
    <div className="bg-white dark:bg-base-100 py-8 md:py-16 px-6 transition-colors duration-300">
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-3xl md:text-5xl text-slate-800 dark:text-cyan-400 font-black mb-4">
          Latest Decoration Insights
        </h1>
        <div className="w-20 h-1 bg-cyan-600 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
        {iflimit.map((data, index) => (
          <motion.div
            key={data.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[350px]"
          >
            <div className="h-1.5 w-0 group-hover:w-full bg-cyan-600 transition-all duration-500"></div>
            <div className="p-6 md:p-8 flex flex-col h-full flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-lg">
                  Event Ideas
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {data.date}
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                {data.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {data.excerpt}
              </p>
              {/* Footer */}
              <div className="pt-5 border-t border-gray-50 dark:border-slate-800 flex justify-between items-center mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                    AD
                  </div>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    By Admin
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
