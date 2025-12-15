import React from 'react';
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import { Link } from 'react-router';

const PaymentSuccess = () => {
   const { width, height } = useWindowSize()
  return (
    <>
      <Confetti
           width={width}
           height={height}
         />
      <div className="card w-96 bg-white shadow-2xl">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">Paid</span>
    <div >
      <h2 className="text-3xl text-cyan-900 font-bold">Payment Successful!t</h2>
      <h1 className='text-lg font-semibold my-3 text-gray-700'>Thank you for your booking</h1>
    </div>
 
    <div className="mt-6">
     <Link className="btn">GO TO HOME</Link>
    </div>
  </div>
</div>
    </>
  );
};

export default PaymentSuccess;