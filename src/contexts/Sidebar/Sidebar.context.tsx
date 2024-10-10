'use client';

import React from 'react';

export const SidebarContext =
  React.createContext({
    isSidebarOpen: true,
    setIsSidebarOpen: (
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _:
        | boolean
        | ((
            prevState: boolean,
          ) => boolean),
    ): void => {},
  });

const SidebarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [
    isSidebarOpen,
    setIsSidebarOpen,
  ] = React.useState<boolean>(true);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
