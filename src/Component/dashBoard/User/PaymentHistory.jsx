import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";

const PaymentHistory = () => {
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
                <th>Paid At</th>
              </tr>
            </thead>
            <tbody>
              {data.map((booking, index) => {
               
                return (
                  <tr
                    key={booking._id}
                    className="hover:bg-white hover:text-cyan-900"
                  >
                    <th>{index + 1}</th>
                    <td>{booking.serviceName}</td>
                    <td>{booking.servicePrice} tk</td>
                    <td>{booking.status}</td>
                    <td>{booking.transactionId}</td>
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
