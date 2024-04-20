

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-gray-800 text-white">
      <button className="text-left mb-4 hover:bg-gray-600 p-2 rounded">Dashboard</button>
      <button className="text-left mb-4 hover:bg-gray-600 p-2 rounded">Active Cases</button>
      <button className="text-left mb-4 hover:bg-gray-600 p-2 rounded">History of Cases</button>
      <button className="text-left mb-4 hover:bg-gray-600 p-2 rounded">Logout</button>
    </div>
  )
}

export default Sidebar;