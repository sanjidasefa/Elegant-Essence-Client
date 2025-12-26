import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import useUser from '../../../hooks/useUser';
import { useQuery } from '@tanstack/react-query';
import RouteLoder from '../../../Routes/RouteLoder';
import { Link } from 'react-router';

const TodaySchedule = () => {
  const { user } = useAuth();
  const axios = useUser();
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["my-Projects", user?.email],
      enabled: !!user?.email,
    queryFn: async () => {
      const data = await axios.get(`/todays-schedule`);
      // console.log(data.data);
      return data.data;
    },
  });
  if (isLoading) {
    return <RouteLoder></RouteLoder>;
  }

  if (isError) {
    return (
      <Link to="/" className="flex justify-center mt-20">
        <button className="btn">Go to Home</button>
      </Link>
    );
  }
  return (
  <div className="p-5 lg:p-10">
       <div className="flex justify-between">
         <h1 className="font-bold text-3xl mb-5 ">Today's Schedule </h1> 
         {
          data.length === 0 ? <p>no Booking Today</p> : <p>{data.length}</p>
         }
       </div>
       <div className="overflow-x-auto ">
         <table className="table table-xs ">
           <thead>
             <tr className="text-cyan-800 ">
               <th></th>
               <th>Name</th>
               <th>Client Email</th>
               <th>Price</th>
               <th>Status</th>
               <th>Location</th>
               <th>Number</th>
               <th>Booking Date</th>
             </tr>
           </thead>
           <tbody>
             {data.map((booking, index) => {
               console.log(booking);
               return (
                 <tr
                   key={booking._id}
                   className="hover:bg-white hover:text-cyan-900"
                 >
                   <th>{index + 1}</th>
                   <td>{booking.serviceName}</td>
                   <td>{booking.email}</td>
                   <td>{booking.servicePrice}</td>
                   <td>{booking.status}</td>
                   <td>{booking.client?.clientAddress}</td>
                   <td> {booking.client?.contactNumber || booking.contactNumber}</td>
                   <td>{new Date(booking.createdAt).toLocaleTimeString()}</td>
                 </tr>
               );
             })}
           </tbody>
         </table>
       </div>
     </div>
  );
};

export default TodaySchedule;