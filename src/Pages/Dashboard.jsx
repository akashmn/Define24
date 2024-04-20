import React from 'react';
import Sidebar from "../Components/Sidebar"

const Dashboard = () => {
  const username = 'User'; // Replace this with actual username
  const totalCases = 100; // Replace this with actual total cases

  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar/>
      <div className="flex flex-col w-full">
        <div className="bg-blue-500 text-white text-2xl p-6 flex-1">Hello, {username}</div>
        <div className="flex flex-1">
          <div className="w-3/4 bg-white p-6">Graph goes here</div>
          <div className="w-1/4 bg-white text-center p-6">
            Total number of cases: {totalCases}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;