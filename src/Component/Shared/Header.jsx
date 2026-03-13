import React from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { IoHomeOutline } from "react-icons/io5";
import { LuLayoutDashboard, LuMessageCircleQuestion } from "react-icons/lu";
import { GrServicePlay } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { PiMapPinAreaBold } from "react-icons/pi";
import { TbBrandBlogger } from "react-icons/tb";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const { user } = useAuth();
  const activeClass = "flex gap-2 items-center text-cyan-600 dark:text-cyan-400 font-bold transition-all duration-300 border-b-2 border-cyan-600 dark:border-cyan-400 pb-1";
  const normalClass = "flex gap-2 items-center text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-all duration-300 pb-1";

  return (
    <div className="sticky top-[80px] z-[1000] w-full bg-slate-50 dark:bg-slate-900/50 backdrop-blur-md py-4 border-b border-slate-200 dark:border-slate-800">
      <ul className="flex flex-row flex-wrap justify-center gap-6 md:gap-10 px-6 text-sm md:text-base font-semibold">
    <li className="flex gap-2 items-center">
          <IoHomeOutline className="text-slate-400" />
          <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : normalClass)}>Home</NavLink>
        </li>

        {user && (
          <li className="flex gap-2 items-center">
            <LuLayoutDashboard className="text-slate-400" />
            <NavLink to="/Dashboard" className={({ isActive }) => (isActive ? activeClass : normalClass)}>Dashboard</NavLink>
          </li>
        )}

        <li className="flex gap-2 items-center">
          <GrServicePlay className="text-slate-400" />
          <NavLink to="/Service" className={({ isActive }) => (isActive ? activeClass : normalClass)}>Service</NavLink>
        </li>

        <li className="flex gap-2 items-center">
          <FcAbout />
          <NavLink to="/about" className={({ isActive }) => (isActive ? activeClass : normalClass)}>About</NavLink>
        </li>

        <li className="flex gap-2 items-center">
          <PiMapPinAreaBold className="text-slate-400" />
          <NavLink to="/Covarage-Area-Map" className={({ isActive }) => (isActive ? activeClass : normalClass)}>Area</NavLink>
        </li>

        <li className="flex gap-2 items-center">
          <LuMessageCircleQuestion className="text-slate-400" />
          <NavLink to="/Faq" className={({ isActive }) => (isActive ? activeClass : normalClass)}>FAQ</NavLink>
        </li>

        <li className="flex gap-2 items-center">
          <TbBrandBlogger className="text-slate-400" />
          <NavLink to="/Blog-Preview" className={({ isActive }) => (isActive ? activeClass : normalClass)}>Blog</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;