import React from 'react';
import { Link } from 'react-router';
import Navber from '../Shared/Navber';
import Footer from '../Shared/Footer';

const SignUp = () => {
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
               StyleDecor lets you create an account to explore decoration packages, check decorator availability, select a date & time, choose a service mode, make payments, and track your service status easily.
            </p>
          </div>
          <div className="card bg-cyan-900 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
               
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Name" />
                
                <label className="label">Photo</label>
                <input type="file" className="input" />
               
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">SignUP</button>
                 <h1>if you have an account , please <Link to='/' className="text-blue-400 underline">Log In</Link></h1>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SignUp;