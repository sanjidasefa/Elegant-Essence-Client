import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import Logo from "../Extra/Logo";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useAuth } from "../../hooks/useAuth";
import profile from '../../assets/profile.png'
import { BsSunFill } from "react-icons/bs";
import { GoMoon } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

const Navber = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleThemes = (checked) => {
    const html = document.documentElement;
    if (checked) {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      html.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  const handleLogoutAction = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="navbar bg-white dark:bg-[#1d232a]/80 backdrop-blur-md px-6 md:px-16 py-3 border-b border-gray-100 dark:border-gray-800 overflow-visible"
    >
      <div className="navbar-start">
        <Link to="/" className="hover:scale-105 transition-transform">
          <Logo />
        </Link>
      </div>

      <div className="navbar-end gap-4 overflow-visible">
        {/* Theme Toggle */}
        <label className="swap swap-rotate btn btn-ghost btn-circle text-2xl hover:bg-cyan-50 dark:hover:bg-cyan-950 transition-all">
          <input 
            type="checkbox" 
            onChange={(e) => handleThemes(e.target.checked)} 
            defaultChecked={localStorage.getItem('theme') === "dark"} 
          />
          <BsSunFill className="swap-on fill-current text-yellow-500" />
          <GoMoon className="swap-off fill-current text-cyan-800 dark:text-cyan-400" />
        </label>

        {!user ? (
          <div className="flex items-center gap-4">
            <NavLink to='/login' className="btn bg-cyan-600 hover:bg-cyan-700 text-white border-none rounded-full px-8 shadow-md transition-all active:scale-95">
              Login
            </NavLink>
            <NavLink to="/login" className="text-cyan-600 hover:text-cyan-800 transition-colors hidden sm:block">
              <IoPersonCircleOutline className="w-10 h-10" />
            </NavLink>
          </div>
        ) : (
          /* Profile Dropdown */
          <div className="dropdown dropdown-end overflow-visible">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar online ring ring-cyan-500 ring-offset-base-100 ring-offset-2 transition-all hover:scale-105">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL || profile} alt="profile" />
              </div>
            </label>
            <ul 
              tabIndex={0} 
              className="mt-3 z-[2001] p-2 shadow-2xl menu menu-sm dropdown-content bg-white dark:bg-[#1d232a] rounded-2xl w-52 border border-base-200 dark:border-gray-700 animate-fadeIn"
            >
              <li className="px-4 py-3 font-black text-cyan-600 dark:text-cyan-400 border-b border-gray-100 dark:border-gray-800 mb-2 truncate">
                {user?.displayName || "Member"}
              </li>
              
              <li className="hover:bg-cyan-50 dark:hover:bg-cyan-900/30 rounded-lg">
                <Link to="/My-Profile" className="text-white py-2 font-semibold">My Profile</Link>
              </li>
              
              <li className="hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg mt-1">
                <button 
                  onClick={handleLogoutAction}
                  className="text-red-500 font-bold py-2"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navber;