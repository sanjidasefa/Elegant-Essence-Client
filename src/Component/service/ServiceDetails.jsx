import React, { useState } from "react";
import { Link, useParams } from "react-router";
import useUser from "../../hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import RouteError from "../../Routes/RouteError";
import RouteLoder from "../../Routes/RouteLoder";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { MdOutlineAttachMoney, MdOutlineTimer } from "react-icons/md";
import { SiNamecheap } from "react-icons/si";
import { ImMail4 } from "react-icons/im";
import { PiPhoneCallFill } from "react-icons/pi";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const ServiceDetails = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const [modal, setModal] = useState(false);
  const axios = useUser();
  const { mutateAsync } = useMutation({
    mutationFn: async (bookingData) => {
      const result = await axios.post("/serviceBooking", bookingData);
      return result.data;
    },
  });
  const {
    data: service = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["service-Details", id],
    queryFn: async () => {
      const result = await axios.get(`/Service/${id}`);
      return result.data;
    },
    retry: false,
  });

  if (isLoading) {
    return <RouteLoder></RouteLoder>;
  }

  if (isError) {
    return <RouteError></RouteError>;
  }

  const handleBooking = async (data) => {
    const booking = {
      serviceName: service.serviceName,
      servicePrice: service.servicePrice,
      clientEmail: user.email,
      clientId: service._id,
      clientAddress: data.userAddress,
      contactNumber: data.contactNumber,
      status: "pending",
      createdAt: new Date(),
    };
    console.log(booking);
    const res = await mutateAsync(booking);
    toast.success(
      "your Service is booked successfully , please check your booking list for pay "
    );
    console.log("Inserted ID:", res.insertedId);
    refetch();
  };

  return (
    <div className="bg-white p-8 md:p-20">
      <div className="bg-cyan-100 p-10 rounded-2xl shadow-2xl">
        <div className="flex flex-col lg:flex-row gap-10">
          <div>
            <img src={service.servicePhoto} alt="" className="rounded-2xl " />
          </div>
          <div>
            <div className="lg:flex justify-between  items-center">
              <h1 className="font-bold text-3xl text-cyan-800">
                {service.serviceName}
              </h1>
              <div className="badge mt-3 lg:mt-0 badge-outline text-gray-500">
                <MdOutlineTimer />
                {service.serviceDuration}
              </div>
            </div>
            <h1 className="font-bold text-3xl text-gray-500   ">
              category {service.category}
            </h1>
            <p className="text-gray-500 font-semibold my-4">
              {service.serviceDescription}
            </p>
            <div className="divider divider-info"></div>

            <div className="flex justify-between">
              <div className="my-2 w-50">
                <h1 className="text-cyan-600 font-bold text-2xl ">
                  Features :
                </h1>
                <p className="text-gray-500 font-semibold">
                  {service.serviceFeatures}
                </p>
              </div>
              <div className="">
                <h1 className="text-cyan-600 font-bold text-2xl ">
                  Total Charge :
                </h1>
                <h1 className="text-gray-500 font-bold text-3xl flex items-center justify-end">
                  <MdOutlineAttachMoney />
                  {service.servicePrice}
                </h1>
                <div className="flex mt-10 justify-end">
                  <button
                    className="btn btn-neutral mt-4 shadow-2xl "
                    onClick={() => setModal(true)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider divider-info"></div>
        <div>
          <h1 className="text-cyan-600 font-bold text-2xl">
            Decorator Details :{" "}
          </h1>
          <h1 className="text-gray-500 font-semibold flex items-center gap-2 text-xl my-2">
            <SiNamecheap /> {service.decorator.name}
          </h1>
          <p className="text-gray-500 my-1 font-semibold flex items-center gap-2">
            <PiPhoneCallFill /> {service.decorator.number}
          </p>
          <p className="text-gray-500 font-semibold flex items-center gap-2">
            <ImMail4 /> {service.decorator.email}
          </p>
        </div>
      </div>

      {modal && (
        <dialog
          open
          id="my_modal_5"
          className=" modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box bg-white text-cyan-700">
            <h3 className="font-bold "> Fill The Form For Book Our Service</h3>
            <p className="py-4 text-2xl">{service.serviceName}</p>
            <div>
              <form onSubmit={handleSubmit(handleBooking)}>
                <div className=" text-2xl w-[400px] px-4">
                  <label className="label text-sm font-bold mt-1">
                    Service Provider Email
                  </label>
                  <input
                    {...register("clientEmail", { required: true })}
                    type="email"
                    className="input "
                    placeholder="Example@gmail.com"
                    defaultValue={user.email}
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-red-600">Email not valid </p>
                  )}

                  <label className="label text-sm font-bold mt-1">
                    Your Address
                  </label>
                  <input
                    {...register("userAddress", { required: true })}
                    type="text"
                    className="input "
                    placeholder="Enter Your Address"
                  />
                  {errors.userAddress?.type === "required" && (
                    <p className="text-red-600 text-xs">Enter your address </p>
                  )}
                  <label className="label text-sm font-bold mt-1">
                    Your Contact Number
                  </label>
                  <input
                    {...register("contactNumber", { required: true })}
                    type="text"
                    className="input "
                    placeholder="Enter Your Contact Number"
                  />
                  {errors.contactNumber?.type === "required" && (
                    <p className="text-red-600 text-xs">
                      Enter your Contact Number{" "}
                    </p>
                  )}
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
                    Book Now
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

export default ServiceDetails;
