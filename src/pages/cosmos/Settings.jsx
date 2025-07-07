// src/pages/cosmos/Settings.jsx
import React from 'react';
import Sidebar from '../../components/cosmos/Sidebar';
import Header from '../../components/cosmos/Header';

const Settings = () => {
  return (
    <div className='flex h-screen bg-gray-50'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <Header />
        <div className='flex-1 p-6'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-3xl font-bold text-gray-900 mb-8'>Settings</h1>

            <div className='space-y-6'>
              {/* Profile Settings */}
              <div className='bg-white rounded-xl border border-gray-200 p-6'>
                <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                  Profile Settings
                </h2>
                <div className='space-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                      defaultValue='Jason Ranti'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Email
                    </label>
                    <input
                      type='email'
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                      defaultValue='jason@example.com'
                    />
                  </div>
                </div>
              </div>

              {/* Notification Settings */}
              <div className='bg-white rounded-xl border border-gray-200 p-6'>
                <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                  Notifications
                </h2>
                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-700'>
                      Email Notifications
                    </span>
                    <button className='relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600'>
                      <span className='inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6'></span>
                    </button>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-700'>
                      Push Notifications
                    </span>
                    <button className='relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300'>
                      <span className='inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1'></span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Privacy Settings */}
              <div className='bg-white rounded-xl border border-gray-200 p-6'>
                <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                  Privacy
                </h2>
                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-700'>
                      Profile Visibility
                    </span>
                    <select className='px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option>Public</option>
                      <option>Private</option>
                      <option>Friends Only</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
