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
  List,
  Grid3X3,
  Calendar,
  User,
  Star,
  BookOpen,
  FileText,
  GraduationCap,
} from 'lucide-react';
import { lessonsData } from './mockData';

// --- LessonDetail Component ---
// Should have exactly all the details of lessonCard
const LessonDetail = ({ lesson, isCompleted = false }) => (
  <div
    className='
      flex flex-col md:flex-row justify-between
      p-4 bg-white rounded-lg border border-gray-100
      hover:bg-gray-50 hover:border-blue-100 transition-colors group
      shadow-sm cursor-pointer gap-4
    '
  >
    {/* Left Section */}
    <div className='flex gap-4 items-start flex-1 min-w-0'>
      {/* Status Icon */}
      <div className='flex-shrink-0 mt-1'>
        {getStatusIcon(lesson.status, lesson.progress)}
      </div>

      {/* Info */}
      <div className='min-w-0 w-full'>
        {/* ID + Title */}
        <div className='flex items-center gap-2 flex-wrap mb-1'>
          <span className='text-xs font-semibold text-red-600 truncate max-w-[60px]'>
            {lesson.id}
          </span>
          <h4
            className='font-bold text-gray-900 truncate max-w-[180px] md:max-w-xs'
            title={lesson.title}
          >
            {lesson.title}
          </h4>
        </div>

        {/* Meta info */}
        <div className='flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500 mb-1'>
          <span>{isCompleted ? lesson.completedDate : lesson.dueDate}</span>
          <span className='hidden sm:inline text-gray-400'>|</span>
          <span>{lesson.instructor}</span>
          <span className='hidden sm:inline text-gray-400'>|</span>
          <span>{lesson.category}</span>
        </div>

        {/* Description */}
        <p
          className='text-xs text-gray-500 truncate max-w-full md:max-w-sm mb-2'
          title={lesson.description}
        >
          {lesson.description}
        </p>

        {/* Duration + Level */}
        <div className='flex flex-wrap items-center gap-2 text-xs text-gray-400'>
          <span>Duration: {lesson.duration} mins</span>
          <span className='hidden sm:inline text-gray-300'>|</span>
          <span>Level: {lesson.level}</span>
        </div>
      </div>
    </div>

    {/* Right Section: Progress + Tasks */}
    <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto'>
      {/* Tasks */}
      <div className='flex flex-col items-start sm:items-end min-w-[70px]'>
        <span className='text-xs text-gray-500'>
          {lesson.tasks.filter((task) => task.completed).length}/
          {lesson.tasks.length} tasks
        </span>
        <div className='flex gap-1 mt-1 flex-wrap'>
          {lesson.tasks.slice(0, 6).map((task, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                task.completed ? 'bg-green-500' : 'bg-gray-300'
              }`}
              title={task.title}
            />
          ))}
          {lesson.tasks.length > 6 && (
            <span className='text-xs text-gray-400 ml-1'>…</span>
          )}
        </div>
      </div>

      {/* Progress */}
      <div className='flex flex-col items-start sm:items-end w-full sm:w-auto'>
        <span className={`text-lg font-bold ${getStatusColor(lesson.status)}`}>
          {lesson.progress}%
        </span>
        <div className='w-full sm:w-24 h-2 bg-gray-200 rounded-full overflow-hidden mt-1'>
          <div
            className={`h-full transition-all duration-300 rounded-full ${getProgressColor(
              lesson.progress
            )}`}
            style={{ width: `${lesson.progress}%` }}
          />
        </div>
      </div>
    </div>
  </div>
);

// --- Helper Functions (move outside component for reuse) ---
function getStatusColor(status) {
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
}

function getStatusIcon(status, progress) {
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
}

function getCategoryColor(color) {
  const colors = {
    blue: 'bg-blue-50 border-blue-200 text-blue-900',
    green: 'bg-green-50 border-green-200 text-green-900',
    purple: 'bg-purple-50 border-purple-200 text-purple-900',
    orange: 'bg-orange-50 border-orange-200 text-orange-900',
  };
  return colors[color] || colors.blue;
}

function getProgressColor(progress) {
  if (progress === 100) return 'bg-green-500';
  if (progress > 50) return 'bg-blue-500';
  if (progress > 0) return 'bg-yellow-500';
  return 'bg-gray-300';
}

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
        <span className='text-sm font-semibold text-gray-700'>{progress}%</span>
      </div>
    </div>
  );
};

const LessonCard = ({ lesson, isCompleted = false }) => (
  <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow'>
    <div className='flex items-start justify-between mb-4'>
      <div className='flex-1'>
        <h3 className='text-lg font-semibold text-gray-900 mb-2'>
          {lesson.title}
        </h3>
        <p className='text-sm text-gray-600 mb-3'>{lesson.description}</p>
        <div className='flex items-center gap-4 text-sm text-gray-500'>
          <div className='flex items-center gap-1'>
            <User className='w-4 h-4' />
            <span>{lesson.instructor}</span>
          </div>
          <div className='flex items-center gap-1'>
            <Calendar className='w-4 h-4' />
            <span>{isCompleted ? lesson.completedDate : lesson.dueDate}</span>
          </div>
        </div>
      </div>
      {isCompleted && lesson.grade && (
        <div className='text-right'>
          <div className='flex items-center gap-1 text-yellow-600 mb-1'>
            <Star className='w-4 h-4 fill-current' />
            <span className='font-semibold'>{lesson.grade}/100</span>
          </div>
          <span className='text-xs text-gray-500'>Grade</span>
        </div>
      )}
    </div>

    <div className='mb-4'>
      <div className='flex justify-between text-sm mb-2'>
        <span className='text-gray-600'>Progress</span>
        <span className='font-medium'>{lesson.progress}%</span>
      </div>
      <div className='w-full bg-gray-200 rounded-full h-2'>
        <div
          className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(
            lesson.progress
          )}`}
          style={{ width: `${lesson.progress}%` }}
        />
      </div>
    </div>

    <div className='flex items-center justify-between'>
      <div className='flex gap-1'>
        {lesson.tasks.map((task, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              task.completed ? 'bg-green-500' : 'bg-gray-300'
            }`}
            title={task.title}
          />
        ))}
      </div>
      <span className='text-sm text-gray-500'>
        {lesson.tasks.filter((t) => t.completed).length}/{lesson.tasks.length}{' '}
        tasks
      </span>
    </div>

    {isCompleted && lesson.feedback && (
      <div className='mt-4 p-3 bg-blue-50 rounded-lg'>
        <p className='text-sm text-blue-900'>{lesson.feedback}</p>
      </div>
    )}
  </div>
);

const Lesson = () => {
  const [expandedCategories, setExpandedCategories] = useState(['onboarding']);
  // Separate view modes for each section
  const [ongoingViewMode, setOngoingViewMode] = useState('detail');
  const [completedViewMode, setCompletedViewMode] = useState('detail');
  const [viewMode, setViewMode] = useState('detail'); // 'detail' or 'card'

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

  return (
    <div className='min-h-screen'>
      {/* Header */}
      <div className='py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='mb-8'>
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>
              Training Progress
            </h1>
            <p className='text-gray-600'>
              Track your learning journey and complete assigned tasks
            </p>
          </div>

          {/* Analytics Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-600'>Total Grade</p>
                  <p className='text-3xl font-bold text-gray-900'>
                    {lessonsData.overallProgress.totalGrade}
                  </p>
                  <p className='text-sm text-green-600'>
                    GPA: {lessonsData.overallProgress.gpa}
                  </p>
                </div>
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                  <GraduationCap className='w-6 h-6 text-blue-600' />
                </div>
              </div>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-600'>Completed</p>
                  <p className='text-3xl font-bold text-gray-900'>
                    {lessonsData.overallProgress.completedLessons}
                  </p>
                  <p className='text-sm text-gray-600'>
                    of {lessonsData.overallProgress.totalLessons} lessons
                  </p>
                </div>
                <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center'>
                  <CheckCircle className='w-6 h-6 text-green-600' />
                </div>
              </div>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-600'>In Progress</p>
                  <p className='text-3xl font-bold text-gray-900'>
                    {lessonsData.overallProgress.inProgressLessons}
                  </p>
                  <p className='text-sm text-gray-600'>active lessons</p>
                </div>
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                  <Play className='w-6 h-6 text-blue-600' />
                </div>
              </div>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-600'>Success Rate</p>
                  <p className='text-3xl font-bold text-gray-900'>
                    {lessonsData.overallProgress.completionRate}%
                  </p>
                  <p className='text-sm text-orange-600'>
                    {lessonsData.overallProgress.streak} day streak
                  </p>
                </div>
                <div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center'>
                  <TrendingUp className='w-6 h-6 text-orange-600' />
                </div>
              </div>
            </div>
          </div>

          {/* Overall Progress Circle */}
          <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8'>
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Overall Progress
                </h3>
                <p className='text-gray-600'>
                  Your learning journey at a glance
                </p>
              </div>
              <CircularProgress
                progress={lessonsData.overallProgress.completionRate}
                size={80}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Ongoing Lessons */}
        {lessonsData.ongoingLessons.length > 0 && (
          <div className='mb-8'>
            <div className='flex items-center gap-3 mb-6 justify-between'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center'>
                  <FileText className='w-5 h-5 text-blue-600' />
                </div>
                <h2 className='text-2xl font-semibold text-gray-900'>
                  Ongoing Lessons
                </h2>
              </div>
              <div className='flex bg-gray-100 rounded-lg p-1 ml-4'>
                <button
                  onClick={() => setOngoingViewMode('detail')}
                  className={`p-2 rounded-md transition-colors ${
                    ongoingViewMode === 'detail'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-label='Detail view'
                >
                  <List className='w-4 h-4' />
                </button>
                <button
                  onClick={() => setOngoingViewMode('card')}
                  className={`p-2 rounded-md transition-colors ${
                    ongoingViewMode === 'card'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-label='Grid view'
                >
                  <Grid3X3 className='w-4 h-4' />
                </button>
              </div>
            </div>
            {ongoingViewMode === 'detail' ? (
              <div className='space-y-3'>
                {lessonsData.ongoingLessons.map((lesson) => (
                  <LessonDetail key={lesson.id} lesson={lesson} />
                ))}
              </div>
            ) : (
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {lessonsData.ongoingLessons.map((lesson) => (
                  <LessonCard key={lesson.id} lesson={lesson} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Completed Lessons */}
        {lessonsData.completedLessons.length > 0 && (
          <div className='mb-8'>
            <div className='flex items-center mb-6 justify-between'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-green-200 rounded-lg flex items-center justify-center'>
                  <Award className='w-5 h-5 text-green-600' />
                </div>
                <h2 className='text-2xl font-semibold text-gray-900'>
                  Completed Lessons
                </h2>
              </div>
              <div className='flex bg-gray-100 rounded-lg p-1 ml-4'>
                <button
                  onClick={() => setCompletedViewMode('detail')}
                  className={`p-2 rounded-md transition-colors ${
                    completedViewMode === 'detail'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-label='Detail view'
                >
                  <List className='w-4 h-4' />
                </button>
                <button
                  onClick={() => setCompletedViewMode('card')}
                  className={`p-2 rounded-md transition-colors ${
                    completedViewMode === 'card'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-label='Grid view'
                >
                  <Grid3X3 className='w-4 h-4' />
                </button>
              </div>
            </div>
            {completedViewMode === 'detail' ? (
              <div className='space-y-3'>
                {lessonsData.completedLessons.map((lesson) => (
                  <LessonDetail
                    key={lesson.id}
                    lesson={lesson}
                    isCompleted={true}
                  />
                ))}
              </div>
            ) : (
              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
                {lessonsData.completedLessons.map((lesson) => (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    isCompleted={true}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Control Buttons */}
        <div className='flex justify-between items-center mb-6'>
          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center'>
              <BookOpen className='w-5 h-5 text-purple-600' />
            </div>
            <h2 className='text-2xl font-semibold text-gray-900'>
              All Lessons
            </h2>
          </div>

          <div className='flex items-center gap-2'>
            <div className='flex bg-gray-100 rounded-lg p-1'>
              <button
                onClick={() => setViewMode('detail')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'detail'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className='w-4 h-4' />
              </button>
              <button
                onClick={() => setViewMode('card')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'card'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid3X3 className='w-4 h-4' />
              </button>
            </div>

            <div className='flex gap-2'>
              <button
                onClick={expandAll}
                className='px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm'
              >
                Expand all
              </button>
              <button
                onClick={collapseAll}
                className='px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm'
              >
                Collapse all
              </button>
            </div>
          </div>
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
                        <h3 className='text-xl font-semibold'>
                          {category.name}
                        </h3>
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
                    {viewMode === 'detail' ? (
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
                                  <h4 className='font-bold text-gray-900'>
                                    {lesson.title}
                                  </h4>
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
                              <div className='text-right'>
                                <p className='text-sm font-medium text-gray-900'>
                                  {
                                    lesson.tasks.filter(
                                      (task) => task.completed
                                    ).length
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

                              <div className='text-right min-w-[60px]'>
                                <span
                                  className={`text-lg font-bold ${getStatusColor(
                                    lesson.status
                                  )}`}
                                >
                                  {lesson.progress}%
                                </span>
                              </div>

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
                    ) : (
                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {category.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className='bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors'
                          >
                            <div className='flex items-center gap-2 mb-2'>
                              {getStatusIcon(lesson.status, lesson.progress)}
                              <span className='text-sm font-medium text-red-600'>
                                {lesson.id}
                              </span>
                            </div>
                            <h4 className='font-bold text-gray-900 mb-2'>
                              {lesson.title}
                            </h4>
                            <p className='text-sm text-gray-600 mb-3'>
                              [{lesson.dateRange}]
                            </p>

                            <div className='flex items-center justify-between mb-2'>
                              <span className='text-sm text-gray-600'>
                                Progress
                              </span>
                              <span
                                className={`text-sm font-bold ${getStatusColor(
                                  lesson.status
                                )}`}
                              >
                                {lesson.progress}%
                              </span>
                            </div>

                            <div className='w-full bg-gray-200 rounded-full h-2 mb-3'>
                              <div
                                className={`h-full transition-all duration-300 rounded-full ${getProgressColor(
                                  lesson.progress
                                )}`}
                                style={{ width: `${lesson.progress}%` }}
                              />
                            </div>

                            <div className='flex items-center justify-between'>
                              <div className='flex gap-1'>
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
                              <span className='text-sm text-gray-500'>
                                {lesson.tasks.filter((t) => t.completed).length}
                                /{lesson.tasks.length} tasks
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
