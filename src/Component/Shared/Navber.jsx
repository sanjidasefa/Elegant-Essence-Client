import React from 'react';
import { Link } from 'react-router';
import Logo from '../Extra/Logo';
import { IoPersonCircleOutline } from "react-icons/io5";
import Header from './Header';

const Navber = () => {
  return (
    <>
     <div className="navbar bg-white shadow-xl md:px-20 md:py-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-cyan-500 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className=" dropdown-content  rounded-box z-1 mt-3  shadow">
         <Header></Header>
      </ul>
    </div>
    <Link to='/'><Logo></Logo></Link>
  </div>
  <div className="navbar-end">
<Link  className='text-cyan-500'><IoPersonCircleOutline className='w-20 h-10'></IoPersonCircleOutline></Link>
  </div>
</div> 
    </>
  );
};

export default Navber;