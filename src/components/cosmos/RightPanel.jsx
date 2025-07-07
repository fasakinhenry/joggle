// src/components/cosmos/RightPanel.jsx
import React from 'react';
import { MoreVertical, Plus, UserPlus } from 'lucide-react';

const RightPanel = () => {
  const mentors = [
    {
      name: "Padhang Satrio",
      role: "Mentor",
      avatar: "👨‍🏫",
      following: false
    },
    {
      name: "Zakir Horizontal",
      role: "Mentor",
      avatar: "👨‍💼",
      following: false
    },
    {
      name: "Leonardo Samuel",
      role: "Mentor",
      avatar: "👨‍🎓",
      following: false
    }
  ];

  return (
    <div className="w-80 bg-white border-l border-gray-200 p-6">
      {/* Statistic Card */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Statistic</h3>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6">
          {/* Profile Section */}
          <div className="text-center mb-6">
            <div className="relative inline-block">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">2</span>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-1">Good Morning Jason 🔥</h4>
              <p className="text-sm text-gray-600">Conningency rewarding to achieve your target</p>
            </div>
          </div>

          {/* Chart */}
          <div className="mb-6">
            <div className="flex items-end justify-center space-x-2 h-24">
              <div className="w-8 bg-blue-200 rounded-t" style={{ height: '40%' }}></div>
              <div className="w-8 bg-blue-400 rounded-t" style={{ height: '60%' }}></div>
              <div className="w-8 bg-blue-600 rounded-t" style={{ height: '80%' }}></div>
            </div>
            <div className="flex justify-center space-x-4 mt-2 text-xs text-gray-500">
              <span>1-10 Aug</span>
              <span>11-20 Aug</span>
              <span>21-30 Aug</span>
            </div>
          </div>

          {/* Scale indicators */}
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>20</span>
            <span>40</span>
            <span>60</span>
          </div>
        </div>
      </div>

      {/* Your Mentor */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Your mentor</h3>
          <button className="text-blue-600 hover:text-blue-700">
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          {mentors.map((mentor, index) => (
            <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm">{mentor.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{mentor.name}</p>
                  <p className="text-xs text-gray-500">{mentor.role}</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                <UserPlus className="w-4 h-4 mr-1" />
                Follow
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
