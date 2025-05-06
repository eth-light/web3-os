import React from 'react';
import TopBar from './components/TopBar';
import Dock from './components/Dock';

import SearchOverlay from './components/SearchOverlay';

const App: React.FC = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden font-sans">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/wallpaper.png)' }}></div>

      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md z-0"></div>

      <TopBar />
      <Dock />
      <SearchOverlay />

      {/* Apps */}
    </div>
  );
};

export default App;
