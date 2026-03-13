import React from "react";
import { Link, useNavigate } from "react-router";
import Logo from "../Extra/Logo";
import { useAuth } from "../../hooks/useAuth";
import profile from '../../assets/profile.png';
import { BsSun } from "react-icons/bs";
import { GoMoon } from "react-icons/go";
import { motion } from "framer-motion";

const Navber = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleThemes = (checked) => {
    const html = document.documentElement;
    if (checked) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="navbar sticky top-0 z-[1100] bg-white dark:bg-slate-950 px-6 md:px-16 py-4 border-b border-slate-100 dark:border-slate-900 transition-colors duration-300"
    >
      <div className="navbar-start">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <Logo />
        </Link>
      </div>

      <div className="navbar-end gap-3 md:gap-6">
        {/* Theme Toggle */}
        <label className="btn btn-ghost btn-circle swap swap-rotate text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
          <input 
            type="checkbox" 
            onChange={(e) => handleThemes(e.target.checked)} 
            defaultChecked={localStorage.getItem('theme') === "dark"} 
          />
          <BsSun className="swap-on text-amber-500 text-xl" />
          <GoMoon className="swap-off text-xl" />
        </label>

        {!user ? (
          <Link 
            to='/login' 
            className="btn btn-sm md:btn-md bg-slate-950 dark:bg-white text-white dark:text-slate-950 border-none rounded-full px-8 font-bold transition-all"
          >
            Login
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar border border-slate-200 dark:border-slate-800 p-0.5">
              <div className="w-9 rounded-full">
                <img src={user?.photoURL || profile} alt="profile" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-4 p-3 shadow-2xl menu menu-sm dropdown-content bg-white dark:bg-slate-900 rounded-2xl w-60 border border-slate-100 dark:border-slate-800 transition-all">
              <li className="px-4 py-3 border-b border-slate-50 dark:border-slate-800 mb-2">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">User</span>
                <p className="font-bold text-slate-900 dark:text-slate-50 truncate">{user?.displayName || "Member"}</p>
              </li>
              <li><Link to="/dashboard" className="py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800">Dashboard</Link></li>
              <li className="mt-2 pt-2 border-t border-slate-50 dark:border-slate-800">
                <button onClick={() => logOut().then(() => navigate("/"))} className="text-red-500 font-bold py-2.5 rounded-xl">Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navber;