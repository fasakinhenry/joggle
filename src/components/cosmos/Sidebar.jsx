import { NavLink } from 'react-router-dom';
import {
  Home,
  Inbox,
  BookOpen,
  Users,
  Calendar,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Settings,
  X,
  Briefcase,
  FolderKanban,
  Star,
  Rocket,
  UserCog,
  Bot,
  Moon,
  Sun,
  Medal,
} from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Dashboard', icon: Home, path: '/cosmos/dashboard' },
  { name: 'Lessons', icon: BookOpen, path: '/cosmos/lessons' },
  { name: 'Projects', icon: FolderKanban, path: '/cosmos/projects' },
  { name: 'Certifications', icon: Medal, path: '/cosmos/certifications' },
  { name: 'Group', icon: Users, path: '/cosmos/group' },
  { name: 'Events', icon: Calendar, path: '/cosmos/events' },
  { name: 'Resources', icon: Briefcase, path: '/cosmos/resources' },
  { name: 'Inbox', icon: Inbox, path: '/cosmos/inbox' },
  { name: 'AI Assistant', icon: Bot, path: '/cosmos/ai-assistant' },
  { name: 'Career', icon: UserCog, path: '/cosmos/career' },
  { name: 'Leaderboard', icon: Rocket, path: '/cosmos/leaderboard' },
];

const Sidebar = ({ collapsed = false, onToggleCollapse, onClose }) => {
  const [darkMode, setDarkMode] = useState(false);
  const userLevel = '🪐 Explorer';

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <aside
      className={`h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-all duration-200 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Top brand + collapse */}
      <div className='flex items-center justify-between px-4 pt-6 mb-6'>
        {!collapsed && (
          <h1 className='text-xl font-bold text-gray-900 dark:text-white'>
            🚀 Cosmos
          </h1>
        )}
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

      {/* Scrollable nav container */}
      <div className='flex-1 overflow-y-auto px-4 pb-4 space-y-6'>
        {/* Nav items */}
        <nav className='flex flex-col gap-1'>
          {navItems.map(({ name, icon: Icon, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-2 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-purple-100 text-purple-700 font-medium dark:bg-purple-900 dark:text-white'
                    : 'text-black dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                } ${collapsed ? 'justify-center' : ''}`
              }
            >
              <Icon size={20} />
              {!collapsed && name}
            </NavLink>
          ))}
        </nav>

        {/* Level block */}
        {!collapsed && (
          <div className='text-center pt-2 border-t border-gray-200 dark:border-gray-700'>
            <p className='text-xs text-gray-500 dark:text-gray-400 mt-4'>
              Level
            </p>
            <div className='text-sm font-semibold text-blue-600 dark:text-blue-400'>
              {userLevel}
            </div>
          </div>
        )}
      </div>

      {/* Fixed footer */}
      <div className='px-4 py-4 space-y-2'>
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className={`flex items-center gap-3 px-2 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          {!collapsed && (darkMode ? 'Light Mode' : 'Dark Mode')}
        </button>

        {/* Settings */}
        <NavLink
          to='/cosmos/settings'
          className={`flex items-center gap-3 px-2 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <Settings size={20} />
          {!collapsed && 'Settings'}
        </NavLink>

        {/* Logout */}
        <NavLink
          to='/logout'
          className={`flex items-center gap-3 px-2 py-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg ${
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
