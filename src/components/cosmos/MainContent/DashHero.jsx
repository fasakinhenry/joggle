import { ArrowRight, Play } from 'lucide-react';

const DashHero = () => (
  <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8'>
    <div className='flex items-center justify-between'>
      <div>
        <p className='text-sm font-medium mb-2 opacity-90'>ONLINE COURSE</p>
        <h1 className='text-3xl font-bold mb-4'>
          Sharpen Your Skills with Professional Online Courses
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
);

export default DashHero;
