import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/cosmos/Sidebar';
import Topbar from '../components/cosmos/Topbar';

const DashboardLayout = () => {
  return (
    <div className='flex h-screen overflow-hidden bg-[#f4f4f5]'>
      <Sidebar />
      <div className='flex-1 flex flex-col overflow-y-auto'>
        <Topbar />
        <main className='p-6 h-full'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
