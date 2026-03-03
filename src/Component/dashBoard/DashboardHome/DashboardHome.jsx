import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useUser from '../../../hooks/useUser'; // নিশ্চিত করুন এই হুকটি axios প্রদান করে
import useRoles from '../../../hooks/useRoles';
import RouteLoder from '../../../Routes/RouteLoder';
import RevenueChart from './Charts/RevenueChart';
import ProjectPieChart from './Charts/ProjectPieChart';
import UserRoleChart from './Charts/UserRoleChart';
import { CgProfile } from "react-icons/cg"; 
import ClientSpendingChart from './Charts/ClientSpendingChart';
import BookingStatusChart from './Charts/BookingStatusChart';

const DashboardHome = () => {
  const [role] = useRoles();
  const axios = useUser();
  const { data: stats, isLoading } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
        const res = await axios.get('/dashboard-stats');
        return res.data;
    }
  });
  if (isLoading) return <RouteLoder />;
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-10 rounded-[2.5rem] text-white flex justify-between items-center shadow-xl overflow-hidden relative transition-all hover:shadow-2xl hover:scale-[1.01]">
        <div className="z-10">
           <p className="text-xs font-bold uppercase opacity-80 tracking-widest mb-2">Total Community Members</p>
           <h2 className="text-6xl font-black">{stats?.totalUsers || 0}</h2>
        </div>
        <div className="absolute right-[-20px] bottom-[-20px] opacity-10 rotate-12">
            <CgProfile size={240} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <UserRoleChart data={stats?.roleDistribution} />
        {role === 'admin' && (
          <RevenueChart data={[
            { name: 'Revenue', value: stats?.revenue || 0 },
            { name: 'Bookings', value: stats?.bookings || 0 }
          ]} />
        )}

        {role === 'decorator' && (
          <ProjectPieChart data={[
            { name: 'Completed', value: stats?.completed || 0 },
            { name: 'Pending', value: (stats?.myProjects || 0) - (stats?.completed || 0) }
          ]} />
        )}

        {role === 'client' && (
          <>
            <ClientSpendingChart data={[
               { name: 'Total Spent', amount: stats?.totalSpent || 0 },
               { name: 'Avg/Booking', amount: (stats?.totalSpent / (stats?.myBookings || 1)).toFixed(2) }
            ]} />
            <BookingStatusChart data={[
                { name: 'My Total Bookings', value: stats?.myBookings || 0 }
            ]} />
          </>
        )}
      </div>
 
      {role === 'client' && (
          <div className="p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-800 transition-all hover:bg-indigo-100">
            <h3 className="text-indigo-600 dark:text-indigo-400 font-black uppercase text-xs tracking-widest mb-2">My Contribution</h3>
            <p className="text-lg">You have contributed <span className="font-black text-indigo-700 dark:text-indigo-300">${stats?.totalSpent || 0}</span> to our platform. We appreciate your trust!</p>
          </div>
      )}
    </div>
  );
};

export default DashboardHome;