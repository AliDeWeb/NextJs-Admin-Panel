'use client';

import React from 'react';
import UserInfos from '@/components/UserInfos/UserInfos.component';
import { SidebarContext } from '@/contexts/Sidebar/Sidebar.context';
import { DeviceWidthContext } from '@/contexts/DeviceWidth/DeviceWidth.context';

const Header =
  (): React.JSX.Element => {
    // Contexts
    const {
      isSidebarOpen,
      setIsSidebarOpen,
    } = React.useContext(
      SidebarContext,
    );
    const { deviceWidth } =
      React.useContext(
        DeviceWidthContext,
      );

    // Callbacks
    const changeSidebarVisibility =
      React.useCallback(() => {
        setIsSidebarOpen(
          (prev: boolean) => !prev,
        );
      }, []);

    return (
      <header
        className={`${isSidebarOpen && deviceWidth >= 1024 ? 'w-[calc(100%-240px)]' : 'w-full'} fixed right-0 top-0 z-50 bg-componentsBg px-[30px] py-4 transition-all`}
      >
        <div
          className={
            'flex items-center justify-between'
          }
        >
          <div
            className={
              'flex items-center gap-[35px]'
            }
          >
            <button
              onClick={
                changeSidebarVisibility
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </button>

            <div
              className={
                'hidden items-center gap-3 rounded-3xl border border-solid border-[#CFCFCF]/15 px-4 py-1.5 lg:flex'
              }
            >
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-search"
                >
                  <path
                    stroke="none"
                    d="M0 0h24v24H0z"
                    fill="none"
                  />
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
              </button>
              <input
                type="text"
                className={
                  'border-none bg-transparent text-white outline-none'
                }
              />
            </div>
          </div>
          <div
            className={
              'flex items-center gap-2 lg:gap-10'
            }
          >
            <UserInfos />
            <button
              className={'relative'}
            >
              <span
                className={
                  'absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-[#FF4F4F] font-NunitoSans text-[10px] font-semibold text-white lg:size-[18px] lg:text-xs'
                }
              >
                55
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-bell size-6 lg:size-[28px]"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    );
  };

export default Header;
