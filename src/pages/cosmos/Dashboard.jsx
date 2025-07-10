import MainContent from '../../components/cosmos/MainContent';
import RightPanel from '../../components/cosmos/RightPanel';

const Dashboard = () => {
  return (
    <div className='flex flex-col lg:flex-row flex-1 overflow-auto gap-6 p-4 sm:p-6'>
      {/* Main Content */}
      <MainContent className='flex-1 rounded-2xl sm:p-6 overflow-auto' />

      {/* Right Panel – stacked below on mobile, side on desktop */}
      <RightPanel className='w-full lg:w-80 rounded-2xl bg-white shadow-sm sm:p-6' />
    </div>
  );
};

export default Dashboard;
