import React, { useState } from "react";
import useUser from "../../../hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../hooks/useAuth";
import RouteLoder from "../../../Routes/RouteLoder";
import { Link } from "react-router";
import { CiEdit } from "react-icons/ci";
import { MdOutlineAttachMoney, MdOutlineDelete, MdOutlineTimer } from "react-icons/md";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Projects = () => {
  const axios = useUser();
   const [modal, setModal] = useState(false);
   const [selectProject , setSelectProject] = useState(null)
  const { user } = useAuth();
   const {
      register,
      handleSubmit,
      
    } = useForm();
  const {
    data = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["my-Percels", user?.email],
    enabled : !!user?.email ,
    queryFn: async () => {
      const data = await axios.get(`/my-projects?email=${user.email}`);
      //console.log(data.data);
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
  // console.log(data)
  await axios.put(`/service/${selectProject._id}` , data)
  setModal(false)
  refetch()
  }

  return (
    <div className="p-10 bg-cyan-100 ">
      <h1 className="text-4xl  font-bold text-center text-cyan-800 ">
        My Projects
      </h1>
      <p className="text-xl font-bold text-cyan-800">
        {" "}
        projects : {data.length}
      </p>
      {data.map((project) => {
        return (
          <div className="bg-white shadow-2xl my-3 rounded-2xl p-5">
            <div className="flex gap-10">
              <figure>
                <img
                  src={project.servicePhoto}
                  alt=""
                  className="w-80 h-40 rounded-2xl"
                />
              </figure>
              <div>
                <h1 className="text-2xl text-cyan-800 font-bold">
                  {project.serviceName}
                </h1>
                <p className="text-gray-500 my-3">
                  {project.serviceDescription}
                </p>
                <div className="flex justify-between text-cyan-400">
                  <p className="flex justify-center text-xl font-bold  items-center"><MdOutlineAttachMoney />{project.servicePrice}</p>
                  <p className="flex justify-center items-center"> <MdOutlineTimer />{project.serviceDuration}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-3 text-cyan-500">
              <p>Date : {project.ceatedAt} </p>
             <div>
               <td>
                <button onClick={() => handleDelete(project._id)}>
                  <MdOutlineDelete className="w-20 h-6" />
                </button>
              </td>
              <td><button onClick={() => {
                setSelectProject(project) 
                setModal(true)}}><CiEdit className="w-20 h-6"/></button></td>
             </div>
            </div>
          </div>
        );
      })}

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
                    defaultValue={user.email}
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
                    // placeholder="Enter the updated Service Feactures"
                    defaultValue={selectProject.serviceFeatures}
                  />

                  <label className="label text-sm font-bold mt-1">
                   Service New Price(tk)
                  </label>
                  <input
                    {...register("servicePrice", )}
                    type="number"
                    className="input "
                    placeholder="Enter the updated Service Price"
                    defaultValue={selectProject?.servicePrice}
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

export default Projects;
