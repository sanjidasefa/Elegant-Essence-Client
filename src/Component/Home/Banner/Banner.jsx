import React from 'react';
import img18 from '../../../assets/18.jpg'
const Banner = () => {
  return (
    <div className='p-15 lg:p-20  bg-white lg:flex gap-20 items-center'>
      <div className='my-10'>
        <h1 className='text-3xl md:text-left  md:text-5xl mb-4 text-cyan-800  text-center  font-bold '>We Are Celebrating Our 18th Anniversary In the best interior design and Construction Industry In BD</h1>
      <p className='text-cyan-500 text-center md:text-left my-3 md:text-lg'>In the best interior design and construction industry in Bangladesh.  
      Join us as we continue to transform spaces and bring dreams to life with creativity, quality, and dedication.</p>
      </div>
      <img src={img18} alt="" className='md:w-150'/>
    </div>
  );
};

export default Banner;