// src/components/cosmos/Sidebar.jsx
import React from 'react';
import {
  BarChart3,
  MessageSquare,
  BookOpen,
  CheckSquare,
  Users,
  Settings,
  LogOut,
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: BarChart3, label: 'Dashboard', active: true },
    { icon: MessageSquare, label: 'Inbox' },
    { icon: BookOpen, label: 'Lesson' },
    { icon: CheckSquare, label: 'Task' },
    { icon: Users, label: 'Group' },
  ];

  const friends = [
    { name: 'Bagar Mahjoie', role: 'TUTOR', avatar: '👨‍🏫', online: true },
    { name: 'Sir Dandy', role: 'Old Friend', avatar: '👨‍💼', online: false },
    { name: 'Jhon Tosan', role: 'Friend', avatar: '👨‍🎓', online: true },
  ];

  return (
    <div className='w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col'>
      {/* Logo */}
      <div className='p-6 border-b border-gray-200'>
        <div className='flex items-center space-x-2'>
          <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center'>
            <span className='text-white font-bold text-lg'>C</span>
          </div>
          <span className='text-xl font-bold text-gray-800'>Coursue</span>
        </div>
      </div>

      {/* Overview Menu */}
      <div className='flex-1 p-4'>
        <div className='mb-6'>
          <h3 className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3'>
            OVERVIEW
          </h3>
          <nav className='space-y-1'>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href='#'
                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className='w-5 h-5 mr-3' />
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Friends Section */}
        <div className='mb-6'>
          <h3 className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3'>
            FRIENDS
          </h3>
          <div className='space-y-2'>
            {friends.map((friend, index) => (
              <div
                key={index}
                className='flex items-center px-3 py-2 rounded-lg hover:bg-gray-50'
              >
                <div className='relative'>
                  <div className='w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm'>
                    {friend.avatar}
                  </div>
                  {friend.online && (
                    <div className='absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white'></div>
                  )}
                </div>
                <div className='ml-3 flex-1'>
                  <p className='text-sm font-medium text-gray-900'>
                    {friend.name}
                  </p>
                  <p className='text-xs text-gray-500'>{friend.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className='p-4 border-t border-gray-200'>
        <div className='mb-4'>
          <h3 className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3'>
            SETTINGS
          </h3>
          <nav className='space-y-1'>
            <a
              href='#'
              className='flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            >
              <Settings className='w-5 h-5 mr-3' />
              Setting
            </a>
            <a
              href='#'
              className='flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            >
              <LogOut className='w-5 h-5 mr-3' />
              Logout
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
