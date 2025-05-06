import React, { createContext, useState, ReactNode } from 'react';

export type WindowID = 'files' | 'wallet' | 'browser' | 'settings';

interface WindowState {
  zIndex: number;
  isOpen: boolean;
}

interface WindowContextProps {
  windows: Record<WindowID, WindowState>;
  openWindow: (id: WindowID) => void;
  closeWindow: (id: WindowID) => void;
  bringToFront: (id: WindowID) => void;
}

export const WindowContext = createContext<WindowContextProps>({} as WindowContextProps);

export const WindowProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [windows, setWindows] = useState<Record<WindowID, WindowState>>({
    files: { isOpen: false, zIndex: 1 },
    wallet: { isOpen: false, zIndex: 1 },
    browser: { isOpen: false, zIndex: 1 },
    settings: { isOpen: false, zIndex: 1 },
  });

  const openWindow = (id: WindowID) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: true },
    }));
    bringToFront(id);
  };

  const closeWindow = (id: WindowID) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false },
    }));
  };

  const bringToFront = (id: WindowID) => {
    const maxZ = Math.max(...Object.values(windows).map((w) => w.zIndex));
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], zIndex: maxZ + 1 },
    }));
  };

  return (
    <WindowContext.Provider value={{ windows, openWindow, closeWindow, bringToFront }}>
      {children}
    </WindowContext.Provider>
  );
};
