import { useState, useEffect, useRef } from 'react';
import {
  Calendar as CalendarIcon,
  List,
  Filter,
  Maximize2,
  X,
} from 'lucide-react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Ensure CSS is imported
import { eventsData } from './mockData';

const localizer = momentLocalizer(moment);

const Events = () => {
  const [view, setView] = useState('calendar');
  const [calendarView, setCalendarView] = useState(Views.MONTH); // Default view
  const [filter, setFilter] = useState('all');
  const [date, setDate] = useState(new Date()); // Track current date
  const [isFullScreen, setIsFullScreen] = useState(false); // Toggle full-screen modal
  const [hoverBox, setHoverBox] = useState({
    visible: false,
    event: null,
    x: 0,
    y: 0,
  }); // Hover box state
  const calendarRef = useRef(null); // Reference to the calendar container

  // Debug: Log eventsData to ensure it's loaded
  useEffect(() => {
    console.log('Events Data:', eventsData);
  }, []);

  const today = new Date();
  const getEventTimeframe = (date) => {
    const eventDate = new Date(date);
    if (eventDate < today && eventDate.getDate() !== today.getDate())
      return 'past';
    if (eventDate.toDateString() === today.toDateString()) return 'present';
    return 'future';
  };

  const filteredEvents = eventsData.filter((event) => {
    if (filter === 'all') return true;
    return getEventTimeframe(event.date) === filter;
  });

  const calendarEvents = filteredEvents.map((event) => ({
    title: event.title,
    start: new Date(event.date),
    end: new Date(new Date(event.date).getTime() + 60 * 60 * 1000), // 1-hour duration
    allDay: false,
    description: event.description, // Add description for hover box
  }));

  const handleEventMouseEnter = (event, e) => {
    console.log('Mouse Enter:', event.title, e.clientX, e.clientY); // Debug log
    const calendarRect = calendarRef.current?.getBoundingClientRect();
    if (!calendarRect) return;

    let x = e.clientX - calendarRect.left + 10; // Relative to calendar
    let y = e.clientY - calendarRect.top + 10; // Relative to calendar

    // Adjust for viewport boundaries
    const boxWidth = 300; // Approximate width
    const boxHeight = 150; // Approximate height
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const maxX = windowWidth - boxWidth - 10;
    const maxY = windowHeight - boxHeight - 10;

    if (x + calendarRect.left + boxWidth > windowWidth)
      x = maxX - calendarRect.left;
    if (y + calendarRect.top + boxHeight > windowHeight)
      y = maxY - calendarRect.top;
    if (x < 0) x = 10;
    if (y < 0) y = 10;

    setHoverBox({
      visible: true,
      event,
      x,
      y,
    });
  };

  const handleEventMouseLeave = () => {
    console.log('Mouse Leave'); // Debug log
    setHoverBox({ visible: false, event: null, x: 0, y: 0 });
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const modalRef = useRef(null);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsFullScreen(false);
    }
  };

  useEffect(() => {
    if (isFullScreen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isFullScreen]);

  return (
    <div className='min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Page Header */}
        <div className='mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center'>
              <CalendarIcon className='w-5 h-5' />
            </div>
            <div>
              <h1 className='text-2xl font-bold text-gray-900'>
                Mission Events
              </h1>
              <p className='text-sm text-gray-500'>
                Explore your learning journey
              </p>
            </div>
          </div>

          {/* View Toggle and Filter */}
          <div className='flex gap-4'>
            <div className='flex bg-gray-100 rounded-lg p-1 self-start sm:self-auto'>
              <button
                onClick={() => setView('calendar')}
                className={`p-2 rounded-md transition-colors ${
                  view === 'calendar'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label='Calendar view'
              >
                <CalendarIcon className='w-4 h-4' />
              </button>
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
            </div>
            <select
              className='p-2 border border-gray-200 rounded-md text-sm'
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value='all'>All Events</option>
              <option value='past'>Past Events</option>
              <option value='present'>Present Events</option>
              <option value='future'>Future Events</option>
            </select>
            {view === 'calendar' && (
              <button
                onClick={toggleFullScreen}
                className='p-2 text-gray-600 hover:text-gray-900'
                aria-label='Full screen calendar'
              >
                <Maximize2 className='w-4 h-4' />
              </button>
            )}
          </div>
        </div>

        {/* Calendar View */}
        {view === 'calendar' && (
          <div
            className='bg-white rounded-lg shadow-sm p-4 relative'
            ref={calendarRef}
          >
            {calendarEvents.length > 0 ? (
              <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor='start'
                endAccessor='end'
                style={{ height: 600 }}
                views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]} // Added AGENDA view
                view={calendarView}
                onView={(newView) => setCalendarView(newView)} // Sync view changes
                date={date} // Current date
                onNavigate={(newDate) => setDate(newDate)} // Handle navigation
                components={{
                  event: ({ event }, e) => (
                    <div
                      onMouseEnter={(e) => handleEventMouseEnter(event, e)}
                      onMouseLeave={handleEventMouseLeave}
                      className='p-1 bg-purple-200 text-purple-800 text-xs rounded cursor-pointer'
                    >
                      {event.title}
                    </div>
                  ),
                }}
              />
            ) : (
              <div className='text-center py-12 text-gray-500 text-sm'>
                No events to display. Check mockData.js.
              </div>
            )}
            {hoverBox.visible && hoverBox.event && (
              <div
                className='absolute bg-white border border-gray-200 shadow-lg rounded-lg p-3 max-w-xs text-sm text-gray-700 z-20'
                style={{
                  top: hoverBox.y,
                  left: hoverBox.x,
                  maxHeight: '150px',
                  overflowY: 'auto',
                }}
              >
                <h4 className='font-semibold text-md mb-1'>
                  {hoverBox.event.title}
                </h4>
                <p className='text-sm break-words line-clamp-3'>
                  {hoverBox.event.description.length > 100
                    ? `${hoverBox.event.description.substring(0, 100)}...`
                    : hoverBox.event.description}
                </p>
                <p className='text-xs text-gray-500 mt-1'>
                  {moment(hoverBox.event.start).format('MMMM D, YYYY, h:mm A')}
                </p>
              </div>
            )}
          </div>
        )}

        {/* List View */}
        {view === 'list' && (
          <div className='bg-white rounded-lg shadow-sm p-4'>
            <h2 className='text-xl font-semibold mb-4'>Cosmic Log</h2>
            {filteredEvents.length === 0 ? (
              <div className='text-center py-12 text-gray-500 text-sm'>
                No events found.
              </div>
            ) : (
              <div className='space-y-4'>
                {filteredEvents
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((event) => (
                    <div
                      key={event.id}
                      className='p-4 border border-gray-200 rounded-md hover:bg-gray-50'
                    >
                      <h3 className='text-lg font-semibold text-gray-900'>
                        {event.title}
                      </h3>
                      <p className='text-sm text-gray-600'>
                        {event.description}
                      </p>
                      <div className='text-sm text-gray-500 mt-2'>
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}

        {/* Full-Screen Modal */}
        {isFullScreen && (
          <div
            className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
            onClick={handleClickOutside}
          >
            <div
              ref={modalRef}
              className='bg-white rounded-lg shadow-lg p-6 w-full max-w-6xl h-[90vh] relative overflow-hidden'
              onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
              <button
                onClick={toggleFullScreen}
                className='absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-20'
                aria-label='Close full screen'
              >
                <X className='w-6 h-6' />
              </button>
              <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor='start'
                endAccessor='end'
                style={{ height: '100%' }}
                views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
                view={calendarView}
                onView={(newView) => setCalendarView(newView)}
                date={date}
                onNavigate={(newDate) => setDate(newDate)}
                components={{
                  event: ({ event }, e) => (
                    <div
                      onMouseEnter={(e) => handleEventMouseEnter(event, e)}
                      onMouseLeave={handleEventMouseLeave}
                      className='p-1 bg-purple-200 text-purple-800 text-xs rounded cursor-pointer'
                    >
                      {event.title}
                    </div>
                  ),
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
