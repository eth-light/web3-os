import React from 'react';

const SettingsApp: React.FC = () => {
  return (
    <div id="settings" className="window hidden">
      <div className="window-header">
        Settings
        <span className="close-btn" onClick={() => document.getElementById('settings')?.classList.add('hidden')}>X</span>
      </div>
      <div className="window-content">
        <p>Theme, wallpaper, and more coming soon!</p>
      </div>
    </div>
  );
};

export default SettingsApp;
