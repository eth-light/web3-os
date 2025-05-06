import React, { useEffect, useState } from 'react';
import Dock from './Dock';
import { useDraggable } from '../utils/useDraggable';

const Desktop: React.FC = () => {
  const [visibleWindows, setVisibleWindows] = useState<string[]>([]);

  // Apply draggable to each visible window
  useEffect(() => {
    visibleWindows.forEach(id => {
      useDraggable(id);
    });
  }, [visibleWindows]);

  const openWindow = (id: string) => {
    if (!visibleWindows.includes(id)) {
      setVisibleWindows([...visibleWindows, id]);
      console.log(`${id} window opened`);
    }
  };

  const closeWindow = (id: string) => {
    setVisibleWindows(visibleWindows.filter(win => win !== id));
    console.log(`${id} window closed`);
  };

  return (
    <div
      className="w-screen h-screen overflow-hidden relative bg-cover bg-center"
      style={{ backgroundImage: `url('/wallpaper.png')` }}
    >
      <Dock openWindow={openWindow} />

      {visibleWindows.includes('files') && (
        <div
          id="files"
          className="window absolute top-32 left-32 bg-white rounded-lg shadow-xl border border-gray-300"
        >
          <div className="window-header bg-gray-200 bg-opacity-80 px-3 py-2 cursor-move font-semibold flex justify-between">
            Files
            <button onClick={() => closeWindow('files')} className="text-red-500 font-bold">
              ✕
            </button>
          </div>
          <div className="window-content p-4">
            <p>📁 Folder: <strong>storage</strong></p>
            <p>No files yet.</p>
          </div>
        </div>
      )}

      {visibleWindows.includes('wallet') && (
        <div
          id="wallet"
          className="window absolute top-40 left-40 bg-white rounded-lg shadow-xl border border-gray-300"
        >
          <div className="window-header bg-gray-200 bg-opacity-80 px-3 py-2 cursor-move font-semibold flex justify-between">
            Wallet
            <button onClick={() => closeWindow('wallet')} className="text-red-500 font-bold">
              ✕
            </button>
          </div>
          <div className="window-content p-4">
            <p><strong>Wallet Address:</strong> 0x0000...dead</p>
            <p><strong>Balance:</strong> $0.00</p>
            <p><strong>Tokens:</strong> 0</p>
          </div>
        </div>
      )}

      {visibleWindows.includes('settings') && (
        <div
          id="settings"
          className="window absolute top-48 left-48 bg-white rounded-lg shadow-xl border border-gray-300"
        >
          <div className="window-header bg-gray-200 bg-opacity-80 px-3 py-2 cursor-move font-semibold flex justify-between">
            Settings
            <button onClick={() => closeWindow('settings')} className="text-red-500 font-bold">
              ✕
            </button>
          </div>
          <div className="window-content p-4">
            <p>Theme settings and OS configuration coming soon.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Desktop;
