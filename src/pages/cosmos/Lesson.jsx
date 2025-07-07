// src/pages/cosmos/Lesson.jsx
import React from 'react';
import Sidebar from '../../components/cosmos/Sidebar';
import Header from '../../components/cosmos/Header';

const Lesson = () => {
  return (

        <div className='flex-1 p-6'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-3xl font-bold text-gray-900 mb-8'>
              My Lessons
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {/* Lesson Card */}
              <div className='bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-2xl'>📚</span>
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Introduction to UI/UX
                </h3>
                <p className='text-gray-600 text-sm mb-4'>
                  Learn the fundamentals of user interface and user experience
                  design.
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-500'>Progress: 75%</span>
                  <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
                    Continue
                  </button>
                </div>
              </div>

              {/* More lesson cards... */}
              <div className='bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-2xl'>💻</span>
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Frontend Development
                </h3>
                <p className='text-gray-600 text-sm mb-4'>
                  Master modern frontend technologies and frameworks.
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-500'>Progress: 45%</span>
                  <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
                    Continue
                  </button>
                </div>
              </div>

              <div className='bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-2xl'>🎨</span>
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Brand Design
                </h3>
                <p className='text-gray-600 text-sm mb-4'>
                  Create compelling brand identities and visual systems.
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-500'>Progress: 30%</span>
                  <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
                    Start
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Lesson;
