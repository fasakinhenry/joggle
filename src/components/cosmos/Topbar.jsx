import { Menu, Bell, Mail, Search } from 'lucide-react';

const Topbar = ({ onOpenMobileSidebar }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-4">
        {/* Hamburger for mobile */}
        <button onClick={onOpenMobileSidebar} className="sm:hidden text-gray-600">
          <Menu size={24} />
        </button>

        {/* Search */}
        <div className="relative w-full max-w-md bg-white rounded-full border border-gray-200">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search your course…"
            className="w-full py-2 pl-10 pr-4 text-sm rounded-full bg-white text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {[Mail, Bell].map((Icon, i) => (
          <button
            key={i}
            className="h-10 w-10 grid place-items-center rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
          >
            <Icon size={18} />
          </button>
        ))}
        <img
          src="https://api.dicebear.com/7.x/adventurer/svg?seed=Jason"
          className="h-10 w-10 rounded-full"
          alt="User avatar"
        />
      </div>
    </header>
  );
};

export default Topbar;
