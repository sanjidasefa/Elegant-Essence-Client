import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const UserRoleChart = ({ data }) => {
  const COLORS = ['#0891b2', '#10b981', '#6366f1'];
  const chartData = data?.map(item => ({
    name: item._id.charAt(0).toUpperCase() + item._id.slice(1), 
    value: item.count
  }));

  return (
    <div className="h-80 w-full bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800">
      <h3 className="text-sm font-black text-slate-400 mb-4 uppercase tracking-widest">User Role Distribution</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {chartData?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserRoleChart;