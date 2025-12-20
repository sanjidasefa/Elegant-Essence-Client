import React, { useEffect } from 'react';
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import { Link, useSearchParams } from 'react-router';
import useUser from '../../../../hooks/useUser';

const PaymentSuccess = () => {
  const axios = useUser()
  const [searchParams ] = useSearchParams()
   const { width, height } = useWindowSize()
   const sessionId = searchParams.get('session_id')
   useEffect(()=> {
    if(sessionId){
      axios.patch(`/payment-success?session_id=${sessionId}`, {sessionId})
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log('payment update failed',err)
      })
    }
   },[sessionId , axios])
 
  return (
    <>
      <Confetti
           width={width}
           height={height}
         />
     <div className='flex justify-center mt-20'>
       <div className="card w-96 bg-white shadow-2xl">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">Paid</span>
    <div >
      <h2 className="text-3xl text-cyan-900 font-bold">Payment Successful!t</h2>
      <h1 className='text-lg font-semibold my-3 text-gray-700'>Thank you for your booking</h1>
    </div>
 
    <div className="mt-6">
     <Link to='/' className="btn">GO TO HOME</Link>
    </div>
  </div>
</div>
     </div>
    </>
  );
};

export default PaymentSuccess;