import React, { useState, useEffect } from 'react';
import {
  List,
  Grid3X3,
  FileText,
  Star,
  User,
  Calendar,
  CheckCircle,
  Play,
  AlertCircle,
  Lock,
  BarChart2,
  MessageSquare,
} from 'lucide-react';
import { projectsData } from './mockData';

const getStatusIcon = (status) => {
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
      return null;
  }
};

const getProgressColor = (progress) => {
  if (progress === 100) return 'bg-green-500';
  if (progress > 50) return 'bg-blue-500';
  if (progress > 0) return 'bg-yellow-500';
  return 'bg-gray-300';
};

const ProjectCard = ({ project, view }) => {
  const completedTasks = project.tasks.filter((t) => t.completed).length;

  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg shadow-sm p-4 transition-all ${
        view === 'grid' ? 'hover:shadow-md' : ''
      }`}
    >
      <div className='flex items-start justify-between mb-3'>
        <div>
          <h3 className='text-lg font-semibold text-gray-900'>
            {project.title}
          </h3>
          <p className='text-sm text-gray-600'>{project.description}</p>
          <div className='flex items-center gap-3 text-sm text-gray-500 mt-2 flex-wrap'>
            <span className='flex items-center gap-1'>
              <User className='w-4 h-4' />
              {project.instructor}
            </span>
            <span className='flex items-center gap-1'>
              <Calendar className='w-4 h-4' />
              {project.dueDate}
            </span>
          </div>
        </div>

        {project.grade && (
          <div className='text-right'>
            <div className='flex items-center gap-1 text-yellow-600'>
              <Star className='w-4 h-4 fill-current' />
              <span className='font-semibold'>{project.grade}/100</span>
            </div>
            <span className='text-xs text-gray-500'>Grade</span>
          </div>
        )}
      </div>

      <div className='mb-4'>
        <div className='flex justify-between text-sm mb-1'>
          <span className='text-gray-600'>Progress</span>
          <span className='font-medium'>{project.progress}%</span>
        </div>
        <div className='w-full bg-gray-200 rounded-full h-2'>
          <div
            className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(
              project.progress
            )}`}
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      <div className='flex items-center justify-between text-sm text-gray-600'>
        <div className='flex gap-1'>
          {project.tasks.slice(0, 6).map((task, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                task.completed ? 'bg-green-500' : 'bg-gray-300'
              }`}
              title={task.title}
            />
          ))}
          {project.tasks.length > 6 && (
            <span className='text-xs text-gray-400 ml-1'>…</span>
          )}
        </div>
        <span>
          {completedTasks}/{project.tasks.length} tasks
        </span>
      </div>

      {project.feedback && (
        <div className='mt-4 p-3 bg-blue-50 text-blue-900 text-sm rounded-md'>
          {project.feedback}
        </div>
      )}
    </div>
  );
};

const AnalyticsSection = ({ projects }) => {
  const completedProjects = projects.filter(p => p.progress === 100).length;
  const averageGrade = projects
    .filter(p => p.grade)
    .reduce((sum, p) => sum + p.grade, 0) / (projects.filter(p => p.grade).length || 1);
  const totalTasks = projects.reduce((sum, p) => sum + p.tasks.length, 0);
  const completedTasks = projects.reduce((sum, p) => sum + p.tasks.filter(t => t.completed).length, 0);

  return (
    <div className='bg-white p-6 rounded-lg shadow-sm mb-8'>
      <h2 className='text-xl font-semibold mb-4'>Mission Analytics</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        <div className='p-4 bg-blue-50 rounded-md'>
          <h3 className='text-sm font-medium text-gray-600'>Completed Missions</h3>
          <p className='text-2xl font-bold text-blue-900'>{completedProjects}</p>
        </div>
        <div className='p-4 bg-blue-50 rounded-md'>
          <h3 className='text-sm font-medium text-gray-600'>Average Grade</h3>
          <p className='text-2xl font-bold text-blue-900'>{averageGrade.toFixed(1)}/100</p>
        </div>
        <div className='p-4 bg-blue-50 rounded-md'>
          <h3 className='text-sm font-medium text-gray-600'>Total Tasks</h3>
          <p className='text-2xl font-bold text-blue-900'>{totalTasks}</p>
        </div>
        <div className='p-4 bg-blue-50 rounded-md'>
          <h3 className='text-sm font-medium text-gray-600'>Tasks Completed</h3>
          <p className='text-2xl font-bold text-blue-900'>{completedTasks}</p>
        </div>
      </div>
    </div>
  );
};

const ChatSection = () => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-sm'>
      <h2 className='text-xl font-semibold mb-4'>Cosmic Chat</h2>
      <div className='border border-gray-200 rounded-md p-4 h-64 overflow-y-auto'>
        <p className='text-gray-500 text-sm'>AI chat functionality coming soon...</p>
      </div>
    </div>
  );
};

const Project = () => {
  const [view, setView] = useState('grid');
  const [activeTab, setActiveTab] = useState('starbase');

  useEffect(() => {
    const savedView = localStorage.getItem('projectView');
    if (savedView) setView(savedView);
  }, []);

  useEffect(() => {
    localStorage.setItem('projectView', view);
  }, [view]);

  const ongoingProjects = projectsData.filter(p => p.progress < 100);
  const completedProjects = projectsData.filter(p => p.progress === 100);

  const renderProjects = (projects, title) => (
    <>
      <h2 className='text-xl font-semibold text-gray-900 mt-8 mb-4'>{title}</h2>
      {projects.length === 0 ? (
        <div className='text-center py-12 text-gray-500 text-sm'>
          No projects found.
        </div>
      ) : view === 'grid' ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} view='grid' />
          ))}
        </div>
      ) : (
        <div className='space-y-4'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} view='list' />
          ))}
        </div>
      )}
    </>
  );

  return (
    <div className='min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Page Header */}
        <div className='mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center'>
              <FileText className='w-5 h-5' />
            </div>
            <div>
              <h1 className='text-2xl font-bold text-gray-900'>Mission Control</h1>
              <p className='text-sm text-gray-500'>
                Track and manage your project-based learning
              </p>
            </div>
          </div>

          {/* View Toggle */}
          <div className='flex bg-gray-100 rounded-lg p-1 self-start sm:self-auto'>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-md transition-colors ${
                view === 'list'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label='List view'
            >
              <List className='w-4 h-4' />
            </button>
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded-md transition-colors ${
                view === 'grid'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label='Grid view'
            >
              <Grid3X3 className='w-4 h-4' />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className='mb-8'>
          <div className='flex border-b border-gray-200'>
            <button
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'starbase'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('starbase')}
            >
              Starbase Projects
            </button>
            <button
              className parallels
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'archives'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('archives')}
            >
              Galactic Archives
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'chat'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('chat')}
            >
              Cosmic Chat
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'starbase' && (
          <>
            <AnalyticsSection projects={projectsData} />
            {renderProjects(ongoingProjects, 'Ongoing Missions')}
            {renderProjects(completedProjects, 'Completed Missions')}
          </>
        )}
        {activeTab === 'archives' && (
          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <h2 className='text-xl font-semibold mb-4'>Galactic Archives</h2>
 —

            <p className='text-gray-500 text-sm'>GitHub project history coming soon...</p>
          </div>
        )}
        {activeTab === 'chat' && <ChatSection />}
      </div>
    </div>
  );
};

export default Project;
