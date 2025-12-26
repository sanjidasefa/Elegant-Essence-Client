import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import RouteLoder from "../../../Routes/RouteLoder";
import { Link } from "react-router";

const BookingManage = () => {
    const { user } = useAuth();
  const axios = useUser();
  const { data = [] ,isLoading,
    isError, } = useQuery({
    queryKey: ["manageOrders", user?.email],
    queryFn: async () => {
      const data = await axios.get(`/manageBookings`);
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
    <div>
      <div className=" p-5 lg:p-10">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl mb-5 ">MAnage Booking </h1>
        </div>
        <div className="overflow-x-auto ">
          <table className="table table-xs ">
            <thead>
              <tr className="text-cyan-800 ">
                <th></th>
                <th>client Email</th>
                <th>Name</th>
                <th>Payment Status</th>
                <th>Booking Status</th>
                <th>Paid At</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((booking) => booking.status === "paid")
                .map((booking, index) => {
                  return (
                    <tr key={booking._id} className="text-cyan-800">
                      <th>{index + 1}</th>
                      <td>{booking.client.clientEmail}</td>
                      <td>{booking.serviceName}</td>
                      <td>{booking.status}</td>
                      {/* <td>
                        <select defaultValue="Pick a color" className="select">
                          <option disabled={true}>Booking Confirmtion</option>
                          <option>Pending </option>
                          <option>Confirmed</option>
                          <option>Cancelled</option>
                        </select>
                      </td> */}
                      <td>{booking.paidAt}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingManage;
