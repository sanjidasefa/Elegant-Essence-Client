import React, { useState } from 'react';
import useUser from '../../../hooks/useUser';
import { useQuery } from '@tanstack/react-query';
import RouteLoder from '../../../Routes/RouteLoder';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { MdOutlineAttachMoney, MdOutlineDelete } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { useForm } from 'react-hook-form';

const ALlService = () => {
  const [modal, setModal] = useState(false);
     const [selectProject , setSelectProject] = useState(null)
        const {
           register,
           handleSubmit,
         } = useForm();
   const axios = useUser();
  const {
    data = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["All-Service"],
   
    queryFn: async () => {
      const data = await axios.get(`/all-services`);
      // console.log(data.data);
      return data.data;
    },
  });
  if (isLoading) {
    return <RouteLoder></RouteLoder>;
  }

  if (isError) {
    return (
      <Link to="/" className="flex justify-center mt-20">
        <button className="btn">Go to Home</button>
      </Link>
    );
  }

    const handleDelete = async (id) => {
       Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
       }).then((result) => {
         if (result.isConfirmed) {
           axios.delete(`/service/${id}`);
           Swal.fire({
             title: "Deleted!",
             text: "Your service has been deleted.",
             icon: "success",
           });
           refetch();
         }
       });
     };
   const handleUpdate = async (data) =>{
  await axios.put(`/service/${selectProject._id}` , data)
  setModal(false)
  refetch()
  }

  return (
    <div>

        <div className='flex flex-wrap gap-10 justify-center items-center'>
              {
              data?.map(service => (
                 <div key={service._id} className="card bg-cyan-700 w-96 h-[500px] shadow-sm">
        <figure>
          <img
            src={service.servicePhoto}
            alt="" className=' ' />
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
           <div className='flex justify-between'>
              <button onClick={() => handleDelete(service._id)}>
               <MdOutlineDelete className="w-20 h-6" />
                            </button>
                            <button onClick={() => {
                                            setSelectProject(service) 
                                            setModal(true)}}><CiEdit className="w-20 h-6"/></button>
           </div>
        </div>
      </div>
              ))
            }
            </div>

                {modal && selectProject &&(
        <dialog
          open
          id="my_modal_5"
          className=" modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box bg-white text-cyan-700">
            <h3 className="font-bold "> Fill The Form For Book Our Service</h3>
            <p className="py-4 text-2xl text-cyan-800">{selectProject.serviceName}</p>
            <div>
              <form onSubmit={handleSubmit(handleUpdate)}>
                <div className=" text-2xl w-[400px] px-4">
                  <label className="label text-sm font-bold mt-1">
                    Service Provider Email
                  </label>
                  <input
                    {...register("clientEmail",)}
                    type="email"
                    className="input "
                    placeholder="Example@gmail.com"
                  />
                  <label className="label text-sm font-bold mt-1">
                    Service Name
                  </label>
                  <input
                    {...register("serviceName", )}
                    type="text"
                    className="input "
                    defaultValue={selectProject?.serviceName}
                  />
                  
                  <label className="label text-sm font-bold mt-1">
                   Service Features
                  </label>
                  <input
                    {...register("serviceFeatures", )}
                    type="text"
                    className="input "
                placeholder="Enter the updated Service Feactures"
                  />

                  <label className="label text-sm font-bold mt-1">
                   Service New Price(tk)
                  </label>
                  <input
                    {...register("servicePrice", )}
                    type="number"
                    className="input "
                    placeholder="Enter the updated Service Price"
              
                  />
                 
                </div>
                <div className="modal-action">
                  <button
                    type="button"
                    className="btn  rounded-2xl mt-3"
                    onClick={() => setModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn bg-white text-cyan-700 rounded-2xl mt-3"
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ALlService;