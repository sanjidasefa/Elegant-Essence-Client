import React, { useState } from 'react';
import { Link } from 'react-router';
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdOutlineTimer } from "react-icons/md";
import { useQuery } from '@tanstack/react-query';
import useUser from '../../hooks/useUser';
import RouteLoder from '../../Routes/RouteLoder';

const Service = () => {
  //const serviceData = useLoaderData([])
  //console.log(serviceData)
  const [search, setSearch] = useState("");
 const axios = useUser()
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

  return (
    <div className='bg-white p-20'>

<div className='flex justify-center items-center'>
  <label className="input w-1/3 mb-10 bg-cyan-200 text-cyan-800 outline-2 ">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
  <input type="search" placeholder="Search" value={search} onChange={e=> setSearch(e.target.value)} className=''/>
</label>
</div>
      <div className='flex flex-wrap gap-10 justify-center items-center'>
        {
        data?.map(service => (
           <div key={service._id} className="card bg-cyan-700 w-96 shadow-sm">
  <figure>
    <img
      src={service.servicePhoto}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {service.serviceName}

    </h2>
      <div className="badge p-3 font-bold text-lg"><MdOutlineAttachMoney />{service.servicePrice}</div>
    <p>{service.serviceDescription}</p>
    <div className="card-actions justify-end">
      <div className="text-cyan-300 text-xs">{service.createAt}</div>
    </div>
    <Link className='text-pink-400' to={`/Service/${service._id}`}>See More ..</Link>
  </div>
</div>
        ))
      }
      </div>
    </div>
  );
};

export default Service;