// src/pages/cosmos/Inbox.jsx
import React from 'react';
import Sidebar from '../../components/cosmos/Sidebar';
import Header from '../../components/cosmos/Header';

const Inbox = () => {
  const messages = [
    {
      id: 1,
      sender: 'Leonardo Samuel',
      role: 'Mentor',
      message: 'Great work on your latest assignment! Keep it up.',
      time: '2 hours ago',
      read: false,
      avatar: '👨‍🏫',
    },
    {
      id: 2,
      sender: 'Padhang Satrio',
      role: 'Mentor',
      message: "Don't forget to submit your UI/UX project by Friday.",
      time: '5 hours ago',
      read: true,
      avatar: '👨‍💼',
    },
    {
      id: 3,
      sender: 'Bayu Saito',
      role: 'Mentor',
      message: "I've reviewed your frontend code. Here's my feedback...",
      time: '1 day ago',
      read: true,
      avatar: '👨‍🎓',
    },
  ];

  return (
    <div className='flex-1 p-6'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-900 mb-8'>Inbox</h1>

        <div className='bg-white rounded-xl border border-gray-200 overflow-hidden'>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors ${
                !message.read ? 'bg-blue-50' : ''
              }`}
            >
              <div className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center'>
                  <span className='text-lg'>{message.avatar}</span>
                </div>
                <div className='flex-1'>
                  <div className='flex items-center justify-between mb-2'>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900'>
                        {message.sender}
                      </h3>
                      <p className='text-sm text-gray-500'>{message.role}</p>
                    </div>
                    <div className='text-right'>
                      <span className='text-sm text-gray-500'>
                        {message.time}
                      </span>
                      {!message.read && (
                        <div className='w-2 h-2 bg-blue-500 rounded-full mt-1 ml-auto'></div>
                      )}
                    </div>
                  </div>
                  <p className='text-gray-700'>{message.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
