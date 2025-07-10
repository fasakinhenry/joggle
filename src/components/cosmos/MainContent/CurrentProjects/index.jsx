import { useState, useEffect } from 'react';
import { Target, LayoutGrid, List } from 'lucide-react';
import ProjectCardView from './ProjectCardView';
import ProjectDetailView from './ProjectDetailView';

const CurrentProjects = ({ projects }) => {
  const [viewMode, setViewMode] = useState('details');

  useEffect(() => {
    const stored = localStorage.getItem('projectView');
    if (stored) setViewMode(stored);
  }, []);

  const toggleView = (mode) => {
    setViewMode(mode);
    localStorage.setItem('projectView', mode);
  };

  return (
    <div className='bg-white rounded-2xl p-6 border border-gray-200 mb-6'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-bold text-gray-900 flex items-center'>
          <Target className='w-5 h-5 mr-2 text-blue-500' />
          Current Projects
        </h2>
        <div className='flex gap-2'>
          <button
            onClick={() => toggleView('details')}
            className={`p-1.5 rounded-md ${viewMode === 'details' ? 'bg-gray-100 text-blue-600' : 'text-gray-400'}`}
          >
            <List className='w-4 h-4' />
          </button>
          <button
            onClick={() => toggleView('cards')}
            className={`p-1.5 rounded-md ${viewMode === 'cards' ? 'bg-gray-100 text-blue-600' : 'text-gray-400'}`}
          >
            <LayoutGrid className='w-4 h-4' />
          </button>
        </div>
      </div>

      {viewMode === 'details' ? (
        <ProjectDetailView projects={projects} />
      ) : (
        <ProjectCardView projects={projects} />
      )}
    </div>
  );
};

export default CurrentProjects;
