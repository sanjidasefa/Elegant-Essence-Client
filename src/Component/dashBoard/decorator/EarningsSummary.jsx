import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import useUser from '../../../hooks/useUser';
import { useQuery } from '@tanstack/react-query';
import RouteLoder from '../../../Routes/RouteLoder';
import { Link } from 'react-router';

const EarningsSummary = () => {
     const { user } = useAuth();
    const axios = useUser();
  const { data = [], isLoading, isError } = useQuery({
  queryKey: ["decorator-completed", user?.email],
  queryFn: async () => {
    const res = await axios.get("/decorator-completed");
    return res.data;
  },
});
   if (isLoading){
     return <RouteLoder />
    };
  if (isError) {
     return (
       <Link to="/" className="flex justify-center mt-20">
          <h1 className="text-2xl font-bold ">No Request Here So,</h1>
         <button className="btn">Go to Home</button>
       </Link>
     );
   }
  return (
     <div className="p-2 lg:p-10">   
        <h1 className="font-bold text-3xl">Earning Summary</h1>
      {data.length === 0 ? (
        <p>No bookings today</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr className="text-cyan-800">
                <th></th>
                <th>Service</th>
                <th>service Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data
              .map((booking, index) => (
                <tr key={booking._id} className="hover:bg-white hover:text-cyan-900">
                  <th>{index + 1}</th>
                  <td>{booking.serviceName}</td>
                <td>{booking.servicePrice}</td>
                  <td>{booking.status}</td>
               </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EarningsSummary;