import { useState } from 'react';
import { FaHome, FaList, FaUserCircle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation(); // For detecting active route

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white text-gray-900 p-4 flex flex-col justify-between shadow-lg z-10">
      {/* Sidebar Header */}
      <div>
        <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">Watchlist</h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Navigation */}
        <nav>
          <ul>
            <li className="mb-2">
              <Link
                to=""
                className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                  location.pathname === ''
                    ? 'bg-red-500 text-white'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                <FaHome className="mr-3" /> Home
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="watchlist"
                className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                  location.pathname === '/watchlist'
                    ? 'bg-red-500 text-white'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                <FaList className="mr-3" /> Watchlist
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* User Account Section */}
      <div className="flex flex-col items-center mt-6">
        <FaUserCircle className="text-4xl mb-2 text-gray-600" />
        <p className="text-lg text-gray-900">John Doe</p>
      </div>
    </aside>
  );
};

export default Sidebar
