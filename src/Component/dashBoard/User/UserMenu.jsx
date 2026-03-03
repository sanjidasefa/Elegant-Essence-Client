import React from "react";
import { MdOutlineBookmarks } from "react-icons/md";
import { RiExchangeLine, RiSecurePaymentLine } from "react-icons/ri";
import { Link } from "react-router";

const UserMenu = () => {
  const navLinkClass = "flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-slate-700 dark:text-slate-200 hover:bg-cyan-50 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200";

  return (
    <div className="w-full">
      <div className="flex min-h-full flex-col items-start is-drawer-close:w-60 is-drawer-open:w-60">
        <ul className="menu w-full p-0 space-y-1">
          <h1 className="text-lg font-bold px-4 mb-2 text-slate-400 dark:text-slate-500 uppercase text-xs tracking-widest">
            User Panel
          </h1>
          <li>
            <Link to="/" className={navLinkClass} data-tip="Homepage">
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
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1-1v8"></path>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link to="booking-list" className={navLinkClass} data-tip="Services">
              <MdOutlineBookmarks size={20} />
              <span>Bookings</span>
            </Link>
          </li>

          <li>
            <Link to="payment-list" className={navLinkClass} data-tip="Services">
              <RiSecurePaymentLine size={20} />
              <span>Payment List</span>
            </Link>
          </li>

          <li>
            <Link to="handle-User-to-decorator" className={navLinkClass} data-tip="Services">
              <RiExchangeLine size={20} />
              <span>Change Role</span>
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;