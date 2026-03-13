/** * COMPONENT: HomeLayout
 * DESCRIPTION: Main wrapper for public pages (Navbar, Header, Footer)
 */

import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Navber from '../Component/Shared/Navber';
import Footer from '../Component/Shared/Footer';
import Header from '../Component/Shared/Header';

const HomeLayout = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navber />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;