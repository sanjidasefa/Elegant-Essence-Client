import React from "react";
import { GrServicePlay } from "react-icons/gr";
import { RiCustomerServiceLine, RiExchangeLine } from "react-icons/ri";
import { Link } from "react-router";
import { MdOutlineToday } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

const DecoratorMenu = () => {
  return (
    <div className="w-full">
      <div className="text-slate-700 dark:text-slate-200 bg-transparent flex min-h-full flex-col items-start is-drawer-close:w-60 is-drawer-open:w-60 transition-colors">
        <ul className="menu w-full space-y-1">
          <h1 className="text-lg font-bold px-4 py-2 text-cyan-700 dark:text-cyan-400">
            Decorator Panel
          </h1>

          <li>
            <Link to="/" className="font-semibold hover:bg-cyan-50 dark:hover:bg-slate-800 transition-all" data-tip="Homepage">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-5"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link to="Add-Services" className="font-semibold hover:bg-cyan-50 dark:hover:bg-slate-800 transition-all" data-tip="Services">
              <span className="flex items-center gap-3">
                <GrServicePlay className="size-5" />
                Add-Services
              </span>
            </Link>
          </li>

          <li>
            <Link to="My-projects" className="font-semibold hover:bg-cyan-50 dark:hover:bg-slate-800 transition-all" data-tip="Services">
              <span className="flex items-center gap-3">
                <RiCustomerServiceLine className="size-5" />
                My Project List
              </span>
            </Link>
          </li>

          <li>
            <Link to="handle-User-to-decorator" className="font-semibold hover:bg-cyan-50 dark:hover:bg-slate-800 transition-all" data-tip="Services">
              <span className="flex items-center gap-3">
                <RiExchangeLine className="size-5" />
                Change Role
              </span>
            </Link>
          </li>

          <li>
            <Link to="Todays-Schedule" className="font-semibold hover:bg-cyan-50 dark:hover:bg-slate-800 transition-all" data-tip="Services">
              <span className="flex items-center gap-3">
                <MdOutlineToday className="size-5" />
                Today's Schedule
              </span>
            </Link>
          </li>

          <li>
            <Link to="Update-Service-Status" className="font-semibold hover:bg-cyan-50 dark:hover:bg-slate-800 transition-all" data-tip="Services">
              <span className="flex items-center gap-3">
                <CiEdit className="size-5" />
                Update Service Status
              </span>
            </Link>
          </li>

          <li>
            <Link to="Earning-Summary" className="font-semibold hover:bg-cyan-50 dark:hover:bg-slate-800 transition-all" data-tip="Services">
              <span className="flex items-center gap-3">
                <CiMoneyCheck1 className="size-5" />
                Earning Summary
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DecoratorMenu;