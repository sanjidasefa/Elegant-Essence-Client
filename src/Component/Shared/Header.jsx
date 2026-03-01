import React from "react";
import { Link, NavLink } from "react-router";
import { LuLayoutDashboard } from "react-icons/lu";
import { GrServicePlay } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { LuContact } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { useAuth } from "../../hooks/useAuth";
import { PiMapPinAreaBold } from "react-icons/pi";
import { DivIcon } from "leaflet";
import { MdSettingsSuggest } from "react-icons/md";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { VscDebugBreakpointConditionalUnverified } from "react-icons/vsc";
import { FaNetworkWired } from "react-icons/fa6";
import { TbBrandBlogger } from "react-icons/tb";
const Header = () => {
  const { user } = useAuth();

  return (
    <div className="sticky top-0 z-50 p-7 border-b-2 border-b-cyan-800 bg-cyan-50 text-cyan-800">
      <ul className="flex flex-row flex-wrap justify-start gap-3 lg:gap-10 md:px-10 text-lg md:text-xl font-semibold ">
        <li className="flex gap-2 justify-center items-center">
          <IoHomeOutline />
          <NavLink to="/">Home</NavLink>
        </li>
        {user ? (
          <li className="flex gap-2 justify-center items-center">
           <LuLayoutDashboard /> 
          <NavLink to="Dashboard">Dashboard</NavLink>
        </li>
        ) : (
          ""
        )}
        <li className="flex gap-2 justify-center items-center">
          <GrServicePlay />
          <NavLink to="/Service">Service</NavLink>
        </li>

      <li className="relative group">
  <Link 
    to="/about" 
    className="flex gap-2 items-center"
  > <FcAbout />
    About
  </Link>

  <ul className="hover:flex flex-col items-start justify-start absolute hidden group-hover:block bg-white shadow rounded-box w-56 p-2">
     <li className="flex gap-2 justify-center items-center">
         <MdSettingsSuggest />
          <NavLink to="/Fetures">Feature's</NavLink>
        </li>
    
           <li className="flex gap-2 justify-center items-center">
          <VscDebugBreakpointConditionalUnverified />
 <NavLink to="/Terms&Condiotions"> Terms & Conditions</NavLink>
        </li>
     <li className="flex gap-2 justify-center items-center">
          <LuContact />
          <NavLink to="/footer">Contact</NavLink>
        </li>
     <li className="flex gap-2 justify-center items-center">
         <FaNetworkWired />
          <NavLink to="/Company-Overview">Company Overview</NavLink>
        </li>
  </ul>
</li>
        <li className="flex gap-2 justify-center items-center">
          <PiMapPinAreaBold />
          <NavLink to="/Covarage-Area-Map"> Area</NavLink>
        </li>
      <li className="flex gap-2 justify-center items-center">
        <LuMessageCircleQuestion />
          <NavLink to="/Faq">FAQ</NavLink>
        </li>
      <li className="flex gap-2 justify-center items-center">
       <TbBrandBlogger />
          <NavLink to="/Blog-Preview">Blog</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
