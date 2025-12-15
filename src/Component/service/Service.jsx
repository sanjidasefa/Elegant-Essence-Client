import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdOutlineTimer } from "react-icons/md";

const Service = () => {
  const serviceData = useLoaderData()
  //console.log(serviceData)
  return (
    <div className='bg-white p-20'>
      <div className='flex flex-wrap gap-10 justify-center items-center'>
        {
        serviceData.map(service => (
           <div key={service._id} className="card bg-cyan-700 w-96 shadow-sm">
  <figure>
    <img
      src={service.servicePhoto}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {service.serviceName}
      <div className="badge ml-12 badge-outline"><MdOutlineTimer />{service.serviceDuration}</div>
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