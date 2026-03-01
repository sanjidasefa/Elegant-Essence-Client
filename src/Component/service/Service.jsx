import React, { useState } from "react";
import { Link } from "react-router";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdOutlineTimer } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useUser from "../../hooks/useUser";
import RouteLoder from "../../Routes/RouteLoder";

const Service = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [search, setSearch] = useState("");
  const axios = useUser();
  const { data, isLoading } = useQuery({
    queryKey: ["services", search],
    queryFn: async () => {
      const res = await axios.get(`/Service?search=${search}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <RouteLoder></RouteLoder>;
  }
  const paginatedData = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  const totalPages = Math.ceil(data?.length / itemsPerPage);
  return (
    <div className="bg-white p-20">
      <h1 className="text-3xl mb-10 md:text-5xl text-cyan-800 text-center font-bold">
        Our Service Package{" "}
      </h1>
      <div className="flex justify-center items-center">
        <label className="input w-2/3 lg:w-1/3 mb-10 bg-cyan-200 text-cyan-800 outline-2 ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=""
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center items-center">
        {paginatedData?.map((service) => (
          <div key={service._id} className="card bg-cyan-700  shadow-sm">
            <figure>
              <img
                className="w-full h-48 object-cover"
                src={service.servicePhoto}
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.serviceName}</h2>
              <div className="badge p-3 font-bold text-lg">
                <MdOutlineAttachMoney />
                {service.servicePrice}
              </div>
              <p>{service.serviceDescription}</p>
              <div className="card-actions justify-end">
                <div className="text-cyan-300 text-xs">{service.createAt}</div>
              </div>
              <Link
                className="btn bg-white text-cyan-800"
                to={`/Service/${service._id}`}
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex  join justify-center mt-10">
        <button
          className="join-item btn  btn-ghost text-cyan-800"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          «
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`join-item btn  btn-ghost text-cyan-800 ${currentPage === i + 1 ? "btn-active" : ""}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="join-item btn btn-ghost text-cyan-800"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Service;
