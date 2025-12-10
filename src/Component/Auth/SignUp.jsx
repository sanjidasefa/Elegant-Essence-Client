import React from "react";
import { Link, useNavigate } from "react-router";
import Navber from "../Shared/Navber";
import Footer from "../Shared/Footer";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { auth } from "../../firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { signInData } from "../../utilities/img";

const SignUp = () => {
  const { createUser, google } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmitSign = (data) => {
    console.log(data);
    const photoData = data.photo[0];

    createUser(data.email, data.password)
      .then((res) => {
        console.log(res);
        return (
          signInData(photoData)
            .then((imgURL) => {
              const obj = {
                displayName: data.name,
                photoURL: imgURL,
              };
              updateProfile(auth.currentUser, obj)
                .then(() => {
                  console.log("data updated");
                  navigate(location?.state || "/");
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err))
        );
      })
      .catch((error) => console.log(error));
  };
  const handleGoogle = () => {
    google()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const onError = (errors) => {
    console.log("Validation errors:", errors);
  };

  return (
    <>
      <Navber></Navber>
      <div
        className="hero bg-base-200 min-h-150 "
        style={{
          backgroundImage: "url(bg2.jpg)",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
            <p className="py-6 font-semibold text-lg">
              StyleDecor lets you create an account to explore decoration
              packages, check decorator availability, select a date & time,
              choose a service mode, make payments, and track your service
              status easily.
            </p>
          </div>
          <div className="card bg-cyan-900 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmitSign, onError)}>
                <fieldset className="fieldset ">
                  <legend className="fieldset-legend">Please SignUP </legend>

                  <label className="label">Photo</label>
                  <input
                    {...register("photo", { required: true })}
                    type="file"
                    className="file-input"
                    placeholder="Enter your photo"
                  />
                  {errors.photo?.type === "required" && (
                    <p className="text-red-600">
                      Please Enter Your Photo For Your Account
                    </p>
                  )}

                  <label className="label">Name</label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="input"
                    placeholder="Enter your Name"
                  />
                  {errors.name?.type === "required" && (
                    <p className="text-red-600">please enter Your Name </p>
                  )}

                  <label className="label">Email</label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="input"
                    placeholder="Example@gmail.com"
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-red-600">Email not valid </p>
                  )}

                  <label className="label">Password</label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
                    })}
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Give a not valid Password</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      please Give at least 8 Character{" "}
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      please Give at least 8 Character and One UpperCase , One
                      LowerCase , One Digit .{" "}
                    </p>
                  )}

                  <button type="submit" className="btn btn-neutral mt-4">
                    Sign-Up
                  </button>
                  <h1>
                    if you have an account , please{" "}
                    <Link to="/" className="text-blue-400 underline">
                      Log In
                    </Link>
                  </h1>
                </fieldset>
              </form>
              <h1 className="text-lg mt-2 font-bold text-center ">OR,</h1>
              <button onClick={handleGoogle} className="btn btn-neutral mt-2">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Sign-Up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SignUp;
