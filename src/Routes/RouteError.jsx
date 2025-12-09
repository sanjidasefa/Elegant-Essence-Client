import React from 'react';
import error from '../assets/error.jpg'
import Navber from '../Component/Shared/Navber';
import Footer from '../Component/Shared/Footer';
import { Link } from 'react-router';

const RouteError = () => {
  return (
    <div>
      <Navber></Navber>
    <div className='w-11/12 mx-auto my-10'>
    <div className="card bg-base-100 image-full ">
  <figure>
     <img src={error} alt="" className=' h-[700px] w-full' />
  </figure>
  <div className="card-body flex justify-center items-center">
  <div>
      <h2 className="text-4xl mb-4 font-bold text-center">Go To Home</h2>
    <div className="card-actions justify-center">
      <Link to='/' className="btn bg-cyan-950 mt-4">Home</Link>
    </div>
  </div>
  </div>
</div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default RouteError;