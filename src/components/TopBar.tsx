import React, { useEffect, useState } from 'react';

const TopBar: React.FC = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-10 bg-gray-800 bg-opacity-90 text-white flex justify-between items-center px-4 z-50 rounded-b-lg">
      <div>Web3OS v0.1 - Decentralized Web OS</div>
      <div>{time}</div>
      <div>
        <a href="https://example.org" target="_blank" rel="noopener noreferrer" className="text-white underline">
          LOGIN/CREATE WALLET
        </a>
      </div>
    </div>
  );
};

export default TopBar;
