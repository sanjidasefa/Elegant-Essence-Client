import React, { use } from "react";
import { Link } from "react-router";

const blog = fetch("/Blog.json").then((res) => res.json());
const Blog = ({limit}) => {
  const blogData = use(blog);
  const iflimit = limit ? blogData.slice(0, limit) : blogData;
  return (
    <div className="bg-white p-10">
       <h1 className="text-3xl mb-10 md:text-5xl text-cyan-800  text-center  font-bold">Our Blog Preview</h1>
      <div className="flex flex-wrap justify-center items-center gap-10 flex-col md:flex-row ">
        {iflimit.map((data) => {
          return (
            <div key={data.id} className="card bg-cyan-800 text-white shadow-lg w-80">
              <div className="card-body w-full h-80">
                <p className="text-sm text-gray-900">
                  {data.date}
                </p>
                <h2 className="card-title text-lg">
                  {data.title}
                </h2>
                <p className="text-gray-900 font-semibold text-lg">
                  {data.excerpt}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm font-medium">By Admin</span>
                </div>
              </div>
                 
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
