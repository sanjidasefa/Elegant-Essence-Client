import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import RouteLoder from "../../../Routes/RouteLoder";
import { Link } from "react-router";
import toast from "react-hot-toast";

const ManageDecorator = () => {
  const { user } = useAuth();
  const axios = useUser();
  const {
    data = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["ManageDecorator", user?.email],
    queryFn: async () => {
      const data = await axios.get(`/handleChangeRole`);
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
  const handleRoleUpdate = async (reqData) => {
    await axios.patch("/handleChangeRole", {
      ...reqData,
      role: "decorator",
    });
    refetch();
    toast.success("apdate client role");
  };
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
                <th> Email</th>
                <td>Change Roles</td>
              </tr>
            </thead>
            <tbody>
              {data.map((requst) => {
                return (
                  <tr key={requst._id}>
                    <td>{requst.email}</td>
                    <td>
                     {
                      requst.role === 'decorator' ? <span>approved</span> :  <button className="btn" onClick={()=>handleRoleUpdate(requst.email)}>
                        decorator
                      </button>
                     }
                    </td>
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

export default ManageDecorator;
