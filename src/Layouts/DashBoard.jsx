import React from "react";
import { Link, Outlet } from "react-router";
import { TfiAlignLeft } from "react-icons/tfi";
import Logo from "../Component/Extra/Logo";
import { CgProfile } from "react-icons/cg";
import useRoles from "../hooks/useRoles";
import UserMenu from "../Component/dashBoard/User/UserMenu";
import DecoratorMenu from "../Component/dashBoard/decorator/DecoratorMenu";
import AdminMenu from "../Component/dashBoard/Admin/AdminMenu";
import RouteLoder from "../Routes/RouteLoder";

const DashBoard = () => {
  const [role, roleLoading] = useRoles();

  if (roleLoading) {
    return <RouteLoder></RouteLoder>;
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <nav className="navbar w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 md:px-8 shadow-sm transition-colors duration-300">
            <div className="flex gap-2">
              <label
                htmlFor="my-drawer-4"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost text-cyan-600 lg:hidden"
              >
                <TfiAlignLeft size={24} />
              </label>
              <Logo></Logo>
            </div>
          </nav>
          <div className="p-4 md:p-8 lg:p-12 min-h-[calc(100vh-80px)]">
            <div className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-300">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>       
          <div className="bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex min-h-full flex-col items-start w-72 p-6 transition-colors duration-300">
            
            <ul className="menu w-full p-0 space-y-2">
              <h1 className="px-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-4">
                Main Menu
              </h1>
              <div className="text-slate-700 dark:text-slate-200 font-bold">
                {role === "client" && <UserMenu></UserMenu>}
                {role === "decorator" && <DecoratorMenu></DecoratorMenu>}
                {role === "admin" && <AdminMenu></AdminMenu>}
              </div>
            </ul>
            <ul className="menu w-full p-0 mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <h1 className="px-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-4">
                Personal
              </h1>
              <li>
                <Link 
                  to="/My-Profile" 
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-cyan-50 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400 font-bold transition-all"
                >
                  <CgProfile size={20} className="text-cyan-600" />
                  <span>My Profile</span>
                </Link>
              </li>
            </ul>
            <div className="mt-auto w-full p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
               <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium text-center">
                 Elegant Essence Dashboard 
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;