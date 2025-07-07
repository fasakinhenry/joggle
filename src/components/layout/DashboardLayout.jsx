import React, { useState } from 'react';
import {
  Home,
  Inbox,
  Calendar,
  BookOpen,
  GraduationCap,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  Play,
  Bell,
  Search,
} from 'lucide-react';

const DashboardLayout = ({ children, activeTab, setActiveTab }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'inbox', label: 'Inbox', icon: Inbox },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'quizzes', label: 'Quizzes', icon: BookOpen },
    { id: 'curriculums', label: 'Curriculums', icon: GraduationCap },
    { id: 'lesson', label: 'Lesson', icon: Play },
  ];

  const friends = [
    { name: 'Reggie Mahjoie', status: 'Friend' },
    { name: 'Sir Dandy', status: 'Old Friend' },
    { name: 'Jhon Tosan', status: 'Friend' },
  ];

  return (
    <div className='flex h-screen overflow-hidden bg-gray-50'>
      {/* Sidebar for large screens */}
      <aside className='hidden lg:flex flex-col w-64 bg-white border-r shadow-sm'>
        <div className='flex items-center justify-between p-4 border-b'>
          <div className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-sm'>J</span>
            </div>
            <span className='text-xl font-bold'>Joggle</span>
          </div>
        </div>

        <nav className='flex-1 overflow-y-auto p-4 space-y-6'>
          <div className='text-[10px] tracking-wider font-semibold text-gray-400 uppercase'>
            Overview
          </div>
          <div className='space-y-2'>
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors group ${
                    isActive ? 'bg-blue-50' : 'hover:bg-gray-100'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 mr-3 ${
                      isActive
                        ? 'text-blue-600'
                        : 'text-gray-500 group-hover:text-blue-600'
                    }`}
                  />
                  <span className='text-sm text-black'>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className='pt-6 space-y-2'>
            <div className='text-[10px] tracking-wider font-semibold text-gray-400 uppercase'>
              Friends
            </div>
            {friends.map((friend, idx) => (
              <div key={idx} className='flex items-center px-3 py-2'>
                <div className='w-8 h-8 bg-gray-300 rounded-full mr-3' />
                <div>
                  <div className='text-sm font-medium text-gray-900'>
                    {friend.name}
                  </div>
                  <div className='text-xs text-gray-500'>{friend.status}</div>
                </div>
              </div>
            ))}
          </div>
        </nav>

        <div className='p-4 border-t space-y-2'>
          <div className='text-[10px] tracking-wider font-semibold text-gray-400 uppercase'>
            Settings
          </div>
          <button className='w-full flex items-center px-3 py-2 text-left rounded-lg text-gray-700 hover:bg-gray-100'>
            <Settings className='w-5 h-5 mr-3' />
            <span className='text-sm'>Settings</span>
          </button>
          <button className='w-full flex items-center px-3 py-2 text-left rounded-lg text-gray-700 hover:bg-gray-100'>
            <LogOut className='w-5 h-5 mr-3' />
            <span className='text-sm'>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity lg:hidden ${
          sidebarOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar for mobile */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden`}
      >
        <div className='flex items-center justify-between p-4 border-b'>
          <div className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-sm'>J</span>
            </div>
            <span className='text-xl font-bold'>Joggle</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className='lg:hidden'>
            <X className='w-6 h-6' />
          </button>
        </div>
        {/* Optional: Add navigation here if you want mobile nav */}
      </aside>

      {/* Main Content */}
      <div className='flex-1 flex flex-col h-full'>
        {/* Header */}
        <header className='bg-white shadow-sm border-b px-6 py-4 flex-shrink-0'>
          <div className='flex items-center justify-between'>
            <button onClick={() => setSidebarOpen(true)} className='lg:hidden'>
              <Menu className='w-6 h-6' />
            </button>

            <div className='flex-1 max-w-md mx-4'>
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
                <input
                  type='text'
                  placeholder='Search your course...'
                  className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <button className='p-2 hover:bg-gray-100 rounded-lg'>
                <Bell className='w-5 h-5' />
              </button>
              <div className='flex items-center space-x-2'>
                <div className='w-8 h-8 bg-gray-300 rounded-full' />
                <span className='text-sm font-medium'>Jason Ranti</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className='flex-1 overflow-y-auto p-6'>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
