import React from "react";

const RouteLoder = () => {
  return (
    <div>
      <div className="w-11/12 m-10 flex justify-center gap-5 items-center">
         <div className="flex flex-col gap-4">
  <div className="flex items-center gap-4">
    <div className="skeleton h-30 w-30 shrink-0 rounded-full"></div>
    <div className="flex flex-col gap-4">
      <div className="skeleton h-5 w-28"></div>
      <div className="skeleton h-8 w-36"></div>
    </div>
  </div>
  <div className="skeleton h-40 w-full"></div>
</div>
      </div>
      <h1 className="text-center text-3xl">loding...</h1>
    </div>
  );
};

export default RouteLoder;
