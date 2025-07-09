import { NavLink } from 'react-router-dom';
import {
  Home,
  Inbox,
  BookOpen,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Settings,
  X,
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: Home, path: '/cosmos/dashboard' },
  { name: 'Inbox', icon: Inbox, path: '/cosmos/inbox' },
  { name: 'Lesson', icon: BookOpen, path: '/cosmos/lessons' },
  { name: 'Task', icon: Calendar, path: '/cosmos/tasks' },
  { name: 'Group', icon: Users, path: '/cosmos/group' },
];

const Sidebar = ({ collapsed = false, onToggleCollapse, onClose }) => {
  return (
    <aside
      className={`h-full bg-white border-r border-gray-200 flex flex-col px-4 py-6 transition-all duration-200 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Top: Brand + Toggle */}
      <div className='flex items-center justify-between mb-8'>
        {!collapsed && <h1 className='text-xl font-bold'>🚀 Cosmos</h1>}

        {onToggleCollapse && (
          <button
            onClick={onToggleCollapse}
            className='hidden sm:block text-gray-500'
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        )}

        {onClose && (
          <button onClick={onClose} className='sm:hidden text-gray-600'>
            <X size={20} />
          </button>
        )}
      </div>

      {/* Nav items */}
      <nav className='flex flex-col gap-1'>
        {navItems.map(({ name, icon: Icon, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-purple-100 text-purple-700 font-medium'
                  : 'text-black hover:bg-gray-100'
              } ${collapsed ? 'justify-center' : ''}`
            }
          >
            <Icon size={20} />
            {!collapsed && name}
          </NavLink>
        ))}
      </nav>

      {/* Footer buttons */}
      <div className='mt-auto space-y-2'>
        <NavLink
          to='#'
          className={`flex items-center gap-3 px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-lg ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <Settings size={20} />
          {!collapsed && 'Settings'}
        </NavLink>
        <NavLink
          to='#'
          className={`flex items-center gap-3 px-2 py-2 text-red-500 hover:bg-red-100 rounded-lg ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <LogOut size={20} />
          {!collapsed && 'Logout'}
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
