import React from "react";
import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";
import useUser from "../../../hooks/useUser";
import { useAuth } from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const DecoratorChart = ({ isAnimationActive = true }) => {
  const axios = useUser();
  const { user } = useAuth();
  const { data = [] } = useQuery({
    queryKey: ["my-Projects", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const data = await axios.get(`/my-projects?email=${user.email}`);
      console.log(data.data);
      return data.data;
    },
  });
  const chartData = data.map((item) => ({
    name: item.serviceName,
    price: item.servicePrice,
  }));
  return (
    <>
      <h1 className="font-bold text-2xl lg:text-4xl">Decorator Dashboard</h1>
      <div className="w-full h-80">
        <h1 className="font-bold my-5">My Projects Data</h1>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#8884d8"
              isAnimationActive={isAnimationActive}
            />
            <Bar
              dataKey="price"
              fill="#82ca9d"
              isAnimationActive={isAnimationActive}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default DecoratorChart;
