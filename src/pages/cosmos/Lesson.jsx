import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
  Award,
  Lock,
  Play,
  AlertCircle,
} from 'lucide-react';
import { lessonsData } from './mockData';

const Lesson = () => {
  const [expandedCategories, setExpandedCategories] = useState(['onboarding']);
  const [showAllCategories, setShowAllCategories] = useState(false);

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const expandAll = () => {
    setExpandedCategories(lessonsData.categories.map((cat) => cat.id));
  };

  const collapseAll = () => {
    setExpandedCategories([]);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600';
      case 'in_progress':
        return 'text-blue-600';
      case 'pending':
        return 'text-yellow-600';
      case 'locked':
        return 'text-gray-400';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusIcon = (status, progress) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className='w-4 h-4 text-green-600' />;
      case 'in_progress':
        return <Play className='w-4 h-4 text-blue-600' />;
      case 'pending':
        return <AlertCircle className='w-4 h-4 text-yellow-600' />;
      case 'locked':
        return <Lock className='w-4 h-4 text-gray-400' />;
      default:
        return <Clock className='w-4 h-4 text-gray-600' />;
    }
  };

  const getCategoryColor = (color) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-900',
      green: 'bg-green-50 border-green-200 text-green-900',
      purple: 'bg-purple-50 border-purple-200 text-purple-900',
      orange: 'bg-orange-50 border-orange-200 text-orange-900',
    };
    return colors[color] || colors.blue;
  };

  const getProgressColor = (progress) => {
    if (progress === 100) return 'bg-green-500';
    if (progress > 50) return 'bg-blue-500';
    if (progress > 0) return 'bg-yellow-500';
    return 'bg-gray-300';
  };

  const CircularProgress = ({ progress, size = 60 }) => {
    const radius = (size - 8) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className='relative' style={{ width: size, height: size }}>
        <svg width={size} height={size} className='transform -rotate-90'>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke='currentColor'
            strokeWidth='4'
            fill='transparent'
            className='text-gray-200'
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke='currentColor'
            strokeWidth='4'
            fill='transparent'
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className={
              progress === 100
                ? 'text-green-500'
                : progress > 50
                ? 'text-blue-500'
                : 'text-yellow-500'
            }
            strokeLinecap='round'
          />
        </svg>
        <div className='absolute inset-0 flex items-center justify-center'>
          <span className='text-sm font-semibold text-gray-700'>
            {progress}%
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header with Analytics */}
      <div className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
            <div>
              <h1 className='text-3xl font-bold text-gray-900'>
                Training Progress
              </h1>
              <p className='text-gray-600 mt-1'>
                Track your learning journey and complete assigned tasks
              </p>
            </div>

            {/* Progress Analytics */}
            <div className='flex flex-col sm:flex-row gap-6'>
              <div className='flex items-center gap-4'>
                <CircularProgress
                  progress={lessonsData.overallProgress.completionRate}
                />
                <div>
                  <p className='text-sm text-gray-600'>Overall Progress</p>
                  <p className='text-2xl font-bold text-gray-900'>
                    {lessonsData.overallProgress.completedLessons}/
                    {lessonsData.overallProgress.totalLessons}
                  </p>
                  <p className='text-sm text-gray-500'>Lessons completed</p>
                </div>
              </div>

              <div className='grid grid-cols-3 gap-4'>
                <div className='text-center'>
                  <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2'>
                    <CheckCircle className='w-6 h-6 text-green-600' />
                  </div>
                  <p className='text-lg font-semibold text-gray-900'>
                    {lessonsData.overallProgress.completedLessons}
                  </p>
                  <p className='text-sm text-gray-600'>Completed</p>
                </div>

                <div className='text-center'>
                  <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2'>
                    <Play className='w-6 h-6 text-blue-600' />
                  </div>
                  <p className='text-lg font-semibold text-gray-900'>
                    {lessonsData.overallProgress.inProgressLessons}
                  </p>
                  <p className='text-sm text-gray-600'>In Progress</p>
                </div>

                <div className='text-center'>
                  <div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2'>
                    <TrendingUp className='w-6 h-6 text-orange-600' />
                  </div>
                  <p className='text-lg font-semibold text-gray-900'>
                    {lessonsData.overallProgress.streak}
                  </p>
                  <p className='text-sm text-gray-600'>Day Streak</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Control Buttons */}
        <div className='flex justify-end gap-2 mb-6'>
          <button
            onClick={expandAll}
            className='px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors'
          >
            Expand all
          </button>
          <button
            onClick={collapseAll}
            className='px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors'
          >
            Collapse all
          </button>
        </div>

        {/* Categories and Lessons */}
        <div className='space-y-4'>
          {lessonsData.categories.map((category) => {
            const isExpanded = expandedCategories.includes(category.id);
            const categoryProgress = Math.round(
              (category.completedLessons / category.totalLessons) * 100
            );

            return (
              <div
                key={category.id}
                className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden'
              >
                {/* Category Header */}
                <div
                  className={`p-4 cursor-pointer ${getCategoryColor(
                    category.color
                  )} border-b border-gray-200`}
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <div className='flex items-center gap-2'>
                        {isExpanded ? (
                          <ChevronUp className='w-5 h-5' />
                        ) : (
                          <ChevronDown className='w-5 h-5' />
                        )}
                        <h2 className='text-xl font-semibold'>
                          {category.name}
                        </h2>
                      </div>
                      <div className='hidden sm:block'>
                        <p className='text-sm opacity-75'>
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className='flex items-center gap-4'>
                      <div className='text-right'>
                        <p className='text-sm font-medium'>
                          {category.completedLessons}/{category.totalLessons}{' '}
                          lessons
                        </p>
                        <p className='text-xs opacity-75'>
                          {categoryProgress}% complete
                        </p>
                      </div>
                      <CircularProgress progress={categoryProgress} size={50} />
                    </div>
                  </div>
                </div>

                {/* Lessons List */}
                {isExpanded && (
                  <div className='p-4'>
                    <div className='space-y-3'>
                      {category.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className='flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'
                        >
                          <div className='flex items-center gap-4 flex-1'>
                            <div className='flex items-center gap-3'>
                              {getStatusIcon(lesson.status, lesson.progress)}
                              <div>
                                <span className='text-sm font-medium text-red-600'>
                                  {lesson.id}
                                </span>
                                <h3 className='font-medium text-gray-900'>
                                  {lesson.title}
                                </h3>
                                <div className='flex items-center gap-4 mt-1'>
                                  <span className='text-sm text-gray-600'>
                                    [{lesson.dateRange}]
                                  </span>
                                  {lesson.autoQA && (
                                    <span className='text-sm text-gray-600'>
                                      - {lesson.autoQA}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='flex items-center gap-4'>
                            {/* Tasks Progress */}
                            <div className='text-right'>
                              <p className='text-sm font-medium text-gray-900'>
                                {
                                  lesson.tasks.filter((task) => task.completed)
                                    .length
                                }
                                /{lesson.tasks.length} tasks
                              </p>
                              <div className='flex gap-1 mt-1'>
                                {lesson.tasks.map((task, index) => (
                                  <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full ${
                                      task.completed
                                        ? 'bg-green-500'
                                        : 'bg-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>

                            {/* Progress Percentage */}
                            <div className='text-right min-w-[60px]'>
                              <span
                                className={`text-lg font-bold ${getStatusColor(
                                  lesson.status
                                )}`}
                              >
                                {lesson.progress}%
                              </span>
                            </div>

                            {/* Progress Bar */}
                            <div className='w-24 h-2 bg-gray-200 rounded-full overflow-hidden'>
                              <div
                                className={`h-full transition-all duration-300 rounded-full ${getProgressColor(
                                  lesson.progress
                                )}`}
                                style={{ width: `${lesson.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className='mt-8 grid grid-cols-1 md:grid-cols-4 gap-4'>
          <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center'>
                <Target className='w-5 h-5 text-blue-600' />
              </div>
              <div>
                <p className='text-sm text-gray-600'>Total Lessons</p>
                <p className='text-2xl font-bold text-gray-900'>
                  {lessonsData.overallProgress.totalLessons}
                </p>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center'>
                <CheckCircle className='w-5 h-5 text-green-600' />
              </div>
              <div>
                <p className='text-sm text-gray-600'>Completed</p>
                <p className='text-2xl font-bold text-gray-900'>
                  {lessonsData.overallProgress.completedLessons}
                </p>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center'>
                <Award className='w-5 h-5 text-purple-600' />
              </div>
              <div>
                <p className='text-sm text-gray-600'>Tasks Done</p>
                <p className='text-2xl font-bold text-gray-900'>
                  {lessonsData.overallProgress.completedTasks}
                </p>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center'>
                <TrendingUp className='w-5 h-5 text-orange-600' />
              </div>
              <div>
                <p className='text-sm text-gray-600'>Success Rate</p>
                <p className='text-2xl font-bold text-gray-900'>
                  {lessonsData.overallProgress.completionRate}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
