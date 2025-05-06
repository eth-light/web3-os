import React from 'react';

const FilesApp: React.FC = () => {
  return (
    <div id="files" className="window hidden">
      <div className="window-header">
        Files
        <span className="close-btn" onClick={() => document.getElementById('files')?.classList.add('hidden')}>X</span>
      </div>
      <div className="window-content">
        <p>Folder: <strong>storage</strong></p>
        <p>📄 No files yet</p>
      </div>
    </div>
  );
};

export default FilesApp;
