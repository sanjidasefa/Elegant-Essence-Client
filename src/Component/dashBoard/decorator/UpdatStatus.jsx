import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import useUser from '../../../hooks/useUser';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import RouteLoder from '../../../Routes/RouteLoder';
import { Link } from 'react-router';

const UpdatStatus = () => {
    const { user } = useAuth();
    const axios = useUser();

    const {
    data: bookings = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["todays-schedule", user?.email],
    queryFn: async () => {
      const res = await axios.get("/todays-schedule");
      console.log(res.data)
      return res.data
    },
  });

  const handleUpdateStatus = async (bookingId,status) => {
    try { 
      await axios.patch(`/updatedBooking/${bookingId}`,{ status: status})
      toast.success("Service Status Updated")
      refetch();
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error("Failed to update");
    }
  };
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
    <div>
        <div className="p-3 lg:p-10">
      <h1 className="font-bold text-3xl mb-5">Update Service Status</h1>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr className="text-cyan-800">
              <th></th>
              <th>Client Email</th>
              <th>Service Name</th>
              <th>Action</th>
              <th>service Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings
              .map((booking, index) => (
                <tr key={booking._id} className="text-white">
                  <th>{index + 1}</th>
                  <td>{booking.email}</td>
                  <td>{booking.serviceName}</td>
                  
                  <td>
                    <select
                      className="select select-bordered select-sm"
                      defaultValue=""
                      onChange={(e) =>
                        handleUpdateStatus(booking._id, e.target.value)
                      }
                    >
                      <option value="" disabled>
                      in-Process
                      </option>
                      <option value="completed" >
                    Completed
                      </option>
                      <option value="declined">Declined</option>
                    </select>
                  </td>
                  <td>
                    {booking.servicePrice}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default UpdatStatus;