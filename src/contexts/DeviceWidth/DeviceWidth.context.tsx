'use client';

import React from 'react';

export const DeviceWidthContext =
  React.createContext<{
    deviceWidth: number;
  }>({ deviceWidth: 1920 });

const DeviceWidthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // States
  const [deviceWidth, setDeviceWidth] =
    React.useState<number>(1920);

  // Effects
  React.useEffect(() => {
    setDeviceWidth(window.screen.width);
  }, []);

  return (
    <DeviceWidthContext.Provider
      value={{ deviceWidth }}
    >
      {children}
    </DeviceWidthContext.Provider>
  );
};

export default DeviceWidthContextProvider;
