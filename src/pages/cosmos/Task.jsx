import React from 'react';
import Sidebar from '../../components/cosmos/Sidebar';
import Header from '../../components/cosmos/Header';

const Task = () => {
  const tasks = [
    {
      id: 1,
      title: 'Complete UI/UX Design Assignment',
      description: 'Design a mobile app interface for a food delivery service',
      dueDate: '2024-07-10',
      priority: 'High',
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Frontend Development Project',
      description:
        'Build a responsive landing page using React and Tailwind CSS',
      dueDate: '2024-07-15',
      priority: 'Medium',
      status: 'Not Started',
    },
    {
      id: 3,
      title: 'Brand Identity Research',
      description: 'Conduct market research for brand positioning strategy',
      dueDate: '2024-07-08',
      priority: 'Low',
      status: 'Completed',
    },
  ];

  return (
    <div className='flex h-screen bg-gray-50'>
      <Sidebar />
      <div className='flex-1 flex flex-col overflow-auto'>
        <Header />
        <div className='flex-1 p-6'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-3xl font-bold text-gray-900 mb-8'>My Tasks</h1>

            <div className='space-y-4'>
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className='bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow'
                >
                  <div className='flex items-start justify-between'>
                    <div className='flex-1'>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                        {task.title}
                      </h3>
                      <p className='text-gray-600 text-sm mb-4'>
                        {task.description}
                      </p>
                      <div className='flex items-center space-x-4 text-sm'>
                        <span className='text-gray-500'>
                          Due: {task.dueDate}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            task.priority === 'High'
                              ? 'bg-red-100 text-red-800'
                              : task.priority === 'Medium'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {task.priority}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            task.status === 'Completed'
                              ? 'bg-green-100 text-green-800'
                              : task.status === 'In Progress'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {task.status}
                        </span>
                      </div>
                    </div>
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

export default Task;
