'use client';

import React from 'react';
import { SidebarContext } from '@/contexts/Sidebar/Sidebar.context';

interface OverlayProps {
  isVisible: boolean;
}
const Overlay = ({
  isVisible,
}: OverlayProps): React.JSX.Element => {
  // Contexts
  const { setIsSidebarOpen } =
    React.useContext(SidebarContext);

  // Callbacks
  const changeSidebarVisibility =
    React.useCallback(() => {
      setIsSidebarOpen(false);
    }, []);

  return (
    <div
      onClick={changeSidebarVisibility}
      className={`${isVisible ? 'visible opacity-100' : 'invisible opacity-0'} fixed bottom-0 left-0 right-0 top-0 h-dvh w-full bg-black/15 backdrop-blur-sm transition-all`}
    ></div>
  );
};

export default Overlay;
