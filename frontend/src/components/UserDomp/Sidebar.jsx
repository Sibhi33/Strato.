import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <div className="flex h-screen">
  {/* Sidebar */}
  <div className="h-screen w-64 bg-red-700 shadow-lg pt-3 rounded-lg flex flex-col items-center justify-between">
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-8 text-white">Dashboard</h2>
      <ul className="space-y-4">
        <li className="text-gray-200 hover:text-white cursor-pointer">Overview</li>
        <li className="text-gray-200 hover:text-white cursor-pointer">My Stories</li>
        <li className="text-gray-200 hover:text-white cursor-pointer">Statistics</li>
        <li className="text-gray-200 hover:text-white cursor-pointer">Settings</li>
      </ul>
    </div>
    <div className="text-center mb-4">
      {/* Add any additional elements here, if needed */}
    </div>
  </div>
</div>
    </div>
  )
}

export default Sidebar