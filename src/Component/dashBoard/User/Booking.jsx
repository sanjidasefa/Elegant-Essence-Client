import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";
import { Link } from "react-router";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";

const Booking = () => {
  const { user } = useAuth();
  const axios = useUser();
  const { data = [] } = useQuery({
    queryKey: ["my-Percels", user.email],
    queryFn: async () => {
      const data = await axios.get(`/serviceBooking`);
      console.log(data.data);
      return data.data;
    },
  });


  
  return (
    <div className="p-5 lg:p-10">
     <div className="flex justify-between">
       <h1 className="font-bold text-3xl mb-5 ">Bookings </h1>
       <Link to='/Service'className="btn flex"><MdOutlineBookmarkAdd />Add new Service</Link>
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
                  <td>{booking.clientAddress}</td>
                  <td>{booking.contactNumber}</td>
                  <td><button><MdOutlineDelete /></button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
