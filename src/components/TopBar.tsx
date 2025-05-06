import React, { useState, useRef, useEffect } from 'react';

const TopBar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Live time update
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-10 bg-gray-800 bg-opacity-90 text-white flex justify-between items-center px-4 z-50 rounded-b-lg backdrop-blur-md">
      {/* Left: Login/Join */}
      <div>
        <a
          href="#"
          onClick={() => alert('Login / Join clicked')}
          className="text-white hover:text-blue-400 transition-colors"
        >
          LOGIN / JOIN
        </a>
      </div>

      {/* Center: Title */}
      <div className="font-semibold text-lg select-none">dOS</div>

      {/* Right: Time + Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          className="cursor-pointer px-3 py-1 rounded hover:bg-gray-700 transition"
        >
          {time}
        </div>

        {showDropdown && (
          <div className="absolute right-0 mt-2 w-56 bg-gray-800 text-sm rounded shadow-lg p-3 z-50 space-y-3">
            {/* Switches */}
            {['VPN', 'Dark Mode', 'Airplane Mode'].map((label, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{label}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-all duration-300"></div>
                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                </label>
              </div>
            ))}

            <hr className="border-gray-600" />
            <div className="text-gray-400 text-xs">Battery: 87%</div>
            <div className="text-gray-400 text-xs">Wi-Fi: Connected</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
