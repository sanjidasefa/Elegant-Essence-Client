import React from 'react';
import Navber from '../Component/Shared/Navber';
import { Outlet } from 'react-router';
import Footer from '../Component/Shared/Footer';
import Header from '../Component/Shared/Header';

const HomeLayout = () => {
  return (
    <>
      <Navber></Navber>
     <div className='hidden md:block'>
       <Header></Header>
     </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default HomeLayout;