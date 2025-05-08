import React from 'react';
import Dock from './Dock';

const Desktop: React.FC = () => {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-cover bg-center" style={{ backgroundImage: `url('https://i.postimg.cc/NfFgnPQX/wallpaper.jpg')` }}>
      <Dock />
    </div>
  );
};

export default Desktop;
