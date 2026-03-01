import React, { useEffect } from 'react';
import Navber from '../Component/Shared/Navber';
import { Outlet } from 'react-router';
import Footer from '../Component/Shared/Footer';
import Header from '../Component/Shared/Header';

const HomeLayout = () => {
   useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  return (
    <>
      <Navber></Navber>
     
       <Header></Header>
   
      <Outlet></Outlet>
      
      <Footer></Footer>
    </>
  );
};

export default HomeLayout;