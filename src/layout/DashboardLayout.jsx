import { useState } from 'react';
import Sidebar from '../components/cosmos/Sidebar';
import Topbar from '../components/cosmos/Topbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#f4f4f5]">
      {/* Desktop Sidebar */}
      <div className="hidden sm:block">
        <Sidebar
          collapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(prev => !prev)}
        />
      </div>

      {/* Mobile Sidebar */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 flex sm:hidden">
          <Sidebar collapsed={false} onClose={() => setIsMobileSidebarOpen(false)} />
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Topbar onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)} />
        <main className="p-6 h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
