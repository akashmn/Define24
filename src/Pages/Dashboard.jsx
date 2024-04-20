import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Sidebar from "../Components/Sidebar"

const Dashboard = () => {
  const username = 'User'; // Replace this with actual username
  const totalCases = 100; // Replace this with actual total cases

  const data = [
    {name: 'Monday', cases: 4000},
    {name: 'Tuesday', cases: 3000},
    {name: 'Wednesday', cases: 2000},
    {name: 'Thursday', cases: 2780},
    {name: 'Friday', cases: 1890},
    {name: 'Saturday', cases: 2390},
    {name: 'Sunday', cases: 3490},
  ];

  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar/>
      <div className="flex flex-col w-full">
        <div className="bg-blue-500 text-white text-2xl p-6 flex-1">Hello, {username}</div>
        <div className="flex flex-1">
          <div className="w-3/4 bg-white p-6">
            <BarChart width={500} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cases" fill="#8884d8" />
            </BarChart>
          </div>
          <div className="w-1/4 bg-white text-center p-6">
            Total number of cases: {totalCases}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;