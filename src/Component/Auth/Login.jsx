import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { saveUser } from "../../utilities/img";
import useUser from "../../hooks/useUser";
import toast from "react-hot-toast";

const Login = () => {
  const axios = useUser()
     const {register, handleSubmit , formState:{errors}} = useForm()
 const { signIn , google } = useAuth()
const navigate = useNavigate();

const onSubmitLog =async (data) => {
  console.log('data' , data);
   const res = await signIn(data.email , data.password)
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
    const res =  await  google()
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
    <>
      <div
        className="hero bg-base-200 min-h-150 "
        style={{
          backgroundImage: "url(bg2.jpg)",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 font-semibold text-lg">
              StyleDecor is a modern appointment management system for a local
              decoration company that offers both in-studio consultations and
              on-site decoration services for homes and ceremonies. Users can
              explore decoration packages, check decorator availability, select
              a date & time, choose a service mode, make payments, and track
              their service status
            </p>
          </div>
          <div className="card bg-cyan-900 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmitLog, onError)}>
                <fieldset className="fieldset">
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
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                <h1>if you dont have an account , please <Link to='/SignUp' className="text-blue-400 underline">Sign Up</Link></h1>
              </fieldset>
              </form>
               <h1 className="text-lg mt-2 text-center font-bold ">OR,</h1>
              <button  onClick={handleGoogle}
                 className="btn btn-neutral mt-2"
              >
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
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
