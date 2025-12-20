import React from "react";
import { Link, Outlet } from "react-router";
import { TfiAlignLeft } from "react-icons/tfi";
import Logo from "../Component/Extra/Logo";
import { GrServicePlay } from "react-icons/gr";
import { MdOutlineBookmarks } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { RiCustomerServiceLine } from "react-icons/ri";

const DashBoard = () => {
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

          <div className="">
            <Outlet></Outlet>
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-64 is-drawer-open:w-64">
            <ul className="menu w-full">
              <h1 className="c text-lg font-bold">MENU</h1>
              <li>
                <Link to="/" className="font-semibold" data-tip="Homepage">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                  <span className="">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="Add-Services"
                  className="font-semibold"
                  data-tip="Services"
                >
                  <span className="flex gap-2">
                    <GrServicePlay />
                    Add-Services
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="booking-list"
                  className="font-semibold"
                  data-tip="Services"
                >
                  <span className="flex gap-2">
                    <MdOutlineBookmarks />
                    Bookings
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="payment-list"
                  className="font-semibold"
                  data-tip="Services"
                >
                  <span className="flex gap-2">
                    <RiSecurePaymentLine />
                    Payment List
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="My-projects"
                  className="font-semibold"
                  data-tip="Services"
                >
                  <span className="flex gap-2">
                    <RiCustomerServiceLine />
                    My Project List
                  </span>
                </Link>
              </li>
            </ul>
            <ul className="menu w-full ">
              <h1 className="text-cyan-700 text-lg font-bold">GENERAL</h1>
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
