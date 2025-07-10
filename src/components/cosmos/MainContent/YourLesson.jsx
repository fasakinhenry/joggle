import { Play } from 'lucide-react';

const YourLesson = () => {
  return (
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
  );
};

export default YourLesson;
