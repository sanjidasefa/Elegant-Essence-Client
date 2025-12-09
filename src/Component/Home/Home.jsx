import React from 'react';
import Login from '../Auth/Login';
import Banner from './Banner/Banner';
import Banner2 from './Banner/Banner2';

const Home = () => {
  return (
    <div>
      <Login></Login>
      <Banner></Banner>
      <Banner2></Banner2>
    </div>
  );
};

export default Home;