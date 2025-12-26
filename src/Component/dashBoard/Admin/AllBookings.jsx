import React from 'react';
import useUser from '../../../hooks/useUser';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';
import RouteLoder from '../../../Routes/RouteLoder';
import { MdOutlineBookmarkAdd } from 'react-icons/md';

const AllBookings = () => {
    const axios = useUser();
    const { data = [] ,isLoading,
      isError, } = useQuery({
      queryKey: ["All-Bookings"],
      queryFn: async () => {
        const data = await axios.get(`/all-Bookings`);
        console.log(data.data);
        return data.data;
      },
    });
  
     if (isLoading) {
      return <RouteLoder></RouteLoder>;
    }
  
    if (isError) {
      return (
        <Link to="/" className="flex justify-center mt-20">
          <p>booking not found</p>
          <button className="btn">Go to Home</button>
        </Link>
      );
    }
  return (
   <div className="p-5 lg:p-10">
       <div className="flex justify-between">
         <h1 className="font-bold text-3xl mb-5 ">All Bookings </h1>
         
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
                   <td>
                     {booking.status}
                   </td>
                   <td> {booking.client?.contactNumber || booking.contactNumber}</td>
                   <td>{booking.client?.clientAddress}</td>
                   <td>{booking.createdAt}</td>
                 </tr>
               );
             })}
           </tbody>
         </table>
       </div>
     </div>
  );
};

export default AllBookings;