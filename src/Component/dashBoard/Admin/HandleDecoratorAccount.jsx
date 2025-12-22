import React from "react";
import useRoles from "../../../hooks/useRoles";
import RouteLoder from "../../../Routes/RouteLoder";
import { useAuth } from "../../../hooks/useAuth";

const HandleDecoratorAccount = () => {
     const [role , roleLoading] = useRoles();
     const {user} = useAuth();
     if (roleLoading) {
      return <RouteLoder></RouteLoder>;
    }
  return (
    <div>
      <div className="">
        <div className="p-10 rounded-2xl">
          <h1 className="text-4xl mb-5 font-bold text-center text-cyan-800 ">
            User to Decorator
          </h1>
          <div className="overflow-x-auto ">
            <table className="table table-xs ">
              <thead>
                <tr className="text-cyan-800 ">
                  <th>Name</th>
                  <th> Email</th> 
                  <th>Default Role</th> 

                  <th>Update Role</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-cyan-800 ">
                  <th xlas>{user.displayName}</th>
                  <th> {user.email}</th> 
                  <th>{role}</th>
                  <th>
                    <select defaultValue="Pick a color" className="select">
                      <option disabled={true}>
                        Become a role Admin/decorator
                      </option>
                      <option>Admin</option>
                      <option>Decorator</option>
                    </select>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandleDecoratorAccount;
