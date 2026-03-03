import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RevenueChart = ({ data }) => (
  <div className="h-80 w-full bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
    <h3 className="text-sm font-bold text-slate-400 mb-4 uppercase">Revenue vs Bookings</h3>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#0891b2" radius={[10, 10, 0, 0]} barSize={40} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default RevenueChart;