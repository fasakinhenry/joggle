import { CheckCircle, Play } from 'lucide-react';

const getTypeColor = (type) => {
  switch (type) {
    case 'Introduction':
      return 'bg-blue-100 text-blue-800';
    case 'Exercise':
      return 'bg-green-100 text-green-800';
    case 'Reflection':
      return 'bg-purple-100 text-purple-800';
    case 'Skill':
      return 'bg-orange-100 text-orange-800';
    case 'Collaboration':
      return 'bg-pink-100 text-pink-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const LearningCardView = ({ learningItems }) => (
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {learningItems.map((item, index) => (
      <div
        key={index}
        className='border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow'
      >
        <div className='flex items-center justify-between mb-3'>
          <div className='flex items-center space-x-3'>
            {item.progress === 100 ? (
              <CheckCircle className='w-5 h-5 text-green-500' />
            ) : (
              <Play className='w-5 h-5 text-blue-500' />
            )}
            <div>
              <h3 className='font-medium text-gray-900 text-sm mb-1 line-clamp-1'>
                {item.name}
              </h3>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(
                  item.type
                )}`}
              >
                {item.type}
              </span>
            </div>
          </div>
        </div>

        <div className='mb-2'>
          <div className='flex justify-between items-center mb-1'>
            <span className='text-xs text-gray-500'>Progress</span>
            <span className='text-xs font-medium text-gray-900'>
              {item.progress}%
            </span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2'>
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                item.progress === 100 ? 'bg-green-500' : 'bg-blue-500'
              }`}
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    ))}
    {/* View all button for mobile */}
    <div className='col-span-1 md:col-span-2 lg:col-span-3 text-center sm:inline-flex lg:hidden'>
      <button className='w-full text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer border border-blue-200 rounded-lg px-4 py-2 transition-colors'>
        View all
      </button>
    </div>
  </div>
);

export default LearningCardView;
