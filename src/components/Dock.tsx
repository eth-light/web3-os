import React from 'react';

interface DockProps {
  openWindow: (id: string) => void;
}

const Dock: React.FC<DockProps> = ({ openWindow }) => {
  const openExplorer = () => {
    window.open('https://etherscan.io', '_blank');
  };

  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-4 w-16 bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-2 flex flex-col items-center gap-4 shadow-xl z-20">
      <button className="dock-icon" onClick={() => openWindow('files')}>📁</button>
      <button className="dock-icon" onClick={() => openWindow('wallet')}>💰</button>
      <button className="dock-icon" onClick={openExplorer}>🔎</button>
      <button className="dock-icon" onClick={() => openWindow('settings')}>⚙️</button>
    </div>
  );
};

export default Dock;
