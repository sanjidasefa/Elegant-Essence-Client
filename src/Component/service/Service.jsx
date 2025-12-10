import React from 'react';
import { useLoaderData } from 'react-router';

const Service = () => {
  const serviceData = useLoaderData()
  console.log(serviceData)
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
      <div className="badge ml-12 badge-outline">{service.serviceDuration}</div>
    </h2>
      <div className="badge badge-secondary">{service.servicePrice}</div>
    <p>{service.serviceDescription}</p>
    <div className="card-actions justify-end">
      <div className="text-cyan-300 text-xs">{service.createAt}</div>
    </div>
  </div>
</div>
        ))
      }
      </div>
    </div>
  );
};

export default Service;