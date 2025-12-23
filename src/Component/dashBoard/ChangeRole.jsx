import React, { useState } from 'react';
import toast from "react-hot-toast";
import useRoles from '../../hooks/useRoles';
import { useAuth } from '../../hooks/useAuth';
import useUser from '../../hooks/useUser';
import { useForm } from 'react-hook-form';
import RouteLoder from '../../Routes/RouteLoder';

const ChangeRole = () => {
     const [modal, setModal] = useState(false);
      const [role , roleLoading] = useRoles();
      const {user} = useAuth();
      const axios = useUser()
       const {
          register,
          handleSubmit,
        } = useForm();
        const handleChangeRole = async ( data) =>{
       const response = await axios.post('/handleChangeRole' , {
        role : data.role,
       })
       toast.success('please wait for admin permission')
       setModal(false)
         console.log(data)
         console.log(response)
         
        }

      
      if (roleLoading) {
       return <RouteLoder></RouteLoder>;
     }
   return (
     <div>
       <div className="">
         <div className="p-10 rounded-2xl">
           <h1 className="text-4xl mb-5 font-bold text-center text-cyan-800 ">
             User to Decorator
           </h1>
           <div className="overflow-x-auto ">
             <table className="table table-xs ">
               <thead>
                 <tr className="text-cyan-800 ">
                   <th>Name</th>
                   <th> Email</th> 
                   <th>Default Role</th> 
 
                   <th>Update Role</th>
                 </tr>
               </thead>
               <tbody>
                 <tr className="text-cyan-800 ">
                   <th xlas>{user.displayName}</th>
                   <th> {user.email}</th> 
                   <th>{role}</th>
                   <th>
                     {
                       role === 'client' || role === 'decorator'? <button className="btn " onClick={() => setModal(true)}>Change Your Role</button> : <p className="">{role}</p>
                     }
                   </th>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
       </div>
        {modal && (
         <dialog
           open
           id="my_modal_5"
           className=" modal modal-bottom sm:modal-middle"
         >
           <div className="modal-box bg-white text-cyan-700">
             <h3 className="font-bold "> Fill The Form For Change Your Role</h3>
             <div>
               <form onSubmit={handleSubmit(handleChangeRole)}>
                 <div className=" text-2xl w-[400px] px-4">
                    <label className="label text-sm font-bold mt-1">
                     Write Your Update Role
                   </label>
                   <input
                     {...register("role", { required: true })}
                     type="text"
                     className="input "
                     placeholder="Decorator"
                     defaultValue={role}
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
                     Change
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
 

export default ChangeRole;