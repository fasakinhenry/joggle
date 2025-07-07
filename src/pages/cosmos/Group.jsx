// src/pages/cosmos/Group.jsx
import React from 'react';
import Sidebar from '../../components/cosmos/Sidebar';
import Header from '../../components/cosmos/Header';

const Group = () => {
  const groups = [
    {
      id: 1,
      name: 'UI/UX Design Masters',
      members: 24,
      description:
        'Advanced UI/UX design discussions and project collaborations',
      category: 'Design',
      active: true,
    },
    {
      id: 2,
      name: 'Frontend Developers',
      members: 18,
      description: 'React, Vue, Angular and modern frontend technologies',
      category: 'Development',
      active: false,
    },
    {
      id: 3,
      name: 'Brand Identity Studio',
      members: 12,
      description: 'Creative brand design and marketing strategies',
      category: 'Branding',
      active: true,
    },
  ];

  return (
    <div className='flex h-screen bg-gray-50'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <Header />
        <div className='flex-1 p-6'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-3xl font-bold text-gray-900 mb-8'>
              Study Groups
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {groups.map((group) => (
                <div
                  key={group.id}
                  className='bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow'
                >
                  <div className='flex items-start justify-between mb-4'>
                    <div className='flex-1'>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                        {group.name}
                      </h3>
                      <p className='text-gray-600 text-sm mb-4'>
                        {group.description}
                      </p>
                      <div className='flex items-center space-x-4 text-sm'>
                        <span className='text-gray-500'>
                          {group.members} members
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            group.category === 'Design'
                              ? 'bg-purple-100 text-purple-800'
                              : group.category === 'Development'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-pink-100 text-pink-800'
                          }`}
                        >
                          {group.category}
                        </span>
                        {group.active && (
                          <span className='flex items-center text-green-600'>
                            <div className='w-2 h-2 bg-green-500 rounded-full mr-2'></div>
                            Active
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
                      View Group
                    </button>
                    <button className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium'>
                      Join
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
