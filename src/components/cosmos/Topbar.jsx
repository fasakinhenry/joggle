import React from 'react';
import { Bell, UserCircle, Search } from 'lucide-react';

const Topbar = () => {
  return (
    <header className='flex justify-between items-center px-6 py-4'>
      <div className='flex'>
        <Search className='text-gray-600' />
        <input
          type='text'
          placeholder='Search your course...'
          className='border border-gray-200 rounded-lg px-4 py-2 bg-white'
        />
      </div>
      <div className='flex items-center gap-4'>
        <Bell className='text-gray-600' />
        <UserCircle className='text-gray-600' />
        <span className='font-semibold'>Jason Ranti</span>
      </div>
    </header>
  );
};

export default Topbar;
