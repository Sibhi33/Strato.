import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import AnimatedCircularProgressBar from '@/components/magicui/animated-circular-progress-bar';
import { Avatar } from '@radix-ui/react-avatar';
import { PieChart, Pie, Cell, Tooltip } from 'recharts'; // Import chart library

const UserDashboard = () => {
  const [userName, setUserName] = useState('DEREK');
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle logout and redirect
  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing user data, etc.)
    navigate('/'); // Redirect to home page
  };

  // Sample data for pie chart
  const data = [
    { name: 'Category A', value: 400 },
    { name: 'Category B', value: 300 },
    { name: 'Category C', value: 300 },
    { name: 'Category D', value: 200 },
  ];

  // Define colors for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="relative flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="h-screen w-64 bg-red-700 shadow-lg rounded-tr-2xl rounded-br-2xl p-5 flex flex-col">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-8">Dashboard</h2>
          <ul className="space-y-6 flex flex-col items-center">
            <li className="w-full text-center text-white bg-red-600 hover:bg-red-500 py-3 rounded-lg cursor-pointer">Overview</li>
            <li className="w-full text-center text-white bg-red-600 hover:bg-red-500 py-3 rounded-lg cursor-pointer">My Stories</li>
            <li className="w-full text-center text-white bg-red-600 hover:bg-red-500 py-3 rounded-lg cursor-pointer">Statistics</li>
            <li className="w-full text-center text-white bg-red-600 hover:bg-red-500 py-3 rounded-lg cursor-pointer">Settings</li>
          </ul>
        </div>
        {/* Button at the bottom */}
        <div className="mt-auto flex justify-center p-4">
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 space-y-8">
        {/* Header */}
        <header className="relative flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">
            Welcome Back, {userName}!
          </h1>
          <div className="flex space-x-4">
            {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Add New Story
              </button> */}
          </div>
          {/* User Badge */}
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            {/* Add User Badge Content Here */}
          </div>
        </header>

        {/* Additional Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pie Chart */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">User Activity</h2>
            <PieChart width={300} height={300}>
              <Pie data={data} cx={150} cy={150} outerRadius={120} fill="#8884d8" dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>

          {/* Progress Bar */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Progress Overview</h2>
            <AnimatedCircularProgressBar
              percentage={75} // Example percentage
              strokeWidth={10}
              color="#4caf50"
              size={150}
            />
            <p className="mt-4 text-lg font-semibold">Completion: 75%</p>
          </div>

          {/* Detailed Statistics */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Detailed Statistics</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-semibold">Total Users:</span>
                <span className="font-bold">1,250</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Active Sessions:</span>
                <span className="font-bold">350</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">New Sign-ups:</span>
                <span className="font-bold">120</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Stats and Actions */}
        <div className="bg-green-300 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">User Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-orange-500 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Recent Logins</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>John Doe - 2 days ago</li>
                <li>Jane Smith - 5 days ago</li>
                <li>Mark Johnson - 1 week ago</li>
              </ul>
            </div>
            <div className="bg-red-400 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Story Trends</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Most Popular: Magical Adventures</li>
                <li>Newly Added: Space Odyssey</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={handleLogout} // Attach click handler
              >
                Logout
              </button>
    </div>
  );
};

export default UserDashboard;
