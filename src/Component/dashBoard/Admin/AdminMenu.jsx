import React from "react";
import { BiBookmarkAltPlus } from "react-icons/bi";
import { BsPersonAdd } from "react-icons/bs";
import { GrServicePlay } from "react-icons/gr";
import { MdOutlineBookmarks } from "react-icons/md";
import { Link } from "react-router";

const AdminMenu = () => {
  return (
    <div className="bg-cyan-800 flex min-h-full flex-col items-start is-drawer-close:w-60 is-drawer-open:w-60">
      <ul className="menu w-full">
        <h1 className=" text-lg font-bold">Decorator Panel</h1>
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
            to="Decorators-List"
            className="font-semibold"
            data-tip="Services"
          >
            <span className="flex gap-2">
              <BsPersonAdd />
              Decorator's
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="Manage-Bookings"
            className="font-semibold"
            data-tip="Services"
          >
            <span className="flex gap-2">
              <BiBookmarkAltPlus />
              Manage Bookings
            </span>
          </Link>
        </li>
        <li>
          <Link to="booking-list" className="font-semibold" data-tip="Services">
            <span className="flex gap-2">
              <MdOutlineBookmarks />
              Bookings
            </span>
          </Link>{" "}
        </li>
        <li>
          <Link to="Add-Services" className="font-semibold" data-tip="Services">
            <span className="flex gap-2">
              <GrServicePlay />
              Add-Services
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminMenu;
