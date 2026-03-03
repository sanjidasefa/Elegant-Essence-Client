import React from "react";
import { BiBookmarkAltPlus } from "react-icons/bi";
import { BsPersonAdd } from "react-icons/bs";
import { GrServicePlay } from "react-icons/gr";
import { MdOutlineBookmarks } from "react-icons/md";
import { Link } from "react-router";
import { RiExchangeLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const AdminMenu = () => {
  const navLinkClass = "flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-slate-700 dark:text-slate-200 hover:bg-cyan-50 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200";

  return (
    <div className="w-full">
      <ul className="menu w-full p-0 space-y-1">
        <li>
          <Link to="/" className={navLinkClass}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="size-5"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link to="Decorators-List" className={navLinkClass}>
            <BsPersonAdd size={20} />
            <span>Decorator's</span>
          </Link>
        </li>

        <li>
          <Link to="Manage-Bookings" className={navLinkClass}>
            <BiBookmarkAltPlus size={20} />
            <span>Assign Decorators</span>
          </Link>
        </li>

        <li>
          <Link to="All-Bookigns" className={navLinkClass}>
            <MdOutlineBookmarks size={20} />
            <span>All Bookings</span>
          </Link>
        </li>

        <li>
          <Link to="Add-Services" className={navLinkClass}>
            <GrServicePlay size={20} />
            <span>Add Services</span>
          </Link>
        </li>

        <li>
          <Link to="All-Service" className={navLinkClass}>
            <FaEdit size={20} />
            <span>Update Service</span>
          </Link>
        </li>

        <li>
          <Link to="Manage-Decorator" className={navLinkClass}>
            <RiExchangeLine size={20} />
            <span>Manage Decorator</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminMenu;