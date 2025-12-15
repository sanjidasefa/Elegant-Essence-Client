import React from "react";
import {  NavLink } from "react-router";
import { LuLayoutDashboard } from "react-icons/lu";
import { GrServicePlay } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { LuContact } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { useAuth } from "../../hooks/useAuth";
import { PiMapPinAreaBold } from "react-icons/pi";

const Header = () => {
  const { user } = useAuth();
  return (
    <div className="p-7 bg-cyan-50 text-cyan-800">
      <ul className="flex flex-col md:flex-row justify-start gap-3 md:gap-10 md:px-10 text-lg md:text-xl font-semibold ">
        <li className="flex gap-2 justify-center items-center">
          <IoHomeOutline />
          <NavLink to="/">Home</NavLink>
        </li>
        {user ? (
          <li className="flex gap-2 justify-center items-center">
            <LuLayoutDashboard> </LuLayoutDashboard>
            <NavLink to="Dashboard">Dashboard</NavLink>
          </li>
        ) : (
          ""
        )}
        <li className="flex gap-2 justify-center items-center">
          <GrServicePlay />
          <NavLink to='/Service'>Service</NavLink>
        </li>
        <li className="flex gap-2 justify-center items-center">
          <FcAbout />
          <NavLink to='/about'>About</NavLink>
        </li>
        <li className="flex gap-2 justify-center items-center">
          <LuContact />
          <NavLink>Contact</NavLink>
        </li>
        <li className="flex gap-2 justify-center items-center">
          <PiMapPinAreaBold />
          <NavLink to="/Covarage-Area-Map"> Area</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
