import React from "react";
import { Link } from "react-router";

const Login = () => {
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
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                <h1>if you dont have an account , please <Link to='/SignUp' className="text-blue-400 underline">Sign Up</Link></h1>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
