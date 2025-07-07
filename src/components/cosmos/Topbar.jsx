import React from 'react';
import { Bell, UserCircle } from 'lucide-react';

const Topbar = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <input
        type="text"
        placeholder="Search your course..."
        className="border border-gray-200 rounded-lg px-4 py-2 w-1/3"
      />
      <div className="flex items-center gap-4">
        <Bell className="text-gray-600" />
        <UserCircle className="text-gray-600" />
        <span className="font-semibold">Jason Ranti</span>
      </div>
    </header>
  );
};

export default Topbar;
