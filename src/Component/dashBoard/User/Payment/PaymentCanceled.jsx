import React from 'react';
import { Link } from 'react-router';

const PaymentCanceled = () => {
  return (
    <div>
        <div className='flex justify-center mt-20'>
             <div className="card w-96 bg-white shadow-2xl">
        <div className="card-body">
          <span className="badge badge-xs badge-warning">Un - Paid</span>
          <div >
            <h2 className="text-3xl text-red-600 font-bold">Please Try Again !</h2>
            <h1 className='text-lg font-semibold my-3 text-red-400'>Your payment is Failed</h1>
          </div>
       
          <div className="mt-6">
           <Link to='/' className="btn">GO TO HOME</Link>
          </div>
        </div>
      </div>
           </div>
    </div>
  );
};

export default PaymentCanceled;