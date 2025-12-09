import React from 'react';
import pakage from '../../../assets/category/pakage.png'
import decorate from '../../../assets/category/decorate.png'
import date from '../../../assets/category/time.png'
import studio from '../../../assets/category/studio.png'
import traking from '../../../assets/category/traking (1).png'
import payment from '../../../assets/category/pay.png'

const Banner2 = () => {
  return (
    <div className='bg-cyan-50 p-20'>
      <h1 className='text-3xl mb-10 md:text-4xl text-cyan-800  text-center  font-bold'>Decoration Service Booking & Management System</h1>
      <p className='text-cyan-600 mb-10 font-semibold text-center'>A complete digital platform that helps customers effortlessly explore decoration packages, book appointments, choose service modes, and track their entire service journey in real-time.</p>
     <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
       <div className='bg-pink-300 p-10 rounded-2xl flex flex-col items-center'>
        <img src={pakage} alt=""  className='w-1/3'/>
        <h1 className='text-center font-bold text-2xl'>package browsing</h1>
      </div>
      <div className='bg-yellow-300 p-10 rounded-2xl flex flex-col items-center'>
                <img src={decorate} alt=""  className='w-1/3'/>
        <h1 className='text-center font-bold text-2xl'>decorator availability</h1>
      </div>
      <div className='bg-red-400 p-10 rounded-2xl flex flex-col items-center'>
         <img src={date} alt=""  className='w-1/3'/>
        <h1 className='text-center font-bold text-2xl'>date-time slot</h1>
      </div>
      <div className='bg-green-300  p-10 rounded-2xl flex flex-col items-center'>
         <img src={studio} alt=""  className='w-1/3'/>
        <h1 className='text-center font-bold text-2xl'>in-studio / on-site</h1>
      </div>
      <div className='bg-purple-400 p-10 rounded-2xl flex flex-col items-center'>
         <img src={payment} alt=""  className='w-1/3'/>
        <h1 className='text-center font-bold text-2xl'>payment</h1>
      </div>
      <div className='bg-cyan-500 p-10 rounded-2xl flex flex-col items-center'>
        <img src={traking} alt=""  className='w-1/3'/>
        <h1 className='text-center font-bold text-2xl'>service status tracking</h1>
      </div>
     </div>
    </div>
  );
};

export default Banner2;