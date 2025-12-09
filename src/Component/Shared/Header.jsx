import React from 'react';
import { Link } from 'react-router';
import { LuLayoutDashboard } from "react-icons/lu";
import { GrServicePlay } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { LuContact } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const {user } = useAuth()
  return (
    <div className='p-5 bg-cyan-50 text-cyan-800'>
       <ul className='flex justify-start gap-4 md:gap-10 md:px-10 text-lg md:text-xl font-semibold '> 
        <li className='flex gap-2 justify-center items-center'><IoHomeOutline /><Link to='/'>Home</Link></li>
{
  user ?  <li className='flex gap-2 justify-center items-center'><LuLayoutDashboard > </LuLayoutDashboard><Link to='Dashboard'>Dashboard</Link></li> : ''
}
        <li className='flex gap-2 justify-center items-center'><GrServicePlay /><Link>Service</Link></li>
        <li className='flex gap-2 justify-center items-center'><FcAbout /><Link>About</Link></li>
        <li className='flex gap-2 justify-center items-center'><LuContact /><Link>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Header;