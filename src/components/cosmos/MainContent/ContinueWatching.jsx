import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const ContinueWatching = ({ courses }) => {
  return (
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
              <div className='flex items-center mb-3'>
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
              {course.progress > 0 && (
                <div className='w-full bg-gray-200 rounded-full h-2'>
                  <div
                    className='h-2 bg-blue-500 rounded-full transition-all duration-300'
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
