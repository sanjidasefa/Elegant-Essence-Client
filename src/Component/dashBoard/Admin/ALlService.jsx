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
  const [selectProject, setSelectProject] = useState(null)
  const { register, handleSubmit, reset } = useForm();
  const axios = useUser();

  const { data = [], isLoading, isError, refetch } = useQuery({
    queryKey: ["All-Service"],
    queryFn: async () => {
      const data = await axios.get(`/all-services`);
      return data.data;
    },
  });

  if (isLoading) return <RouteLoder />;

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center mt-20 gap-4">
        <h2 className="text-xl font-bold text-red-500">Something went wrong!</h2>
        <Link to="/"><button className="btn btn-primary">Go to Home</button></Link>
      </div>
    );
  }

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0891b2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`/service/${id}`);
        Swal.fire("Deleted!", "Service has been deleted.", "success");
        refetch();
      }
    });
  };

  const handleUpdate = async (updateData) => {
    await axios.put(`/service/${selectProject._id}`, updateData);
    setModal(false);
    Swal.fire("Updated!", "Service information updated.", "success");
    refetch();
    reset();
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-black text-slate-800 dark:text-white mb-8 border-l-4 border-cyan-500 pl-3">
        Manage <span className="text-cyan-600">Services</span>
      </h1>

      <div className='flex flex-wrap gap-8 justify-center items-center'>
        {data?.map(service => (
          <div key={service._id} className="card bg-white dark:bg-slate-900 w-96 shadow-xl border border-slate-100 dark:border-slate-800 transition-all hover:scale-[1.02]">
            <figure className="px-4 pt-4">
              <img
                src={service.servicePhoto}
                alt={service.serviceName}
                className='rounded-xl h-52 w-full object-cover' />
            </figure>
            <div className="card-body p-6">
              <div className="flex justify-between items-start">
                <h2 className="card-title text-slate-800 dark:text-white font-bold leading-tight">
                  {service.serviceName}
                </h2>
                <div className="badge bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 border-none p-3 font-bold">
                  <MdOutlineAttachMoney className="text-lg" /> {service.servicePrice}
                </div>
              </div>
              
              <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-3 my-2">
                {service.serviceDescription}
              </p>

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleDelete(service._id)}
                    className="btn btn-circle btn-sm btn-ghost text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                    title="Delete"
                  >
                    <MdOutlineDelete size={22} />
                  </button>
                  <button 
                    onClick={() => {
                      setSelectProject(service);
                      setModal(true);
                    }}
                    className="btn btn-circle btn-sm btn-ghost text-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-900/20"
                    title="Edit"
                  >
                    <CiEdit size={22} strokeWidth={1} />
                  </button>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {new Date(service.createAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modal && selectProject && (
        <div className="modal modal-open modal-bottom sm:modal-middle">
          <div className="modal-box bg-white dark:bg-slate-900 text-slate-800 dark:text-white border dark:border-slate-700 shadow-2xl">
            <h3 className="font-black text-xl mb-2">Update Service</h3>
            <p className="text-cyan-600 dark:text-cyan-400 font-bold mb-4">{selectProject.serviceName}</p>
            
            <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">
              <div className="form-control">
                <label className="label text-xs font-bold uppercase text-slate-500">Provider Email</label>
                <input
                  {...register("clientEmail")}
                  type="email"
                  className="input input-bordered w-full bg-slate-50 dark:bg-slate-800 dark:border-slate-700"
                  placeholder="Example@gmail.com"
                  defaultValue={selectProject.clientEmail} // Logic adjustment: prepopulate if exists
                />
              </div>

              <div className="form-control">
                <label className="label text-xs font-bold uppercase text-slate-500">Service Name</label>
                <input
                  {...register("serviceName")}
                  type="text"
                  className="input input-bordered w-full bg-slate-50 dark:bg-slate-800 dark:border-slate-700"
                  defaultValue={selectProject?.serviceName}
                />
              </div>
              
              <div className="form-control">
                <label className="label text-xs font-bold uppercase text-slate-500">Service Features</label>
                <input
                  {...register("serviceFeatures")}
                  type="text"
                  className="input input-bordered w-full bg-slate-50 dark:bg-slate-800 dark:border-slate-700"
                  placeholder="Feature 1, Feature 2..."
                />
              </div>

              <div className="form-control">
                <label className="label text-xs font-bold uppercase text-slate-500">Price (TK)</label>
                <input
                  {...register("servicePrice")}
                  type="number"
                  className="input input-bordered w-full bg-slate-50 dark:bg-slate-800 dark:border-slate-700"
                  defaultValue={selectProject.servicePrice}
                />
              </div>

              <div className="modal-action">
                <button type="button" className="btn btn-ghost text-slate-500" onClick={() => setModal(false)}>Cancel</button>
                <button type="submit" className="btn bg-cyan-600 hover:bg-cyan-700 text-white border-none px-8">Update Service</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ALlService;