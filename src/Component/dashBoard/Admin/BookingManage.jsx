import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import RouteLoder from "../../../Routes/RouteLoder";
import toast from "react-hot-toast";
import { Link } from "react-router";

const BookingManage = () => {
  const { user } = useAuth();
  const axios = useUser();

  // Fetch all bookings
  const {
    data: bookings = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["manageOrders", user?.email],
    queryFn: async () => {
      const res = await axios.get("/manageBookings");
      return res.data;
    },
  });

  // Fetch all decorators
  const { data: decorators = [] } = useQuery({
    queryKey: ["decorators"],
    queryFn: async () => {
      const res = await axios.get("/decorators-list");
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

  const handleAssignDecorator = async (bookingId, value) => {
    if (!value) return;

    try {
      if (value === "decline") {
        await axios.patch(`/decline-booking/${bookingId}`, {
          status: "declined",
        });
        toast.success("Booking declined");
      } else {
        await axios.patch(`/assign-decorators/${bookingId}`, {
          decoratorEmail: value,
        });
        toast.success("Decorator assigned successfully");
      }
      refetch();
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error("Failed to update");
    }
  };

  return (
    <div className="p-5 lg:p-10">
      <h1 className="font-bold text-3xl mb-5">Assign Decorators</h1>

      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr className="text-cyan-800">
              <th></th>
              <th>Client Email</th>
              <th>Service</th>
              <th>Status</th>
              <th>Assigned Decorator</th>
              <th>Action</th>
              <th>Paid At</th>
            </tr>
          </thead>
          <tbody>
            {bookings
              .filter((b) => b.status === "paid" || b.status === "assigned")
              .map((booking, index) => (
                <tr key={booking._id} className="text-cyan-800">
                  <th>{index + 1}</th>
                  <td>{booking.email}</td>
                  <td>{booking.serviceName}</td>
                  <td>
                    <span className="badge badge-success">
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    {booking.decorator ? (
                      <span className="badge badge-primary">
                        {booking.decorator.name}
                      </span>
                    ) : (
                      <span className="text-gray-500">Not Assigned</span>
                    )}
                  </td>
                  <td>
                    <select
                      className="select select-bordered select-sm"
                      defaultValue=""
                      onChange={(e) =>
                        handleAssignDecorator(booking._id, e.target.value)
                      }
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {decorators.map((decorator) => (
                        <option key={decorator.email} value={decorator.email}>
                          {decorator.name} ({decorator.email})
                        </option>
                      ))}
                      <option value="decline">Decline</option>
                    </select>
                  </td>
                  <td>
                    {booking.paidAt
                      ? new Date(booking.paidAt).toLocaleString()
                      : "N/A"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingManage;
