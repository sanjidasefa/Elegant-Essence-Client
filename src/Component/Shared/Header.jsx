import React from 'react';
import { Link } from 'react-router';
import { LuLayoutDashboard } from "react-icons/lu";
import { GrServicePlay } from "react-icons/gr";

const Header = () => {
  return (
    <div className='p-5 bg-cyan-50 text-cyan-800'>
       <ul className='flex justify-start gap-10 md:px-10 text-lg md:text-xl font-semibold '> 
        <li className='flex gap-2 justify-center items-center'><LuLayoutDashboard > </LuLayoutDashboard><Link>Dashboard</Link></li>
        <li className='flex gap-2 justify-center items-center'><GrServicePlay /><Link>Service</Link></li>
      </ul>
    </div>
  );
};

export default Header;