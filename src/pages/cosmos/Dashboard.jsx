// src/pages/cosmos/Dashboard.jsx
import React from 'react';
import Sidebar from '../../components/cosmos/Sidebar';
import Header from '../../components/cosmos/Header';
import MainContent from '../../components/cosmos/MainContent';
import RightPanel from '../../components/cosmos/RightPanel';

const Dashboard = () => {
  return (
        <div className="flex flex-1 overflow-hidden">
          <MainContent />
          <RightPanel />
        </div>
  );
};

export default Dashboard;
