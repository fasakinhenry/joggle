import { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

const MonthlyScoreDetailView = ({ scores }) => {
  const [expandedMonth, setExpandedMonth] = useState(null);

  const toggleMonth = (index) => {
    setExpandedMonth(expandedMonth === index ? null : index);
  };

  const getStatusColor = (status) =>
    status === 'Validated'
      ? 'bg-green-100 text-green-800'
      : 'bg-yellow-100 text-yellow-800';

  return (
    <div className='space-y-4'>
      {scores.map((monthData, index) => (
        <div key={index} className='border border-gray-200 rounded-xl overflow-hidden'>
          <div
            className='p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition'
            onClick={() => toggleMonth(index)}
          >
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-4'>
                <div className='flex items-center space-x-2'>
                  <Calendar className='w-4 h-4 text-gray-500' />
                  <span className='font-medium text-gray-900'>{monthData.month}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(monthData.status)}`}>
                  {monthData.status}
                </span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='text-right'>
                  <p className='text-lg font-bold text-gray-900'>{monthData.score}%</p>
                  <p className='text-xs text-gray-500'>{monthData.specialization}</p>
                </div>
                {expandedMonth === index ? (
                  <ChevronUp className='w-5 h-5 text-gray-400' />
                ) : (
                  <ChevronDown className='w-5 h-5 text-gray-400' />
                )}
              </div>
            </div>
          </div>

          {expandedMonth === index && (
            <div className='p-4 bg-white border-t border-gray-200'>
              <div className='space-y-3'>
                {monthData.lessons.map((lesson, lessonIndex) => (
                  <div key={lessonIndex} className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'>
                    <div className='flex items-center space-x-3'>
                      <CheckCircle className='w-4 h-4 text-green-500' />
                      <span className='text-sm font-medium text-gray-900'>{lesson.name}</span>
                    </div>
                    <span className='text-sm font-bold text-gray-900'>{lesson.score}%</span>
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

export default MonthlyScoreDetailView;
