import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/cosmos/Sidebar';
import Topbar from '../components/cosmos/Topbar';

const DashboardLayout = () => {
  return (
    <div className='flex h-screen overflow-hidden bg-[#f4f4f5]'>
      <Sidebar />
      <div className='flex-1 flex flex-col overflow-auto'>
        <Topbar />
        <main className='p-6 overflow-y-auto h-full'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
