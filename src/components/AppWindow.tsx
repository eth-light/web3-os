import React, { ReactNode, useContext } from 'react';
import { motion } from 'framer-motion';
import { WindowContext, WindowID } from '../contexts/WindowContext';

interface AppWindowProps {
  id: WindowID;
  title: string;
  children: ReactNode;
}

const AppWindow: React.FC<AppWindowProps> = ({ id, title, children }) => {
  const { windows, closeWindow, bringToFront } = useContext(WindowContext);
  const windowState = windows[id];

  if (!windowState.isOpen) return null;

  return (
    <motion.div
      className="absolute top-24 left-24 w-96 h-64 bg-white rounded-lg shadow-lg flex flex-col z-30"
      style={{ zIndex: windowState.zIndex }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onMouseDown={() => bringToFront(id)}
    >
      <div className="h-10 bg-blue-600 text-white flex justify-between items-center px-4 rounded-t-lg">
        <span>{title}</span>
        <button onClick={() => closeWindow(id)} className="font-bold">
          X
        </button>
      </div>
      <div className="flex-1 p-4 overflow-auto">{children}</div>
    </motion.div>
  );
};

export default AppWindow;
