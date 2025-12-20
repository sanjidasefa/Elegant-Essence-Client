import React from 'react';
import Login from '../Auth/Login';
import Banner from './Banner/Banner';
import Banner2 from './Banner/Banner2';
import Banner3 from './Banner/Banner3';

const Home = () => {
  return (
    <div>
      <div className='bg-white p-5 lg:p-10'>
         <Banner3></Banner3>
      </div>
      <Login></Login>
      <Banner></Banner>
      <Banner2></Banner2>
    </div>
  );
};

export default Home;