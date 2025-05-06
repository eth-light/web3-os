import React from 'react';

const Dock: React.FC = () => {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-4 w-16 bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-2 flex flex-col items-center gap-4 shadow-xl z-20">
      <button className="dock-icon" onClick={() => alert('Opening Files App')}>📁</button>
      <button className="dock-icon" onClick={() => alert('Opening Wallet App')}>💰</button>
      <button className="dock-icon" onClick={() => window.open('https://etherscan.io', '_blank')}>🔎</button>
      <button className="dock-icon" onClick={() => alert('Opening Settings')}>⚙️</button>
    </div>
  );
};

export default Dock;
