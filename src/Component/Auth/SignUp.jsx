import React from "react";
import { Link, useNavigate } from "react-router";
import Navber from "../Shared/Navber";
import Footer from "../Shared/Footer";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { auth } from "../../firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { saveUser, signInData } from "../../utilities/img";
import useUser from "../../hooks/useUser";
import toast from "react-hot-toast";

const SignUp = () => {
  const axios = useUser();
  const { createUser, google } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmitSign = async (data) => {
    console.log(data);
    const photoData = data.photo[0];

    const res = await createUser(data.email, data.password);

    signInData(photoData)
      .then((imgURL) => {
        const obj = {
          displayName: data.name,
          photoURL: imgURL,
        };
        const userInfo = {
          email: data.email,
          password: data.password,
          image: imgURL,
          number: data.number,
        };
        saveUser(axios, userInfo);
        toast.success('Sign UP successfully')
        updateProfile(auth.currentUser, obj)
          .then(() => {
            console.log("data updated");
            navigate(location?.state || "/");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    console.log(res);
  };

  const handleGoogle = async () => {
    const res = await google()
    const user = res.user
    const userInfo = {
      email: user.email,
      password: user.password,
      image: user.imgURL,
    };
    saveUser(axios, userInfo);
    navigate(location?.state || "/");
  };

  const onError = (errors) => {
    console.log("Validation errors:", errors);
  };

  return (
    <div className="bg-white dark:bg-base-100 transition-colors duration-300">
      <Navber />
      <div
        className="hero min-h-screen py-10"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(bg2.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 max-w-6xl">
          <div className="text-center text-white lg:text-left">
            <h1 className="text-5xl md:text-7xl font-black mb-6">Sign <span className="text-cyan-400">Up!</span></h1>
            <p className="py-6 font-medium text-lg text-slate-200 max-w-lg">
              StyleDecor lets you create an account to explore decoration
              packages, check decorator availability, and track your service
              status easily.
            </p>
          </div>
          <div className="card bg-white dark:bg-slate-900 w-full max-w-md shrink-0 shadow-2xl border border-slate-200 dark:border-slate-800">
            <div className="card-body p-8">
              <form onSubmit={handleSubmit(onSubmitSign, onError)}>
                <div className="fieldset space-y-3">
                  <legend className="text-2xl font-black text-slate-800 dark:text-white mb-4">Create Account</legend>
                  <label className="label text-slate-700 dark:text-slate-300 font-bold text-sm">Profile Photo</label>
                  <input
                    {...register("photo", { required: true })}
                    type="file"
                    className="file-input file-input-bordered file-input-info w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                  {errors.photo?.type === "required" && (
                    <p className="text-red-500 text-xs italic">Please Enter Your Photo</p>
                  )}
                  <label className="label text-slate-700 dark:text-slate-300 font-bold text-sm">Full Name</label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="input input-bordered w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-cyan-500"
                    placeholder="Enter your Name"
                  />
                  {errors.name?.type === "required" && (
                    <p className="text-red-500 text-xs italic">Name is required</p>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="label text-slate-700 dark:text-slate-300 font-bold text-sm">Email</label>
                      <input
                        {...register("email", { required: true })}
                        type="email"
                        className="input input-bordered w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <label className="label text-slate-700 dark:text-slate-300 font-bold text-sm">Number</label>
                      <input
                        {...register("number", { required: true })}
                        type="number"
                        className="input input-bordered w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <label className="label text-slate-700 dark:text-slate-300 font-bold text-sm">Password</label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
                    })}
                    type="password"
                    className="input input-bordered w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder="••••••••"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs italic mt-1 leading-tight">
                      Min 8 chars, 1 Uppercase, 1 Lowercase, 1 Digit.
                    </p>
                  )}
                  <button type="submit" className="btn bg-cyan-600 hover:bg-cyan-700 border-none text-white w-full mt-6 font-bold uppercase tracking-wider">
                    Sign-Up
                  </button>
                  <p className="text-center mt-4 text-slate-600 dark:text-slate-400 text-sm">
                    Already have an account?{" "}
                    <Link to="/" className="text-cyan-600 font-bold hover:underline">
                      Log In
                    </Link>
                  </p>
                </div>
              </form>
              <div className="divider text-slate-400 dark:text-slate-500 text-xs uppercase font-bold">OR</div>
              <button onClick={handleGoogle} className="btn btn-outline border-slate-300 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 w-full gap-3">
                <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/><path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4c-7.729 0-14.507 4.388-17.694 10.691z"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/></svg>
                Sign-Up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;