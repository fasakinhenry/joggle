const Home = () => {
  return (
    <div className='space-y-6'>
      {/* Hero Section */}
      <div className='bg-white rounded-xl shadow-sm border'>
        <div className='p-6 border-b'>
          <h2 className='text-lg font-semibold'>Current Lesson</h2>
        </div>

        <div className='p-6'>
          <div className='flex items-center space-x-4 mb-4'>
            <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center'>
              <Play className='text-white' size={24} />
            </div>
            <div className='flex-1'>
              <span className='text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded'>
                UI/UX DESIGN
              </span>
              <h3 className='font-semibold text-lg mt-1'>
                Understand Of UI/UX Design
              </h3>
              <div className='flex items-center space-x-4 text-sm text-gray-500 mt-1'>
                <span>Padhang Setio</span>
                <span>•</span>
                <span>2/16/2024</span>
              </div>
            </div>
            <button className='bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors'>
              Continue
            </button>
          </div>
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-lg font-semibold'>All Lessons</h2>

        <div className='space-y-4'>
          {lessons.map((lesson, index) => (
            <div
              key={index}
              className='bg-white rounded-xl shadow-sm border p-6'
            >
              <div className='flex items-start space-x-4'>
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    lesson.status === 'current'
                      ? 'bg-purple-100 text-purple-600'
                      : lesson.status === 'completed'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {lesson.status === 'completed' ? (
                    <span className='text-lg'>✓</span>
                  ) : (
                    <Play size={20} />
                  )}
                </div>

                <div className='flex-1'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded'>
                      {lesson.type}
                    </span>
                    <span className='text-sm text-gray-500 flex items-center space-x-1'>
                      <Clock size={14} />
                      <span>{lesson.duration}</span>
                    </span>
                  </div>

                  <h3 className='font-semibold text-lg mb-1'>{lesson.title}</h3>
                  <p className='text-gray-600 text-sm mb-3'>
                    {lesson.description}
                  </p>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                      <div className='w-6 h-6 bg-gray-300 rounded-full'></div>
                      <span className='text-sm text-gray-600'>
                        {lesson.instructor}
                      </span>
                    </div>

                    {lesson.progress > 0 && (
                      <div className='flex items-center space-x-2'>
                        <div className='w-20 bg-gray-200 rounded-full h-2'>
                          <div
                            className='bg-purple-600 h-2 rounded-full'
                            style={{ width: `${lesson.progress}%` }}
                          ></div>
                        </div>
                        <span className='text-sm text-gray-600'>
                          {lesson.progress}%
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
