import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Inbox,
  BookOpen,
  Calendar,
  Users,
  Settings,
  LogOut,
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: Home, path: '/cosmos' },
  { name: 'Inbox', icon: Inbox, path: '/cosmos/inbox' },
  { name: 'Lesson', icon: BookOpen, path: '/cosmos/lessons' },
  { name: 'Task', icon: Calendar, path: '/cosmos/tasks' },
  { name: 'Group', icon: Users, path: '/cosmos/group' },
];

const Sidebar = () => {
  return (
    <aside className='w-64 bg-white shadow-md h-full px-4 py-6 flex flex-col'>
      <h1 className='text-xl font-bold text-purple-600 mb-8'>Cosmos</h1>
      <nav className='flex flex-col gap-4'>
        {navItems.map(({ name, icon: Icon, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-purple-100 text-purple-700 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <Icon size={20} />
            {name}
          </NavLink>
        ))}
      </nav>
      <div className='mt-auto'>
        <NavLink
          to='#'
          className='flex items-center gap-3 px-4 py-2 mt-4 text-red-500 hover:bg-red-100 rounded-lg'
        >
          <LogOut size={20} /> Logout
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
