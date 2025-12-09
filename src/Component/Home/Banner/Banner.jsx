import React from 'react';
import img18 from '../../../assets/18.jpg'
const Banner = () => {
  return (
    <div className='p-10  bg-white md:flex md:gap-20 items-center'>
      <div>
        <h1 className='text-3xl md:text-left  md:text-4xl mb-4 text-cyan-800  text-center  font-bold '>We Are Celebrating Our 18th Anniversary In the best interior design and Construction Industry In BD</h1>
      <p className='text-cyan-500 text-center md:text-left my-3 md:text-xl'>In the best interior design and construction industry in Bangladesh.  
      Join us as we continue to transform spaces and bring dreams to life with creativity, quality, and dedication.</p>
      </div>
      <img src={img18} alt="" className='md:w-200'/>
    </div>
  );
};

export default Banner;