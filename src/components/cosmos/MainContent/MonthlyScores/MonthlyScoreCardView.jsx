import { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

const MonthlyScoreCardView = ({ scores }) => {
  const [expandedMonth, setExpandedMonth] = useState(null);

  const toggleMonth = (index) => {
    setExpandedMonth(expandedMonth === index ? null : index);
  };

  const getStatusColor = (status) =>
    status === 'Validated'
      ? 'bg-green-100 text-green-800'
      : 'bg-yellow-100 text-yellow-800';

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {scores.map((monthData, index) => (
        <div
          key={index}
          className='border border-gray-200 rounded-xl overflow-hidden'
        >
          <div
            className='p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition'
            onClick={() => toggleMonth(index)}
          >
            <div className='flex items-center justify-between mb-2'>
              <div className='flex items-center space-x-2'>
                <Calendar className='w-4 h-4 text-gray-500' />
                <span className='font-medium text-gray-900 text-sm'>
                  {monthData.month}
                </span>
              </div>
              {expandedMonth === index ? (
                <ChevronUp className='w-4 h-4 text-gray-400' />
              ) : (
                <ChevronDown className='w-4 h-4 text-gray-400' />
              )}
            </div>
            <div className='mb-2'>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  monthData.status
                )}`}
              >
                {monthData.status}
              </span>
            </div>
            <div className='text-center'>
              <p className='text-2xl font-bold text-gray-900'>
                {monthData.score}%
              </p>
              <p className='text-xs text-gray-500'>
                {monthData.specialization}
              </p>
            </div>
          </div>

          {expandedMonth === index && (
            <div className='p-4 bg-white border-t border-gray-200'>
              <div className='space-y-3'>
                {monthData.lessons.map((lesson, lessonIndex) => (
                  <div
                    key={lessonIndex}
                    className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'
                  >
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='w-4 h-4 text-green-500' />
                      <span className='text-sm font-medium text-gray-900'>
                        {lesson.name}
                      </span>
                    </div>
                    <span className='text-sm font-bold text-gray-900'>
                      {lesson.score}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MonthlyScoreCardView;
