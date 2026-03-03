import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const ClientSpendingChart = ({ data }) => (
  <div className="h-80 w-full bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800">
    <h3 className="text-sm font-black text-slate-400 mb-4 uppercase tracking-widest">My Spending Overview</h3>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#6366f1" radius={[10, 10, 0, 0]} barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ClientSpendingChart;