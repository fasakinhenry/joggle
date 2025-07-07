// src/components/cosmos/MainContent.jsx
import React from 'react';
import {
  ArrowRight,
  Play,
  Heart,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const MainContent = () => {
  const courses = [
    {
      id: 1,
      title: "Beginner's Guide to Becoming a Professional Front-End Developer",
      instructor: 'Leonardo samuel',
      role: 'Mentor',
      image: '/api/placeholder/300/200',
      category: 'FRONT END',
      progress: 0,
    },
    {
      id: 2,
      title: 'Optimizing User Experience with the Best UI/UX Design',
      instructor: 'Bayu Saito',
      role: 'Mentor',
      image: '/api/placeholder/300/200',
      category: 'UI/UX DESIGN',
      progress: 0,
    },
    {
      id: 3,
      title: 'Rebranding and Refresh Company Image',
      instructor: 'Padhang Satrio',
      role: 'Mentor',
      image: '/api/placeholder/300/200',
      category: 'BRANDING',
      progress: 0,
    },
  ];

  const courseCategories = [
    {
      name: 'UI/UX Design',
      progress: '2/8 watched',
      color: 'bg-purple-100 text-purple-800',
    },
    {
      name: 'Branding',
      progress: '3/8 watched',
      color: 'bg-pink-100 text-pink-800',
    },
    {
      name: 'Front End',
      progress: '4/7 watched',
      color: 'bg-blue-100 text-blue-800',
    },
  ];

  return (
    <div className='flex-1 p-6 pt-0 pl-0 overflow-y-auto'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='text-sm font-medium mb-2 opacity-90'>ONLINE COURSE</p>
            <h1 className='text-3xl font-bold mb-4'>
              Sharpen Your Skills with
              <br />
              Professional Online Courses
            </h1>
            <button className='bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center'>
              Join Now
              <ArrowRight className='ml-2 w-4 h-4' />
            </button>
          </div>
          <div className='hidden lg:block'>
            <div className='w-64 h-32 bg-white/10 rounded-lg flex items-center justify-center'>
              <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center'>
                <Play className='w-8 h-8 text-white' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Categories */}
      <div className='mb-8'>
        <div className='flex space-x-4'>
          {courseCategories.map((category, index) => (
            <div
              key={index}
              className='flex-1 p-4 bg-white rounded-xl border border-gray-200'
            >
              <div className='flex items-center justify-between mb-2'>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${category.color}`}
                >
                  {category.name.toUpperCase()}
                </span>
                <button className='text-gray-400 hover:text-gray-600'>
                  <svg
                    className='w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                  </svg>
                </button>
              </div>
              <p className='text-sm text-gray-600'>{category.progress}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Continue Watching */}
      <div className='mb-8'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-bold text-gray-900'>Continue Watching</h2>
          <div className='flex items-center space-x-2'>
            <button className='p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg'>
              <ChevronLeft className='w-5 h-5' />
            </button>
            <button className='p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg'>
              <ChevronRight className='w-5 h-5' />
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {courses.map((course) => (
            <div
              key={course.id}
              className='bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow'
            >
              <div className='relative'>
                <div className='h-48 bg-gray-200 flex items-center justify-center'>
                  <img
                    src={course.image}
                    alt={course.title}
                    className='w-full h-full object-cover'
                  />
                </div>
                <button className='absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full'>
                  <Heart className='w-4 h-4 text-gray-600' />
                </button>
                <div className='absolute bottom-4 left-4'>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      course.category === 'FRONT END'
                        ? 'bg-blue-100 text-blue-800'
                        : course.category === 'UI/UX DESIGN'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-pink-100 text-pink-800'
                    }`}
                  >
                    {course.category}
                  </span>
                </div>
              </div>
              <div className='p-4'>
                <h3 className='font-semibold text-gray-900 mb-3 line-clamp-2'>
                  {course.title}
                </h3>
                <div className='flex items-center'>
                  <div className='w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3'>
                    <span className='text-sm'>👨‍🏫</span>
                  </div>
                  <div>
                    <p className='text-sm font-medium text-gray-900'>
                      {course.instructor}
                    </p>
                    <p className='text-xs text-gray-500'>{course.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Lesson */}
      <div>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-bold text-gray-900'>Your Lesson</h2>
          <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
            See all
          </button>
        </div>

        <div className='bg-white rounded-xl border border-gray-200 overflow-hidden'>
          <div className='p-4 border-b border-gray-200 bg-gray-50'>
            <div className='grid grid-cols-4 gap-4 text-xs font-medium text-gray-500 uppercase'>
              <span>MENTOR</span>
              <span>TYPE</span>
              <span>DESC</span>
              <span>ACTION</span>
            </div>
          </div>
          <div className='p-4'>
            <div className='grid grid-cols-4 gap-4 items-center'>
              <div className='flex items-center'>
                <div className='w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3'>
                  <span className='text-sm'>👨‍🏫</span>
                </div>
                <div>
                  <p className='text-sm font-medium text-gray-900'>
                    Padhang Satrio
                  </p>
                  <p className='text-xs text-gray-500'>2/16/2024</p>
                </div>
              </div>
              <div>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800'>
                  UI/UX DESIGN
                </span>
              </div>
              <div>
                <p className='text-sm text-gray-900'>
                  Understand Of UI/UX Design
                </p>
              </div>
              <div>
                <button className='w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center'>
                  <Play className='w-4 h-4 text-gray-600' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
