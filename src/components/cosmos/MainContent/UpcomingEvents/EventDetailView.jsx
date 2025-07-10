import { Calendar, Clock, Eye } from 'lucide-react';

const getEventTypeColor = (type) => {
  switch (type) {
    case 'Review': return 'bg-purple-100 text-purple-800';
    case 'Assessment': return 'bg-orange-100 text-orange-800';
    case 'Workshop': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const EventDetailView = ({ events }) => (
  <div className='space-y-4'>
    {events.map((event) => (
      <div
        key={event.id}
        className='border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow'
      >
        <div className='flex items-start justify-between mb-2'>
          <div>
            <h3 className='font-medium text-gray-900 mb-2'>{event.title}</h3>
            <div className='flex items-center space-x-2 mb-2'>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                {event.type}
              </span>
            </div>
            <div className='flex items-center space-x-4 text-sm text-gray-500'>
              <span className='flex items-center'>
                <Calendar className='w-3 h-3 mr-1' />
                {event.date}
              </span>
              <span className='flex items-center'>
                <Clock className='w-3 h-3 mr-1' />
                {event.time}
              </span>
            </div>
          </div>
          <button className='p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg'>
            <Eye className='w-4 h-4' />
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default EventDetailView;
