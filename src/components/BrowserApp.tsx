import React from 'react';
import AppWindow from './AppWindow';

const BrowserApp: React.FC = () => {
  return (
    <AppWindow id="browser" title="Tachyon Explorer">
      <a
        href="https://example.org"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Open Tachyon Blockchain Explorer
      </a>
    </AppWindow>
  );
};

export default BrowserApp;
