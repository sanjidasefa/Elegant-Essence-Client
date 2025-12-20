import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";
import RouteLoder from "../../../Routes/RouteLoder";
import { Link } from "react-router";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axios = useUser();
  const { data = [] ,isLoading,
    isError, } = useQuery({
    queryKey: ["my-Percels", user.email],
    queryFn: async () => {
      const data = await axios.get(`/serviceBooking?email=${user.email}`);
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
        <button className="btn">Go to Home</button>
      </Link>
    );
  }

  return (
    <div>
      <div className="p-5 lg:p-10">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl mb-5 ">Payment List</h1>
        </div>
        <div className="overflow-x-auto ">
          <table className="table table-xs ">
            <thead>
              <tr className="text-cyan-800 ">
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>transaction id</th>
                <th>client email</th>
                <th>Paid At</th>
              </tr>
            </thead>
            <tbody>
              {data
              .filter(booking => booking.status === 'paid')
              .map((booking, index) => {
                return (
                  <tr
                    key={booking._id}
                    className="hover:bg-white hover:text-cyan-900"
                  >
                    <th>{index + 1}</th>
                    <td>{booking.serviceName}</td>
                    <td>
                      {booking.servicePrice}
                      tk
                    </td>
                   
                    <td>{booking.status}</td>
                    <td>{booking.transactionId}</td>
                    <td>{booking.email}</td>
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

export default PaymentHistory;
