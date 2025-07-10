import { Menu, Bell, Mail, Search } from 'lucide-react';

const Topbar = ({ onOpenMobileSidebar }) => {
  return (
    <header className='flex items-center justify-between px-4 sm:px-6 pt-4'>
      {/* Left Section */}
      <div className='flex items-center gap-4 flex-1 min-w-0'>
        {/* Hamburger for mobile */}
        <button
          onClick={onOpenMobileSidebar}
          className='sm:hidden text-gray-600'
        >
          <Menu size={24} />
        </button>

        {/* Search Bar */}
        <div className='relative flex-1 bg-white rounded-full border border-gray-200 min-w-0'>
          <Search
            size={18}
            className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'
          />
          <input
            type='text'
            placeholder='Search your course…'
            className='w-full py-2 pl-10 pr-4 text-sm rounded-full bg-white text-gray-700 placeholder-gray-400 focus:outline-none'
          />
        </div>
      </div>

      {/* Right Section */}
      <div className='flex items-center gap-4 flex-shrink-0 ml-4'>
        {[Mail, Bell].map((Icon, i) => (
          <button
            key={i}
            className='h-10 w-10 grid place-items-center rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
          >
            <Icon size={18} />
          </button>
        ))}

        {/* Divider */}
        <div className='hidden sm:block h-6 w-px bg-gray-600' />

        {/* Profile */}
        <div className='flex items-center gap-2'>
          <img
            src='https://api.dicebear.com/7.x/adventurer/svg?seed=Jason'
            className='h-10 w-10 rounded-full'
            alt='User avatar'
          />
          <span className='hidden sm:inline-block text-sm font-medium text-gray-700'>
            Jason
          </span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
