import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";
import { signInData } from "../../../utilities/img";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AddServices = () => {
  const { user } = useAuth();
  const urlAxios = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutateAsync } = useMutation({
    mutationFn: async (addedService) =>
      await urlAxios.post("/service", addedService),
  });

  const onSubmitSign = async (data) => {
    const {
      serviceName,
      servicePrice,
      serviceDuration,
      category,
      serviceFeatures,
      serviceDescription,
    } = data;
    const serviceImg = data.servicePhoto[0];
    const servicePhoto = await signInData(serviceImg);
    const serviceData = {
      servicePhoto: servicePhoto,
      serviceName,
      servicePrice: Number(servicePrice),
      serviceDuration,
      category,
      serviceFeatures,
      serviceDescription,
      ceatedAt: new Date().toLocaleDateString(),
      decorator: {
        name: user?.displayName,
        email: user?.email,
        photo: user.photoURL,
        number: user?.number,
      },
    };
    console.table(serviceData);
    Swal.fire({
      title: "Are you sure?",
      text: `Your service added`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#CAEB66",
      cancelButtonColor: "#03373D",
      confirmButtonText: "Add service",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await mutateAsync(serviceData).then((res) => {
          console.log(res.data);
        });
        Swal.fire({
          title: "Approved",
          text: "your selected percel send.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <div className="bg-cyan-50  p-10">
        <div className="flex justify-center items-center flex-col md:flex-row md:gap-10">
          <div className="">
            <h1 className="text-4xl  font-bold text-center text-cyan-800 ">
              Add Your Service{" "}
            </h1>
            <p className=" font-semibold text-center text-cyan-600 mt-5 mb-8 ">
              {" "}
              Please complete all required fields below to list a new service
              package on the StyleDecor platform. <br /> Customers will use this
              information to make their bookings.
            </p>
          </div>
          <div className="card bg-cyan-600 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmitSign)}>
                <label className="label mt-2">Service Provider Email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="input "
                  placeholder="Example@gmail.com"
                  defaultValue={user.email}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600">Email not valid </p>
                )}

                <label className="label mt-2">Photo</label>
                <input
                  {...register("servicePhoto")}
                  type="file"
                  className="file-input "
                  placeholder="Enter your photo"
                />

                <label className="label mt-2">Service Name</label>
                <input
                  {...register("serviceName", { required: true })}
                  type="text"
                  className="input "
                  placeholder="Enter your Service Name"
                />
                {errors.serviceName?.type === "required" && (
                  <p className="text-red-600">Enter your Name</p>
                )}

                <label className="label mt-2">Service Price</label>
                <input
                  {...register("servicePrice", { required: true })}
                  type="number"
                  className="input  "
                  placeholder="Enter your Service Price"
                />
                {errors.servicePrice?.type === "required" && (
                  <p className="text-red-600">Enter your Service Price </p>
                )}

                <label className="label mt-2">Service Duration</label>
                <input
                  {...register("serviceDuration", { required: true })}
                  type="text"
                  className="input "
                  placeholder="Enter your Service Duration"
                />

                {errors.serviceDuration?.type === "required" && (
                  <p className="text-red-600">Enter your Service Duration </p>
                )}

                <label className="mt-2">Category </label>
                <input
                  {...register("category")}
                  className="input "
                  placeholder="Enter your Service category"
                ></input>
                {errors.category?.type === "required" && (
                  <p className="text-red-600">Enter your Service Category </p>
                )}
                <label className="label mt-2">
                  Add Service features (comma separated)
                </label>
                <input
                  {...register("serviceFeatures", { required: true })}
                  type="text"
                  className="input  "
                  placeholder="Enter your Service Features"
                />
                {errors.serviceFeatures?.type === "required" && (
                  <p className="text-red-600">Enter your Service Features </p>
                )}
                <label className="label mt-2">Service Description</label>
                <textarea
                  {...register("serviceDescription", { required: true })}
                  placeholder="Enter your Service Description"
                  className="textarea textarea-primary  "
                ></textarea>
                {errors.serviceDescription?.type === "required" && (
                  <p className="text-red-600">Enter your Service Description</p>
                )}
                <button type="submit" className="btn btn-neutral mt-4 w-full">
                  Add Service
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddServices;
