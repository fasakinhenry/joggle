import { CheckCircle, Clock, AlertCircle, Target } from 'lucide-react';

const getStatusColor = (status) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'in-progress':
      return 'bg-blue-100 text-blue-800';
    case 'overdue':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className='w-4 h-4 text-green-500' />;
    case 'in-progress':
      return <Clock className='w-4 h-4 text-blue-500' />;
    case 'overdue':
      return <AlertCircle className='w-4 h-4 text-red-500' />;
    default:
      return <Target className='w-4 h-4 text-gray-500' />;
  }
};

const ProjectCardView = ({ projects }) => (
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {projects.map((project) => (
      <div
        key={project.id}
        className='border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow'
      >
        <div className='flex items-start justify-between mb-3'>
          <div className='flex items-start space-x-2'>
            {getStatusIcon(project.status)}
            <div>
              <h3 className='font-medium text-gray-900 mb-1 text-sm line-clamp-2'>
                {project.title}
              </h3>
              <div className='flex items-center space-x-2 mb-2 whitespace-nowrap'>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status.replace('-', ' ')}
                </span>
                <span className='text-xs text-gray-500'>{project.type}</span>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-3'>
          <div className='flex justify-between items-center mb-1'>
            <span className='text-xs text-gray-500'>Progress</span>
            <span className='text-xs font-medium text-gray-900'>
              {project.progress}%
            </span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2'>
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                project.status === 'completed'
                  ? 'bg-green-500'
                  : project.status === 'overdue'
                  ? 'bg-red-500'
                  : 'bg-blue-500'
              }`}
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        <div className='text-xs text-gray-500'>Due: {project.dueDate}</div>
      </div>
    ))}
  </div>
);

export default ProjectCardView;
