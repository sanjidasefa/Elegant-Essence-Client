import React from "react";
import { NavLink, Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { IoHomeOutline } from "react-icons/io5";
import { LuLayoutDashboard, LuContact, LuMessageCircleQuestion } from "react-icons/lu";
import { GrServicePlay } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { PiMapPinAreaBold } from "react-icons/pi";
import { MdSettingsSuggest } from "react-icons/md";
import { VscDebugBreakpointConditionalUnverified } from "react-icons/vsc";
import { FaNetworkWired } from "react-icons/fa6";
import { TbBrandBlogger } from "react-icons/tb";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const { user } = useAuth();
  const activeClass = "flex gap-2 items-center text-cyan-600 dark:text-cyan-400 font-bold scale-105 transition-all duration-300";
  const normalClass = "flex gap-2 items-center text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300";

  return (
    <div className="sticky top-0 z-[1000] w-full bg-cyan-50 dark:bg-[#1d232a] py-5 shadow-sm transition-colors duration-300">
      <ul className="flex flex-row flex-wrap justify-start md:justify-center gap-5 lg:gap-10 px-6 md:px-10 text-base md:text-lg font-medium overflow-visible">
        
        <li className="flex gap-2 items-center">
          <IoHomeOutline className="text-cyan-600 dark:text-cyan-400" />
          <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : normalClass)}>Home</NavLink>
        </li>

        {user && (
          <li className="flex gap-2 items-center">
            <LuLayoutDashboard className="text-cyan-600 dark:text-cyan-400" />
            <NavLink to="Dashboard" className={({ isActive }) => (isActive ? activeClass : normalClass)}>Dashboard</NavLink>
          </li>
        )}

        <li className="flex gap-2 items-center">
          <GrServicePlay className="text-cyan-600 dark:text-cyan-400" />
          <NavLink to="/Service" className={({ isActive }) => (isActive ? activeClass : normalClass)}>Service</NavLink>
        </li>

        {/* About Dropdown Section */}
        <li className="relative group overflow-visible">
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          > 
            <FcAbout />
            About
          </NavLink>

          {/* Animated Dropdown Menu */}
          <ul className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-col items-start gap-3 bg-white dark:bg-[#2a323c] shadow-2xl rounded-xl w-64 p-4 z-[1100] border border-gray-100 dark:border-gray-700 transition-all duration-300">
            <motion.li 
              initial={{ x: -10, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }}
              className="flex gap-3 items-center hover:translate-x-2 transition-transform duration-200 w-full"
            >
              <MdSettingsSuggest className="text-cyan-500" />
              <NavLink to="/Fetures" className="dark:text-gray-200 hover:text-cyan-500">Feature's</NavLink>
            </motion.li>
            
            <motion.li 
              initial={{ x: -10, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex gap-3 items-center hover:translate-x-2 transition-transform duration-200 w-full"
            >
              <VscDebugBreakpointConditionalUnverified className="text-cyan-500" />
              <NavLink to="/Terms&Condiotions" className="dark:text-gray-200 hover:text-cyan-500">Terms & Conditions</NavLink>
            </motion.li>

            <motion.li 
              initial={{ x: -10, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex gap-3 items-center hover:translate-x-2 transition-transform duration-200 w-full"
            >
              <LuContact className="text-cyan-500" />
              <NavLink to="/footer" className="dark:text-gray-200 hover:text-cyan-500">Contact</NavLink>
            </motion.li>

            <motion.li 
              initial={{ x: -10, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex gap-3 items-center hover:translate-x-2 transition-transform duration-200 w-full"
            >
              <FaNetworkWired className="text-cyan-500" />
              <NavLink to="/Company-Overview" className="dark:text-gray-200 hover:text-cyan-500">Company Overview</NavLink>
            </motion.li>
          </ul>
        </li>

        <li className="flex gap-2 items-center">
          <PiMapPinAreaBold className="text-cyan-600 dark:text-cyan-400" />
          <NavLink to="/Covarage-Area-Map" className={({ isActive }) => (isActive ? activeClass : normalClass)}>Area</NavLink>
        </li>

        <li className="flex gap-2 items-center">
          <LuMessageCircleQuestion className="text-cyan-600 dark:text-cyan-400" />
          <NavLink to="/Faq" className={({ isActive }) => (isActive ? activeClass : normalClass)}>FAQ</NavLink>
        </li>

        <li className="flex gap-2 items-center">
          <TbBrandBlogger className="text-cyan-600 dark:text-cyan-400" />
          <NavLink to="/Blog-Preview" className={({ isActive }) => (isActive ? activeClass : normalClass)}>Blog</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;