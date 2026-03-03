import React from "react";
import { Link, useLoaderData } from "react-router";
import { MdOutlineAttachMoney } from "react-icons/md";
import { motion } from "framer-motion";
import Banner from "./Banner/Banner";
import Banner2 from "./Banner/Banner2";
import Banner3 from "./Banner/Banner3";
import Decorators from "../dashBoard/Admin/Decorators";
import FAQ from "../About/FAQ";
import Sponsors from "./Banner/Sponsors";
import Blog from "./Banner/Blog";
import Login from "../Auth/Login";

const Home = () => {
  const serviceData = useLoaderData();

  return (
    <div className="bg-white dark:bg-base-100 min-h-screen">
      <div className="p-5 lg:p-10">
        <Banner3 />
      </div>
      <Login />
      <Banner />
      <Sponsors />
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
              Our Service <span className="text-cyan-600">Packages</span>
            </h1>
            <div className="w-24 h-1.5 bg-cyan-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {serviceData?.slice(0, 8).map((service, index) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700"
              >
                <figure className="relative h-56 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={service.servicePhoto}
                    alt={service.serviceName}
                  />
                  <div className="absolute top-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-cyan-600 px-4 py-1.5 rounded-2xl font-black text-sm shadow-xl flex items-center gap-1">
                    <MdOutlineAttachMoney size={18} /> {service.servicePrice}
                  </div>
                </figure>
                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 transition-colors">
                    {service.serviceName}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-6 flex-grow">
                    {service.serviceDescription}
                  </p>
                  <Link
                    to={`/Service/${service._id}`}
                    className="w-full py-4 rounded-2xl bg-slate-900 dark:bg-cyan-600 text-white font-bold text-center transition-all hover:bg-cyan-600"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link
            to="/Service"
            className="group flex items-center gap-2 text-cyan-600 font-black tracking-widest uppercase text-xs"
          >
            View All Packages
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </Link>
        </div>
      </section>

      <div className="py-20 bg-white dark:bg-base-100 border-y bordera-slte-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <Decorators limit={3} />
          <div className="flex justify-center mt-12">
            <Link
              to="/Decorators-List"
              className="group flex items-center gap-2 text-cyan-600 font-black tracking-widest uppercase text-xs"
            >
              View All Experts{" "}
              <span className="group-hover:translate-x-2 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Banner2 />
      <FAQ />

      <div className="p-20 bg-white dark:bg-base-100 border-y bordera-slte-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <Blog limit={4} />
          <div className="flex justify-center mt-12">
            <Link
              to="/Blog-Preview"
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-cyan-600 transition-all shadow-lg"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
