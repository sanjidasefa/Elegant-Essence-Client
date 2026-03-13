import React from "react";
import { Link, Outlet } from "react-router";
import { TfiAlignLeft } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import Logo from "../Component/Extra/Logo";
import useRoles from "../hooks/useRoles";
import UserMenu from "../Component/dashBoard/User/UserMenu";
import DecoratorMenu from "../Component/dashBoard/decorator/DecoratorMenu";
import AdminMenu from "../Component/dashBoard/Admin/AdminMenu";
import RouteLoder from "../Routes/RouteLoder";

const DashBoard = () => {
  const [role, roleLoading] = useRoles();
  if (roleLoading) {
    return <RouteLoder />;
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          <nav className="navbar w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 md:px-8 shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-4">
              <label
                htmlFor="dashboard-drawer"
                className="btn btn-square btn-ghost text-cyan-600 lg:hidden"
              >
                <TfiAlignLeft size={24} />
              </label>
              <Logo />
            </div>
          </nav>

          {/* Page Content Container */}
          <div className="p-4 md:p-8 lg:p-10 min-h-[calc(100vh-80px)]">
            <div className="bg-white dark:bg-slate-900 p-5 md:p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 min-h-full">
              <Outlet />
            </div>
          </div>
        </div>

        {/* SIDEBAR NAVIGATION */}
        <div className="drawer-side z-50">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

          <div className="bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex min-h-full flex-col w-72 p-6 transition-colors duration-300">
            {/* Role-Specific Menu Section */}
            <div className="flex-grow">
              <h2 className="px-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">
                Main Menu
              </h2>

              <div className="space-y-1">
                {role === "client" && <UserMenu />}
                {role === "decorator" && <DecoratorMenu />}
                {role === "admin" && <AdminMenu />}
              </div>

              {/* Personal Links Section */}
              <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800">
                <h2 className="px-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
                  Settings
                </h2>
                <Link
                  to="/My-Profile"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:text-cyan-600 transition-all font-semibold"
                >
                  <CgProfile size={20} className="text-cyan-600" />
                  <span>My Profile</span>
                </Link>
              </div>
            </div>

            {/* Bottom Brand Tag */}
            <div className="mt-auto pt-6">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800">
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold text-center tracking-wider">
                  ELEGANT ESSENCE v1.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
