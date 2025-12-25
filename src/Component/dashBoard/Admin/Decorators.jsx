import React from "react";
import useUser from "../../../hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import RouteLoder from "../../../Routes/RouteLoder";
import { Link } from "react-router";
import rating from '../../../assets/icons8-rating.gif';

const Decorators = () => {
  const axios = useUser();

  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Decorators"],
    queryFn: async () => {
      const data = await axios.get(`/decorators-list`);
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
    <div className="lg:px-20 ">
 <h1 className="font-bold text-3xl mb-5 ">Decorator List</h1>
<div className="grid grid-cols-2 gap-10">
  
      {data.map((decorator) => {
        return (
          <div key={decorator._id}>
            <div className="bg-white shadow-2xl my-3 rounded-2xl p-5 ">
              <div className="flex gap-10">
                
                <div>
                 <div className="">
                   <h1 className="text-2xl text-cyan-800 font-bold">
                    {decorator.name}
                  </h1>
                  <div className="flex  items-center gap-1">
                      <img src={rating} alt="" className="w-6 h-6"/>
                    <p className="text-gray-500 my-3 flex gap-3 "> {decorator.rating}
                  </p>
                  </div>
                 </div>
                  
                   <div>
                    <h1 className="font-bold text-cyan-700 text-xl ">
                     Specialties : 
                    </h1>
                     <p className="text-gray-500 w-1/2">
                      {decorator.specialties}
                    </p>
                   </div>
                     <h1 className="font-bold text-cyan-700 mt-3 text-xl ">
                     Decorator's Top Service : 
                    </h1>
                    <p className="text-gray-500 w-1/2">
                      {" "}
                      {decorator.topServices}
                    </p>
                </div>
              </div>
              <div className="flex justify-between mt-3 text-cyan-500">
                <p>Experience : {decorator.experienceYears} </p>
                 <p className="">
                  Total Reviews : 
                      {" "}
                      {decorator.totalReviews}
                    </p>
              </div>
            </div>
          </div>
        );
      })}
</div>
    </div>
  );
};

export default Decorators;
