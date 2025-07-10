import { useState, useEffect } from 'react';
import { Trophy, LayoutGrid, List } from 'lucide-react';
import MonthlyScoreCardView from './MonthlyScoreCardView';
import MonthlyScoreDetailView from './MonthlyScoreDetailView';

const MonthlyScores = ({ scores }) => {
  const [viewMode, setViewMode] = useState('details');

  useEffect(() => {
    const stored = localStorage.getItem('monthlyView');
    if (stored) setViewMode(stored);
  }, []);

  const toggleView = (mode) => {
    setViewMode(mode);
    localStorage.setItem('monthlyView', mode);
  };

  return (
    <div className='bg-white rounded-2xl p-6 border border-gray-200 mb-6'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-bold text-gray-900 flex items-center'>
          <Trophy className='w-5 h-5 mr-2 text-yellow-500' />
          Monthly Scores
        </h2>
        <div className='flex gap-3'>
          <button className='text-blue-600 hover:text-blue-700 text-sm font-medium hidden cursor-pointer lg:flex items-center'>
            View all
          </button>
          <button
            onClick={() => toggleView('details')}
            className={`p-1.5 rounded-md ${
              viewMode === 'details' ? 'bg-gray-100 text-blue-600' : 'text-gray-400'
            }`}
          >
            <List className='w-4 h-4' />
          </button>
          <button
            onClick={() => toggleView('cards')}
            className={`p-1.5 rounded-md ${
              viewMode === 'cards' ? 'bg-gray-100 text-blue-600' : 'text-gray-400'
            }`}
          >
            <LayoutGrid className='w-4 h-4' />
          </button>
        </div>
      </div>

      {viewMode === 'details' ? (
        <MonthlyScoreDetailView scores={scores} />
      ) : (
        <MonthlyScoreCardView scores={scores} />
      )}

      {/* View all button for mobile */}
      <div className='col-span-1 md:col-span-2 lg:col-span-3 text-center sm:inline-flex lg:hidden mt-4'>
        <button className='w-full text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer border border-blue-200 rounded-lg px-4 py-2 transition-colors'>
          View all
        </button>
      </div>
    </div>
  );
};

export default MonthlyScores;
