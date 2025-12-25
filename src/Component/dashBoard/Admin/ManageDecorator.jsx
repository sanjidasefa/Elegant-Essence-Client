import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import RouteLoder from "../../../Routes/RouteLoder";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md";

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
      role: reqData.role,
    });
    refetch();
    toast.success("apdate client role");
  };

const handleRoleDelete = async(id) =>{
  await axios.delete(`/handleChangeRole/${id}` )
   refetch();
  toast.success("the requst deleted");
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
                <th> Email</th>
                <td>Change Roles</td>
                <td>Delete request</td>
              </tr>
            </thead>
            <tbody>
              {data.map((requst) => {
                return (
                  <tr key={requst._id}>
                    <td>{requst.email}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => handleRoleUpdate(requst)}
                      >
                       {requst.role}
                      </button>
                    </td>
                    <td>
                       <button
                        className="btn"
                        onClick={() => handleRoleDelete(requst.id)}
                      >
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
    </div>
  );
};

export default ManageDecorator;
