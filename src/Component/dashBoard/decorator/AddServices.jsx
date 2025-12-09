import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useAuth } from "../../../hooks/useAuth";
import { GrServicePlay } from "react-icons/gr";

const AddServices = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitSign = (data) => {
    console.log(data);
  };

  const onError = (errors) => {
    console.log("Validation errors:", errors);
  };

  return (
    <>
      <div className=" rounded-2xl p-10">
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
              <form onSubmit={handleSubmit(onSubmitSign, onError)}>
                <label className="label">Service Provider Email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="input"
                  placeholder="Example@gmail.com"
                  defaultValue={user.email}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600">Email not valid </p>
                )}

                <label className="label">Photo</label>
                <input
                  {...register("photo", { required: true })}
                  type="file"
                  className="file-input"
                  placeholder="Enter your photo"
                />
                {errors.photo?.type === "required" && (
                  <p className="text-red-600">
                    Please Enter Your Service Photo
                  </p>
                )}

                <label className="label">Service Name</label>
                <input
                  {...register("serviceName", { required: true })}
                  type="text"
                  className="input"
                  placeholder="Enter your Service Name"
                />

                <label className="label">Service Price</label>
                <input
                  {...register("servicePrice", { required: true })}
                  type="text"
                  className="input"
                  placeholder="Enter your Service Price"
                />

                <label className="label">Service Duration</label>
                <input
                  {...register("serviceDuration", { required: true })}
                  type="text"
                  className="input"
                  placeholder="Enter your Service Duration"
                />

                <label className="label">Add Service Mode</label>
                <input
                  {...register("serviceMode", { required: true })}
                  type="text"
                  className="input"
                  placeholder="Enter your Service Duration"
                />

                <label className="label">Add Service features </label>
                <input
                  {...register("serviceFeatures", { required: true })}
                  type="text"
                  className="input"
                  placeholder="Enter your Service Features"
                />

                <label className="label">Service Description</label>
                <textarea
                  {...register("serviceDescription", { required: true })}
                  placeholder="Enter your Service Description"
                  className="textarea textarea-primary"
                ></textarea>

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
