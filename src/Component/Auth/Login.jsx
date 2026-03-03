import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router"; // added useLocation for safety
import { useAuth } from "../../hooks/useAuth";
import { saveUser } from "../../utilities/img";
import useUser from "../../hooks/useUser";
import toast from "react-hot-toast";

const Login = () => {
  const axios = useUser()
  const location = useLocation();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()
  const { signIn, google } = useAuth()
  const navigate = useNavigate();

  const onSubmitLog = async (data) => {
    console.log('data', data);
    const res = await signIn(data.email, data.password)
    const userInfo = {
      email: data.email,
      password: data.password,
      image: data.imgURL,
    };
    saveUser(axios, userInfo);
    toast.success('Log-in Successfully')
    navigate(location?.state || "/");
    console.log(res)
  }

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
      <div
        className="hero min-h-screen py-10"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(bg2.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 max-w-6xl">
          <div className="text-center lg:text-left text-white max-w-xl">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Welcome <span className="text-cyan-400">Back!</span>
            </h1>
            <p className="py-6 font-medium text-lg text-slate-200 leading-relaxed">
              StyleDecor is a modern appointment management system for a local
              decoration company. Explore packages, check availability, and track your services easily.
            </p>
          </div>
          <div className="card bg-white dark:bg-slate-900 w-full max-w-md shrink-0 shadow-2xl border border-slate-200 dark:border-slate-800 transition-all">
            <div className="card-body p-8">
              <form onSubmit={handleSubmit(onSubmitLog, onError)}>
                <div className="fieldset space-y-4">
                  <legend className="text-3xl font-black text-slate-800 dark:text-white mb-4">Login</legend>
                  <div className="form-control">
                    <label className="label text-slate-700 dark:text-slate-300 font-bold">Email</label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      className="input input-bordered w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-cyan-500"
                      placeholder="Example@gmail.com"
                    />
                    {errors.email?.type === "required" && (
                      <p className="text-red-500 text-xs mt-1 italic">Email is required</p>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label text-slate-700 dark:text-slate-300 font-bold">Password</label>
                    <input
                      {...register("password", {
                        required: true,
                        minLength: 8,
                        pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
                      })}
                      type="password"
                      className="input input-bordered w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-cyan-500"
                      placeholder="••••••••"
                    />
                  </div>
                  {errors.password && (
                    <div className="text-red-500 text-xs italic space-y-1">
                      {errors.password.type === "required" && <p>Password is required</p>}
                      {errors.password.type === "minLength" && <p>Minimum 8 characters needed</p>}
                      {errors.password.type === "pattern" && <p>Must include Uppercase, Lowercase & Digit</p>}
                    </div>
                  )}
                  <div className="flex flex-col gap-3 pt-4">
                    <button className="btn bg-cyan-600 hover:bg-cyan-700 border-none text-white font-bold uppercase">Login</button>                 
                    <button 
                      onClick={() => {
                        setValue("email", "demo@gmail.com");
                        setValue("password", "Demo1234");
                      }} 
                      type="button" 
                      className="btn btn-outline border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white font-bold"
                    >
                      Demo Login
                    </button>
                  </div>
                  <p className="text-center text-sm text-slate-600 dark:text-slate-400">
                    If you don't have an account, please{" "}
                    <Link to='/SignUp' className="text-cyan-600 font-black hover:underline underline-offset-4 text-md">Sign Up</Link>
                  </p>
                </div>
              </form>
              <div className="divider text-slate-400 dark:text-slate-500 text-xs font-bold uppercase mt-6">Social Login</div>
              <button 
                onClick={handleGoogle}
                className="btn btn-outline border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 w-full gap-3 transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/><path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4c-7.729 0-14.507 4.388-17.694 10.691z"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/></svg>
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;