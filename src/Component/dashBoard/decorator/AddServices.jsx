import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";
import { signInData } from "../../../utilities/img";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import add from '../../../assets/add.png';
import toast from "react-hot-toast";

const AddServices = () => {
  const { user } = useAuth();
  const urlAxios = useUser();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const { mutateAsync } = useMutation({
    mutationFn: async (addedService) => await urlAxios.post("/service", addedService),
  });

  const onSubmitSign = async (data) => {
    const toastId = toast.loading('Uploading service data...');
    try {
      const { serviceName, servicePrice, serviceDuration, category, serviceFeatures, serviceDescription, serviceUnit } = data;
      const serviceImg = data.servicePhoto[0];
      const servicePhoto = await signInData(serviceImg);

      const serviceData = {
        servicePhoto,
        serviceName,
        servicePrice: Number(servicePrice),
        serviceDuration,
        serviceUnit,
        category,
        serviceFeatures: serviceFeatures.split(',').map(f => f.trim()),
        serviceDescription,
        createdAt: new Date(),
        decorator: {
          name: user?.displayName,
          email: user?.email,
          photo: user?.photoURL,
        },
      };

      Swal.fire({
        title: "Confirm Addition?",
        text: `Add "${serviceName}" to your service list?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#0891b2",
        cancelButtonColor: "#1e293b",
        confirmButtonText: "Yes, Add it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await mutateAsync(serviceData);
          toast.success('Service added successfully!', { id: toastId });
          Swal.fire("Success!", "Service has been listed.", "success");
          reset();
        } else {
          toast.dismiss(toastId);
        }
      });
    } catch (error) {
      toast.error('Something went wrong!', { id: toastId });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-0">
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-cyan-50 dark:bg-cyan-950/20 p-10 flex flex-col justify-center items-center text-center">
            <img src={add} alt="Add Service" className="w-64 h-64 object-contain mb-8" />
            <h1 className="text-3xl font-black text-slate-800 dark:text-white mb-4">Add Your Service</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
             Complete the form below to showcase your decoration services. Providing clear and accurate details helps clients book your services instantly
            </p>
          </div>
          <div className="lg:w-3/5 p-8 md:p-12">
            <form onSubmit={handleSubmit(onSubmitSign)} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
       <div className="form-control md:col-span-2">
                <label className="block text-sm font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1 mb-3">
                  Service Name
                </label>
                <input
                  {...register("serviceName", { required: "Name is required" })}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 ring-cyan-500 outline-none text-slate-700 dark:text-slate-200 transition-all font-medium"
                  placeholder="e.g. Premium Wedding Package"
                />
                {errors.serviceName && <span className="text-red-500 text-xs mt-1 ml-2 font-bold">{errors.serviceName.message}</span>}
              </div>
              <div className="form-control">
                <label className="block text-sm font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1 mb-3">
                  Price (TK)
                </label>
                <input
                  type="number"
                  {...register("servicePrice", { required: true })}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 ring-cyan-500 outline-none text-slate-700 dark:text-slate-200 transition-all font-medium"
                  placeholder="5000"
                />
              </div>
              <div className="form-control">
                <label className="block text-sm font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1 mb-3">
                  Per Unit
                </label>
                <input
                  {...register("serviceUnit", { required: true })}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 ring-cyan-500 outline-none text-slate-700 dark:text-slate-200 transition-all font-medium"
                  placeholder="e.g. Per Event"
                />
              </div>
              <div className="form-control md:col-span-2">
                <label className="block text-sm font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1 mb-3">
                  Service Photo
                </label>
                <input
                  type="file"
                  {...register("servicePhoto", { required: true })}
                  className="file-input w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 ring-cyan-500 outline-none"
                />
              </div>
              <div className="form-control">
                <label className="block text-sm font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1 mb-3">
                  Category
                </label>
                <select {...register("category")} className="select w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 ring-cyan-500 outline-none text-slate-600 dark:text-slate-300">
                  <option value="Wedding">Wedding Decor</option>
                  <option value="Birthday">Birthday Party</option>
                  <option value="Corporate">Corporate Event</option>
                </select>
              </div>
              <div className="form-control">
                <label className="block text-sm font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1 mb-3">
                  Duration
                </label>
                <input
                  {...register("serviceDuration", { required: true })}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 ring-cyan-500 outline-none text-slate-700 dark:text-slate-200 transition-all font-medium"
                  placeholder="e.g. 12 Hours"
                />
              </div>
              <div className="form-control md:col-span-2">
                <label className="block text-sm font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1 mb-3">
                  Features (Comma Separated)
                </label>
                <input
                  {...register("serviceFeatures", { required: true })}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 ring-cyan-500 outline-none text-slate-700 dark:text-slate-200 transition-all font-medium"
                  placeholder="Lighting, Stage Decor, Photo Booth"
                />
              </div>
              <div className="form-control md:col-span-2">
                <label className="block text-sm font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1 mb-3">
                  Detailed Description
                </label>
                <textarea
                  {...register("serviceDescription", { required: true })}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 ring-cyan-500 outline-none text-slate-700 dark:text-slate-200 transition-all font-medium h-32 resize-none"
                  placeholder="Write details about your amazing service..."
                />
              </div>
              <div className="md:col-span-2 pt-4">
                <button type="submit" className="w-full py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-lg shadow-cyan-200 dark:shadow-none transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Publish My Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;