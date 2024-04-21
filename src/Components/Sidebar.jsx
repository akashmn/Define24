// Sidebar.jsx
import { useState } from 'react';
import { FaHome, FaBriefcaseMedical, FaHistory, FaSignOutAlt } from 'react-icons/fa'; // Importing icons
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [active, setActive] = useState('Dashboard');

  const handleClick = (name) => {
    setActive(name);
  };

  return (
    <div className="fixed flex flex-col w-64 h-screen px-4 py-8 bg-gray-800 text-white">
      <Link to="/dashboard" onClick={() => handleClick('Dashboard')} className={`flex items-center text-left mb-4 p-2 rounded ${active === 'Dashboard' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}>
        <FaHome className="mr-2" /> {/* Dashboard icon */}
        Dashboard
      </Link>
      <Link to="/active-cases" onClick={() => handleClick('Active Cases')} className={`flex items-center text-left mb-4 p-2 rounded ${active === 'Active Cases' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}>
        <FaBriefcaseMedical className="mr-2" /> {/* Active Cases icon */}
        Active Cases
      </Link>
      <Link to="/history" onClick={() => handleClick('History of Cases')} className={`flex items-center text-left mb-4 p-2 rounded ${active === 'History of Cases' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}>
        <FaHistory className="mr-2" /> {/* History of Cases icon */}
        History of Cases
      </Link>
      <Link to="/logout" onClick={() => handleClick('Logout')} className={`flex items-center text-left mb-4 p-2 rounded ${active === 'Logout' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}>
        <FaSignOutAlt className="mr-2" /> {/* Logout icon */}
        Logout
      </Link>
    </div>
  )
}

export default Sidebar;