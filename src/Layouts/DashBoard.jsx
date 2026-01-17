import React from "react";
import { Link, Outlet } from "react-router";
import { TfiAlignLeft } from "react-icons/tfi";
import Logo from "../Component/Extra/Logo";
import { GrServicePlay } from "react-icons/gr";
import { MdOutlineBookmarks } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { RiCustomerServiceLine } from "react-icons/ri";
import { BsPersonAdd } from "react-icons/bs";
import { BiBookmarkAltPlus } from "react-icons/bi";
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
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <nav className="navbar w-full bg-white md:p-5 shadow-2xl">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost text-cyan-700"
            >
              <TfiAlignLeft />
            </label>
            <Logo></Logo>
          </nav>

          <div className="p-15">
            <Outlet></Outlet>
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="bg-cyan-800 flex min-h-full flex-col items-start is-drawer-close:w-64 is-drawer-open:w-64">
            <ul className="menu w-full">
              <h1 className=" text-lg font-bold">MENU</h1>
             {
              role === 'client' && <UserMenu></UserMenu>
             }
             {
              role === 'decorator' && <DecoratorMenu></DecoratorMenu>
             }
             {
              role === 'admin' && <AdminMenu></AdminMenu>
             }          
             
            </ul>
            <ul className="menu w-full ">
              <h1 className=" text-lg font-bold">GENERAL</h1>
              <li>
                <Link to="/My-Profile" className="" data-tip="">
                  <CgProfile />
                  <span className="">My Profile</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
