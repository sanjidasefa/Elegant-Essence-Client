import React from 'react';
import errorImg from '../assets/error.jpg'; 
import Navber from '../Component/Shared/Navber';
import Footer from '../Component/Shared/Footer';
import { Link } from 'react-router';

const RouteError = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navber />  
      <div className='flex-grow w-11/12 mx-auto my-10 flex items-center justify-center'>
        <div className="card w-full max-w-5xl bg-base-100 image-full shadow-xl overflow-hidden rounded-[2.5rem]">
          <figure>
            <img 
              src={errorImg} 
              alt="Error Page Illustration" 
              className='h-[500px] md:h-[600px] w-full object-cover' 
            />
          </figure>
          <div className="card-body flex justify-center items-center bg-black/40">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl mb-6 font-black text-white tracking-tight">
                Oops! Page Not Found
              </h2>
              <p className="mb-8 text-slate-200">The page you are looking for doesn't exist or has been moved.</p>
              <div className="card-actions justify-center">
                <Link 
                  to='/' 
                  className="btn bg-cyan-600 hover:bg-cyan-700 border-none text-white px-10 rounded-full transition-all"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RouteError;