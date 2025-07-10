import { useState, useEffect } from 'react';
import { BookOpen, LayoutGrid, List } from 'lucide-react';
import LearningCardView from './LearningCardView';
import LearningDetailView from './LearningDetailView';

const CurrentLearning = ({ learningItems }) => {
  const [viewMode, setViewMode] = useState('cards');

  useEffect(() => {
    const stored = localStorage.getItem('learningView');
    if (stored) setViewMode(stored);
  }, []);

  const toggleView = (mode) => {
    setViewMode(mode);
    localStorage.setItem('learningView', mode);
  };

  return (
    <div className='bg-white rounded-2xl p-6 border border-gray-200 mb-6'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-bold text-gray-900 flex items-center'>
          <BookOpen className='w-5 h-5 mr-2 text-purple-500' />
          Current Learning
        </h2>
        <div className='flex gap-3'>
          <button className='text-blue-600 hover:text-blue-700 text-sm font-medium sm:hidden lg:inline-flex'>
            View all
          </button>
          <div className='flex gap-2'>
            <button
              onClick={() => toggleView('cards')}
              className={`p-1.5 rounded-md ${
                viewMode === 'cards'
                  ? 'bg-gray-100 text-blue-600'
                  : 'text-gray-400'
              }`}
            >
              <LayoutGrid className='w-4 h-4' />
            </button>
            <button
              onClick={() => toggleView('details')}
              className={`p-1.5 rounded-md ${
                viewMode === 'details'
                  ? 'bg-gray-100 text-blue-600'
                  : 'text-gray-400'
              }`}
            >
              <List className='w-4 h-4' />
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'cards' ? (
        <LearningCardView learningItems={learningItems} />
      ) : (
        <LearningDetailView learningItems={learningItems} />
      )}
    </div>
  );
};

export default CurrentLearning;
