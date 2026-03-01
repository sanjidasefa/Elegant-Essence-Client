import React from "react";
import Login from "../Auth/Login";
import Banner from "./Banner/Banner";
import Banner2 from "./Banner/Banner2";
import Banner3 from "./Banner/Banner3";
import Service from "../service/Service";
import { Link, useLoaderData } from "react-router";
import { MdOutlineAttachMoney } from "react-icons/md";
import Decorators from "../dashBoard/Admin/Decorators";
import FAQ from "../About/FAQ";
import Sponsors from "./Banner/Sponsors";
import Blog from "./Banner/Blog";

const Home = () => {
  const serviceData = useLoaderData();
  return (
    <div>
      <div className="bg-white p-5 lg:p-10">
        <Banner3></Banner3>
      </div>
      <Login></Login>
      <Banner></Banner>
      <Sponsors></Sponsors>

      <div className="bg-cyan-50 p-12 flex justify-center ">
        <div>
          <h1 className="text-3xl mb-10 md:ext-5xtl text-cyan-800  text-center  font-bold">
            {" "}
            Our Service Package
          </h1>
          <div className="grid lg:grid-cols-4 gap-10 ">
            {serviceData?.slice(0,9).map((service) => (
              <div
                key={service._id}
                className="card bg-cyan-700 w-96 shadow-sm"
              >
                <figure>
                  <img className="w-full h-48 object-cover" src={service.servicePhoto} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{service.serviceName}</h2>
                  <div className="badge p-3 font-bold text-lg">
                    <MdOutlineAttachMoney />
                    {service.servicePrice}
                  </div>
                  <p>{service.serviceDescription}</p>
                  <div className="card-actions justify-end">
                    <div className="text-cyan-300 text-xs">
                      {service.createAt}
                    </div>
                  </div>
                  <Link
                    className="text-pink-400"
                    to={`/Service/${service._id}`}
                  >
                    See More ..
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end my-6">
            <Link to="/Service" className="btn bg-cyan-700 ">
              Explopre More ...
            </Link>
          </div>
        </div>
      </div>

       
     <div className="p-10 bg-cyan-50 text-cyan-800">
        <Decorators limit={3}></Decorators>
        <div className="flex justify-end my-6">
          <Link to="/Decorators-List" className="btn bg-cyan-700 ">
            Explopre More ...
          </Link>
        </div>
      </div>
      <Banner2></Banner2>
      <FAQ></FAQ>
     <div className="p-10 bg-cyan-50 text-cyan-800">
        <Blog limit={4}></Blog>
        <div className="flex justify-end my-6">
          <Link to="/Blog-Preview" className="btn bg-cyan-700 ">
            Explopre More ...
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
