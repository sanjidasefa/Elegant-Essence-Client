import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";
import { Link } from "react-router";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import Swal from "sweetalert2";
import RouteLoder from "../../../Routes/RouteLoder";

const Booking = () => {
  const { user } = useAuth();
  const axios = useUser();
  const {
    data = [],
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["my-Percels", user?.email],
    queryFn: async () => {
      const data = await axios.get(`/serviceBooking?email=${user.email}`);
      // console.log(data.data);
      return data.data;
    },
  });
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
       refetch();
      if (result.isConfirmed) {
        axios.delete(`/serviceBooking/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your booking has been deleted.",
          icon: "success",
        });
       
      }
    });
  };
  const handlePayment = async (booking) => {
    const payment = {
      bookingId: booking._id,
      serviceName: booking.serviceName,
      description: booking.serviceDescription,
      servicePrice: booking.servicePrice,
      decorator : booking.decorator,
      client: {
        name: user.displayName,
         clientAddress: booking.client.clientAddress,
      contactNumber: booking.client.contactNumber,
      clientEmail: booking.client.clientEmail,
      },
    };
    // console.log(booking)
    const result = await axios.post("/create-checkout-session", payment);
    window.location.assign(result.data.url);
  };
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
        <h1 className="font-bold text-3xl mb-5 ">Bookings </h1>
        <Link to="/Service" className="btn flex">
          <MdOutlineBookmarkAdd />
          Add new Service
        </Link>
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
                  <td>
                    {booking.status === "paid" ? (
                      <p>paid</p>
                    ) : (
                      <button
                        className="btn btn-sm bg-cyan-600"
                        onClick={() => handlePayment(booking)}
                      >
                        {" "}
                        pay
                      </button>
                    )}
                  </td>
                  <td> {booking.client?.contactNumber || booking.contactNumber}</td>
                  <td>{booking.client?.clientAddress}</td>
                  <td>
                    <button onClick={() => handleDelete(booking._id)}>
                      <MdOutlineDelete />
                    </button>
                  </td>
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
