import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import useUser from "../../hooks/useUser";
import { useQuery, useMutation } from "@tanstack/react-query";
import RouteError from "../../Routes/RouteError";
import RouteLoder from "../../Routes/RouteLoder";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { MdOutlineAttachMoney, MdOutlineTimer, MdCategory } from "react-icons/md";
import { SiNamecheap } from "react-icons/si";
import { ImMail4 } from "react-icons/im";
import { HiOutlineLocationMarker } from "react-icons/hi";
import toast from "react-hot-toast";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { user } = useAuth();
  const [modal, setModal] = useState(false);
  const axios = useUser();

  const { mutateAsync } = useMutation({
    mutationFn: async (bookingData) => {
      const result = await axios.post("/serviceBooking", bookingData);
      return result.data;
    },
  });

  const { data: service, isLoading, isError, refetch } = useQuery({
    queryKey: ["service-Details", id],
    queryFn: async () => {
      const result = await axios.get(`/Service/${id}`);
      return result.data;
    },
    retry: false,
  });

  if (isLoading) return <RouteLoder />;
  if (isError) return <RouteError />;

  const handleBooking = async (data) => {
    if (!user?.email) {
      toast.error('Please Login First');
      navigate('/login', { state: location.pathname });
      return;
    }
    const booking = {
      serviceName: service.serviceName,
      servicePrice: service.servicePrice,
      clientId: service._id,
      decorator: service.decorator,
      status: "pending",
      createdAt: new Date(),
      client: {
        clientAddress: data.userAddress,
        contactNumber: data.contactNumber,
        clientEmail: user.email,
      }
    };

    try {
      await mutateAsync(booking);
      toast.success("Service booked successfully!");
      setModal(false);
      refetch();
    } catch (err) {
      toast.error("Booking failed!");
    }
  };

  return (
    <div className="bg-base-100 text-base-content min-h-screen py-6 md:py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-base-200 p-4 md:p-8 rounded-3xl shadow-xl">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img 
              src={service.servicePhoto} 
              alt={service.serviceName} 
              className="w-full h-64 md:h-[400px] lg:h-full object-cover rounded-2xl shadow-md transition-transform duration-500 hover:scale-[1.02]" 
            />
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <h1 className="text-2xl md:text-4xl font-extrabold text-cyan-700 dark:text-cyan-400">
                  {service.serviceName}
                </h1>
                <div className="badge badge-accent badge-outline p-4 whitespace-nowrap flex items-center gap-1 font-bold">
                  <MdOutlineTimer className="text-lg" /> {service.serviceDuration}
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold mb-6">
                 <MdCategory className="text-cyan-600" /> {service.category}
              </div>

              <p className="text-base md:text-lg leading-relaxed opacity-80 mb-6">
                {service.serviceDescription}
              </p>

              <div className="divider opacity-20"></div>

              {/* Features & Price */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
                <div>
                  <h3 className="text-xl font-bold text-cyan-700 dark:text-cyan-400 mb-2">Features</h3>
                  <p className="text-sm md:text-base opacity-75 leading-relaxed">
                    {service.serviceFeatures}
                  </p>
                </div>
                <div className="bg-base-300 p-6 rounded-2xl text-center flex flex-col justify-center">
                  <span className="text-xs uppercase font-bold opacity-50 mb-1">Total Charge</span>
                  <h2 className="text-3xl font-black flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <MdOutlineAttachMoney className="text-2xl" />{service.servicePrice}
                  </h2>
                </div>
              </div>
            </div>

            {/* Action & Decorator */}
            <div className="mt-6 pt-6 border-t border-base-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-xl uppercase">
                    {service.decorator.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm opacity-60 uppercase tracking-tighter">Decorator</h4>
                    <p className="font-bold text-lg leading-none">{service.decorator.name}</p>
                  </div>
                </div>
                <button 
                  onClick={() => user?.email ? setModal(true) : navigate('/login', { state: location.pathname })}
                  className="btn btn-neutral sm:btn-wide rounded-xl shadow-lg hover:shadow-cyan-500/20"
                >
                  Book Service Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Modal */}
      {modal && (
        <div className="modal modal-open modal-bottom sm:modal-middle backdrop-blur-sm">
          <div className="modal-box bg-base-100 border border-base-300">
            <h3 className="font-black text-2xl text-cyan-600 mb-2">Book Service</h3>
            <p className="font-bold opacity-70 mb-6">Project: {service.serviceName}</p>
            
            <form onSubmit={handleSubmit(handleBooking)} className="space-y-4">
              <div className="form-control">
                <label className="label font-bold text-xs uppercase opacity-60">Your Email</label>
                <input defaultValue={user.email} disabled className="input input-bordered bg-base-200" />
              </div>

              <div className="form-control">
                <label className="label font-bold text-xs uppercase opacity-60">Event Address</label>
                <input 
                  {...register("userAddress", { required: "Address is required" })} 
                  className={`input input-bordered focus:border-cyan-500 ${errors.userAddress ? 'border-red-500' : ''}`} 
                  placeholder="Street, City" 
                />
                {errors.userAddress && <span className="text-red-500 text-xs mt-1">{errors.userAddress.message}</span>}
              </div>

              <div className="form-control">
                <label className="label font-bold text-xs uppercase opacity-60">Contact Number</label>
                <input 
                  {...register("contactNumber", { required: "Number is required" })} 
                  className={`input input-bordered focus:border-cyan-500 ${errors.contactNumber ? 'border-red-500' : ''}`} 
                  placeholder="017xxxxxxxx" 
                />
                {errors.contactNumber && <span className="text-red-500 text-xs mt-1">{errors.contactNumber.message}</span>}
              </div>

              <div className="modal-action">
                <button type="button" onClick={() => setModal(false)} className="btn btn-ghost rounded-xl">Cancel</button>
                <button type="submit" className="btn bg-cyan-600 hover:bg-cyan-700 text-white border-none rounded-xl px-8">Confirm</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;