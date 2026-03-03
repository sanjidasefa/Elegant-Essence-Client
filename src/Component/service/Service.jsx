import React, { useState } from "react";
import { Link } from "react-router";
import { MdOutlineAttachMoney, MdCategory } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useUser from "../../hooks/useUser";
import RouteLoder from "../../Routes/RouteLoder";

const Service = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  const axios = useUser();

  const { data, isLoading } = useQuery({
    queryKey: ["services", search, category, sort],
    queryFn: async () => {
      const res = await axios.get(
        `/Service?search=${search}&category=${category}&sort=${sort}`
      );
      return res.data;
    },
  });

  if (isLoading) return <RouteLoder />;

  const paginatedData = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);

  return (
    <div className="bg-slate-50 dark:bg-base-100 min-h-screen py-16 px-6 md:px-12 lg:px-20 transition-colors duration-300">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-900 dark:text-cyan-400 mb-4 uppercase">
          Service Packages
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto font-medium">Find the perfect decor package tailored for your special moments.</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-16 bg-white dark:bg-slate-900 p-6 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="relative w-full max-w-md group">
          <input
            type="search"
            placeholder="Search services..."
            value={search}
            onChange={(e) => {setSearch(e.target.value); setCurrentPage(1);}}
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-base-200 border-none outline-none focus:ring-2 ring-cyan-500 transition-all text-gray-700 dark:text-white"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m21 21-4.3-4.3M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
          </svg>
        </div>
        <div className="flex items-center w-full lg:w-auto gap-2">
           <select 
            onChange={(e) => {setCategory(e.target.value); setCurrentPage(1);}}
            className="select select-bordered w-full lg:w-48 rounded-2xl bg-slate-50 dark:bg-base-200 border-none focus:ring-2 ring-cyan-500"
          >
            <option value="All">All Categories</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Corporate">Corporate</option>
          </select>
        </div>
        <div className="flex items-center w-full lg:w-auto gap-2">
          <select 
            onChange={(e) => {setSort(e.target.value); setCurrentPage(1);}}
            className="select select-bordered w-full lg:w-48 rounded-2xl bg-slate-50 dark:bg-base-200 border-none focus:ring-2 ring-cyan-500"
          >
            <option value="">Sort: Default</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {paginatedData?.length > 0 ? (
          paginatedData.map((service) => (
            <div key={service._id} className="group flex flex-col bg-white dark:bg-base-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-cyan-100 dark:hover:border-cyan-900">
              <figure className="relative h-60 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={service.servicePhoto} alt={service.serviceName} />
                <div className="absolute top-4 left-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                  <MdCategory /> {service.category || 'General'}
                </div>

                <div className="absolute bottom-4 right-4 bg-cyan-600 text-white px-4 py-2 rounded-2xl font-black shadow-lg">
                  TK {service.servicePrice}
                </div>
              </figure>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-xl font-black text-slate-800 dark:text-white mb-3 line-clamp-1 uppercase tracking-tight">{service.serviceName}</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-6 flex-grow leading-relaxed">{service.serviceDescription}</p>
                
                <Link to={`/Service/${service._id}`} className="w-full py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-black text-center transition-all hover:bg-cyan-600 hover:text-white uppercase text-xs tracking-[0.2em]">
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <h3 className="text-2xl font-black text-slate-300 uppercase tracking-widest">No matching services found</h3>
          </div>
        )}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-20 gap-3">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`w-12 h-12 rounded-2xl font-black transition-all ${currentPage === i + 1 ? "bg-cyan-600 text-white shadow-lg shadow-cyan-200 scale-110" : "bg-white dark:bg-slate-800 text-slate-400 hover:bg-cyan-50"}`}
              onClick={() => {setCurrentPage(i + 1); window.scrollTo(0, 0);}}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Service;